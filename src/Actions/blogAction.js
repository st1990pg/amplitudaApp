import Axios from "axios";

export const FETCH_BLOG = "FETCH_BLOG";
export const MAKE_BLOG = "MAKE_BLOG";

export const fetchBlog = () => dispatch => {
  Axios.get("/blogs").then(res => {
    dispatch({
      type: FETCH_BLOG,
      payload: res.data
    });
  });
};

export const makeBlog = (blog) => dispatch => {
  console.log(blog)
  Axios.post("/blogs", blog).then(res => {
    dispatch({
      type: MAKE_BLOG,
      payload: blog
    });
  });
};