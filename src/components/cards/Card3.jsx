import React, {useRef} from 'react';
import {Link} from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
const CardItems1 = [
  {
    img: '1',
    title: 'Colorful Abstract Painting',
    avatar_img: '4',
    avatar_name: 'krista_bryan',
    price: '4,906',
  },
  {
    img: '2',
    title: 'Synthwave Modern Painting',
    avatar_img: '6',
    avatar_name: 'makinzi_beck',
    price: '3,003',
  },
  {
    img: '3',
    title: 'Synthwave Modern Painting',
    avatar_img: '3',
    avatar_name: 'alonzo_knight',
    price: '5,044',
  },
];
const CardItems2 = [
  {
    img: '5',
    title: 'Colorful Abstract Painting',
    avatar_img: '1',
    avatar_name: 'cannon_stark',
    price: '2,937',
  },
  {
    img: '6',
    title: 'Synthwave Modern Painting',
    avatar_img: '8',
    avatar_name: 'jimena_stark',
    price: '7,004',
  },
  {
    img: '7',
    title: 'Synthwave Modern Painting',
    avatar_img: '5',
    avatar_name: 'eli_tyle',
    price: '1,043',
  },
];
function Card3() {
  const ref = useRef();
  const closeTooltip = () => ref.current.close();
  return (
    <div>
      <div className="mt-100">
        <div className="container">
          <div className="section__head">
            <div
              className="d-flex
                            flex-md-wrap
                            justify-content-between
                            align-items-center
                            mb-20">
              <h2 className="section__title">Top artworks</h2>

            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="card__item three">
                <div className="card_body space-y-10">
                  {/* =============== */}
                  <div className="card_head">
                    <Link to="item-details">
                      <img src={`img/items/item_4.png`} alt="ItemDetails" />
                    </Link>
                    <Link to="#" className="likes space-x-3">
                      <i className="ri-heart-3-fill" />
                      <span className="txt_sm">23.1k</span>
                    </Link>
                    <div className="action">
                      <Popup
                        className="custom"
                        ref={ref}
                        trigger={
                          <button className="btn btn-sm btn-primary btn_card">
                            <i className="ri-pie-chart-line color_white mr-5px" />
                            Place Your Bid
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
                                  <span className="color_black">15 ETH</span>
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
                                          <span aria-hidden="true">×</span>
                                        </button>
                                        <div className="space-y-20">
                                          <h3 className="text-center">
                                            Your Bidding Successfuly Added
                                          </h3>
                                          <p className="text-center">
                                            your bid
                                            <span className="color_text txt _bold">
                                              (16ETH)
                                            </span>
                                            has been listing to our database
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
                    </div>
                  </div>
                  {/* =============== */}
                  <h6 className="card_title">
                    <Link className="color_black" to="item-details">
                      Colorful Abstract Painting
                    </Link>
                  </h6>
                  <div className="card_footer d-block space-y-10">
                    <div className="d-flex justify-content-between">
                      <div className="creators space-x-10">
                        <div className="avatars -space-x-20">
                          <Link to="profile">
                            <img
                              src={`img/avatars/avatar_3.png`}
                              alt="Avatar"
                              className="avatar avatar-sm"
                            />
                          </Link>
                          <Link to="profile">
                            <img
                              src={`img/avatars/avatar_2.png`}
                              alt="Avatar"
                              className="avatar avatar-sm"
                            />
                          </Link>
                        </div>
                        <Link to="profile">
                          <p className="avatars_name txt_sm">
                            @makinzi_jamy...
                          </p>
                        </Link>
                      </div>
                      <Link to="#" className="space-x-3">
                        <span className="color_green txt_sm">0.001 ETH</span>
                      </Link>
                    </div>
                    <div className="hr" />
                    <Link
                      to="#"
                      className="d-flex align-items-center
                                            space-x-10">
                      <i className="ri-vip-crown-line" />
                      <p className="color_text txt_sm" style={{width: 'auto'}}>
                        Highest bid
                      </p>
                      <span className="color_black txt_sm">0.0022 ETH</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              {CardItems1.map((val, i) => (
                <div className="card__item five" key={i}>
                  <div className="card_body space-y-10 space-x-10 d-flex">
                    {/* ???? =============== */}
                    <div className="card_head">
                      <Link to="item-details">
                        <img src={`img/items/item_${val.img}.png`} alt="img" />
                      </Link>
                      <div className="details d-flex justify-content-between">
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
                      className="d-flex flex-column justify-content-center
                                        w-100
                                        space-y-10">
                      <h6 className="card_title">{val.title}</h6>
                      <div className="hr" />
                      <div className="card_footer d-block space-y-10">
                        <div className="creators space-x-10">
                          <div className="avatars">
                            <Link to="profile">
                              <img
                                src={`img/avatars/avatar_${val.avatar_img}.png`}
                                alt="Avatar"
                                className="avatar avatar-sm"
                              />
                            </Link>
                          </div>
                          <Link to="Profile">
                            <p className="avatars_name txt_sm">
                              @{val.avatar_name}...
                            </p>
                          </Link>
                        </div>
                        <div
                          className="d-flex
                                                align-items-center
                                                justify-content-between
                                                space-x-3">
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
                                              <span aria-hidden="true">×</span>
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
                                                has been listing to our database
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
                          <span className="color_green txt_sm text-right">
                            {val.price}
                            ETH
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-lg-4">
              {CardItems2.map((val, i) => (
                <div className="card__item five" key={i}>
                  <div className="card_body space-y-10 space-x-10 d-flex">
                    {/* ???? =============== */}
                    <div className="card_head">
                      <Link to="item-details">
                        <img src={`img/items/item_${val.img}.png`} alt="prv" />
                      </Link>
                      <div className="details d-flex justify-content-between">
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
                      className="d-flex flex-column justify-content-center
                                        w-100
                                        space-y-10">
                      <h6 className="card_title">{val.title}</h6>
                      <div className="hr" />
                      <div className="card_footer d-block space-y-10">
                        <div className="creators space-x-10">
                          <div className="avatars">
                            <Link to="profile">
                              <img
                                src={`img/avatars/avatar_${val.avatar_img}.png`}
                                alt="Avatar"
                                className="avatar avatar-sm"
                              />
                            </Link>
                          </div>
                          <Link to="profile">
                            <p className="avatars_name txt_sm">
                              @{val.avatar_name}...
                            </p>
                          </Link>
                        </div>
                        <div
                          className="d-flex
                                                align-items-center
                                                justify-content-between
                                                space-x-3">
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
                                              <span aria-hidden="true">×</span>
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
                                                has been listing to our database
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
                          <span className="color_green txt_sm text-right">
                            {val.price}
                            ETH
                          </span>
                        </div>
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

export default Card3;
