import React, { Component } from 'react';
import styled from 'styled-components';
import headerImage from '../img/gongfu-setup.jpg';
import Nav from './Nav';

const HeaderImage = styled.div`
  background: url(${headerImage});
`;

class Main extends Component {
  render() {
    return(
      <div>
        <HeaderImage />
        {/* <img src={headerImage} alt={'test'} /> */}
        <h1>Gongfutea</h1>
        <Nav />
      </div>
    );
  }
}

export default Main;