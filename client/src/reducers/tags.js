import { ADD_TAG, HEADERS } from '../actions/tags'

const tags = ( state = [], action ) => {
  switch ( action.type ) {
    case ADD_TAG:
      return [...state, action.state];
    default:
      return state;

  }
}

export default tags; 