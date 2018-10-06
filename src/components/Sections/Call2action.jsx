import React from 'react';
import {Link} from 'react-router-dom';
function Call2action() {
  return (
    <div>
      <div className="call2action">
        <div className="container">
          <div
            className="row justify-content-between align-items-center
                        sm:space-y-20">
            <div className="col-md-6">
              <div className="space-y-20">
                <h1 className="text-white">Start your own collection today</h1>
                <p className="color_light section__text">
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
              <img
                className="img-fluid img__logo"
                alt="rr"
                src={`img/logos/Logo_illustrstion.png`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Call2action;
