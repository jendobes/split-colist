export function getCoworkings() {
  return(dispatch) => {
    dispatch({type: 'LOAD_COWORKINGS'});
    fetch('http://localhost:3001/api/coworkings')
    .then(response => response.json() )
    .then(responseJSON => {console.log(responseJSON)})
    // dispatch({type: 'GET_COWORKINGS', payload: coworkings}))
  }
}

export function getColivings() {
  return(dispatch) => {
    dispatch({type: 'LOAD_COLIVINGS'});
    fetch('http://localhost:3001/api/colivings').then(response =>{
      return response.json()
    }).then(colivings => dispatch({type: 'GET_COLIVINGS', payload: colivings}))
  }
}
