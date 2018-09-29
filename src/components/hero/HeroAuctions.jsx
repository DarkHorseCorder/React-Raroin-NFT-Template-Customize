import React, {useRef} from 'react';
import {Link} from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
const HeroAuctions = () => {
  const ref = useRef();
  const closeTooltip = () => ref.current.close();
  return (
    <div className="hero_Live_Auctions">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-12 col-sm-12 space-y-10 left_content">
            <img
              className="img-fluid"
              src="img/icons/bid-grad.png"
              alt="bid icon"
            />
            <h1 className="text-left">Live Auctions</h1>
            <p>
              Sign up to receive our monthly newsletter, featuring updates from
              the team, new decentralized applications and NFT projects, and
              trends we’re seeing in the space.
            </p>
          </div>
          <div className="col-lg-7 col-md-12 col-sm-12">
            <div className="card__item one">
              <div className="card_body space-y-10">
                <div className="row align-items-center">
                  <div className="col-xl-7 col-md-7 col-sm-7 space-y-20 card_left">
                    <div className="space-y-20">
                      <h4>Colorful Abstract Painting</h4>
                      <div className="details d-flex justify-content-between">
                        <div className="bid">
                          <div>
                            <p className="text_in_bl txt_xs">CURRENT BID</p>
                            <span className="txt_sm">4.77 ETH</span>

                          </div>
                        </div>
                        <div className="auction_end">
                          <p className="text_in_bl txt_xs">AUCTION END</p>
                          <span className="counter txt_sm">56 : 34 : 00</span>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center space-x-20">
                      <div>
                        <Link to="item-details" className="btn btn-white">
                          View Artwork
                        </Link>
                      </div>
                      <div>
                        <Popup
                          className="custom"
                          ref={ref}
                          trigger={
                            <button className="btn btn-grad">Place Bid</button>
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
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5 col-md-5 col-sm-5">
                    <div className="card_right">
                      <Link to="item-details">
                        <img src="img/items/item_4.png" alt=".." />
                      </Link>
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
};

export default HeroAuctions;
