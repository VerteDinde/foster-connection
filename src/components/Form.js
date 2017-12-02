import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import autocompleteApi from '../services/autocompleteApi';

class Form extends React.Component {
  state = {
    textField: ''
  };

  handleSubmit(e) {
    e.preventDefault();
    // Add location once selected from drop down (post to /locations)
  }

  handleChange({ target }) {
    this.setState({ textField: target.value });
    autocompleteApi.getPlace(target.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <TextField onChange={this.handleChange.bind(this)} hintText="Search"/>
        <RaisedButton type="submit" label="Add"/>
      </form>
    );
  }

}

export default Form;
