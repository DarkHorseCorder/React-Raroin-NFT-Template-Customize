import React from 'react';
import HeroAuctions from '../../../components/hero/HeroAuctions';
import Header from '../../../components/header/Header';
import Footer from '../../../components/footer/Footer';
import CardAuctions from '../../../components/cards/CardAuctions';
import useDocumentTitle from '../../../components/useDocumentTitle';

const LiveAuctions = () => {
  useDocumentTitle(' Live Auctions ');
  return (
    <div>
      <Header />
      <HeroAuctions />
      <div className="mt-100">
        <div className="container">
          <div className="section__head">
            <div className="">
              <h2 className="section__title text-left">Hot bids 🔥</h2>
            </div>
          </div>
          <CardAuctions />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LiveAuctions;
