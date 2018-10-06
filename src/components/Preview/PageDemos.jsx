import React from 'react';
import {Link} from 'react-router-dom';
const Pages1 = [
  {
    title: 'Edit Profile',
    img: 'profile_edit',
    link: '/edit-profile',
  },
  {
    title: 'Item details',
    img: 'item',
    link: '/item-details',
  },

  {
    title: 'Ranking',
    img: 'ranking',
    link: '/ranking',
  },
  {
    title: 'Live Auction',
    img: 'live',
    link: '/live-auctions',
  },
  {
    title: ' Activity',
    img: 'activity',
    link: '/activity',
  },
  {
    title: 'Profile page',
    img: 'profile',
    link: '/profile',
  },
];

const Pages2 = [
  {
    title: 'Connect wallet',
    img: 'wallet',
    link: '/connect-wallet',
  },
  {
    title: 'Collections',
    img: 'collections',
    link: '/collections',
  },
  {
    title: 'Creators',
    img: 'creators',
    link: '/creators',
  },
  {
    title: 'Upload types',
    img: 'upload_t',
    link: '/upload-type',
  },
];

const Pages3 = [
  {
    title: ' Forum Details',
    img: 'forum_details',
    link: '/post-details',
  },
  {
    title: 'Newsletter',
    img: 'newsletter',
    link: '/newsletter',
  },
  {
    title: 'Contact',
    img: 'contact',
    link: '/contact',
  },
  {
    title: 'FAQ',
    img: 'faq',
    link: '/faq',
  },
  {
    title: ' Submit request',
    img: 'request',
    link: '/submit-request',
  },
  {
    title: ' Chat',
    img: 'chat',
    link: '/chat',
  },
];
const Pages4 = [
  {
    title: 'Blog',
    img: 'blog',
    link: '/blog',
  },
  {
    title: 'Article',
    img: 'article',
    link: '/article',
  },
  {
    title: 'Privacy policy',
    img: 'privacy',
    link: '/privacy-policy',
  },
  {
    title: 'Register',
    img: 'register',
    link: '/register',
  },
  {
    title: 'Login',
    img: 'login',
    link: '/login',
  },
  {
    title: '404',
    img: '404',
    link: '/404',
  },
];
const PagesDemos = () => {
  return (
    <div className="section mb-100 mt-40 demos_wrap">
      <div className="container">
        <div className="section__head">
          <h2 className="text-center title_demos mb-20">
            Everything you need in one place
          </h2>
        </div>
        <div className="demos mt-100">
          <div className="row">
            <div className="col-lg-3">
              <Link
                to="marketplace"
                target="_blank"
                className="demo_item
                  is_lg
                  space-y-10">
                <div className="img_wrap">
                  <img src="img/screens/marketplace.png" alt="preview" />
                </div>
                <div className="d-flex justify-content-between">
                  <h5>Marketplace </h5>
                </div>
              </Link>
            </div>
            <div className="col-lg-9">
              <div className="row">
                {Pages1.map((val, i) => (
                  <div className="col-lg-4 col-md-4 col-sm-6" key={i}>
                    <Link
                      to={val.link}
                      target="_blank"
                      className="demo_item
                          is_sm
                          space-y-10">
                      <div className="img_wrap">
                        <img src={`img/screens/${val.img}.png`} alt="demos" />
                      </div>
                      <div className="d-flex justify-content-between">
                        <h5>{val.title} </h5>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            {Pages2.map((val, i) => (
              <div className="col-lg-3 col-md-3 col-sm-6" key={i}>
                <Link
                  to={val.link}
                  target="_blank"
                  className="demo_item
                          is_sm
                          space-y-10">
                  <div className="img_wrap">
                    <img src={`img/screens/${val.img}.png`} alt="demos" />
                  </div>
                  <div className="d-flex justify-content-between">
                    <h5>{val.title} </h5>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="hr_in_index" />
        <div className="demos mt-100">
          <div className="row">
            <div className="col-lg-9">
              <div className="row">
                {Pages3.map((val, i) => (
                  <div className="col-lg-4 col-md-4 col-sm-6" key={i}>
                    <Link
                      to={val.link}
                      target="_blank"
                      className="demo_item
                          is_sm
                          space-y-10">
                      <div className="img_wrap">
                        <img src={`img/screens/${val.img}.png`} alt="demos" />
                      </div>
                      <div className="d-flex justify-content-between">
                        <h5>{val.title} </h5>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-3">
              <Link
                to="forum"
                target="_blank"
                className="demo_item
                  is_lg
                  space-y-10">
                <div className="img_wrap">
                  <img src="img/screens/forum.png" alt="preview" />
                </div>
                <div className="d-flex justify-content-between">
                  <h5>Forum </h5>
                </div>
              </Link>
            </div>

            {Pages4.map((val, i) => (
              <div className="col-lg-3 col-md-3 col-sm-6" key={i}>
                <Link
                  to={val.link}
                  target="_blank"
                  className="demo_item
                          is_sm
                          space-y-10">
                  <div className="img_wrap">
                    <img src={`img/screens/${val.img}.png`} alt="demos" />
                  </div>
                  <div className="d-flex justify-content-between">
                    <h5>{val.title} </h5>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PagesDemos;
