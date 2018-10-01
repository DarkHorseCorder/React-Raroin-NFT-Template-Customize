import React from 'react';
import Card3 from '../../components/cards/Card3';
import RecentlyListed from '../../components/cards/RecentlyListed';
import useDocumentTitle from '../../components/useDocumentTitle';
import HotSellers from '../../components/creators/HotSellers';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Hero3 from '../../components/hero/Hero3';
import Call2actionLight from '../../components/Sections/Call2actionLight';

const Home3 = () => {
  useDocumentTitle(' Home 3');
  return (
    <div>
      <Header />
      <Hero3 />
      <HotSellers />
      <RecentlyListed />
      <Call2actionLight />
      <Card3 />
      <Footer />
    </div>
  );
};

export default Home3;
