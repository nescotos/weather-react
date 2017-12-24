import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chartComponent';
import GoogleMap from '../components/mapComponent';
import _ from 'lodash';

class WeatherList extends Component{
  renderWeather(cityData){
    const name = cityData.city.name;
    const {lon, lat} = cityData.city.coord;
    const temps = _.map( cityData.list.map(weather => weather.main.temp), (temp) => temp - 273);
    const hums = cityData.list.map(weather => weather.main.humidity);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    return(
      <tr key={name}>
        <td>
          <GoogleMap lat={lat} lon={lon} />
        </td>
        <td>
          <Chart data={temps} referenceLine='avg' color='orange' units='C'/>
        </td>
        <td>
          <Chart data={pressures} referenceLine='avg' color='green' units='hPa'/>
        </td>
        <td>
          <Chart data={hums} referenceLine='avg' color='blue' units='%'/>
        </td>
      </tr>
    );
  }

  render(){
    return(
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (C°)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({weather}){
  return {weather};
}

export default connect(mapStateToProps)(WeatherList);
