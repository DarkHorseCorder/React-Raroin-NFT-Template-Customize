import React from 'react';
import {Link} from 'react-router-dom';

const Purshase = () => {
  return (
    <div>
      <div className="section my-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="box_buy_wrapper relative mb-20">
                <img className="sh_buy" src="img/icons/sh_4.png" alt="..." />
                <div className="box_buy_wrapper2">
                  <div className="box box_buy">
                    <div className="row">
                      <div className="col-lg-4">
                        <div
                          className="d-flex align-items-center
                                  text-center
                                  flex-column space-y-10">
                          <p>Get All of it today</p>
                          <h1>$29</h1>
                          <Link
                            to="https://themeforest.net/item/raroin-nft-marketplace/33730631"
                            className="btn btn-primary btn-lg
                                      btn_buy">
                            Purchase now
                          </Link>
                        </div>
                      </div>
                      <div className="col-lg-8">
                        <div className="row">
                          <div className="col-lg-6">
                            <ul className="list_buy space-y-10">
                              <li>Theme Source files</li>
                              <li>6 Months Free Support</li>
                              <li>NFT item Variations</li>
                              <li>Detailed Documentation</li>
                            </ul>
                          </div>
                          <div className="col-lg-6">
                            <ul className="list_buy space-y-10">
                              <li> +22 unique inner page</li>
                              <li>Diferent niche demos</li>
                              <li> Metamask connected</li>
                              <li>Analytics Dasboard </li>
                              <li>figma design for free </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="box box_buy border-0 hire_box text-center
              space-y-20">
                <h3> Need to Customize theme?</h3>
                <p>if you want someone to help you with your project</p>
                <Link to="mailto:creabik@gmail.com" className="btn btn-primary">
                  Hire US
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="box_buy_wrapper" />
    </div>
  );
};

export default Purshase;
