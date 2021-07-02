import { combineReducers } from 'redux';
import { createSelectorHook } from 'react-redux';
import ableReducer from './ableReducer';
import demoReducer from './demoReducer';
import userReducer from './userReducer';
const reducer = combineReducers({
    able: ableReducer,
    demo: demoReducer,
    user:userReducer
});
export const useSelector = createSelectorHook();
export default reducer;
