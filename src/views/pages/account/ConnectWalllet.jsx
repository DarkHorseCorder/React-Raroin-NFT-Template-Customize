import React, {useRef} from 'react';
import {Link} from 'react-router-dom';
import Footer from '../../../components/footer/Footer';
import Header from '../../../components/header/Header';
import useDocumentTitle from '../../../components/useDocumentTitle';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const wallets = [
  {
    title: 'coibase',
    p: 'wallet that works on both mobile and through a browser extension',
    popup: 'connected',
  },
  {
    title: 'metamask',
    p: "A browser extension with great flexibility. The web's popular wallet",
    popup: 'error',
  },
  {
    title: 'torus',
    p: 'Log in with Google,  Facebook,Twitter or other OAuth providers',
    popup: 'connected',
  },
  {
    title: 'fortmatic',
    p: 'wallet that allows you to  sign up with your phone number ',
    popup: 'error',
  },
  {
    title: 'bitski',
    p: 'wallet that allows you to  sign in with an email and password',
    popup: 'connected',
  },
  {
    title: 'walletconnect',
    p: 'Log in with Google,  Facebook, or other OAuth provider',
    popup: 'error',
  },
];

const ConnectWalllet = () => {
  const ref = useRef();
  const closeTooltip = () => ref.current.close();
  useDocumentTitle('Wallet ');
  return (
    <div className="effect">
      <Header />

      <div className="container">
        <div>
          <Link to="/" className="btn btn-white btn-sm mt-20">
            Back to home
          </Link>
          <div className="hero__wallets pt-100 pb-50">
            <div className="space-y-20 d-flex flex-column align-items-center">
              <div className="logo">
                <img src={`img/icons/logo.svg`} alt="ImgPreview" />
              </div>
              <h2 className="text-center">Connect your wallet</h2>
              <p className="text-center">
                Connect with one of available wallet providers or create a new
                wallet.
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="wallets">
              <div className="row mb-20_reset">
                {wallets.map((val, i) => (
                  <div className="col-lg-4" key={i}>
                    <Popup
                      className="custom"
                      ref={ref}
                      trigger={
                        <button className="box in__wallet space-y-10">
                          <div className="logo">
                            <img
                              src={`img/icons/${val.title}.svg`}
                              alt="logo_community"
                            />
                          </div>
                          <h5 className="text-center">{val.title}</h5>
                          <p className="text-center">{val.p}</p>
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
                              <h3 className="text-center">Wallet Connected!</h3>
                              <p className="text-center">
                                You have sucessfully connected your wallet, now
                                you can start bidding or upload your own art!
                              </p>
                              <div className="d-flex justify-content-center space-x-20">
                                <Link to="marketplace" className="btn btn-dark">
                                  Discover Assets
                                </Link>
                                <Popup
                                  className="custom"
                                  ref={ref}
                                  trigger={
                                    <button className="btn btn-grad">
                                      Create item
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
                                          <h3 className="color_red">Error!</h3>
                                          <p>
                                            User rejected the request.. <br />
                                            If the problem persist please
                                            Contact support
                                          </p>
                                          <button
                                            to="#"
                                            className="btn btn-primary">
                                            Try again
                                          </button>
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
                    </Popup>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ConnectWalllet;
