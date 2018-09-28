import React from 'react';

function HeroForum() {
  return (
    <div>
      <div className="hero_forum bg_white">
        <div className="container">
          <div className="row align-items-center sm:space-y-20">
            <div className="col-lg-6 col-md-6 col-sm-12 space-y-10">
              <h1 className="text-left">Forum</h1>
              <p>
                You can set preferred display name, create your profile URL and
                manage other personal settings.
              </p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="search m-auto" style={{maxWidth: 400}}>
                <input type="text" placeholder="Forum Search" />
                <button className="result">
                  <i className="ri-search-line" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroForum;
