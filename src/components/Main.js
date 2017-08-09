import React, { Component } from 'react';
import styled from 'styled-components';
import backgroundImage from '../assets/img/gongfu-setup.jpg';
import List from './List';
import MapContainer from './Map';

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
  color: white;
`;

const PlacesWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Title = styled.h1`
  font-weight: 400;
  font-size: 5em;
`;

const SubHeader = styled.h2`
  font-size: 2em;
  font-weight: 400;
`;

class Main extends Component {
  render() {
    const { user, locations } = this.props;

    return (
      <div>
        <BackgroundImage>
          <HeaderContainer>
            <Title>GONG FU TEA</Title>
            <SubHeader>A site for tea lovers</SubHeader>
          </HeaderContainer>
          </BackgroundImage>
          <PlacesWrapper>
            <List locations={locations} />
            <MapContainer locations={locations}/>
          </PlacesWrapper>
        </div>
    );
  }
}

export default Main;

