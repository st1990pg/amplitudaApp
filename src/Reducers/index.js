import { combineReducers } from "redux";
import sliderReducer from "./sliderReducer";
import aboutReducer from "./aboutReducer";

export default combineReducers({
  slider: sliderReducer,
  aboutUs: aboutReducer
});
