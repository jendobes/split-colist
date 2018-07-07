export function getCoworkings() {
  return(dispatch) => {
    dispatch({type: 'LOAD_COWORKINGS'});
    fetch('http://localhost:3001/api/coworkings')
    .then(response => response.json())
    .then(responseJSON => { dispatch({type: 'GET_COWORKINGS', payload: responseJSON}) })
  }
}

export function getColivings() {
  return(dispatch) => {
    dispatch({type: 'LOAD_COLIVINGS'});
    fetch('http://localhost:3001/api/colivings')
    .then(response => response.json() )
    .then(colivings => dispatch({type: 'GET_COLIVINGS', payload: colivings}))
  }
}

export function addComment(data, id) {
  let url = `http://localhost:3001/api/colivings/${id}/comments`
  return(dispatch) => {
    dispatch({type: 'SEND_COMMENT'})
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
      }
    }).then(response => response.json())
    .then(responseJSON => console.log(responseJSON))
  }
}

// {dispatch({type: 'COMMENT_SENT'})}
