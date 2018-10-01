import React from 'react';
import {Link} from 'react-router-dom';
import Footer from '../../../components/footer/Footer';
import Header from '../../../components/header/Header';
import useDocumentTitle from '../../../components/useDocumentTitle';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


const SubmitRequest = () => {
  useDocumentTitle(' Submit Request');
  const sending = () => toast.success("your request has been sent");

  return (
    <div>
      <Header />
      <div className="requests">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10 requests__content">
              <div className="requests__wrap space-y-20">
                <div>
                  <h1 className="text-left">Submit a request</h1>
                </div>
                <div className="box is__big">
                  <div className="space-y-20 mb-0">
                    <div className="space-y-10">
                      <span className="nameInput">Your email address</span>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="contact@Creabik.com"
                      />
                    </div>
                    <div className="space-y-10">
                      <span className="nameInput">Subject</span>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="space-y-10">
                      <span className="nameInput">Description</span>
                      <textarea style={{minHeight: 110}} className="mb-0" />
                      <p>
                        Please enter the details of your request. A member of
                        our support staff will respond as soon as possible.
                      </p>
                    </div>
                    <div className="space-y-10">
                      <span className="nameInput">Category</span>
                      <select
                        className="form-select custom-select"
                        aria-label="Default
                              select example">
                        <option>Art</option>
                        <option>Music</option>
                        <option>Video Game</option>
                      </select>
                    </div>
                    <div className="requests_footer">
                      <div className="Attach_desc space-x-20">
                        <div className="Attach_file">
                          <Link
                            to="#"
                            className="btn btn-white"
                            style={{minWidth: 'max-content'}}>
                            Attach file
                          </Link>
                          <input type="file" />
                        </div>
                        <p className="txt_sm">
                          Maximum file size:
                          <span className="color_black">800 MB</span>
                        </p>
                      </div>
                      <div>
                        <Link to="#" className="btn btn-grad" onClick={sending} >
                          Submit message
                        </Link>
                        <ToastContainer
                  position="bottom-right"

                   />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 contact__img">
              <div className="img__wrap">
                <img src="img/bg/requests.png" alt="ImgPreview" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SubmitRequest;
