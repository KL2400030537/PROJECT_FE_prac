// ManhwaCard.jsx
import React, { Component } from 'react';
import './cre.css';

class ManhwaCard extends Component {
  render() {
    const { name, rating, image } = this.props;

    return (
      <div className="card">
        <img src={image} alt={name} />
        <h4 id="nam">Name: {name}</h4>
        <p>⭐ Rating: {rating}</p>
      </div>
    );
  }
}

export default ManhwaCard;
