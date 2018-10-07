import React from 'react';
import {Link} from 'react-router-dom';
const CreatorsItems = [
  {
    img: '5',
    Sold: '191',
    Collections: '345',
    Views: '17,005',
    cover: '1',
  },
  {
    img: '6',
    Sold: '142',
    Collections: '255',
    Views: '14,045',
    cover: '2',
  },
  {
    img: '7',
    Sold: '150',
    Collections: '345',
    Views: '20,033',
    cover: '3',
  },
  {
    img: '8',
    Sold: '87',
    Collections: '142',
    Views: '23,575',
    cover: '4',
  },
  {
    img: '9',
    Sold: '198',
    Collections: '321',
    Views: '12,024',
    cover: '5',
  },
  {
    img: '10',
    Sold: '234',
    Collections: '345',
    Views: '12,053',
    cover: '6',
  },
];
function DiscoverCreators() {
  return (
    <div>
      <div className="section__creators mt-100">
        <div className="container">
          <div className="space-y-30">
            <div className="section_head">
              <div
                className="row justify-content-between
                                align-items-center">
                <div className="col-lg-auto">
                  <h2 className="section__title">Discover all Creators</h2>
                </div>


              </div>
            </div>
            <div className="section__body space-y-20">
              <div className="row mb-20_reset">
                {CreatorsItems.map((val, i) => (
                  <div className="col-lg-4 col-md-6" key={i}>
                    <div className="creator_item creator_card space-y-20 mb-20">
                      <div className="avatars flex-column space-y-10">
                        <div className="cover">
                          <img
                            src={`img/items/cover_${val.cover}.png`}
                            alt="Avatar"
                            className="img-fluid"
                          />
                        </div>
                        <div className="media">
                          <Link to="profile">
                            <img
                              src={`img/avatars/avatar_${val.img}.png`}
                              alt="Avatar"
                              className="avatar avatar-md"
                            />
                          </Link>
                        </div>
                        <div className="details text-center">
                          <div>
                            <p className="color_black txt_lg">
                              {val.Sold}
                              <span className="txt_sm">ETH</span>
                            </p>
                            <p className="color_black txt_sm">Sold</p>
                          </div>
                          <div>
                            <p className="color_black txt_lg">
                              {val.Collections}
                            </p>
                            <p className="color_black txt_sm">Collections</p>
                          </div>
                          <div>
                            <p className="color_black txt_lg">{val.Views}</p>
                            <p className="color_black txt_sm">Views</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiscoverCreators;
