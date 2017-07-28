import React, { Component } from 'react';
import Main from './components/Main';
import styled from 'styled-components';

class App extends Component {
  constructor() {
    super();

    this.state = {
      locations: [
        {
          name: 'tea shop',
          address: 'cool place',
          rating: '5 star'
        },
        {
          name: 'tea shop2',
          address: 'cool place',
          rating: '5 star'
        },
        {
          name: 'tea shop3',
          address: 'cool place',
          rating: '5 star'
        }
      ],
      filteredLocations: [],
      locationTypes: [],
      user: false,
      formSubmit: false
    };
  }

  render() {
    const { user,locations } = this.state;
    return (
      <div className="App">
        <Main locations={locations} user={user}/>
      </div>
    );
  }
}

export default App;
