import { combineReducers } from "redux";
import sliderReducer from "./sliderReducer";
import donationReducer from "./donationReducer";

export default combineReducers({
  slider: sliderReducer,
  donirajPopup: donationReducer
});
