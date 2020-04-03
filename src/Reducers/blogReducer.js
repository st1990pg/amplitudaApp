import { FETCH_BLOG , MAKE_BLOG  } from "Actions/blogAction";


const initialState = {
  blogs: [],
  blog: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_BLOG:
      return {
        ...state,
        blogs: action.payload
      };
     case MAKE_BLOG:
      return {
        ...state,
        blogs: [...state.blogs, action.payload]
      }; 
    default:
      return state;
  }
}
