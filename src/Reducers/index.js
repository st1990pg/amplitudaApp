import { combineReducers } from "redux";
import sliderReducer from "./sliderReducer";
import aboutReducer from "./aboutReducer";
import donirajReducer from "./donirajReducer";
import blogReducer from "./blogReducer";

export default combineReducers({
  slider: sliderReducer,
  aboutUs: aboutReducer,
  doniraj: donirajReducer,
  postovi: blogReducer

});
