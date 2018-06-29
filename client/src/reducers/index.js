import { combineReducers } from 'redux';
import cospaceReducer from './cospace_index';


const rootReducer = combineReducers({
    cospace: cospaceReducer
})

export default rootReducer
