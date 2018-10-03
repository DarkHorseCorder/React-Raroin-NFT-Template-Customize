import React from 'react';
import {Link} from 'react-router-dom';
import Footer from '../../../components/footer/Footer';
import Header from '../../../components/header/Header';
import HeroActivity from '../../../components/hero/HeroActivity';
import useDocumentTitle from '../../../components/useDocumentTitle';

const Notif = [
  {
    img: '1',
    name: 'jimena_stark',
  },
  {
    img: '2',
    name: 'makinzi_beck',
  },
  {
    img: '3',
    name: 'jaxon_duffy',
  },
  {
    img: '4',
    name: 'darian_barry',
  },
];
const Activity = () => {
  useDocumentTitle(' Activity');
  return (
    <div>
      <Header />
      <HeroActivity />
      <div className="section__activity">
        <div className="container mt-100">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col-sm-10">

              <div className="space-y-20">
                {Notif.map((val, i) => (
                  <div className="box" key={i}>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <div className="creators_box">
                          <div className="avatars space-x-10">
                            <div className="media">
                              <img
                                src={`img/items/item_${val.img}.png`}
                                alt="Avatar"
                                className="avatar avatar-md"
                              />
                            </div>
                            <div>
                              <h5 className="color_black">
                                Creative Art collection
                              </h5>
                              <div className="d-flex space-x-10">
                                <span className="price color_text">
                                  listed by
                                </span>
                                <Link
                                  to="profile"
                                  className="price color_brand">
                                  @{val.name}
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <p className="date color_text d-none d-sm-block">
                          Last 2 days
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Activity;
