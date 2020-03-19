import { FETCH_SLIDER } from "Actions/sliderAction";

const initialState = {
  items: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_SLIDER:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
}
