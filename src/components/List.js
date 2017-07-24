import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

function List ({ locations }) {
  return (
    <ul>
      {locations.map((location, i) => {
        <li>{location.name}{location.address}{location.rating}</li>;
      })
      }
    </ul>
  );
}

// TODO: finish mapping the tea locations

export default withRouter(connect(
  state => ({ locations: state.locations }),
  (List)));