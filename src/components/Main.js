import React, { Component } from 'react';
import styled from 'styled-components';
import { H1 } from '../Styles/utils';
import headerImage from '../img/gongfu-setup.jpg';
import Nav from './Nav';
import List from './List';

const HeaderImage = styled.div`
  height: 100vh;
  width: 100vw;
  background: url(${headerImage});
  background-size: cover;
  background-repeat: no-repeat;
`;

class Main extends Component {
  render() {
    const { locations } = this.props;
    
    return (
      <HeaderImage>
        <div>
          <H1>Gong Fu Tea</H1>
          <Nav />
          <List locations={locations}/>
        </div>
      </HeaderImage>
    );
  }
}

export default Main;