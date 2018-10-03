import React from 'react';

import Footer from '../../../components/footer/Footer';
import Header from '../../../components/header/Header';
import HeroMarketplace from '../../../components/hero/HeroMarketplace';

import useDocumentTitle from '../../../components/useDocumentTitle';
import MenuCategoriesMarket from '../elements/MenuCategoriesMarket';

const Marketplace = () => {
  useDocumentTitle(' Marketplace');
  return (
    <div>
      <Header />
      <HeroMarketplace />
      <div className="d-flex justify-content-center">
        <MenuCategoriesMarket />
      </div>
      <Footer />
    </div>
  );
};

export default Marketplace;
