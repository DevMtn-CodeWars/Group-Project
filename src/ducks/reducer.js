import axios from 'axios';

const initialState = {
    user: {cats_id: 1, username: "Thomas", image_url: "http://www.gettyimages.com/gi-resources/images/Embed/new/embed2.jpg", honor: 50000},
    searchResults: []
}

const GET_USER_INFO = "GET_USER_INFO";

const TRANSFER_SEARCH_RESULTS = "TRANSFER_SEARCH_RESULTS";

export function getUserInfo() {
    const userData = axios.get('/auth/me')
    .then( res => {
        return res.data;
    })
    return {
        type: GET_USER_INFO,
        payload: userData
    }
}

export function transferSearchResults(searchResults){
    return {
        type: TRANSFER_SEARCH_RESULTS,
        payload: searchResults 
    }
}


export default function reducer(state=initialState, action) {
    console.log(action)
    switch(action.type) {
        case GET_USER_INFO + '_FULFILLED':
            return Object.assign({}, state, {user: action.payload})
        case TRANSFER_SEARCH_RESULTS:
            return Object.assign({}, state, {searchResults: action.payload})
        default:
            return state;
    }
}