import { combineReducers } from "redux";
import sliderReducer from "./sliderReducer";
import donirajReducer from "./donirajReducer";
import postsReducer from "./postsReducer";

export default combineReducers({
  slider: sliderReducer,
  doniraj: donirajReducer,
  postovi: postsReducer
});
