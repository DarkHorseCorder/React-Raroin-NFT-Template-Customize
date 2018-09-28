import React from 'react';
import {Link} from 'react-router-dom';

const HeroEditProfile = () => {
  return (
    <div className="mb-50">
      <div className="hero__profile">
        <div className="tabs">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb default mb-0">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Edit profile
              </li>
            </ol>
          </nav>
        </div>
        <div className="cover">
          <img src="img/bg/cover.jpg" alt="cover" />
        </div>
      </div>
    </div>
  );
};

export default HeroEditProfile;
