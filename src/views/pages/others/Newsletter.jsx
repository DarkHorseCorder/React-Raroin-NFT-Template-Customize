import React from 'react';
import {Link} from 'react-router-dom';
import Footer from '../../../components/footer/Footer';
import Header from '../../../components/header/Header';
import useDocumentTitle from '../../../components/useDocumentTitle';
import {ToastContainer, toast} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Newsletter = () => {
  useDocumentTitle(' Newsletter');
  const sending = () => toast('you will receive daily updates');

  return (
    <div>
      <Header />
      <div className="container">
        <div className="hero_newsletter box bg_white">
          <div className="row gx-5 align-items-center">
            <div className="col-lg-6 left__side">
              <div className="content space-y-20">
                <h1 className="hero__title">
                  Sign up for The NFT, Raroin newsletter!
                </h1>
                <p className="hero__desc">
                  Sign up to receive our monthly newsletter, featuring updates
                  from the team, new decentralized applications and NFT
                  projects, and trends we’re seeing in the space.
                </p>
                <input
                  placeholder="Enter your email"
                  type="text"
                  className="form-control"
                />
                <div className="mr-auto">
                  <Link to="#" className="btn btn-grad" onClick={sending}>
                    Subscribe
                  </Link>
                  <ToastContainer position="bottom-right" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 right__side">
              <img
                src={`img/bg/newsletter.png`}
                alt="newsletter"
                className="img-fluid hero__img"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Newsletter;
