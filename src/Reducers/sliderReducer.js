import { FETCH_SLIDER, DELETE_SLIDER } from "Actions/sliderAction";

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
    case DELETE_SLIDER:
      return {
        ...state,
        items: state.items.splice(
          state.items.findIndex(item => item.id === id),
          1
        )
      };
    default:
      return state;
  }
}
