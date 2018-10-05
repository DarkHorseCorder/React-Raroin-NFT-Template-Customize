import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../../../components/header/Header';
import useDocumentTitle from '../../../components/useDocumentTitle';
import {ToastContainer, toast} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  useDocumentTitle(' Register');
  const confirm = () => toast.success('Your email verified');
  const update = () =>
    toast.success(' you account has been registred check your inbox');
  return (
    <div>
      <Header />
      <ToastContainer position="bottom-right" />

      <div className="edit_profile register">
        <div className="container">
          <div className="row">
            <div className="col-lg-3" />
            <div className="col-lg-9">
              <div className="right_part space-y-20">
                <h1 className="color_white"> Register new account</h1>
                <p className="color_white" style={{color: 'white !important'}}>
                  You can set preferred display name, create your profile URL
                  and manage other personal settings.
                </p>
                <div className="box edit_box w-full space-y-20">
                  <div className="row">
                    <div className="col-lg-6 account-info">
                      <div className="avatars mb-30">
                        <div id="profile-container">
                          <img
                            id="profileImage"
                            src={`img/avatars/avatar_3.png`}
                            alt="Avatar"
                            className="avatar avatar-lg border-0 mb-10"
                          />
                        </div>
                        <div>
                          <h6 className="mb-1">Profile photo</h6>
                          <p className="mb-1">
                            We recommend an image of at least 400x400. Gifs work
                            too 🙌
                          </p>
                          <div id="boxUpload">
                            <Link to="#" className="btn btn-sm btn-dark">
                              Upload
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
                        </div>
                      </div>
                      <h3 className="mb-20"> 🍉 Account info </h3>
                      <div className="form-group space-y-10 mb-0">
                        <div className="space-y-20">
                          <div className="space-y-10">
                            <span className="nameInput">Display name</span>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="your name"
                            />
                          </div>
                          <div className="space-y-10">
                            <span className="nameInput">Custom URL</span>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="raroin.creabik.com/"
                            />
                          </div>
                          <div className="space-y-10">
                            <span className="nameInput d-flex justify-content-between">
                              Email
                              <span className="txt_xs color_text">
                                Your email for marketplace notifications
                              </span>
                            </span>
                            <div className="confirm">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter email"
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
                            <span className="nameInput">Bio</span>
                            <textarea
                              style={{minHeight: 110}}
                              placeholder="Add your bio"
                              defaultValue={'\t\t\t\t\t\t\t\t\t\t\t'}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 social-media">
                      <h3 className="mb-20">👨 Social media ‍</h3>
                      <div className="form-group space-y-10">
                        <div className="space-y-20">
                          <div className="d-flex flex-column">
                            <span className="nameInput mb-10">Facebook</span>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="facebook username"
                            />
                            <Link
                              className="facebook-btn btn btn-primary mt-10 btn-sm"
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
                              className="twitter-btn btn btn-primary mt-10 btn-sm"
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
                              className="discord-btn btn btn-primary mt-10 btn-sm"
                              to="#">
                              <i className="ri-discord-fill" />
                              Connect to Discord
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hr" />
                  <p className="color_black">
                    Please take a few minutes to read and understand Stacks
                    Terms of Service. To continue, you’ll need to accept the
                    terms of services by checking the boxes.
                  </p>
                  <Link to="#" className="btn btn-grad" onClick={update}>
                    Register
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
