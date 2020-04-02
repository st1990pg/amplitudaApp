import { FETCH_NAV_TRANSLATE, GET_LANG } from "Actions/navTranlateAction";

const initialState = {
  item: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_NAV_TRANSLATE:
      return {
        ...state,
        item: action.payload
      };
    case FETCH_NAV_TRANSLATE:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}
