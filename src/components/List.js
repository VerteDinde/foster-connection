import React from 'react';
import styled from 'styled-components';

function List ({ locations }) {
  return (
    <ul>
      {locations.map((location, i) => {
        return <li key={i}>
          {location.name} 
          {location.street} 
          {location.city} 
          {location.state} 
          {location.rating}
          </li>;})
      }
    </ul>
  );
}

export default List;