import React from 'react';
import styled from 'styled-components';

const NavItem = styled.li`
  font-size: 2em;
  display: block;
  text-decoration: none;

  @media (min-width: 700px) {
    display: inline-block;
  }
`;

const NavUl = styled.ul`
  display: inline-block;
  `;


function Nav({ user }) {
  return (
    <NavUl>
      <NavItem>Home</NavItem>
      <NavItem>About</NavItem>
      <NavItem>Places</NavItem>
      <NavItem>Vendors</NavItem>
      {user
        ? <NavItem>My Account</NavItem>
        : <NavItem>Log In</NavItem>
      }
      </NavUl>
  );
}

export default Nav;