import Axios from "axios";

export const FETCH_ABOUT = "FETCH_ABOUT";


export const fetchAbout = () => dispatch => {
  Axios.get("/About").then(res => {
    dispatch({
      type: FETCH_ABOUT,
      payload: res.data
    });
  });
};