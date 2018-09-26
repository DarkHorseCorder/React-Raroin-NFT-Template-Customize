import React from 'react';
import {Link} from 'react-router-dom';
const CollectionItems = [
  {
    img1: '1',
    img2: '2',
    img3: '3',
    img4: '4',
    title: 'Creative Art collection',
    likes: '2.1',
    stock: '5',
    avatar_img: '1',
    avatar_name: 'william_jamy',
  },
  {
    img1: '5',
    img2: '6',
    img3: '7',
    img4: '8',
    title: 'Colorful Abstract collection',
    likes: '3.5',
    stock: '7',
    avatar_img: '2',
    avatar_name: 'alexis_fenn',
  },
  {
    img1: '2',
    img2: '6',
    img3: '3',
    img4: '7',
    title: 'Photography Art collection',
    likes: '7.2',
    stock: '2',
    avatar_img: '3',
    avatar_name: 'Joshua_Bren',
  },
  {
    img1: '1',
    img2: '2',
    img3: '3',
    img4: '4',
    title: 'Fantasy Art collection',
    likes: '2.1',
    stock: '5',
    avatar_img: '4',
    avatar_name: 'william_jamy',
  },
  {
    img1: '5',
    img2: '6',
    img3: '7',
    img4: '8',
    title: 'Pop Art collection',
    likes: '3.5',
    stock: '7',
    avatar_img: '5',
    avatar_name: 'alexis_fenn',
  },
  {
    img1: '2',
    img2: '6',
    img3: '3',
    img4: '7',
    title: 'Contemporary Art collection',
    likes: '7.2',
    stock: '2',
    avatar_img: '6',
    avatar_name: 'Joshua_Bren',
  },
];
function Collection3() {
  return (
    <div>
      <div className="row justify-content-center mb-30_reset">
        {CollectionItems.map((val, i) => (
          <div className="col-lg-4 col-md-6 col-sm-8" key={i}>
            <div className="collections space-y-10 mb-30">
              <div className="collections_item">
                <Link to="item-details" className="images-box space-y-10">
                  <div className="top_imgs">
                    <img src={`img/items/item_${val.img1}.png`} alt="prv" />
                    <img src={`img/items/item_${val.img2}.png`} alt="prv" />
                    <img src={`img/items/item_${val.img3}.png`} alt="prv" />
                  </div>
                  <img src={`img/items/item_${val.img4}.png`} alt="prv" />
                </Link>
              </div>
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
                  <p className="avatars_name txt_sm"> @{val.avatar_name}... </p>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Collection3;
