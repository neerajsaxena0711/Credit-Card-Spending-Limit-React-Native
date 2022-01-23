import { GET_USER_API } from "../constants";

export const GET_DATA = "GET_DATA";

export const getUserData = () => {
    try {
        return async dispatch => {
            const result = await fetch(`${GET_USER_API}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const json = await result.json();
            console.log('The user info is', json);
            if (json) {
                dispatch({
                    type: GET_DATA,
                    payload: json
                });
            } else {
                console.log('Some error occured!');
            }
        }
    } catch {
        console.log('Some error occured!');
    }
};