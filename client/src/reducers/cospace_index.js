export default function cospaceReducer(state = {colivings: [], coworkings: []}, action) {
  switch(action.type){
    case 'GET_COLIVINGS':
      return Object.assign({}, state, {colivings: action.payload});

    case 'GET_COWORKINGS':
    return Object.assign({}, state, {coworkings: action.payload});

    default: return state
  }
}
