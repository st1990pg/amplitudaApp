import { combineReducers } from "redux";
import sliderReducer from "./sliderReducer";
import donirajReducer from "Reducers/donirajReducer";
import blogReducer from "./blogReducer";

export default combineReducers({
  slider: sliderReducer,
  doniraj: donirajReducer,
  blogPosts: blogReducer
});
