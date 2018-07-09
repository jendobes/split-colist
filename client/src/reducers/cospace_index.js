export default function cospaceReducer(state = {colivings: [], coworkings: [], loading: false, comments: []}, action) {
  switch(action.type){

    case "GET_COLIVINGS":
    return Object.assign({}, state, {colivings: action.payload})

    case 'GET_COWORKINGS':
    return Object.assign({}, state, {coworkings: action.payload});

    case "SENDING":
    return Object.assign({}, state, {loading: true})

    case "SENT":
    return Object.assign({}, state, {loading: false})

    case "SENT_COMMENT":
    return Object.assign({}, state, {loading: false, comments: action.payload})

    case "LOADING":
    return Object.assign({}, state, {loading: true})

    case "GET_COMMENTS":
    return Object.assign({}, state, {comments: action.payload});

    default: return state
  }
}
