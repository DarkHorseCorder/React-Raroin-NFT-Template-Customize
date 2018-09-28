import React from 'react';
import {Link} from 'react-router-dom';

function HeroCreators() {
  return (
    <div>
      <div className="hero__creators">
        <div className="container">
          <div className="row align-items-center justify-content-between sm:space-y-20">
            <div className="col-md-6">
              <div className="space-y-20">
                <h1>Popular Creators</h1>
                <p className="hero__text">
                  I make art with the simple goal of giving you something
                  pleasing to look at for a few seconds.
                </p>
              </div>
            </div>
            <div className="col-md-auto">
              <Link className="btn btn-dark" to="connect-wallet">
                be one of our creators
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroCreators;
