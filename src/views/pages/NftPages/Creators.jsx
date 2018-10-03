import React from 'react';
import {Link} from 'react-router-dom';
import DiscoverCreators from '../../../components/creators/DiscoverCreators';
import PopularCreators from '../../../components/creators/PopularCreators';
import Footer from '../../../components/footer/Footer';
import Header from '../../../components/header/Header';
import HeroCreators from '../../../components/hero/HeroCreators';
import useDocumentTitle from '../../../components/useDocumentTitle';

const CreatorsItems = [
  {
    img: '1',
    name: 'jimena_stark',
    sales: '4',
    price: '14.28',
    number: '1',
  },
  {
    img: '2',
    name: 'makinzi_beck',
    sales: '16',
    price: '8.04',
    number: '2',
  },
  {
    img: '3',
    name: 'jaxon_duffy',
    sales: '4',
    price: '12.53',
    number: '3',
  },
  {
    img: '4',
    name: 'darian_barry',
    sales: '62',
    price: '7.26',
    number: '4',
  },
];
const Creators = () => {
  useDocumentTitle(' Creators');
  return (
    <div>
      <Header />
      <HeroCreators />
      <div className="container">
        <div className="row creators_items">
          {CreatorsItems.map((val, i) => (
            <div className="col-lg-3 col-md-6" key={i}>
              <div className="creator_item creator_card space-y-10 is_big">
                <div className="avatars flex-column space-y-10">
                  <div className="media has_border">
                    <Link to="profile">
                      <img
                        src={`img/avatars/avatar_${val.img}.png`}
                        alt="Avatar"
                        className="avatar avatar-md"
                      />
                    </Link>
                    <div className="has_number">{val.number}</div>
                  </div>
                  <div className="text-center">
                    <Link to="profile">
                      <p className="avatars_name large color_black">
                        @{val.name}
                      </p>
                    </Link>
                    <span className="sales color_text">
                      {val.sales} sales on
                      {val.price} ETH
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <PopularCreators />
      <DiscoverCreators />
      <Footer />
    </div>
  );
};

export default Creators;
