import React from 'react';
import styled from 'styled-components';
import backgroundImg from '../assets/img/alberto-casetta-349138.jpg';
import { Copy, Title } from '../Styles/utils.js';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  color: white;
  line-height: 30px;
  background: url(${backgroundImg});
  background-size: cover;
  background-repeat: repeat;

  @media (min-width: 1050px) {
    background-repeat: no-repeat;
    height: 93.75vh;
	}
`;

const Header = styled.div`
display: flex;
flex-direction: column;
align-self: center;
text-align: center;
width: 80%;
height: 27%;
font-size: .75em;

@media (min-width: 950px) {
  font-size: .85em;
}

@media screen and (max-width: 480px) {
  height: 40vh;
}
`;

const AboutTitle = styled.h2`
  text-align: center;
  font-size: 1.5em;

  @media (min-width: 1050px) {
    padding: 20px;
  }
`;

const AboutText = Copy.extend`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 80%;
  color: white;
  line-height: 2em;
`;

const Line = styled.hr`
  width 80%;
  color: white;
  margin-bottom: 30px;
`;

export default function About() {
  return (
    <Wrapper>
      <Header>
        <AboutTitle>About Our Network</AboutTitle>
        <h3>A resource for families who want to foster children, and the children who are soon leaving the foster network.</h3>
      </Header>
      <Line/>
      <AboutText>
        <p>
          <p>Being a foster family can be a confusing and isolating experience. We wanted to provide foster families with a vibrant network of other families and resources that they can connect with.</p>
          <p>Primary Activities: Promote the delivery of services and supports to foster families, support quality foster care by promoting excellence and best practice, provide services and supports to state and local foster parent associations, develop and provide education and training, information, dissemination of information to the public, advocate at the local, state and national level; promote networking and collaboration, promote positive image of family foster care; greater visibility; encourage active involvement</p>
        </p>
      </AboutText>
    </Wrapper>
  );
}