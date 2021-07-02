import * as actionTypes from './actions';
export const removeSessiondata=(data=[])=>{
    return {
        type: actionTypes.REMOVE_SESSION,
        data,
    };
}

export function sessionSuccess(data) {
    return {
        type: actionTypes.STORE_SESSION,
        data,
    };
}