import React from 'react';
import styled from 'styled-components';

function List ({ locations }) {
  return (
    <ul>
      {locations.map((location, i) => {
        return <li>{location.name}{location.address}{location.rating}</li>;
      })
      }
    </ul>
  );
}

export default List;