import React from 'react';
import { Link } from 'react-router-dom';
import loggedImage from '../images/logged.png';
import newImage from '../images/new.png';

export default function HomePage() {
  return (
    <div className="home-page">
      <h1>Welcome to the Workout Tracker!</h1>
      <div className="image-container">
        <div className="image-item">
          <Link to="/log">
            <img src={loggedImage} alt="Logged Workouts" />
          </Link>
          <div className="caption">View Past Workouts</div>
        </div>
        <div className="image-item">
          <Link to="/add">
            <img src={newImage} alt="Add Workout Form" />
          </Link>
          <div className="caption">Add New Workout</div>
        </div>
      </div>
    </div>
  );
}
