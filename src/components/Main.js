import React, { Component } from 'react';
import styled from 'styled-components';
import { H1 } from '../Styles/utils';
import backgroundImage from '../img/gongfu-setup.jpg';
import List from './List';

const BackgroundImage = styled.div`
  height: 80vh;
  width: 100vw;
  background: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
`;

const HeaderContainer = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

class Main extends Component {
  render() {
    const { user, locations } = this.props;

    return (
      <BackgroundImage>
        <HeaderContainer>
          <H1>Gong Fu Tea <span>👍</span></H1>
          <p>Welcome to Gong Fu Tea: Taiwanese Oolongs Only</p>
        </HeaderContainer>
        <List locations={locations} />
      </BackgroundImage>
    );
  }
}

export default Main;