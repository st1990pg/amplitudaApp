import { combineReducers } from "redux";
import sliderReducer from "./sliderReducer";

export default combineReducers({
  slider: sliderReducer
});
