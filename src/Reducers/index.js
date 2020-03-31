import { combineReducers } from "redux";
import sliderReducer from "./sliderReducer";
import donirajReducer from "./donirajReducer";

export default combineReducers({
  slider: sliderReducer,
  doniraj: donirajReducer
});
