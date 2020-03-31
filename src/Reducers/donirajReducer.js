import { FETCH_USER, FETCH_ITEMS, CHECK_DONIRAJ } from "Actions/donirajAction";

const initialState = {
  items: [],
  user: {},
  donirano: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        user: action.payload
      };
    case FETCH_ITEMS:
      return {
        ...state,
        items: action.payload
      };
    case CHECK_DONIRAJ:
      let donirano = [...state.donirano];
      let index = donirano.findIndex(item => item.id === action.payload.id);
      if (index > -1) {
        donirano.splice(index, 1);
      } else {
        donirano.push(action.payload);
      }
      return {
        ...state,
        donirano: donirano
      };
    default:
      return state;
  }
}
