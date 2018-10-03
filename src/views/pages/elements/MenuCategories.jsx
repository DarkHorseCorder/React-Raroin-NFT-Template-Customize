import React from 'react';
import {Link} from 'react-router-dom';
const MenuItems = [
  {
    icon: 'ri-gamepad-line',
    title: 'Games',
  },
  {
    icon: 'ri-brush-line',
    title: 'Art',
  },
  {
    icon: 'ri-stock-line',
    title: 'Trading Cards',
  },
  {
    icon: 'ri-music-line',
    title: 'Music',
  },
  {
    icon: 'ri-global-line',
    title: 'Domain Names',
  },
  {
    icon: 'ri-emotion-laugh-line',
    title: 'Memes',
  },
  {
    icon: 'ri-layout-4-line',
    title: 'Collectibles',
  },
];
function MenuCategories() {
  return (
    <div>
      <ul className="menu_categories space-x-20">
        <li>
          <Link className="color_brand">
            <span> All </span>
          </Link>
        </li>
        {MenuItems.map((val, i) => (
          <li key={i}>
            <Link to="#">
              <i className={val.icon}></i>
              <span> {val.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MenuCategories;
