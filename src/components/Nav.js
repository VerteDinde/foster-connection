import React, { Component } from 'react';
import { push as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../Styles/main.css';

const NavItem = styled.li`
  font-size: 2em;
  display: block;
  text-decoration: none;
  color: white;

  &:hover {
    color: turquoise;
  }

  @media (min-width: 700px) {
    display: inline-block;
  }
`;

class Nav extends Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    const { user } = this.props;
    console.log(user);

    return (
      <div id='outer-container'>
        <Menu pageWrapId={'page-wrap'} outerContainerId={'outer-container'}>
          <Link to ='/'><NavItem>Home</NavItem></Link>
          <Link to ='/about'><NavItem>About</NavItem></Link>
          <Link to ='/families'><NavItem>Families</NavItem></Link>
          <Link to ='/resources'><NavItem>Resources</NavItem></Link>
          {user
            ? <Link to ='/locker'><NavItem>My Locker</NavItem></Link>
            : <Link to ='/login'><NavItem>Log In</NavItem></Link>
          }
        </Menu>
      </div>
    );
  }
}

export default Nav;