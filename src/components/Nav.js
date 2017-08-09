import React, { Component } from 'react';
import { push as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
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
        <Menu pageWrapId={'page-wrap'} outerContainerId={'outer-container'}>
          <Link to ='/'><NavItem>Home</NavItem></Link>
          <Link to ='/about'><NavItem>About</NavItem></Link>
          <Link to ='/places'><NavItem>Places</NavItem></Link>
          <Link to ='/vendors'><NavItem>Vendors</NavItem></Link>
          {user
            ? <Link to ='/login'><NavItem>My Account</NavItem></Link>
            : <Link to ='/login'><NavItem>Log In</NavItem></Link>
          }
        </Menu>
      </div>
    );
  }
}

export default Nav;