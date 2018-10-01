import React from 'react';

import {Link} from 'react-router-dom';

const PreviewFooter = () => {
  return (
    <footer className="bg_white py-20">
      <div className="container px-xl-0">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-auto text-xl-left logo_holder">
            <Link to="/">
              <img
                className="header__logo"
                id="logo_js"
                src="img/logos/Logo.svg"
                alt="logo"
              />
            </Link>
          </div>
          <div className="col-lg-auto semibold space-x-20 links bottom0menu">
            <Link to="mailto:creabik@gmail.com" className="link color_text">
              Support
            </Link>
            <Link
              to="https://themeforest.net/user/creabik"
              className="link
              color_text">
              Creabik Team
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PreviewFooter;
