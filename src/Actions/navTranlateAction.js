import Axios from "axios";

export const FETCH_NAV_TRANSLATE = "FETCH_NAV_TRANSLATE ";

export const fetchNavTranslate = () => dispatch => {
  Axios.get("/nav_translate").then(res => {
    debugger;
    dispatch({
      type: FETCH_NAV_TRANSLATE ,
      payload: res.data
    });
  });
};
