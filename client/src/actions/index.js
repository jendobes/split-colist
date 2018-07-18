export function getCoworkings() {
  return(dispatch) => {
    dispatch({type: 'LOADING'});
    window.fetch('api/coworkings')
    .then(response => response.json())
    .then(responseJSON => { dispatch({type: 'GET_COWORKINGS', payload: responseJSON}) })
    .catch(err => console.log(err))
  }
}

export function getColivings() {
  return(dispatch) => {
    dispatch({type: 'LOADING'});
    window.fetch('api/colivings')
    .then(response => response.json() )
    .then(colivings => dispatch({type: 'GET_COLIVINGS', payload: colivings}))
    .catch(err => console.log(err))
  }
}

export function addComment(data, id) {
  let url = `${id}/comments`
  return(dispatch) => {
    dispatch({type: 'SENDING'})
    return window.fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
      }
    }).then(response => response.json())
    .then(comment => dispatch({type: 'SENT_COMMENT', payload: comment}))
    .catch(err => console.log(err))
  }
}

export function getComments(id) {
  return(dispatch) => {
    dispatch({type: 'LOADING'});
    window.fetch(`api/colivings/${id}/comments`)
    .then(response => response.json() )
    .then(comments => dispatch({type: 'GET_COMMENTS', payload: comments}))
    .catch(err => console.log(err))
  }
}

export function addCospace(data, type) {
  const url = `api${type}`
  return(dispatch) => {
    dispatch({type: 'SENDING'});
    window.fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
      }
    }).then(response => response.json())
    .then(cospace => dispatch({type: 'SENT', payload: cospace}))
    .catch(err => console.log(err))
  }
}
