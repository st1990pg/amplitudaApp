import { combineReducers } from "redux";
import sliderReducer from "./sliderReducer";
import donirajReducer from "Reducers/donirajReducer";
import postsReducer from "Reducers/postsReducer";

export default combineReducers({
  slider: sliderReducer,
  doniraj: donirajReducer,
  postovi: postsReducer
});
