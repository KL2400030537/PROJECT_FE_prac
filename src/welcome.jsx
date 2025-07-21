import React, { Component } from 'react';
import './App.css';
class Welcome extends Component {
  render() {
    return (
      <div>
        <h1>Welcome Page</h1>
        <a class="links"href="/Profile">Profile</a><br/>
        <a class="links"href="/hidden/cre">Manhwa</a>
      </div>
    );
  }
}

export default Welcome;
