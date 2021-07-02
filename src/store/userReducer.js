import * as actionTypes from './actions';
import config from './../config';
export const initialState = {
    token:"",
    email:"",
    mobile:"",
    image:"",
    first_name:"",
    last_name:"",
    wallet:"",
    reward_point:"",
    is_approved:"",
    is_buyer:"",
    is_seller:"",
    is_company:"",
    is_subscribed:""
};
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_SESSION:
            return {
                ...state,
                token:action.data.token,email:action.data.email,mobile:action.data.mobile,image:action.data.image, first_name:action.data.first_name,
                last_name:action.data.last_name,wallet:action.data.wallet,is_approved:action.data.is_approved,
                reward_point:action.data.reward_point,is_buyer:action.data.is_buyer,is_seller:action.data.is_seller,
                is_company:action.data.is_company,is_subscribed:action.data.is_subscribed
            };
        case actionTypes.REMOVE_SESSION:
            return {
                ...state,
                token:"",
                email:"",
                mobile:"",
                image:"",
                first_name:"",
                last_name:"",
                wallet:"",
                reward_point:"",
                is_approved:"",
                is_buyer:"",
                is_seller:"",
                is_company:"",
                is_subscribed:""
            };
 
        default:
            return state;
    }
};
export default userReducer;