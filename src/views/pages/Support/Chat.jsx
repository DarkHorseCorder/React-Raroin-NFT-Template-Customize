import React from 'react';
import Footer from '../../../components/footer/Footer';
import Header from '../../../components/header/Header';
import useDocumentTitle from '../../../components/useDocumentTitle';
import {Link} from 'react-router-dom';

const Chat = () => {
  useDocumentTitle(' Chat ');
  return (
    <div>
      <Header />

      <div className="submit_requests">
        <div className="container">
          <div className="space-y-70">
            <Link to="submit-request" className="btn btn-white">
              Back to Submit a request
            </Link>
            <div className="row justify-content-center">
              <div className="col-lg-12 col-md-9 col-sm-12">
                <div className="row">
                  <div className="col-xl-5 col-lg-6">
                    <div className="side_bar space-y-20">
                      <h2>Requests</h2>
                      <div className="sidebar_box space-y-20">
                        {/* request */}
                        <div className="box space-y-10">
                          <div className="d-flex align-items-center space-x-5">
                            <i className="ri-message-3-line color_brand question_icon" />
                            <h6>How do I find my transaction hash?</h6>
                          </div>
                          <div className="hr" />
                          <div className="d-flex">
                            <p className="txt_xs">
                              Id: <span className="color_black">#5789</span>
                            </p>
                            <p className="txt_xs">
                              <i className="ri-history-line desc_icon" />
                              <span className="desc_text">Last Activity</span>:
                              <span className="color_black">a few seconds</span>
                            </p>
                            <p className="txt_xs">
                              <i className="ri-toggle-line desc_icon" />
                              <span className="desc_text">Status</span>:
                              <span className="color_green">Open</span>
                            </p>
                          </div>
                        </div>
                        <div className="box space-y-10">
                          <div className="d-flex align-items-center space-x-5">
                            <i className="ri-message-3-line color_brand question_icon" />
                            <h6>
                              How can I get support while building my items?
                            </h6>
                          </div>
                          <div className="hr" />
                          <div className="d-flex">
                            <p className="txt_xs">
                              Id: <span className="color_black">#5789</span>
                            </p>
                            <p className="txt_xs">
                              <i className="ri-history-line desc_icon" />
                              <span className="desc_text">Last Activity</span>:
                              <span className="color_black">a few seconds</span>
                            </p>
                            <p className="txt_xs">
                              <i className="ri-toggle-line desc_icon" />
                              <span className="desc_text">Status</span>:
                              <span className="color_red">Closed</span>
                            </p>
                          </div>
                        </div>
                        <div className="box space-y-10">
                          <div className="d-flex align-items-center space-x-5">
                            <i className="ri-message-3-line color_brand question_icon" />
                            <h6>Is this only for video games?</h6>
                          </div>
                          <div className="hr" />
                          <div className="d-flex">
                            <p className="txt_xs">
                              Id: <span className="color_black">#5789</span>
                            </p>
                            <p className="txt_xs">
                              <i className="ri-history-line desc_icon" />
                              <span className="desc_text">Last Activity</span>:
                              <span className="color_black">a few seconds</span>
                            </p>
                            <p className="txt_xs">
                              <i className="ri-toggle-line desc_icon" />
                              <span className="desc_text">Status</span>:
                              <span className="color_red">Closed</span>
                            </p>
                          </div>
                        </div>
                        <div className="box space-y-10">
                          <div className="d-flex align-items-center space-x-5">
                            <i className="ri-message-3-line color_brand question_icon" />
                            <h6>
                              Do you send transaction notification emails?
                            </h6>
                          </div>
                          <div className="hr" />
                          <div className="d-flex">
                            <p className="txt_xs">
                              Id: <span className="color_black">#5789</span>
                            </p>
                            <p className="txt_xs">
                              <i className="ri-history-line desc_icon" />
                              <span className="desc_text">Last Activity</span>:
                              <span className="color_black">a few seconds</span>
                            </p>
                            <p className="txt_xs">
                              <i className="ri-toggle-line desc_icon" />
                              <span className="desc_text">Status</span>:
                              <span className="color_red">Closed</span>
                            </p>
                          </div>
                        </div>
                        <div className="box space-y-10">
                          <div className="d-flex align-items-center space-x-5">
                            <i className="ri-message-3-line color_brand question_icon" />
                            <h6>How Can i change my NFT etheruem address</h6>
                          </div>
                          <div className="hr" />
                          <div className="d-flex">
                            <p className="txt_xs">
                              Id: <span className="color_black">#5789</span>
                            </p>
                            <p className="txt_xs">
                              <i className="ri-history-line desc_icon" />
                              <span className="desc_text">Last Activity</span>:
                              <span className="color_black">a few seconds</span>
                            </p>
                            <p className="txt_xs">
                              <i className="ri-toggle-line desc_icon" />
                              <span className="desc_text">Status</span>:
                              <span className="color_green">Open</span>
                            </p>
                          </div>
                        </div>
                        <div className="box space-y-10">
                          <div className="d-flex align-items-center space-x-5">
                            <i className="ri-message-3-line color_brand question_icon" />
                            <h6>How do I withdraw funds from Polygon?</h6>
                          </div>
                          <div className="hr" />
                          <div className="d-flex">
                            <p className="txt_xs">
                              Id: <span className="color_black">#5789</span>
                            </p>
                            <p className="txt_xs">
                              <i className="ri-history-line desc_icon" />
                              <span className="desc_text">Last Activity</span>:
                              <span className="color_black">a few seconds</span>
                            </p>
                            <p className="txt_xs">
                              <i className="ri-toggle-line desc_icon" />
                              <span className="desc_text">Status</span>:
                              <span className="color_green">Open</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-7 col-lg-6 space-y-20">
                    <div className="box is__big space-y-30">
                      <div className="chat sender">
                        <div className="d-flex space-x-10 justify-content-end">
                          <div className="space-y-10">
                            <div className="box message_box">
                              <p>How do I find my transaction hash?</p>
                              <div> </div>
                            </div>
                            <div className="d-flex space-x-10 justify-content-end">
                              <span className="avatar_name color_text txt_xs">
                                @monir_jamy...
                              </span>
                              <div
                                className="
														time
														color_text
														txt_xs
														d-flex
														align-items-center
														space-x-5
													">
                                <i className="ri-time-line" />
                                <span>2 days ago</span>
                              </div>
                            </div>
                          </div>
                          <div className="avatars justify-content-end flex-column">
                            <img
                              className="avatar avatar-chat"
                              src="../img/avatars/avatar_2.png"
                              alt="ImgPreview"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="chat receiver">
                        <div className="d-flex space-x-10 justify-content-start">
                          <div className="avatars justify-content-end flex-column">
                            <img
                              className="avatar avatar-chat"
                              src="../img/avatars/avatar_1.png"
                              alt="ImgPreview"
                            />
                          </div>
                          <div className="space-y-10">
                            <div className="box message_box">
                              <p>
                                Raroin staff often requires a "transaction hash"
                                from Etherscan or Polygonscan to troubleshoot
                                support issues.
                                <br />
                                Transaction hashes are unique IDs recording each
                                transaction on the blockchain, this includes NFT
                                purchases, sales or even cancelling orders. All
                                gas fees paid will generate a transaction hash.
                              </p>
                              <div> </div>
                            </div>
                            <div className="d-flex space-x-10">
                              <span className="avatar_name color_text txt_xs">
                                @ayoub_jamy...
                              </span>
                              <div
                                className="
														time
														color_text
														txt_xs
														d-flex
														align-items-center
														space-x-5
													">
                                <i className="ri-time-line" />
                                <span>2 days ago</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="chat sender">
                        <div className="d-flex space-x-10 justify-content-end">
                          <div className="space-y-10">
                            <div className="box message_box">
                              <p>
                                I've already built my project but it doesn't
                                comply with the metadata standard. Can I still
                                get listed?
                              </p>
                              <div> </div>
                            </div>
                            <div className="d-flex space-x-10 justify-content-end">
                              <span className="avatar_name color_text txt_xs">
                                @monir_jamy...
                              </span>
                              <div
                                className="
														time
														color_text
														txt_xs
														d-flex
														align-items-center
														space-x-5
													">
                                <i className="ri-time-line" />
                                <span>2 days ago</span>
                              </div>
                            </div>
                          </div>
                          <div className="avatars justify-content-end flex-column">
                            <img
                              className="avatar avatar-chat"
                              src="../img/avatars/avatar_2.png"
                              alt="ImgPreview"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="chat receiver">
                        <div className="d-flex space-x-10 justify-content-start">
                          <div className="avatars justify-content-end flex-column">
                            <img
                              className="avatar avatar-chat"
                              src="../img/avatars/avatar_1.png"
                              alt="ImgPreview"
                            />
                          </div>
                          <div className="space-y-10">
                            <div className="box message_box">
                              <p>
                                Yes! Depending on the structure of your smart
                                contract, we may be able to do a custom
                                integration. In particular, if your contract is
                                ERC721 or ERC1155 compliant, you can provide us
                                with a metadata URL for your items that should
                                be relatively easy to integrate. Just send us a
                                note at contact@creabik.com and we'll reach out
                                to you with next steps.
                              </p>
                              <div> </div>
                            </div>
                            <div className="d-flex space-x-10">
                              <span className="avatar_name color_text txt_xs">
                                @ayoub_jamy...
                              </span>
                              <div
                                className="
														time
														color_text
														txt_xs
														d-flex
														align-items-center
														space-x-5
													">
                                <i className="ri-time-line" />
                                <span>2 days ago</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="
									box
									send__box
									d-flex
									justify-content-between
									align-items-center
									space-x-20
								">
                      <div className="inupt__message w-full">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your message..."
                        />
                      </div>
                      <div className="answer">
                        <Link to="#" className="btn btn-primary">
                          Send
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
      <Footer />
    </div>
  );
};

export default Chat;
