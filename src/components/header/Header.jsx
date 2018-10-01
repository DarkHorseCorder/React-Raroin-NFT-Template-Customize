import React from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import MobileMenu from './Menu/MobileMenu';
import MegaMenu from './Menu/MegaMenu';
const HomesMenu = [
  {
    icon: 'home-smile-2',
    title: ' Home page 1',
    link: '/home-1',
  },
  {
    icon: 'home-2',
    title: ' Home page 2',
    link: '/home-2',
  },
  {
    icon: 'home-5',
    title: ' Home page 3',
    link: '/home-3',
  },
];
const PagesMenu = [
  {
    title: 'Marketplace',
    link: '/marketplace',
  },
  {
    title: 'Collections',
    link: '/collections',
  },
  {
    title: ' Profile',
    link: '/profile',
  },
  {
    title: 'Creators',
    link: '/creators',
  },
];

const Header = () => {
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <div>

      <header className="header__1">
        <div className="container">
          <div className="wrapper js-header-wrapper">
            <div className="header__logo">
              <Link to="/">
                <img
                  className="header__logo"
                  id="logo_js"
                  src="img/logos/Logo.svg"
                  alt="logo"
                />
              </Link>
            </div>
            {/* ==================  */}
            <div className="header__menu">
              <ul className="d-flex space-x-20">
                <li className="has_popup">
                  <Link className="color_black is_new" to="/">
                    Homes <i className="ri-more-2-fill" />
                  </Link>
                  <ul className="menu__popup space-y-20">
                    {HomesMenu.map((val, i) => (
                      <li key={i}>
                        <Link to={val.link}>
                          <i className={`ri-${val.icon}-line`} />
                          {val.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                {PagesMenu.map((val, i) => (
                  <li key={i}>
                    <Link className="color_black" to={val.link}>
                      {val.title}
                    </Link>
                  </li>
                ))}

                <li className="has_popup2">
                  <Link className="color_black is_new hovered" to="/">
                    Pages <i className="ri-more-2-fill" />
                  </Link>
                  <ul className="menu__popup2 space-y-20">
                    <MegaMenu />
                  </ul>
                </li>
              </ul>
            </div>
            {/* ================= */}
            <div className="header__search">
              <input type="text" placeholder="Search" />
              <Link to="no-results" className="header__result">
                <i className="ri-search-line" />
              </Link>
            </div>
            <div className="header__btns">
              <Link className="btn btn-grad btn-sm" to="connect-wallet">
                <i className="ri-wallet-3-line" />
                Connect wallet
              </Link>
            </div>
            <div className="header__burger js-header-burger" onClick={toggleClass}/>
            <div className={` header__mobile js-header-mobile  ${isActive ? 'visible': null} `}>
            <MobileMenu />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
