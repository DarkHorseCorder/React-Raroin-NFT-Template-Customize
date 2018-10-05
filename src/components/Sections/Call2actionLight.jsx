import React from 'react';
import {Link} from 'react-router-dom';

function call2actionLight() {
  return (
    <div>
      <div className="call2action is__light">
        <div className="container">
          <div
            className="row justify-content-between align-items-center
                        sm:space-y-20">
            <div className="col-md-6">
              <div className="space-y-20">
                <h1>Start your own collection today</h1>
                <p className="color_in_dark color_text section__text">
                  raroin is a shared liquidity NFT market smart contract which
                  is used by multiple websites to provide the users the best
                  possible experience.
                </p>
                <Link
                  to="connect-wallet"
                  className="btn
                                    btn-primary">
                  Start Collecting
                </Link>
              </div>
            </div>
            <div className="col-md-auto">
              <img src={`img/logos/Logo_illustrstion_white.png`} alt="prv" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default call2actionLight;
