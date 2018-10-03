import useDocumentTitle from '../../../components/useDocumentTitle';

import React from 'react';
import Header from '../../../components/header/Header';
import Footer from '../../../components/footer/Footer';
import {Link} from 'react-router-dom';
import RecentlyListed from '../../../components/cards/RecentlyListed';

const NoResults = () => {
  useDocumentTitle('No Resaults found');
  return (
    <div>
      <Header />
      <div className="hero_no_results">
        <div className="container">
          <div className="space-y-20">
            <div className="box search__box">
              <i className="ri-search-line" />
            </div>
            <h1 className="text-center hero__title">
              Sorry, we couldn’t find any results for this search.
            </h1>
            <p className="text-center hero__desc">
              Maybe give one of these a try?
            </p>
            <div className="box input__box d-flex align-items-center space-x-20">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your search..."
              />
              <div>
                <Link to="/marketplace" className="btn btn-grad">
                  <i className="ri-search-line" />
                  Search
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RecentlyListed />
      <Footer />
    </div>
  );
};

export default NoResults;
