import React from 'react';
import './ProfileCard.css';

function ProfileCard(props) {
  return (
    <div className="profile-card">
      <img src={props.image} alt={props.name} className="profile-image" />

      <h2 className="profile-name">{props.name}</h2>
      <h4 className="profile-role">{props.role}</h4>
      <p className="profile-description">{props.description}</p>

      <div className="social-icons">
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-linkedin-in"></i>
      </div>
    </div>
  );
}

export default ProfileCard;

