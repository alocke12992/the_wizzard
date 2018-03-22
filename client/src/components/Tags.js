import React from 'react';
import { connect } from 'react-redux';
import { Divider } from 'semantic-ui-react';
import TagForm from './TagForm';
class Tags extends React.Component {
  state = {

  }
  render() {
    return (
      <div>
        These are tags
        <TagForm />
      </div>
    )
  }
}


export default connect()( Tags )