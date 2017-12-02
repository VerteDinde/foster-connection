import React, { Component } from 'react';
import styled from 'styled-components';
import backgroundImage from '../assets/img/london-scout-27290.jpg';
import List from './List';
import Map from './Map';

const Wrapper = styled.div`
  height: 1900px;
`;

const BackgroundImage = styled.div`
  background: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
`;

const HeaderContainer = styled.div`
  height: 98vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: black;

  @media screen and (max-width: 480px) {
    height: 40vh;
  }
`;

const PlacesWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Title = styled.h1`
  font-weight: 400;
  font-size: 5em;

  @media screen and (max-width: 480px) {
    font-weight: 300;
    font-size: 2em;
  }
`;

const SubHeader = styled.h2`
  font-size: 2em;
  font-weight: 400;


  @media screen and (max-width: 480px) {
    font-weight: 300;
    font-size: 1em;
  }
`;

class Main extends Component {
  render() {
    const { user, resources } = this.props;

    return (
      <Wrapper>
        <BackgroundImage>
          <HeaderContainer>
            <Title>FOSTER CONNECTION</Title>
            <SubHeader>A community of foster parents and children</SubHeader>
          </HeaderContainer>
        </BackgroundImage>
        <List resources={resources} />
        <Map resources={resources}/>
      </Wrapper>
    );
  }
}

export default Main;

