export function getCoworkings() {
  return(dispatch) => {
    dispatch({type: 'LOAD_COWORKINGS'});
    fetch('http://localhost:3001/api/coworking').then(response =>{
      return response.json()
    }).then(coworkings => dispatch({type: 'GET_COWORKINGS', payload: coworkings}))
  }
}

export function getColivings() {
  return(dispatch) => {
    dispatch({type: 'LOAD_COLIVINGS'});
    fetch('http://localhost:3001/api/coliving').then(response =>{
      return response.json()
    }).then(colivings => dispatch({type: 'GET_COLIVINGS', payload: colivings}))
  }
}
