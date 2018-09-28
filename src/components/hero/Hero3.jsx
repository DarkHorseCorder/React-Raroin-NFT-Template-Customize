import React, {useRef} from 'react';
import {Link} from 'react-router-dom';
import Countdown from 'react-countdown';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
const CardItems1 = [
  {
    img: '5',
    title: 'Colorful Abstract Painting',
    avatar_img1: '1',
    avatar_img2: '2',
    avatar_name: 'xander_hall',
    price: '0,054',
  },
  {
    img: '7',
    title: 'Spider Eyes Modern Art ',
    avatar_img1: '4',
    avatar_img2: '3',
    avatar_name: 'nathan_wall',
    price: '0,006',
  },
];
const CardItems2 = [
  {
    img: '6',
    title: 'Colorful Abstract Painting',
    avatar_img: '4',
    avatar_name: 'krista_bryan',
    price: '4,906',
  },
  {
    img: '5',
    title: 'Synthwave Modern Painting',
    avatar_img: '6',
    avatar_name: 'makinzi_beck',
    price: '3,003',
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
function Hero3() {
  const ref = useRef();
  const closeTooltip = () => ref.current.close();
  return (
    <div>
      <div className="hero__3">
        <div className="container">
          <div className="row align-items-center mb-50 md:space-y-20">
            <div className="col-lg-6">
              <h1 className="hero__title">
                <span className="color_brand">Discover</span> rare digital art
                and collect NFTs
              </h1>
            </div>
            <div className="col-lg-6">
              <p className="hero__text color_black">
                raroin is a shared liquidity NFT market smart contract which is
                used by multiple websites to provide the users the best possible
                experience.
              </p>
            </div>
          </div>
          <div className="wrapper">
            <div className="row">
              {CardItems1.map((val, i) => (
                <div className="col-lg-4" key={i}>
                  <div className="card__item two">
                    <div className="card_body space-y-10">
                      {/* ???? =============== */}
                      <div className="card_head">
                        <img src={`img/items/item_${val.img}.png`} alt="herr" />
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
                      {/* ???? =============== */}
                      <h6 className="card_title">
                        <Link className="color_black" to="item-details">
                          {val.title}
                        </Link>
                      </h6>
                      <div className="hr" />
                      <div className="card_footer justify-content-between">
                        <Link
                          to="profile"
                          className="creators
                                                space-x-10">
                          <div className="avatars -space-x-20">
                            <img
                              src={`img/avatars/avatar_${val.avatar_img1}.png`}
                              alt="Avatar"
                              className="avatar avatar-sm"
                            />
                            <img
                              src={`img/avatars/avatar_${val.avatar_img2}.png`}
                              alt="Avatar"
                              className="avatar avatar-sm"
                            />
                          </div>
                          <p className="avatars_name txt_sm">
                            @{val.avatar_name}...
                          </p>
                        </Link>
                        <div className="space-x-3">
                          <p className="color_green txt_sm">{val.price} ETH</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="col-lg-4">
                {CardItems2.map((val, i) => (
                  <div className="card__item five" key={i}>
                    <div className="card_body space-y-10 space-x-10 d-flex">
                      {/* ???? =============== */}
                      <div className="card_head">
                        <img src={`img/items/item_${val.img}.png`} alt="prv" />
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
                      {/* ???? =============== */}
                      <div
                        className="d-flex flex-column
                                            justify-content-center w-100 space-y-10">
                        <h6>
                          <Link className="color_black" to="item-details">
                            {val.title}
                          </Link>
                        </h6>
                        <div className="hr" />
                        <div className="card_footer d-block space-y-10">
                          <Link to="profile" className="creators space-x-10">
                            <div className="avatars">
                              <img
                                src={`img/avatars/avatar_${val.avatar_img}.png`}
                                alt="Avatar"
                                className="avatar avatar-sm"
                              />
                            </div>
                            <p className="avatars_name txt_sm">
                              @{val.avatar_name}...
                            </p>
                          </Link>
                          <div
                            className="d-flex
                                                    align-items-center space-x-10
                                                    justify-content-between">
                            <Popup
                              className="custom"
                              ref={ref}
                              trigger={
                                <button className="btn btn-sm btn-primary">
                                  Place Bid
                                </button>
                              }
                              position="bottom center">
                              <div>
                                <div
                                  className="popup"
                                  id="popup_bid"
                                  tabIndex={-1}
                                  role="dialog"
                                  aria-hidden="true">
                                  <div>
                                    <button
                                      type="button"
                                      className="button close"
                                      data-dismiss="modal"
                                      aria-label="Close"
                                      onClick={closeTooltip}>
                                      <span aria-hidden="true">×</span>
                                    </button>
                                    <div className=" space-y-20">
                                      <h3>Place a Bid</h3>
                                      <p>
                                        You must bid at least
                                        <span className="color_black">
                                          15 ETH
                                        </span>
                                      </p>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="00.00 ETH"
                                      />
                                      <p>
                                        Enter quantity.
                                        <span className="color_green">
                                          5 available
                                        </span>
                                      </p>
                                      <input
                                        type="text"
                                        className="form-control"
                                        defaultValue={1}
                                      />
                                      <div className="hr" />
                                      <div className="d-flex justify-content-between">
                                        <p> You must bid at least:</p>
                                        <p className="text-right color_black txt _bold">
                                          67,000 ETH
                                        </p>
                                      </div>
                                      <div className="d-flex justify-content-between">
                                        <p> service free:</p>
                                        <p className="text-right color_black txt _bold">
                                          0,901 ETH
                                        </p>
                                      </div>
                                      <div className="d-flex justify-content-between">
                                        <p> Total bid amount:</p>
                                        <p className="text-right color_black txt _bold">
                                          56,031 ETH
                                        </p>
                                      </div>
                                      <Popup
                                        className="custom"
                                        ref={ref}
                                        trigger={
                                          <button className="btn btn-primary w-full">
                                            Place a bid
                                          </button>
                                        }
                                        position="bottom center">
                                        <div>
                                          <div
                                            className="popup"
                                            id="popup_bid"
                                            tabIndex={-1}
                                            role="dialog"
                                            aria-hidden="true">
                                            <div>
                                              <button
                                                type="button"
                                                className="button close"
                                                data-dismiss="modal"
                                                aria-label="Close"
                                                onClick={closeTooltip}>
                                                <span aria-hidden="true">
                                                  ×
                                                </span>
                                              </button>
                                              <div className="space-y-20">
                                                <h3 className="text-center">
                                                  Your Bidding Successfuly Added
                                                </h3>
                                                <p className="text-center">
                                                  your bid
                                                  <span
                                                    className="color_text txt
      _bold">
                                                    (16ETH)
                                                  </span>
                                                  has been listing to our
                                                  database
                                                </p>
                                                <Link
                                                  to="#"
                                                  className="btn btn-dark w-full">
                                                  Watch the listings
                                                </Link>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </Popup>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popup>
                            <span
                              className="color_green txt_xs
                                                        text-right">
                              {val.price} ETH
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="d-flex justify-content-center mb-30">
                  <Link
                    to="marketplace"
                    className="btn btn-md
                                        btn-dark">
                    View all
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero3;
