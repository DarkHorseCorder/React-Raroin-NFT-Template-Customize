import React from 'react';
import Cards2 from '../../components/cards/Cards2';
import Gallery from '../../components/cards/Gallery';
import PopularCreators from '../../components/creators/PopularCreators';
import useDocumentTitle from '../../components/useDocumentTitle';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Hero2 from '../../components/hero/Hero2';
import Api from '../../components/Sections/Api';

const Home2 = () => {
  useDocumentTitle(' Home 2');
  return (
    <div>
      <Header />
      <Hero2 />
      <PopularCreators />
      <Cards2 />
      <Gallery />
      <Api />
      <Footer />
    </div>
  );
};

export default Home2;
