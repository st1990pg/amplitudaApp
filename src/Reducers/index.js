import { combineReducers } from "redux";
import sliderReducer from "./sliderReducer";
import donationReducer from "./donationReducer";
import donirajReducer from "Reducers/donirajReducer";

export default combineReducers({
  slider: sliderReducer,
  donirajPopup: donationReducer,
  doniraj: donirajReducer
});
