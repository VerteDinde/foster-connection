import React, { Component } from 'react';
import styled from 'styled-components';
import backgroundImage from '../assets/img/ketan-rajput-345427.jpg';
import families from '../data/families';
import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import FamilyCard from './Family';

const BackgroundImage = styled.div`
height: 50vh;
width: 100vw;
background: url(${backgroundImage});
background-size: cover;
background-repeat: no-repeat;


@media screen and (max-width: 600px) {
  height: 30vh;
}
`;

const HeaderContainer = styled.div`
height: 50vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
color: black;


@media screen and (max-width: 600px) {
  height: 40vh;
}
`;

const Title = styled.h1`
font-weight: 400;
font-size: 5em;

@media screen and (max-width: 600px) {
  font-size: 2em;
}
`;

class Families extends Component {
  render() {
    return (
      <div>
        <BackgroundImage>
          <HeaderContainer>
            <Title>Resource Network</Title>
          </HeaderContainer>
        </BackgroundImage>
        <List>
          {families.map(family => {
            return <div>
              <FamilyCard family={family} />
              <Divider inset={true} />
            </div>;
          })
          };
      </List>
      </div>
    );
  }

}

export default Families;