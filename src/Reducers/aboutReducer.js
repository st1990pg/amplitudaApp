import { FETCH_ABOUT } from "Actions/aboutAction";

const initialState = {
  items: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_ABOUT:
      return {
        ...state,
        items: action.payload
      };
    
    default:
      return state;
  }
}
