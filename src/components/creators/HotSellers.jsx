import React from 'react';
import {Link} from 'react-router-dom';

const CardItems1 = [
  {
    img: '1',
    name: 'xander_hall',
    price: '13.02',
    number: '1',
  },
  {
    img: '2',
    name: 'hamza_pitts',
    price: '38.23',
    number: '2',
  },
  {
    img: '3',
    name: 'nathan_walls',
    price: '11.34',
    number: '3',
  },
  {
    img: '4',
    name: 'kelton_collier',
    price: '23.24',
    number: '4',
  },
];
const CardItems2 = [
  {
    img: '12',
    name: 'cade_glover',
    price: '12.45',
    number: '5',
  },
  {
    img: '6',
    name: 'teagan_poole',
    price: '7.99',
    number: '6',
  },
  {
    img: '7',
    name: 'austin_rivera',
    price: '12.34',
    number: '7',
  },
  {
    img: '8',
    name: 'jeremy_shah',
    price: '18.82',
    number: '8',
  },
];
const CardItems3 = [
  {
    img: '9',
    name: 'joel_reese',
    price: '12.22',
    number: '1',
  },
  {
    img: '10',
    name: 'anton_wright',
    price: '6.03',
    number: '2',
  },
  {
    img: '11',
    name: 'eli_tyler',
    price: '16.73',
    number: '3',
  },
  {
    img: '12',
    name: 'alonzo_knight',
    price: '7.24',
    number: '4',
  },
];
const CardItems4 = [
  {
    img: '13',
    name: 'cannon_stark',
    price: '12.03',
    number: '5',
  },
  {
    img: '14',
    name: 'kolten_hart',
    price: '7.65',
    number: '6',
  },
  {
    img: '15',
    name: 'ethan_cain',
    price: '12.63',
    number: '7',
  },
  {
    img: '4',
    name: 'waylon_ford',
    price: '23.42',
    number: '8',
  },
];
function HotSellers() {
  return (
    <div>
      <div className="section__artists mt-100">
        <div className="container">
          <div className="row sm:space-y-30 justify-content-center">
            <div className="col-md-6 col-sm-8 space-y-30">
              <div
                className="section_head d-flex justify-content-between
                                align-items-center">
                <h2 className="section__title">Hot Sellers</h2>
 
              </div>
              <div className="box">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="space-y-10">
                      {CardItems1.map((val, i) => (
                        <div className="creator_item space-x-10" key={i}>
                          <div className="avatars space-x-10">
                            <div className="media">
                              <Link to="profile">
                                <img
                                  src={`img/avatars/avatar_${val.img}.png`}
                                  alt="Avatar"
                                  className="avatar avatar-md"
                                />
                              </Link>
                              <div className="has_number">{val.number}</div>
                            </div>
                            <div>
                              <Link to="profile">
                                <p
                                  className="avatars_name
                                                                color_black">
                                  @{val.name}...
                                </p>
                              </Link>
                              <span className="price color_green">
                                {val.price}
                                ETH
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="space-y-10">
                      {CardItems2.map((val, i) => (
                        <div className="creator_item space-x-10" key={i}>
                          <div className="avatars space-x-10">
                            <div className="media">
                              <Link to="profile">
                                <img
                                  src={`img/avatars/avatar_${val.img}.png`}
                                  alt="Avatar"
                                  className="avatar avatar-md"
                                />
                              </Link>
                              <div className="has_number">{val.number}</div>
                            </div>
                            <div>
                              <Link to="profile">
                                <p
                                  className="avatars_name
                                                                color_black">
                                  @{val.name}...
                                </p>
                              </Link>
                              <span className="price color_green">
                                {val.price}
                                ETH
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-8 space-y-30">
              <div
                className="section_head d-flex justify-content-between
                                align-items-center">
                <h3 className="section__title">Hot Buyers</h3>

              </div>
              <div className="box">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="space-y-10">
                      {CardItems3.map((val, i) => (
                        <div className="creator_item space-x-10" key={i}>
                          <div className="avatars space-x-10">
                            <div className="media">
                              <Link to="profile">
                                <img
                                  src={`img/avatars/avatar_${val.img}.png`}
                                  alt="Avatar"
                                  className="avatar avatar-md"
                                />
                              </Link>
                              <div className="has_number">{val.number}</div>
                            </div>
                            <div>
                              <Link to="profile">
                                <p
                                  className="avatars_name
                                                                color_black">
                                  @{val.name}...
                                </p>
                              </Link>
                              <span className="price color_green">
                                {val.price}
                                ETH
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="space-y-10">
                      {CardItems4.map((val, i) => (
                        <div className="creator_item space-x-10" key={i}>
                          <div className="avatars space-x-10">
                            <div className="media">
                              <Link to="profile">
                                <img
                                  src={`img/avatars/avatar_${val.img}.png`}
                                  alt="Avatar"
                                  className="avatar avatar-md"
                                />
                              </Link>
                              <div className="has_number">{val.number}</div>
                            </div>
                            <div>
                              <Link to="profile">
                                <p
                                  className="avatars_name
                                                                color_black">
                                  @{val.name}...
                                </p>
                              </Link>
                              <span className="price color_green">
                                {val.price}
                                ETH
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotSellers;
