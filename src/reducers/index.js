import { combineReducers } from 'redux';
import WeatherReducer from './reducerWeather';

const rootReducer = combineReducers({
  weather: WeatherReducer // new object - weather - to be used in props
});

export default rootReducer;
