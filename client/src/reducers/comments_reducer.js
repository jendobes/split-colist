export default function cospaceReducer(state = {loading: false}, action) {

  switch(action.type){

    case "GET_COMMENTS":
    return Object.assign({}, state, {loading: true})

    case "COMMENT_SENT":
    return Object.assign({}, state, {loading: false})

    default: return state
  }
}
