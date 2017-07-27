import React from 'react';
import styled from 'styled-components';

function List ({ locations }) {
  console.log(locations);
  return (
    <ul>
      {locations.map((location, i) => {
        return <li>{location.name}{location.address}{location.rating}</li>;
      })
      }
    </ul>
  );
}

// TODO: finish mapping the tea locations

export default List;