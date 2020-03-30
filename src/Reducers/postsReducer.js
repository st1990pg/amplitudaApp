import {FETCH_POSTS, MAKE_POST} from "Actions/postsAction";

const initialState = {
    posts: [],
    post: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return{
                ...state,
                posts: action.payload
            };
        case MAKE_POST:
            return {
                ...state,
                posts: [...state.posts, action.payload]
            };
        default:
            return state;
    }
}