import axios from 'axios'
export const ADD_TAG = 'ADD_TAG'
export const HEADERS = 'HEADERS'
export const TAGS = 'TAGS'


export const getTags = () => {
  return ( dispatch ) => {
    axios.get( '/api/tags' )
      .then( res => dispatch( { type: TAGS, tags: res.data, headers: res.headers } ) )
  }
}

export const addTag = ( tag ) => {
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