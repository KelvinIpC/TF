import reqReducer from './reqReducer';
import {combineReducers} from 'redux';
export default combineReducers({
    req: reqReducer
});