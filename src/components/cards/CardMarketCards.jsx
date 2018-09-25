import React, {useRef} from 'react';
import {Link} from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
const CardItems = [
  {
    avatar_img1: '1',
    avatar_name1: 'mickel_fenn',
    avatar_img2: '2',
    avatar_name2: 'danil_pannini',
    likes: '1.2',
    img: '1',
    title: 'Colorful Abstract card',
    price: '2.45',
    stock: '4',
  },
  {
    avatar_img1: '3',
    avatar_name1: 'mazanov_sky',
    avatar_img2: '4',
    avatar_name2: 'mucky_fennouni',
    likes: '13.2',
    img: '2',
    title: 'The girl with the card',
    price: '2.55',
    stock: '12',
  },
  {
    avatar_img1: '5',
    avatar_name1: 'jimmy_dom',
    avatar_img2: '6',
    avatar_name2: 'kristian_sefroui',
    likes: '1.2',
    img: '3',
    title: 'Cards medern art',
    price: '2.45',
    stock: '6',
  },
];

function CardMarketCards() {
  const ref = useRef();
  const closeTooltip = () => ref.current.close();
  return (
    <div>
      <div className="row mb-30_reset">
        {CardItems.map((val, i) => (
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6" key={i}>
            <div className="card__item four">
              <div className="card_body space-y-10">
                {/* =============== */}
                <div className="creators space-x-10">
                  <div className="avatars space-x-3">
                    <Link to="profile">
                      <img
                        src={`img/avatars/avatar_${val.img}.png`}
                        alt="Avatar"
                        className="avatar avatar-sm"
                      />
                    </Link>
                    <Link to="profile">
                      <p className="avatars_name txt_xs">@{val.avatar_name1}</p>
                    </Link>
                  </div>
                  <div className="avatars space-x-3">
                    <Link to="profile">
                      <img
                        src={`img/avatars/avatar_${val.avatar_img2}.png`}
                        alt="Avatar"
                        className="avatar avatar-sm"
                      />
                    </Link>
                    <Link to="profile">
                      <p className="avatars_name txt_xs">@{val.avatar_name2}</p>
                    </Link>
                  </div>
                </div>
                <div className="card_head">
                  <Link to="Item-details">
                    <img
                      src={`img/items/cards/${val.img}.png`}
                      alt="nftimage"
                    />
                  </Link>
                  <Link to="#" className="likes space-x-3">
                    <i className="ri-heart-3-fill" />
                    <span className="txt_sm">{val.likes}k</span>
                  </Link>
                </div>
                {/* =============== */}
                <h6 className="card_title">{val.title}</h6>
                <div className="card_footer d-block space-y-10">
                  <div className="card_footer justify-content-between">
                    <div className="creators">
                      <p className="txt_sm"> {val.stock} in stock</p>
                    </div>
                    <Link to="#">
                      <p className="txt_sm">
                        Price:
                        <span
                          className="color_green
                                                txt_sm">
                          {val.price} ETH
                        </span>
                      </p>
                    </Link>
                  </div>
                  <div className="hr" />
                  <div
                    className="d-flex
								align-items-center
								space-x-10
								justify-content-between">
                    <div
                      className="d-flex align-items-center
									space-x-5">
                      <i className="ri-history-line" />
                      <Popup
                        className="custom"
                        ref={ref}
                        trigger={
                          <button className="popup_btn">
                            <p
                              className="color_text txt_sm view_history"
                              style={{width: 'auto'}}>
                              View History
                            </p>
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
                                <h4> History </h4>
                                <div className="creator_item creator_card space-x-10">
                                  <div className="avatars space-x-10">
                                    <div className="media">
                                      <div className="badge">
                                        <img
                                          src={`img/icons/Badge.svg`}
                                          alt="Badge"
                                        />
                                      </div>
                                      <Link to="profile">
                                        <img
                                          src={`img/avatars/avatar_1.png`}
                                          alt="Avatar"
                                          className="avatar avatar-md"
                                        />
                                      </Link>
                                    </div>
                                    <div>
                                      <p className="color_black">
                                        Bid accepted
                                        <span className="color_brand">
                                          1 ETH
                                        </span>
                                        by
                                        <Link
                                          className="color_black txt
						_bold"
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
                                          src={`img/icons/Badge.svg`}
                                          alt="Badge"
                                        />
                                      </div>
                                      <Link to="profile">
                                        <img
                                          src={`img/avatars/avatar_2.png`}
                                          alt="Avatar"
                                          className="avatar avatar-md"
                                        />
                                      </Link>
                                    </div>
                                    <div>
                                      <p className="color_black">
                                        Bid accepted
                                        <span className="color_brand">
                                          3 ETH
                                        </span>
                                        by
                                        <Link
                                          className="color_black txt
						_bold"
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
                            </div>
                          </div>
                        </div>
                      </Popup>
                    </div>

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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardMarketCards;
