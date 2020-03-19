import Axios from "axios";

export const FETCH_SLIDER = "FETCH_SLIDER";

export const fetchSlider = () => dispatch => {
  Axios.get("/slider").then(res => {
    debugger;
    dispatch({
      type: FETCH_SLIDER,
      payload: res.data
    });
  });
};
