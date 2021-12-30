import * as types from './actionTypes';


// import * as types from './actionTypes'; takes all the types in action types as objects

export const register = (firstname, surname, username, email, password, bio) => {
    return (dispatch) => {
        dispatch({
            type:types.REGISTER,
            payload: {
                firstname,
                surname,
                username,
                email,
                password,
                bio
            }
        })
    };
}

export const edit_profile = (firstname, surname, username, email, password, bio) => {
    return (dispatch) => {
        dispatch({
            type:types.EDIT_PROFILE,
            payload: {
                firstname,
                surname,
                username,
                email,
                password,
                bio
            }
        })
    };
}

