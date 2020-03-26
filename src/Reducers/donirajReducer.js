import {FETCH_USER, FETCH_ITEMS} from "Actions/donirajAction";

const initialState = {
    items: [],
    user: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_USER:
            return{
                ...state,
                user: action.payload
            };
        case FETCH_ITEMS:
            return {
                ...state,
                items: action.payload
            };
        default:
            return state;
    }
}