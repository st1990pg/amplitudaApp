import axios from 'axios';

export const FETCH_ITEMS = 'FETCH_ITEMS';
export const FETCH_USER = 'FETCH_USER';


export const fetchUser = () => dispatch => {
    const user = axios.get('/donationInformation')
        .then(res => {
            dispatch({
                type: 'FETCH_USER',
                payload: res.data.user
            })
        });

};

export const fetchItems = () => dispatch => {
    const items = axios.get('/donationInformation')
        .then(res => dispatch({
            type: 'FETCH_ITEMS',
            payload: res.data.items
        }));
};
