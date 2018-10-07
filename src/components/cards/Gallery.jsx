import React, {useRef} from 'react';
import {Link} from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
const CardItems = [
  {
    img: '4',
    likes: '1.2',
    title: 'smoking Abstract Painting',
    avatar_img1: '1',
    avatar_img2: '2',
    avatar_name: 'luka_fenn',
    price: '0.001',
    hight_price: '0.022',
  },
  {
    img: '7',
    likes: '3.5',
    title: 'monkey Abstract Painting',
    avatar_img1: '3',
    avatar_img2: '4',
    avatar_name: 'noel_meon',
    price: '0.035',
    hight_price: '0.075',
  },
  {
    img: '6',
    likes: '2.4',
    title: 'couple Abstract Painting',
    avatar_img1: '5',
    avatar_img2: '6',
    avatar_name: 'zion_ach',
    price: '0.008',
    hight_price: '0.074',
  },
];
function Gallery() {
  const ref = useRef();
  const closeTooltip = () => ref.current.close();
  return (
    <div>
      <div>
        <div className="section__artists mt-100 py-100 bg-white">
          <div className="container">
            <div className="space-y-30">
              <div className="section_head">
                <h2 className="section__title">Top Gallery </h2>
              </div>
              <div className="row mb-30_reset">
                {CardItems.map((val, i) => (
                  <div className="col-lg-4" key={i}>
                    <div className="card__item three">
                      <div className="card_body space-y-10">
                        {/* =============== */}
                        <div className="card_head">
                          <Link to="item-details">
                            <img
                              src={`img/items/item_${val.img}.png`}
                              alt="prv"
                            />
                          </Link>
                          <Link to="#" className="likes space-x-3">
                            <i className="ri-heart-3-fill" />
                            <span className="txt_sm">{val.likes}k</span>
                          </Link>
                          <div className="action">
                            <Popup
                              className="custom"
                              ref={ref}
                              trigger={
                                <button className="btn btn-sm btn-primary btn_auction">
                                  <i className="ri-auction-line color_white mr-5px" />
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
                          </div>
                        </div>
                        {/* =============== */}
                        <h6 className="card_title">
                          <Link className="color_black" to="item-details">
                            {val.title}
                          </Link>
                        </h6>
                        <div className="card_footer d-block space-y-10">
                          <div className="d-flex justify-content-between">
                            <div className="creators space-x-3">
                              <div className="avatars -space-x-20">
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
                                <p className="avatars_name txt_sm">
                                  @{val.avatar_name}..
                                </p>
                              </Link>
                            </div>
                            <div className="space-x-3">
                              <div className="color_green txt_sm">
                                {val.price}
                                ETH
                              </div>
                            </div>
                          </div>
                          <div className="hr" />
                          <div
                            className="d-flex align-items-center
                                                space-x-10 color_black">
                            <i className="ri-vip-crown-line" />
                            <Link
                              to="item-details"
                              className="color_text txt_sm"
                              style={{width: 'auto'}}>
                              Highest bid
                            </Link>
                            <span className="color_green txt_sm">
                              {val.hight_price}
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
    </div>
  );
}

export default Gallery;
