import React, {useRef} from 'react';
import Footer from '../../../components/footer/Footer';
import Header from '../../../components/header/Header';
import HeroEditProfile from '../../../components/hero/HeroEditProfile';
import useDocumentTitle from '../../../components/useDocumentTitle';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {Link} from 'react-router-dom';

const EditProfile = () => {
  const deleting = () => toast.error('Avatar delete in progress');
  const confirm = () => toast.success('Your email verified');
  const update = () => toast.success('Your Profile updated');

  const ref = useRef();
  const closeTooltip = () => ref.current.close();
  useDocumentTitle(' Edit Profile');
  return (
    <div className="edit_profile">
      <Header />
      <HeroEditProfile />
      <div className="container">
        <div>
          <div className="avatars space-x-20 mb-30">
            <div id="profile-container">
              <img
                id="profileImage"
                src="img/avatars/avatar_3.png"
                alt="Avatar"
                className="avatar avatar-lg border-0"
              />
            </div>
            <div className="space-x-10 d-flex">
              <div id="boxUpload">
                <Link to="#" className="btn btn-dark">
                  Upload  Photo
                </Link>
                <input
                  id="imageUpload"
                  type="file"
                  name="profile_photo"
                  placeholder="Photo"
                  required
                  capture
                />
              </div>
              <Link to="#" className="btn btn-white" onClick={deleting}>
                Delete
              </Link>
              <ToastContainer position="bottom-right" />
            </div>
          </div>

          <div className="box edit_box col-lg-9 space-y-30">
            <div className="row sm:space-y-20">
              <div className="col-lg-6 account-info">
                <h3 className="mb-20">Account info 🍉</h3>
                <div className="form-group space-y-10 mb-0">
                  <div className="space-y-40">
                    <div className="space-y-10">
                      <span className="nameInput">Display name</span>
                      <input
                        id="txtUsername"
                        type="text"
                        className="form-control"
                        defaultValue="Creabik"
                      />
                    </div>
                    <div className="space-y-10">
                      <span className="nameInput d-flex justify-content-between">
                        Email
                        <span className="txt_xs">
                          Your email for marketplace notifications
                        </span>
                      </span>
                      <div className="confirm">
                        <input
                          id="txtEmail"
                          type="text"
                          className="form-control"
                          placeholder="Enter
                                      your email"
                        />
                        <Link
                          to="#"
                          className="confirm-btn btn btn-dark btn-sm"
                          onClick={confirm}>
                          Confirm
                        </Link>
                      </div>
                    </div>
                    <div className="space-y-10">
                      <span className="nameInput">Custom URL</span>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="raroin.creabik.com/"
                      />
                    </div>
                    <div className="space-y-10">
                      <span className="nameInput">Bio</span>
                      <textarea
                        style={{minHeight: 110}}
                        placeholder="Add your bio"
                        defaultValue={'\t\t\t\t\t\t\t\t\t'}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 social-media">
                <h3 className="mb-20">Your Social media</h3>
                <div className="form-group space-y-10">
                  <div className="space-y-40">
                    <div className="d-flex flex-column">
                      <span className="nameInput mb-10">Facebook</span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="facebook username"
                      />
                      <Link
                        className="facebook-btn btn btn-primary mt-20 btn-sm"
                        to="#">
                        <i className="ri-facebook-circle-fill" />
                        Connect to Facebook
                      </Link>
                    </div>
                    <div className="d-flex flex-column">
                      <span className="nameInput mb-10">Twitter</span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="twitter username"
                      />
                      <Link
                        className="twitter-btn btn btn-primary mt-20 btn-sm"
                        to="#">
                        <i className="ri-twitter-fill" />
                        Connect to Twitter
                      </Link>
                    </div>
                    <div className="d-flex flex-column">
                      <span className="nameInput mb-10">Discord</span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="discord username"
                      />
                      <Link
                        className="discord-btn btn btn-primary mt-20 btn-sm"
                        to="#">
                        <i className="ri-discord-fill" />
                        Connect to Discord
                      </Link>
                    </div>
                  </div>
                </div>

                <Popup
                  className="custom"
                  ref={ref}
                  trigger={
                    <button className="btn btn-white mt-20 btn-sm">
                      <i className="ri-add-circle-line color_brand mt-5px" />
                      Add more Social media
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
                          <h3 className="text-center">Add more Social media</h3>
                          <div className="d-flex flex-column">
                            <span className="nameInput mb-10">Telegram</span>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="telegram username"
                            />
                            <Link
                              className="telegram-btn btn btn-primary mt-20
      btn-sm"
                              to="#">
                              <i className="ri-telegram-fill mr-5px" />
                              Connect to Telegram
                            </Link>
                          </div>

                          <div className="d-flex flex-column">
                            <span className="nameInput mb-10">TikTok</span>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="tiktok username"
                            />
                            <Link
                              className="tiktok-btn btn btn-primary mt-20
      btn-sm"
                              to="#">
                              <img
                                className="mr-5px"
                                src={`img/icons/tiktok.svg`}
                                alt="tiktok"
                                style={{height: 20}}
                              />
                              Connect to TikTok
                            </Link>
                          </div>
                          <div className="d-flex flex-column">
                            <span className="nameInput mb-10">Youtube</span>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="youtube username"
                            />
                            <Link
                              className="youtube-btn btn btn-primary mt-20
      btn-sm"
                              to="#">
                              <i className="ri-youtube-fill mr-5px" />
                              Connect to Youtube
                            </Link>
                          </div>
                          <div className="d-flex flex-column">
                            <span className="nameInput mb-10">Medium</span>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="medium username"
                            />
                            <Link
                              className="medium-btn btn btn-primary mt-20
      btn-sm"
                              to="#">
                              <img
                                className="mr-5px"
                                src={`img/icons/medium.svg`}
                                alt="tiktok"
                                style={{height: 21}}
                              />
                              Connect to Medium
                            </Link>
                          </div>
                          <Link
                            className="discord-btn btn btn-primary
    w-100"
                            to="#">
                            Save
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </Popup>
              </div>
            </div>
            <div className="hr" />
            <p className="color_black">
              To update your settings you should sign message through your
              wallet. Click 'Update profile' then sign the message.
            </p>
            <div>
              <Link to="#" className="btn btn-grad" onClick={update}>
                Update Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EditProfile;
