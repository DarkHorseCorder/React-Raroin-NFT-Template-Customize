import React from 'react';
import {Link} from 'react-router-dom';

function Api() {
  return (
    <div>
      <div className="container">
        <div className="logos__wrap">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6">
              <h3 className="section__title md:mb-20">
                Pull market data from our digital asset API
              </h3>
            </div>
            <div className="col-lg-auto">
              <Link className="btn btn-grad" to="connect-wallet">
                Connect wallet
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Api;
