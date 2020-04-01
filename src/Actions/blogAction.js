import Axios from "axios";

export const FETCH_BLOG = "FETCH_SLIDER";


export const fetchBlog = () => dispatch => {
  Axios.get("/blogs").then(res => {
    dispatch({
      type: FETCH_BLOG,
      payload: res.data
    });
  });
};

export const makeBlog = (payload) => dispatch => {
  axios.post('/blogs', payload)
      .then(res => {
          dispatch({
              type:MAKE_BLOG,
              payload: payload
          })
      })
};