import * as types from './actionTypes';

const initialState = {
    details: {
        firstname: '',
        surname: '',
        username: '',
        email: '',
        password: '',
        bio: '',
    }
}
// spread operator ...others
// to use spread operator ...s
// e.g const rappers = ['eminem', 'jayz', 'nas', 'nf']
// const [rappers1, rappers2, ...others] = rappers
// rappers1 = eminem rappers2 = jayz ...others is = nas and nf

function RegisterationReducer(state = initialState, action) {
    switch (action.type) {
        case types.REGISTER:
            return {
                ...state, details:action.payload
            }
        case types.EDIT_PROFILE:
            return {
                ...state, details:action.payload
            }
        default:
            return state;
    }

}

export default RegisterationReducer;