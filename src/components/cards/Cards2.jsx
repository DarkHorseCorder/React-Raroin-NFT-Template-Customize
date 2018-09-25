import React from 'react';
import {Link} from 'react-router-dom';
import Countdown from 'react-countdown';
const CardItems = [
  {
    avatar_img: '1',
    avatar_name: 'Mark',
    price: '4,906',
    bayer: 'colborn',
    time: '23',
    img: '8',
  },
  {
    avatar_img: '2',
    avatar_name: 'Lance',
    price: '5,647',
    bayer: 'colborn',
    time: '23',
    img: '7',
  },
  {
    avatar_img: '3',
    avatar_name: 'Kylan',
    price: '2,639',
    bayer: 'colborn',
    time: '23',
    img: '6',
  },
  {
    avatar_img: '4',
    avatar_name: 'Brent',
    price: '1,406',
    bayer: 'colborn',
    time: '23',
    img: '5',
  },
  {
    avatar_img: '5',
    avatar_name: 'Kenny',
    price: '7,053',
    bayer: 'colborn',
    time: '23',
    img: '4',
  },
  {
    avatar_img: '6',
    avatar_name: 'Felipe',
    price: '3,946',
    bayer: 'colborn',
    time: '23',
    img: '3',
  },
  {
    avatar_img: '7',
    avatar_name: 'Zaid',
    price: '3,334',
    bayer: 'colborn',
    time: '23',
    img: '2',
  },
  {
    avatar_img: '8',
    avatar_name: 'Brody',
    price: '5,404',
    bayer: 'colborn',
    time: '23',
    img: '1',
  },
];
const CardItems2 = [
  {
    img: '1',
    hours: '47',
    minutes: '23',
    seconds: '00',
    title: 'Colorful Abstract Painting',
    avatar_img1: '10',
    avatar_img2: '11',
    avatar_name: 'darian_barry',
    price: '0.001',
  },
  {
    img: '2',
    hours: '47',
    minutes: '23',
    seconds: '00',
    title: 'Synthwave Modern Painting',
    avatar_img1: '12',
    avatar_img2: '13',
    avatar_name: 'makinzi_beck',
    price: '0.047',
  },
  {
    img: '3',
    hours: '47',
    minutes: '23',
    seconds: '00',
    title: 'The girl with the firefly',
    avatar_img1: '14',
    avatar_img2: '15',
    avatar_name: 'jaxon_duffy',
    price: '0.074',
  },
  {
    img: '4',
    hours: '47',
    minutes: '23',
    seconds: '00',
    title: 'Liquid Forest Princess',
    avatar_img1: '1',
    avatar_img2: '2',
    avatar_name: 'deon _ellis',
    price: '0.075',
  },
];
// Random component
const Completionist = () => <span>auction ending soon now!</span>;
// Renderer callback with condition
const renderer = ({hours, minutes, seconds, completed}) => {
  if (completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <span>
        {hours} : {minutes} : {seconds}
      </span>
    );
  }
};
function Cards2() {
  return (
    <div>
      <div>
        <div className="section mt-100" />
        <div className="container">
          <div className="row md:space-y-30">
            <div className="col-lg-8">
              <div className="section__head">
                <h2 className="section__title mb-20">Recent NFTs</h2>
              </div>
              <div className="row">
                {CardItems.map((val, i) => (
                  <div className="col-lg-6" key={i}>
                    <div className="card__item four">
                      <div className="card_body space-y-10">
                        {/* =============== */}
                        <div className="creators space-x-10">
                          <div className="avatars space-x-10">
                            <Link to="profile">
                              <img
                                src={`img/avatars/avatar_${val.avatar_img}.png`}
                                alt="Avatar"
                                className="avatar avatar-md"
                              />
                            </Link>
                            <div>
                              <p className="avatars_desc color_black">
                                <Link to="profile">
                                  <span className="txt _bold">
                                    @{val.avatar_name}
                                  </span>
                                </Link>
                                accepted an offer for about
                                <span className="color_brand">
                                  ${val.price}
                                </span>
                                on Bound To Fall In Love from
                                <span className="bayer">@{val.bayer}</span>
                              </p>
                              <span className="time color_text">
                                {val.time}
                                min ago
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="card_head">
                          <Link to="item-details">
                            <img
                              src={`img/items/item_${val.img}.png`}
                              alt="NFT"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="d-flex justify-content-center">
                  <Link
                    to="marketplace"
                    className="btn btn-sm
                                    btn-white">
                    <i className="ri-restart-line" />
                    View all items
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="section__head">
                <h2 className="section__title">Live Auctions</h2>
              </div>
              <div className="box is__live space-y-30">
                {CardItems2.map((val, i) => (
                  <div className="card__item two" key={i}>
                    <div className="card_body space-y-10">
                      {/* =============== */}
                      <div className="card_head">
                        <Link to="item-details">
                          <img
                            src={`img/items/item_${val.img}.png`}
                            alt="prv"
                          />
                        </Link>
                        <div className="block_timer">
                          <div
                            className="d-flex justify-content-center
                                                align-items-center txt_sm _bold box_counter">
                            <Countdown
                              date={Date.now() + 60000000}
                              renderer={renderer}
                            />
                          </div>
                        </div>
                        <div
                          className="details d-flex
                                            justify-content-between">
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{width: '80%'}}
                              aria-valuenow={80}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                      {/* =============== */}
                      <h6 className="card_title">
                        <Link className="color_black" to="item-details">
                          {val.title}
                        </Link>
                      </h6>
                      <div className="hr" />
                      <div className="card_footer justify-content-between">
                        <div className="creators">
                          <div className="avatars space-x-3">
                            <div className="-space-x-20">
                              <Link to="profile">
                                <img
                                  src={`img/avatars/avatar_${val.avatar_img1}.png`}
                                  alt="Avatar"
                                  className="avatar avatar-sm"
                                />
                              </Link>
                              <Link to="profile">
                                <img
                                  src={`img/avatars/avatar_${val.avatar_img2}.png`}
                                  alt="Avatar"
                                  className="avatar avatar-sm"
                                />
                              </Link>
                            </div>
                            <Link to="profile">
                              <p
                                className="avatars_name txt_sm
                                                        color_black">
                                @{val.avatar_name}
                              </p>
                            </Link>
                          </div>
                        </div>
                        <Link to="#" className="space-x-3">
                          <p className="color_green txt_sm">{val.price} ETH</p>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-20 d-flex justify-content-center">
                <Link to="marketplace" className="btn btn-primary btn-sm">
                  view all
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards2;
