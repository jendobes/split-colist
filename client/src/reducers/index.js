import { combineReducers } from 'redux';
import cospaceReducer from './cospace_index';


const rootReducer = combineReducers({
    cospaces: cospaceReducer
})

export default rootReducer
