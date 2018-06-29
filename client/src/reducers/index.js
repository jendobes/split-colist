import { combineReducers } from 'redux';
import cospaceReducer from './cospace_reducer';


const rootReducer = combineReducers({
    cospace: cospaceReducer
})

export default rootReducer
