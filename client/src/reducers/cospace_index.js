export default function cospaceReducer(state = {}, action) {
  switch(action.type){
    case 'GET_COLIVINGS':
      return Object.assign({}, state);

    case 'GET_COWORKINGS':
    return Object.assign({}, state);

    default: return state
  };
}
