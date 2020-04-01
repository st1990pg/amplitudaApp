import { FETCH_DONIRAJPOPUP } from "Actions/donationAction";

const initialState = {
  items: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_DONIRAJPOPUP:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
}
