import React from 'react';
import { connect } from 'react-redux';
import { Card, Divider, List, Image } from 'semantic-ui-react';
import { getLikeUsers } from '../actions/likeUsers';

const defaultImage = 'https://d30y9cdsu7xlg0.cloudfront.net/png/15724-200.png'

class LikeUsers extends React.Component {

  componentDidMount() {
    this.reload();
  }

  componentWillReceiveProps( nextProps ) {
    if ( nextProps.tags !== this.props.tags ) {
      this.reload()
    }
  }

  return() {
    const { users, tags } = this.props
    return (
      <Card.Group itemsPerRow={ 4 }>
        { users.map( user => {
          const { id, name, image, tags } = user
          return (
            <Card key={ id }>
              <Image src={ image || defaultImage } />
              <Card.Content>
                <Card.Header>{ name }</Card.Header>
                <Card.Description>
                  <List divided horizontal>
                    { tags.map( tag => {
                      <List.Item key={ tag.id }>
                        { tag.name }
                      </List.Item>
                    } ) }
                  </List>
                </Card.Description>
              </Card.Content>
            </Card>
          )
        } ) }
      </Card.Group>
    )
  }

}
const mapStateToProps = ( state ) => {
  return { users: state.users, tags: state.tags }
}

export default connect( mapStateToProps )( LikeUsers );