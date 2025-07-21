import React, { Component } from 'react';
import './profile.css';

class Profile extends Component {
  render() {
    return (
      <div className="profile-container">
        <h1>My Profile</h1>
        <div className="profile-box">
          <img
            src="https://via.placeholder.com/120"
            alt="my image"
            className="profile-image"
          />
          <div className="profile-info">
            <p><strong>Name:</strong> SAI SANDEEP</p>
            <p><strong>Year:</strong> 2rd Year</p>
            <p><strong>Branch:</strong> CSE</p>
            <p><strong>Degree:</strong> B.Tech</p>
            <p><strong>Phone:</strong> 213363664784</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
