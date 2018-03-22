import React from 'react'
import { connect } from 'react-redux'
import { Form } from 'semantic-ui-react'
import { addTag } from '../actions/tags';


class TagForm extends React.Component {
  state = { name: '' }

  handleChange = ( e ) => {
    const { value } = e.target
    const name = value.toLowerCase().replace( ' ', '' )
    this.setState( { name } )
  }

  handleSubmit = ( e ) => {
    e.preventDefault()
    const tag = { name: this.state.name }
    this.props.dispatch( addTag( tag ) )
    this.setState( { name: '' } )
  }

  render() {
    const { name } = this.state
    return (
      <Form onSubmit={ this.handleSubmit }>
        <Form.Input
          name="name"
          value={ name }
          placeholder="Tag Name"
          required
          onChange={ this.handleChange }
        />
      </Form>
    )
  }
}

export default connect()( TagForm );