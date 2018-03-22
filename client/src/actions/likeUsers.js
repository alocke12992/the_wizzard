import axios from 'axios';
export const LIKE_USERS = 'LIKE_USERS'


export const getLikeUsers = () => {
  return ( dispatch ) => {
    axios.get( '/api/like_users' )
      .then( res => {
        dispatch( {
          type: LIKE_USERS, users: res.data, headers: res.headers
        } )
      }
      )
  }
}