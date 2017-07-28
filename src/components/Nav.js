import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import styled from 'styled-components';
import '../Styles/main.css';

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

class Nav extends Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    const { user } = this.props;
    return (
      <div id='outer-container'>
        <Menu pageWrapId={ 'page-wrap'} outerContainerId={ 'outer-container'}>
          <NavItem className='menu-item'>Home</NavItem>
          <NavItem className='menu-item'>About</NavItem>
          <NavItem className='menu-item'>Places</NavItem>
          <NavItem className='menu-item'>Vendors</NavItem>
          {user
            ? <NavItem className='menu-item'>My Account</NavItem>
            : <NavItem className='menu-item'>Log In</NavItem>
          }
        </Menu>
      </div>
    );
  }
}

export default Nav;