import React, { Component } from 'react';
import styled from 'styled-components';
import backgroundImage from '../assets/img/ketan-rajput-345427.jpg';
import families from '../data/families';
import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import FamilyCard from './Family';
import Search from './Search';

const BackgroundImage = styled.div`
height: 30vh;
width: 100vw;
background: url(${backgroundImage});
background-size: cover;
background-repeat: no-repeat;
`;

const HeaderContainer = styled.div`
height: 30vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
color: white;
`;

const Title = styled.h1`
font-weight: 400;
font-size: 5em;
`;

class Families extends Component {
  render() {
    return (
      <div>
        <BackgroundImage>
          <HeaderContainer>
            <Title>Family Network</Title>
          </HeaderContainer>
        </BackgroundImage>
        <List style={{ width: '75%', marginLeft: '10%' }}>
        <Search />
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
