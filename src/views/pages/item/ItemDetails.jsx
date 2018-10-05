import React, {useRef, useState} from 'react';
import Footer from '../../../components/footer/Footer';
import Header from '../../../components/header/Header';
import {Link} from 'react-router-dom';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import Countdown from 'react-countdown';
import useDocumentTitle from '../../../components/useDocumentTitle';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

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
const ItemDetails = () => {
  const ref = useRef();
  const closeTooltip = () => ref.current.close();
  const [isShare, setShare] = useState(false);

  const toggleShare = () => {
    setShare(!isShare);
  };
  const [isMore, setMore] = useState(false);

  const toggleMore = () => {
    setMore(!isMore);
  };

  useDocumentTitle('Item Details');
  return (
    <div>
      <Header />
      <div className="container">
        <Link to="/home-1" className="btn btn-white btn-sm my-40">
          Back to home
        </Link>
        <div className="item_details">
          <div className="row sm:space-y-20">
            <div className="col-lg-6">
              <img
                className="item_img"
                src="img/items/item_2.png"
                alt="ImgPreview"
              />
            </div>
            <div className="col-lg-6">
              <div className="space-y-20">
                <h3>Creative girl illustration</h3>
                <div className="d-flex justify-content-between">
                  <div className="space-x-10 d-flex align-items-center">
                    <p>1 of 1</p>
                    <Link to="#" className="likes space-x-3">
                      <i className="ri-heart-3-fill" />
                      <span className="txt_sm">2.1k</span>
                    </Link>
                  </div>
                  <div className="space-x-10 d-flex align-items-center">
                    <div>
                      <div className="share">
                        <div className="icon" onClick={toggleShare}>
                          <i className="ri-share-line"></i>
                        </div>
                        <div
                          className={`dropdown__popup ${
                            isShare ? 'visible' : null
                          } `}>
                         <ul className="space-y-10">
                            <li>
                            <a href="https://www.facebook.com/" rel="noreferrer"  target="_blank">
                                <i className="ri-facebook-line"></i>
                              </a>
                            </li>
                            <li>
                            <a href="https://www.messenger.com/" rel="noreferrer"  target="_blank">
                                <i className="ri-messenger-line"></i>
                              </a>
                            </li>
                            <li>
                            <a href="https://whatsapp.com" target="_blank" rel="noreferrer" >
                                <i className="ri-whatsapp-line"></i>
                              </a>
                            </li>
                            <li>
                            <a href="https://youtube.com" target="_blank" rel="noreferrer" >
                                <i className="ri-youtube-line"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="more">
                        <div className="icon" onClick={toggleMore}>
                          <i className="ri-more-fill"></i>
                        </div>
                        <div
                          className={`dropdown__popup ${
                            isMore ? 'visible' : null
                          } `}>
                          <ul className="space-y-10">
                            <li>
                              <Popup
                                className="custom"
                                ref={ref}
                                trigger={
                                  <Link
                                    to="#"
                                    className="content space-x-10 d-flex">
                                    <i className="ri-flag-line" />
                                    <span> Report </span>
                                  </Link>
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
                                      <div className="space-y-20">
                                        <h5>
                                          Thank you,
                                          <span className="color_green">
                                            we've received your report
                                          </span>
                                        </h5>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Popup>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <select className="select_custom btn btn-dark btn-sm">
                  <option value="A">View proof of authenticity </option>
                  <option value="B">View on IPFS</option>
                  <option value="C">View on Etherscan</option>
                </select>

                <div className="box">
                  <Tabs className="space-y-20">
                    <div className="d-flex justify-content-between mb-30_reset">
                      <TabList className="d-flex space-x-10 mb-30 nav-tabs">
                        <Tab className="nav-item">
                          <Link
                            className="btn btn-white btn-sm"
                            data-toggle="tab"
                            to="#tabs-1"
                            role="tab">
                            Details
                          </Link>
                        </Tab>
                        <Tab>
                          <Link
                            className="btn btn-white btn-sm"
                            data-toggle="tab"
                            to="#tabs-2"
                            role="tab">
                            Bids
                          </Link>
                        </Tab>
                        <Tab>
                          <Link
                            className="btn btn-white btn-sm"
                            data-toggle="tab"
                            to="#tabs-3"
                            role="tab">
                            History
                          </Link>
                        </Tab>
                      </TabList>

                    </div>
                    <div className="hr" />
                    <div className="tab-content">
                      <TabPanel className="active">
                        <p>
                          Hey guys! New exploration about NFT Marketplace Web
                          Design, this time I'm inspired by one of my favorite
                          NFT website called Rarible (with crypto payment)! What
                          do you think?
                        </p>
                      </TabPanel>
                      <TabPanel>
                        <p>No active bids yet. Be the first to make a bid!</p>
                      </TabPanel>
                      <TabPanel>
                        <div className="space-y-20">
                          <div className="creator_item creator_card space-x-10">
                            <div className="avatars space-x-10">
                              <div className="media">
                                <div className="badge">
                                  <img
                                    src="img/icons/Badge.svg"
                                    alt="ImgPreview"
                                  />
                                </div>
                                <Link to="profile">
                                  <img
                                    src="img/avatars/avatar_1.png"
                                    alt="Avatar"
                                    className="avatar avatar-md"
                                  />
                                </Link>
                              </div>
                              <div>
                                <p className="color_black">
                                  Bid accepted
                                  <span className="color_brand">1 ETH</span> by
                                  <Link
                                    className="color_black txt _bold"
                                    to="profile">
                                    ayoub
                                  </Link>
                                </p>
                                <span className="date color_text">
                                  28/06/2021, 12:08
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="creator_item creator_card space-x-10">
                            <div className="avatars space-x-10">
                              <div className="media">
                                <div className="badge">
                                  <img
                                    src="img/icons/Badge.svg"
                                    alt="ImgPreview"
                                  />
                                </div>
                                <Link to="profile">
                                  <img
                                    src="img/avatars/avatar_2.png"
                                    alt="Avatar"
                                    className="avatar avatar-md"
                                  />
                                </Link>
                              </div>
                              <div>
                                <p className="color_black">
                                  Bid accepted
                                  <span className="color_brand">3 ETH</span> by
                                  <Link
                                    className="color_black txt _bold"
                                    to="profile">
                                    monir
                                  </Link>
                                </p>
                                <span className="date color_text">
                                  22/05/2021, 12:08
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </TabPanel>
                    </div>
                  </Tabs>
                </div>
                <div className="numbers">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="space-y-5">
                        <p className="color_text">Minimum bid</p>
                        <h4>
                          2.4000
                          <span className="txt_sm color_text">
                            ETH/ $4769.88
                          </span>
                        </h4>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="space-y-5">
                        <p className="color_text">countdown</p>
                        <div className="txt_lg _bold">
                          <Countdown
                            date={Date.now() + 80000000}
                            renderer={renderer}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hr2" />
                <div className="creators">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="avatars space-x-5">
                        <div className="media">
                          <Link to="Profile">
                            <img
                              src="img/avatars/avatar_3.png"
                              alt="Avatar"
                              className="avatar avatar-sm"
                            />
                          </Link>
                        </div>
                        <div>
                          <Link to="profile">
                            <p className="avatars_name color_black">
                              @ayoub_fennouni / fouzi...
                            </p>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="avatars space-x-5">
                        <div className="media">
                          <div className="badge">
                            <img
                              className="badge"
                              src="img/icons/Badge.svg"
                              alt="ImgPreview"
                            />
                          </div>
                          <Link to="profile">
                            <img
                              src="img/avatars/avatar_2.png"
                              alt="Avatar"
                              className="avatar avatar-sm"
                            />
                          </Link>
                        </div>
                        <div>
                          <Link to="profile">
                            <p className="avatars_name color_black">
                              @makinzi_jamy...
                            </p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex space-x-20">
                  <Popup
                    className="custom"
                    ref={ref}
                    trigger={
                      <button className="btn btn-lg btn-primary">
                        Buy Now
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
                            <h3>Checkout</h3>
                            <p>
                              You are about to purchase a
                              <span className="color_black">SHADOW #7</span>
                              from
                              <span className="color_black">Lona</span>
                            </p>
                            <div className="space-y-10">
                              <p>You pay</p>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="00.00 ETH"
                              />
                            </div>
                            <div className="space-y-10">
                              <p>
                                Enter quantity.
                                <span className="color_green">5 available</span>
                              </p>
                              <input
                                type="text"
                                className="form-control"
                                defaultValue={1}
                              />
                            </div>
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
                            <Link
                              to="404"
                              className="btn btn-primary
                                                      w-full"
                              aria-label="Close">
                              Add funds
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Popup>
                  <Popup
                    className="custom"
                    ref={ref}
                    trigger={
                      <button className="btn btn-lg btn-grad">Place Bid</button>
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
                              <span className="color_green">5 available</span>
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
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ItemDetails;
