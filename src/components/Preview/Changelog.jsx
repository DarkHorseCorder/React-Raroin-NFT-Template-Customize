import React from 'react';

const Changelog = () => {
  return (
    <div className="relative">
      <img className="sh_log" src="img/icons/sh_1.png" alt="sh" />
      <div className="container">
        <div className="row justify-content-center changelog">
          <div className="col-lg-7">
            <div className="overflow_log">
              <div className="more_log btn btn-white btn-sm">
                <span className="change_text">
                  <i className="ri-more-fill" />
                </span>
              </div>
              <div className="box is__big">
                <h2 className="text-center mb-40">Raroin Changelog</h2>
                <div className="space-y-20">
                  <p className="text-center mb-20 color_brand">
                    V2.0.0
                    <span className="color_red">(BIG UPDATE) </span>
                  </p>
                  <div className="box change_log">
                    <h6> Raroin Welcome page is now available</h6>
                    <span className="bage new">NEW</span>
                  </div>
                  <div className="box change_log">
                    <h6>
                      add new <span className="color_green">21 page</span>
                    </h6>
                    <span className="bage new">NEW</span>
                  </div>
                  <p className="text-center mb-20 color_brand"> V1.8.0</p>
                  <div className="box change_log">
                    <h6> add forum page</h6>
                    <span className="bage new">NEW</span>
                  </div>
                  <div className="box change_log">
                    <h6> fix responsive in style 4 item</h6>
                    <span className="bage fix">FIX</span>
                  </div>
                  <div className="box change_log">
                    <h6> add ranking NFT table</h6>
                    <span className="bage new">NEW</span>
                  </div>
                  <p className="text-center mb-20 color_brand"> V1.5.0</p>
                  <div className="box change_log">
                    <h6>
                      add NFT bid popup with report item and profile popup
                    </h6>
                    <span className="bage new">NEW</span>
                  </div>
                  <div className="box change_log">
                    <h6> Add metamask Wallet to the template</h6>
                    <span className="bage new">NEW</span>
                  </div>
                  <div className="box change_log">
                    <h6>fix some javascript issues</h6>
                    <span className="bage fix">FIX</span>
                  </div>
                  <div className="box change_log">
                    <h6> add more social media to edit profile page</h6>
                    <span className="bage upd">UPD</span>
                  </div>
                  <p className="text-center mb-20 color_brand"> V1.1.2</p>
                  <div className="box change_log">
                    <h6>add edit profile page</h6>
                    <span className="bage new">NEW</span>
                  </div>
                  <div className="box change_log">
                    <h6>change dropdown menu</h6>
                    <span className="bage upd">UPD</span>
                  </div>
                  <div className="box change_log">
                    <h6> add new item style</h6>
                    <span className="bage new">NEW</span>
                  </div>
                  <div className="box change_log">
                    <h6>Fix Typography</h6>
                    <span className="bage fix">FIX</span>
                  </div>
                  <div className="box change_log">
                    <h6>Add Animation to popular creators in home 2</h6>
                    <span className="bage new">NEW</span>
                  </div>
                  <p className="text-center mb-20 color_brand"> V1.0.0</p>
                  <div className="box change_log">
                    <h6> Initial release.</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Changelog;
