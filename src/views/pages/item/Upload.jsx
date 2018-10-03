import React from 'react';
import {Link} from 'react-router-dom';
import useDocumentTitle from '../../../components/useDocumentTitle';
import Header from '../../../components/header/Header';

const Upload = () => {
  useDocumentTitle(' Upload');
  return (
    <div>
      <Header />
      <div className="hero__upload">
        <div className="container">
          <div className="space-y-20">
            <Link
              to="upload-type"
              className="btn btn-white btn-sm
                    switch">
              Switch to Multiple
            </Link>
            <h1 className="title">Create single collectible</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="box in__upload mb-120">
          <div className="row">
            <div className="col-lg-6">
              <div className="left__part space-y-40 md:mb-20 upload_file">
                <div className="space-y-20">
                  <img
                    className="icon"
                    src={`img/icons/upload.svg`}
                    alt="upload"
                  />
                  <h5>Drag and drop your file</h5>
                  <p className="color_text">
                    PNG, GIF, WEBP, MP4 or MP3. Max 100mb.
                  </p>
                </div>
                <div className="space-y-20">
                  <p className="color_text">or choose a file</p>
                  <Link to="#" className="btn btn-white">
                    Browse files
                  </Link>
                  <input type="file" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group space-y-10">
                <div className="space-y-20">
                  <div className="space-y-10">
                    <span className="nameInput">Title</span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e. g. `raroin design art`"
                    />
                  </div>
                  <div className="space-y-10">
                    <span className="nameInput">
                      Description
                      <span className="color_text">(optional) </span>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e. g. `raroin design art`"
                    />
                  </div>
                  <div className="space-y-10">
                    <span className="variationInput">Price</span>
                    <select
                      className="form-select custom-select"
                      aria-label="Default select example">
                      <option> 00.00 ETH</option>
                      <option>01.00 ETH</option>
                      <option>02.00 ETH</option>
                      <option>10.00 ETH</option>
                      <option>20.00 ETH</option>
                    </select>
                  </div>
                  <div className="space-y-10">
                    <span className="variationInput">Choose collection</span>
                    <div className="d-flex flex-column flex-md-row">
                      <div className="choose_collection bg_black  ">
                        <img
                          src={`img/icons/raroin_icon.svg`}
                          alt="raroin_icon"
                        />

                        <span className="color_white ml-10">
                          Raroin Collection
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="color_black">
                <span className="color_text text-bold"> Service fee : </span>
                2.5%
              </p>
              <p className="color_black">
                <span className="color_text text-bold">You will receive :</span>
                22.425 ETH $41,637.78
              </p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed_row bottom-0 left-0 right-0">
        <div className="container">
          <div className="row content justify-content-between mb-20_reset">
            <div className="col-md-auto col-12 mb-20">
              <div className="space-x-10">
                <Link
                  to="/upload-type"
                  className="btn btn-white
						others_btn">
                  Cancel
                </Link>
                <Link to="#" className="btn btn-dark others_btn">
                  Preview
                </Link>
              </div>
            </div>
            <div className="col-md-auto col-12 mb-20">
              <Link
                to="item-details"
                className="btn btn-grad
					btn_create">
                Create item
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
