import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../../../components/header/Header';
import useDocumentTitle from '../../../components/useDocumentTitle';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  useDocumentTitle('Login ');
  const notify = () => toast.success('Your account is  verified ');

  return (
    <div>
      <Header />
      <div className="edit_profile register login">
        <div className="container">
          <div className="row">
            <div className="col-lg-7" />
            <div className="col-lg-5">
              <div className="right_part space-y-20">
                <h1 className="color_white"> Welcome to Raroin </h1>
                <p className="color_white" style={{color: 'white !important'}}>
                  Don't have an account yet?
                  <Link to="register"> Register </Link>
                </p>
                <div className="box edit_box w-full space-y-20">
                  <div className="space-y-10">
                    <span className="nameInput">Email </span>
                    <div className="confirm">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter email"
                      />
                    </div>
                  </div>
                  <div className="space-y-10">
                    <span className="nameInput">Password</span>
                    <div className="confirm">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter your password"
                      />
                    </div>
                  </div>
                  <Link
                    to="#"
                    className="btn btn-white btn-sm color_green"
                    onClick={notify}>
                    Click to verify
                  </Link>
                  <Link
                    to="edit-profile"
                    className="btn btn-grad w-full btn-lg">
                    Login to your account
                  </Link>
                  <ToastContainer position="bottom-right" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
