import { combineReducers } from "redux";
import sliderReducer from "./sliderReducer";
import donationReducer from "./donationReducer";
import donirajReducer from "Reducers/donirajReducer";
import blogReducer from "./blogReducer";
import navTranslateReducer from "Reducers/navTranslateReducer";

export default combineReducers({
  slider: sliderReducer,
  donirajPopup: donationReducer,
  doniraj: donirajReducer,
  lang: navTranslateReducer,
  blogPosts: blogReducer
});
