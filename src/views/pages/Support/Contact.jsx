import React from 'react';
import Footer from '../../../components/footer/Footer';
import Header from '../../../components/header/Header';
import useDocumentTitle from '../../../components/useDocumentTitle';
import {Link} from 'react-router-dom';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const notify = () => toast.success('We have recieved your message');

  useDocumentTitle(' Contact');
  return (
    <div>
      <Header />
      <div className="contact">
        <div className="row">
          <div className="col-md-4 contact__img">
            <div className="img__wrap">
              <img src={`img/bg/contact.png`} alt="contact" />
            </div>
          </div>
          <div className="col-md-8 contact__content">
            <div className="container">
              <div className="content__wrap space-y-20">
                <div className="space-y-20">
                  <h1 className="text-left">Hi, 🖐 we are Raroin.</h1>
                  <p className="contact__desc">
                    We’re here to help and answer any question you might have.
                    <br /> We look forward to hearing from you 🙂
                  </p>
                </div>
                <div className="box is__big">
                  <div className="space-y-10 mb-0">
                    <div className="row sm:space-y-20">
                      <div className="col-md-6 space-y-20">
                        <div className="space-y-10">
                          <span className="nameInput">Email address</span>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="contact@Creabik.com"
                          />
                        </div>
                        <div className="space-y-10">
                          <span className="nameInput">Select Country</span>
                          <select
                            className="form-select
                                            custom-select"
                            aria-label="Default
                                            select example">
                            <option>United States</option>
                            <option>Finland</option>
                            <option>Norway</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6 space-y-20">
                        <div className="space-y-10">
                          <span className="nameInput">Full Name</span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Creabik"
                          />
                        </div>
                        <div className="space-y-10">
                          <span className="nameInput">Select a Subject</span>
                          <select
                            className="form-select
                                            custom-select"
                            aria-label="Default
                                            select example">
                            <option>Service Request</option>
                            <option>NFT items</option>
                            <option>Wallet</option>
                            <option>Purchase</option>
                            <option>Support</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-12 mt-20">
                        <div className="space-y-10">
                          <span className="nameInput">Message</span>
                          <textarea
                            style={{minHeight: 110}}
                            className="mb-0"
                            defaultValue={
                              '                                        '
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <Link to="#" className="btn btn-primary" onClick={notify}>
                      Send your message
                    </Link>
                    <ToastContainer position="bottom-right" />
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

export default Contact;
