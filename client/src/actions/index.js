export function getCoworkings() {
  return(dispatch) => {
    dispatch({type: 'GET_COWORKINGS'});
    fetch('http://localhost:3001/api/coworking')
  }
}

export function getColivings() {
  return(dispatch) => {
    dispatch({type: 'GET_COLIVINGS'});
    fetch('http://localhost:3001/api/coliving')
  }
}
