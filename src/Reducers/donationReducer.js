import { FETCH_DONIRAJPOPUP } from "Actions/donationAction";

const initialState = {
  donirajPopup: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_DONIRAJPOPUP:
      return {
        ...state,
        donirajPopup: action.payload
      };
    default:
      return state;
  }
}
