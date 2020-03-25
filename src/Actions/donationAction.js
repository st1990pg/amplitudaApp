import Axios from "axios";

export const FETCH_DONIRAJ = "FETCH_DONIRAJ ";

export const fetchDoniraj = () => dispatch => {
  Axios.get("/doniraj").then(res => {
    debugger;
    dispatch({
      type: FETCH_DONIRAJ ,
      payload: res.data
    });
  });
};
