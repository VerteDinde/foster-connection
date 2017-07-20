import React, { Component } from 'react';

function Nav({ user }) {
  return (
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Online Retailers</li>
      {user
        ? <li>My Account</li>
        : <li>Log In</li>
      }
    </ul>
  );
}

export default Nav;