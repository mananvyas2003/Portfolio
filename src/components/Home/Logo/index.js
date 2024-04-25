import React from 'react';
import './index.scss'; // Import CSS file for styling

function Logo() {
  return (
    <div className="container">
      <div className="content">
        <h1>Welcome to My Website</h1>
        <p>This is some content on the left side of the webpage.</p>
      </div>
      <div className="image-container">
        <img src="./assets/images/Profile-photo-2.png" alt="YourImg" className="right-image" />
      </div>
    </div>
  );
}

export default Logo;
