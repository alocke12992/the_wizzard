import axios from 'axios';
export const LIKE_USERS = 'LIKE_USERS'

export const getUsersByTag = ( tag ) => {
  return ( dispatch ) => {
    axios.get( `/api/users/${ tag }` )
      .then( res => {
        dispatch( likeUsers( res.data, res.headers ) )
      } )
  }
}

export const getLikeUsers = () => {
  return ( dispatch ) => {
    axios.get( '/api/like_users' )
      .then( res => {
        dispatch( likeUsers( res.data, res.headers ) )
      } )
  }
}

const likeUsers = ( users, headers ) => {
  return { type: LIKE_USERS, users, headers }
}