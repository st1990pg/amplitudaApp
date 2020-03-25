import Axios from "axios";

export const FETCH_DONIRAJPOPUP = "FETCH_DONIRAJPOPUP ";

export const fetchDonirajPopup = () => dispatch => {
  Axios.get("/donirajPopup").then(res => {
    debugger;
    dispatch({
      type: FETCH_DONIRAJPOPUP ,
      payload: res.data
    });
  });
};
