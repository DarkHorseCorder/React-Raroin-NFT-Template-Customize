import React from 'react';
import {Link} from 'react-router-dom';
import Footer from '../../../components/footer/Footer';
import Header from '../../../components/header/Header';
import HeroForum from '../../../components/hero/HeroForum';
import Countdown from 'react-countdown';
import useDocumentTitle from '../../../components/useDocumentTitle';

const CardItems = [
  {
    img: '1',
    title: 'Colorful Abstract Painting',
    avatar_img1: '10',
    avatar_img2: '11',
    avatar_name: 'darian_barry',
    price: '0.001',
  },
  {
    img: '2',
    title: 'Synthwave Modern Painting',
    avatar_img1: '12',
    avatar_img2: '13',
    avatar_name: 'makinzi_beck',
    price: '0.047',
  },
  {
    img: '3',
    title: 'The girl with the firefly',
    avatar_img1: '14',
    avatar_img2: '15',
    avatar_name: 'jaxon_duffy',
    price: '0.074',
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
function PostDetails() {
  useDocumentTitle(' Post Details');
  return (
    <div>
      <Header />
      <HeroForum />
      <section className="section forum post__details mt-100">
        <div className="container-md">
          <div className="row sm:space-y-30">
            <div className="col-lg-8">
              <div className="forum__content space-y-30">
                <div className="box is__big space-y-20 forum_border">
                  <div
                    className="d-flex justify-content-between
                                align-items-center">
                    <div className="d-flex align-items-center space-x-15">
                      <div className="avatars space-x-10">
                        <div className="media has_border">
                          <Link to="profile">
                            <img
                              src="img/avatars/avatar_1.png"
                              alt="Avatar"
                              className="avatar avatar-forum"
                            />
                          </Link>
                        </div>
                        <div className="text-center">
                          <Link to="profile">
                            <p className="avatars_name color_brand">@Jared</p>
                          </Link>
                        </div>
                      </div>
                      <div className="category">
                        <p className="color_black">
                          <span className="color_text">in:</span>
                          General
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="avatars space-x-3">
                        <div className="-space-x-20">
                          <Link className="d-none d-sm-inline" to="profile">
                            <img
                              src="img/avatars/avatar_1.png"
                              alt="Avatar"
                              className="avatar avatar-sm"
                            />
                          </Link>
                          <Link className="d-none d-sm-inline" to="profile">
                            <img
                              src="img/avatars/avatar_2.png"
                              alt="Avatar"
                              className="avatar avatar-sm"
                            />
                          </Link>
                          <Link className="d-none d-sm-inline" to="profile">
                            <img
                              src="img/avatars/avatar_4.png"
                              alt="Avatar"
                              className="avatar avatar-sm"
                            />
                          </Link>
                          <Link to="profile">
                            <img
                              src="img/avatars/avatar_5.png"
                              alt="Avatar"
                              className="avatar avatar-sm"
                            />
                          </Link>
                          <Link to="profile">
                            <img
                              src="img/avatars/avatar_6.png"
                              alt="Avatar"
                              className="avatar avatar-sm"
                            />
                          </Link>
                          <span className="total__avatars">+20</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="number">
                      <span>42</span>
                    </div>
                    <div className="space-y-20">
                      <h3>
                        Localbitcoins Clone Script | Localbitcoins Clone
                        Software
                      </h3>
                      <p className="forum__desc">
                        Hey guys! New exploration about NFT Marketplace Web
                        Design, this time I'm inspired by one of my favorite NFT
                        website called Rarible (with crypto payment)! What do
                        you
                      </p>
                      <div className="tags">
                        <span>#NFT Marketplace</span>
                        <span>#crypto Artists</span>
                        <span>#NFT Artists</span>
                      </div>
                      <div className="hr" />
                      <div
                        className="d-flex justify-content-between
                                        flex-wrap">
                        <div className="reaction">
                          <Link to="#" className="likes space-x-3">
                            <i className="ri-heart-3-fill" />
                            <span className="txt_sm">2.1k</span>
                          </Link>
                          <Link to="#" className="comments space-x-3">
                            <i className="ri-chat-1-line" />
                            <span className="txt_sm">257 Comments</span>
                          </Link>
                          <span className="views space-x-3">
                            <i className="ri-eye-line" />
                            <span>257 Views</span>
                          </span>
                          <span className="time space-x-3">
                            <i className="ri-time-line" />
                            <span>8 days ago</span>
                          </span>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <div className="box comments__box">
                  <div className="avatars">
                    <div className="media has_border">
                      <Link to="profile">
                        <img
                          src="img/avatars/avatar_3.png"
                          alt="Avatar"
                          className="avatar avatar-forum"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="inupt__comment">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Add your Answer"
                    />
                  </div>
                  <div className="answer">
                    <Link to="#" className="btn btn-primary btn-sm">
                      Answer
                    </Link>
                  </div>
                </div>
                <div className="Answers space-x-5">
                  <i className="ri-question-answer-line" />
                  <h5>Answers</h5>
                </div>
                <div className="box answers__box is__big space-y-20">
                  <div>
                    <div className="d-flex align-items-center space-x-15">
                      <div className="avatars space-x-10">
                        <div className="media has_border">
                          <Link to="profile">
                            <img
                              src={`img/avatars/avatar_2.png`}
                              alt="Avatar"
                              className="avatar avatar-forum"
                            />
                          </Link>
                        </div>
                        <div className="text-center">
                          <Link to="profile">
                            <p className="avatars_name color_brand">@Trenton</p>
                          </Link>
                        </div>
                      </div>
                      <div className="reaction mb-0">
                        <span className="time mb-0 space-x-3">
                          <i className="ri-time-line" />
                          <span>6 days ago</span>
                        </span>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="v__line"></div>
                      <div className="space-y-20">
                        <p className="forum__desc">
                          I’m willing to send an invite if anyone can bid on my
                          art, once it gets auctioned and sold, my invite code
                          will be unlocked so I can send invite. I have no
                          interest in selling invites for money but I realized I
                          need to make one sell before I can be able to invite
                          others
                        </p>
                        <div className="reaction space-x-15">
                          <span className="like space-x-5">
                            <Link to="#" className="like__btn">
                              <i className="ri-thumb-up-line" />
                            </Link>
                            <span>27 Like</span>
                          </span>
                          <span className="dislike space-x-5">
                            <Link to="#" className="dislike__btn">
                              <i className="ri-thumb-down-line" />
                            </Link>
                            <span>0 Dislike</span>
                          </span>
                        </div>
                        <div className="hr" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="d-flex align-items-center space-x-15">
                      <div className="avatars space-x-10">
                        <div className="media has_border">
                          <Link to="profile">
                            <img
                              src={`img/avatars/avatar_3.png`}
                              alt="Avatar"
                              className="avatar avatar-forum"
                            />
                          </Link>
                        </div>
                        <div className="text-center">
                          <Link to="profile">
                            <p className="avatars_name color_brand">@Ralph</p>
                          </Link>
                        </div>
                      </div>
                      <div className="reaction mb-0">
                        <span className="time mb-0 space-x-3">
                          <i className="ri-time-line" />
                          <span>5 days ago</span>
                        </span>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="v__line"></div>
                      <div className="space-y-20">
                        <p className="forum__desc">
                          Check regularly the website, cause I’m in the same
                          situation. They will add more artists sooner or later,
                          check also the discord channel they have. But most
                          important, be patient and keep sharing your work in
                          other social media
                        </p>
                        <div className="reaction space-x-15">
                          <span className="like space-x-5">
                            <Link to="#" className="like__btn">
                              <i className="ri-thumb-up-line" />
                            </Link>
                            <span>33 Like</span>
                          </span>
                          <span className="dislike space-x-5">
                            <Link to="#" className="dislike__btn">
                              <i className="ri-thumb-down-line" />
                            </Link>
                            <span>0 Dislike</span>
                          </span>
                        </div>
                        <div className="hr" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="d-flex align-items-center space-x-15">
                      <div className="avatars space-x-10">
                        <div className="media has_border">
                          <Link to="profile">
                            <img
                              src={`img/avatars/avatar_4.png`}
                              alt="Avatar"
                              className="avatar avatar-forum"
                            />
                          </Link>
                        </div>
                        <div className="text-center">
                          <Link to="profile">
                            <p className="avatars_name color_brand">@Daniel</p>
                          </Link>
                        </div>
                      </div>
                      <div className="reaction mb-0">
                        <span className="time mb-0 space-x-3">
                          <i className="ri-time-line" />
                          <span>3 days ago</span>
                        </span>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="v__line"></div>
                      <div className="space-y-20">
                        <p className="forum__desc">
                          The best way to start to learn is to make one of your
                          own on https://mintbase.io and then see it pop up
                          immediately on OpenSea in your items. You can also
                          transfer and sell it on your own market in Mintbase
                          where you can embed on your own site.
                        </p>
                        <div className="reaction space-x-15">
                          <span className="like space-x-5">
                            <Link to="#" className="like__btn">
                              <i className="ri-thumb-up-line" />
                            </Link>
                            <span>65 Like</span>
                          </span>
                          <span className="dislike space-x-5">
                            <Link to="#" className="dislike__btn">
                              <i className="ri-thumb-down-line" />
                            </Link>
                            <span>0 Dislike</span>
                          </span>
                        </div>
                        <div className="hr" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="d-flex align-items-center space-x-15">
                      <div className="avatars space-x-10">
                        <div className="media has_border">
                          <Link to="profile">
                            <img
                              src={`img/avatars/avatar_5.png`}
                              alt="Avatar"
                              className="avatar avatar-forum"
                            />
                          </Link>
                        </div>
                        <div className="text-center">
                          <Link to="profile">
                            <p className="avatars_name color_brand">@Gordon</p>
                          </Link>
                        </div>
                      </div>
                      <div className="reaction mb-0">
                        <span className="time mb-0 space-x-3">
                          <i className="ri-time-line" />
                          <span>1 days ago</span>
                        </span>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="v__line last"></div>
                      <div className="space-y-20">
                        <p className="forum__desc">
                          Hi! To my part I was bored losing my time during days
                          sharing my art on the discord chan… That’s why I
                          decided to bought the invitation! I’m so happy now
                        </p>
                        <div className="reaction space-x-15">
                          <span className="like space-x-5">
                            <Link to="#" className="like__btn">
                              <i className="ri-thumb-up-line" />
                            </Link>
                            <span>2 Like</span>
                          </span>
                          <span className="dislike space-x-5">
                            <Link to="#" className="dislike__btn">
                              <i className="ri-thumb-down-line" />
                            </Link>
                            <span>0 Dislike</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sidebar space-y-30">
    
                <div className="space-y-10">
                  <h5>Categories</h5>
                  <div className="box space-y-10 is__big">
                    <div className="d-flex justify-content-between">
                      <span className="color-black">General</span>
                      <span className="light_bg">346</span>
                    </div>
                    <div className="hr" />
                    <div className="d-flex justify-content-between">
                      <span className="color-black">NFT Update</span>
                      <span className="light_bg">346</span>
                    </div>
                    <div className="hr" />
                    <div className="d-flex justify-content-between">
                      <span className="color-black">Marketplace</span>
                      <span className="light_bg">346</span>
                    </div>
                    <div className="hr" />
                    <div className="d-flex justify-content-between">
                      <span className="color-black">Platform Update</span>
                      <span className="light_bg">346</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-10">
                  <h5>Popular Tags</h5>
                  <div className="box popular-tags is__big">
                    <div className="tags_items">
                      <span className="light_bg mr-10">#bitcoinpr</span>
                      <span className="light_bg">#cryptopressrelease</span>
                      <span className="light_bg">#nftcommunity</span>
                      <span className="light_bg">#nftcollector</span>
                      <span className="light_bg">#nftartist </span>
                      <span className="light_bg">#opensea</span>
                      <span className="light_bg">#nftartbtc</span>
                      <span className="light_bg">#nftartbtc</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-10">
                  <div className="d-flex space-x-10">
                    <img
                      src={`img/icons/live.svg`}
                      alt="live"
                      style={{width: 13}}
                    />

                    <h5>Live auctions</h5>
                  </div>
                  <div className="box space-y-30">
                    {CardItems.map((val, i) => (
                      <div className="card__item two" key={i}>
                        <div className="card_body space-y-10">
                          {/* =============== */}
                          <div className="card_head">
                            <Link to="item-details">
                              <img
                                src={`img/items/item_${val.img}.png`}
                                alt="item"
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
                          <div
                            className="card_footer
                                            justify-content-between">
                            <div className="creators">
                              <div className="avatars space-x-3">
                                <div className="-space-x-20">
                                  <Link to="profil">
                                    <img
                                      src={`img/avatars/avatar_${val.avatar_img1}.png`}
                                      alt="Avatar"
                                      className="avatar avatar-sm"
                                    />
                                  </Link>
                                  <Link to="profil">
                                    <img
                                      src={`img/avatars/avatar_${val.avatar_img2}.png`}
                                      alt="Avatar"
                                      className="avatar avatar-sm"
                                    />
                                  </Link>
                                </div>
                                <Link to="profil">
                                  <p
                                    className="avatars_name
                                                            txt_sm
                                                            color_black">
                                    @{val.avatar_name}
                                  </p>
                                </Link>
                              </div>
                            </div>
                            <Link to="#" className="space-x-3">
                              <p className="color_green txt_sm">
                                {val.price}
                                ETH
                              </p>
                            </Link>
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
      </section>
      <Footer />
    </div>
  );
}

export default PostDetails;
