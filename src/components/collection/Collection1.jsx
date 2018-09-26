import React from 'react';
import {Link} from 'react-router-dom';
const CollectionItems = [
  {
    img1: '9',
    img2: '10',
    img3: '11',
    img4: '12',
    title: 'Creative Art collection',
    likes: '2.1',
    stock: '5',
    avatar_img: '2',
    avatar_name: 'william_jamy',
  },
  {
    img1: '13',
    img2: '14',
    img3: '15',
    img4: '16',
    title: 'Colorful Abstract Painting',
    likes: '3.5',
    stock: '7',
    avatar_img: '3',
    avatar_name: 'alexis_fenn',
  },
  {
    img1: '17',
    img2: '18',
    img3: '19',
    img4: '20',
    title: 'Modern Art collection',
    likes: '7.2',
    stock: '2',
    avatar_img: '1',
    avatar_name: 'Joshua_Bren',
  },
];
const Collection1 = () => {
  return (
    <div>
      <div className="section mt-100">
        <div className="container">
          <div className="section__head">
            <div className="d-flex justify-content-between align-items-center">
              <h2 className="section__title"> Collections</h2>
              <Link to="collections" className="btn btn-dark btn-sm">
                View All
              </Link>
            </div>
          </div>
          <div className="row justify-content-center mb-30_reset">
            {CollectionItems.map((val, i) => (
              <div className="col-lg-4 col-md-6 col-sm-8" key={i}>
                <div className="collections space-y-10 mb-30">
                  <Link to="item-details">
                    <div className="collections_item">
                      <div className="images-box space-y-10">
                        <div className="top_imgs">
                          <img
                            src={`img/items/item_${val.img1}.png`}
                            alt="prv"
                          />
                          <img
                            src={`img/items/item_${val.img2}.png`}
                            alt="prv"
                          />
                          <img
                            src={`img/items/item_${val.img3}.png`}
                            alt="prv"
                          />
                        </div>
                        <img src={`img/items/item_${val.img4}.png`} alt="prv" />
                      </div>
                    </div>
                  </Link>
                  <div className="collections_footer justify-content-between">
                    <h5 className="collection_title">
                      <Link to="profile">{val.title}</Link>
                    </h5>
                    <Link to="#" className="likes space-x-3">
                      <i className="ri-heart-3-fill" />
                      <span className="txt_md">{val.likes}k</span>
                    </Link>
                  </div>
                  <div className="creators space-x-10">
                    <span className="color_text txt_md">
                      {val.stock} items · Created by
                    </span>
                    <div className="avatars space-x-5">
                      <Link to="profile">
                        <img
                          src={`img/avatars/avatar_${val.avatar_img}.png`}
                          alt="Avatar"
                          className="avatar avatar-sm"
                        />
                      </Link>
                    </div>
                    <Link to="profile">
                      <p className="avatars_name txt_sm">
                        @{val.avatar_name}..
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection1;
