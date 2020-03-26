import { combineReducers } from "redux";
import sliderReducer from "./sliderReducer";
import aboutReducer from "./aboutReducer";
import donirajReducer from "Reducers/donirajReducer";

export default combineReducers({
  slider: sliderReducer,
  aboutUs: aboutReducer,
  doniraj: donirajReducer

});
