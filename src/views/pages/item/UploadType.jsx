import React from 'react';
import {Link} from 'react-router-dom';
import Footer from '../../../components/footer/Footer';
import Header from '../../../components/header/Header';
import useDocumentTitle from '../../../components/useDocumentTitle';

const UploadType = () => {
  useDocumentTitle(' Upload Type');
  return (
    <div>
      <Header />
      <div className="hero__upload">
        <div className="container">
          <div className="space-y-20">
            <h1 className="text-center">Create single collectible</h1>
            <p className="hero__text text-center">
              Choose “Single” if you want your collectible or “Multiple” if you
              want to sell one collectible multiple times
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center ">
          <div className="col-lg-8 col-md-10  col-sm-8">
            <div className="row sm:space-y-20">
              <div className="col-md-6">
                <div className="box text-center">
                  <img
                    className="icon mb-20"
                    src="img/icons/single.svg"
                    alt="ImgPreview"
                  />
                  <div className="space-y-10">
                    <h5>Sell One Time</h5>
                    <p className="color_text">
                      your collectible want to be one of a kind
                    </p>
                    <div className="hr" />
                    <Link className="btn btn-grad btn" to="upload">
                      create single
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="box text-center">
                  <img
                    className="icon mb-20"
                    src="img/icons/multiple.svg"
                    alt="ImgPreview"
                  />
                  <div className="space-y-10">
                    <h5> Sell Multiple Time</h5>
                    <p className="color_text">
                      your collectible want to be one of a kind
                    </p>
                    <div className="hr" />
                    <Link className="btn btn-grad btn" to="upload">
                      create multiple
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UploadType;
