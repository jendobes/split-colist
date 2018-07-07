import { combineReducers } from 'redux';
import cospaceReducer from './cospace_index';
import commentsReducer from './comments_reducer';

const rootReducer = combineReducers({
    cospaces: cospaceReducer,
    comments: commentsReducer
})

export default rootReducer
