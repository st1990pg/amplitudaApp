import { FETCH_DONIRAJ } from "Actions/donationAction";

const initialState = {
  items: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_DONIRAJ:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
}
