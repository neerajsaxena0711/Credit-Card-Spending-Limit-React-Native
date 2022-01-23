import { GET_DATA } from './actions';


const initialState = {
    userData: [],
}

function userDataReducer(state = initialState, action) {
    switch (action.type) {
        case GET_DATA:
            return { ...state, userData: action.payload };
        default:
            return state;
    }
}

export default userDataReducer;