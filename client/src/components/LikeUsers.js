import React from 'react';
import { connect } from 'react-redux';
import {
  Card,
  Divider,
  List,
  Image
} from 'semantic-ui-react';
import { getLikeUsers } from '../actions/likeUsers';
import UserCard from './UserCard'

const defaultImage = 'https://d30y9cdsu7xlg0.cloudfront.net/png/15724-200.png';

class LikeUsers extends React.Component {
  componentDidMount() {
    this.reload();
  }

  componentWillReceiveProps( nextProps ) {
    if ( nextProps.tags !== this.props.tags )
      this.reload()
  }

  reload = () => {
    this.props.dispatch( getLikeUsers() )
  }

  render() {
    const { likeUsers } = this.props;
    return (
      <Card.Group itemsPerRow={ 4 }>
        { likeUsers.map( user =>
          <UserCard ley={ user.id } user={ user } />
        ) }
      </Card.Group>
    )
  }
}

const mapStateToProps = ( state ) => {
  return {
    tags: state.tags,
    likeUsers: state.likeUsers,
  }
}

export default connect( mapStateToProps )( LikeUsers )