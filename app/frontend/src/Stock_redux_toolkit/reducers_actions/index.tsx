import { combineReducers } from "redux";
import myReducer from './myReduce';

const rootReducer = combineReducers({
  myReducer,
});

export default rootReducer;