import React from 'react';

function Logos() {
  return (
    <div>
      <div className="container">
        <div className="logos__wrap">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-auto col-md-12">
              <h3
                className="section__title md:mb-20 text-left d-flex
                                justify-content-center">
                Loved by the community
              </h3>
            </div>
            <div className="col-lg-auto col-md-12">
              <div
                className="d-flex flex-column flex-md-row
                                justify-content-center
                                space-x-20 sm:space-x-0 sm:space-y-20 align-items-center">
                <img src={`img/logos/1.svg`} alt="prv" />
                <img src={`img/logos/2.svg`} alt="prv" />
                <img src={`img/logos/3.svg`} alt="prv" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logos;
