import React from 'react';
import {Link} from 'react-router-dom';

const CreatorsItems = [
  {
    img: '1',
    name: 'xander_hall',
    price: '16.58',
  },
  {
    img: '2',
    name: 'hamza_pitts',
    price: '14.55',
  },
  {
    img: '3',
    name: 'nathan_walls',
    price: '24.13',
  },
  {
    img: '4',
    name: 'kelton_collier',
    price: '62.68',
  },
  {
    img: '5',
    name: 'cade_glover',
    price: '32.48',
  },
  {
    img: '1',
    name: 'teagan_poole',
    price: '50.02',
  },
  {
    img: '2',
    name: 'austin_rivera',
    price: '9.99',
  },
  {
    img: '3',
    name: 'jeremy_shah',
    price: '52.58',
  },
  {
    img: '4',
    name: 'joel_reese',
    price: '14.58',
  },
  {
    img: '5',
    name: 'anton_wright',
    price: '12.24',
  },
  {
    img: '6',
    name: 'eli_tyler',
    price: '16.58',
  },
  {
    img: '7',
    name: 'alonzo_knight',
    price: '12.58',
  },
];
function PopularCreators() {
  return (

      <div className="section__creators mt-100">
        <div className="container">
          <div className="">
            <div className="section_head mb-30">
              <h2 className="section__title text-center">Popular Creators</h2>
            </div>
            <div className="section__body">
              <div className="row mb-20_reset justify-content-center">
                {CreatorsItems.map((val, i) => (
                  <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 mb-20"  key={i}>
                    <div
                      className="creator_item creator_card space-x-10 "
                     >
                      <div className="avatars space-x-10">
                        <Link to="Profile">
                          <img
                            src={`img/avatars/avatar_${val.img}.png`}
                            alt="Avatar"
                            className="avatar avatar-md"
                          />
                        </Link>
                        <div>
                          <Link to="profile">
                            <p className="avatars_name color_black">
                              @{val.name}...
                            </p>
                          </Link>
                          <span className="price color_green">
                            {val.price} ETH
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

  );
}

export default PopularCreators;
