import React, { Component } from 'react';
import styled from 'styled-components';
import headerImage from '../img/gongfu-setup.jpg';
import Nav from './Nav';

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const HeaderImage = styled.div`
  height: 100vh;
  width: 100vw;
  background: url(${headerImage});
  background-size: cover;
  background-repeat: no-repeat;
`;

class Main extends Component {
  render() {
    return (
      <HeaderImage>
        <div>
          <h1>Gongfutea</h1>
          <Nav />
        </div>
      </HeaderImage>
    );
  }
}

export default Main;