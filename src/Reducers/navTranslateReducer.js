import { FETCH_NAV_TRANSLATE } from "Actions/navTranlateAction";

const initialState = {
  items: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_NAV_TRANSLATE:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
}
