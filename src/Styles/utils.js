import styled from 'styled-components';

export const Title = styled.h1`
  margin: 0;
  font-size: 5em;
  font-weight: 500;
`;

export const Heading = styled.h2`
  font-size: 1em;
  line-height: 40px;
  text-decoration: none;

  @media (min-width: 1050px) {
    font-size: 1.25em;
  }
`;

export const Copy = styled.p`
  font-size: .75em;
  line-height: 40px;
  text-decoration: none;

  @media (min-width: 1050px) {
    font-size: .85em;
	}
`;