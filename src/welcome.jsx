import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Profile from './Profile';
import About from './cre';
class Welcome extends Component {
  render() {
    return (
      <div>
        <h1>Welcome Page</h1>
        <Link className="links" to="/Profile">Profile</Link><br/>
        <Link className="links" to="/hidden/cre">Manhwa</Link>
      </div>
    );
  }
}

export default Welcome;
