import React from 'react';
import Collection3 from '../../../components/collection/Collection3';
import Footer from '../../../components/footer/Footer';
import Header from '../../../components/header/Header';
import HeroCollections from '../../../components/hero/HeroCollections';
import useDocumentTitle from '../../../components/useDocumentTitle';

const Collections = () => {
  useDocumentTitle(' Collections');
  return (
    <div>
      <Header />
      <HeroCollections />
      <div className="section mt-100">
        <div className="container">
          <Collection3 />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Collections;
