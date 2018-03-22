import axios from 'axios'
export const ADD_TAG = 'ADD_TAG'
export const HEADERS = 'HEADERS'

export const addTag = ( tag ) => {
  //send tag to database 
  //if I get a tag back, update store and dispatch headers
  return ( dispatch ) => {
    axios.post( '/api/tags', { tag } )
      .then( res => {
        if ( res.data ) {
          dispatch( { type: ADD_TAG, tag: res.data, headers: res.headers } )
        } else {
          dispatch( { type: HEADERS, headers: res.data } )
        }
      } )
  }
}