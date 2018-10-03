import React from 'react';

function MenuFilter() {
  return (
    <div>
      <ul className="menu_categories">
        <li className="d-flex switch_item">
          <input type="checkbox" id="switch1" />
          <label htmlFor="switch1">Toggle</label>
          <span className="ml-10"> Has list price </span>
        </li>
        <li className="d-flex switch_item">
          <input type="checkbox" id="switch2" defaultChecked />
          <label htmlFor="switch2">Toggle</label>
          <span className="ml-10"> Has open offer </span>
        </li>
        <li className="d-flex switch_item">
          <input type="checkbox" id="switch3" />
          <label htmlFor="switch3">Toggle</label>
          <span className="ml-10"> Owned by creator </span>
        </li>
        <li className="d-flex switch_item">
          <input type="checkbox" id="switch4" />
          <label htmlFor="switch4">Toggle</label>
          <span className="ml-10"> Has sold </span>
        </li>
      </ul>
    </div>
  );
}

export default MenuFilter;
