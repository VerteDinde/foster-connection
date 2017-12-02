import React, { Component } from 'react';
import styled from 'styled-components';
import backgroundImage from '../assets/img/ketan-rajput-345427.jpg';
import families from '../data/families';
import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import FamilyCard from './Family';
import Search from './Search';
import SearchInput, {createFilter} from 'react-search-input';


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

const SearchContainer = styled.div`
height: 10vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
color: white;
`;

const Title = styled.h1`
font-weight: 400;
font-size: 5em;

@media screen and (max-width: 600px) {
  font-size: 2em;
}
`;

const KEYS_TO_FILTERS = ['name'];

class Families extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
    this.searchUpdated = this.searchUpdated.bind(this)
  }
  render() {
    const filteredFamilies = families.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))

    return (
      <div>
        <BackgroundImage>
          <HeaderContainer>
            <Title>Resource Network</Title>
          </HeaderContainer>
        </BackgroundImage>
        <List style={{ width: '75%', marginLeft: '10%' }}>
        <SearchContainer>
          <SearchInput className="search-input" onChange={this.searchUpdated} />
        </SearchContainer>
          {filteredFamilies.map(family => {
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
  searchUpdated (term) {
    this.setState({searchTerm: term})
  }
}

export default Families;
