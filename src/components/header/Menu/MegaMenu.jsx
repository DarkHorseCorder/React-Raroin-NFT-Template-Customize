import React from 'react';
import {Link} from 'react-router-dom';

const LeftMenu = [
  {
    icon: 'line-chart',
    title: 'Activity',
    link: '/activity',
  },
  {
    icon: 'edit',
    title: 'Edit Profile',
    link: '/edit-profile',
  },
  {
    icon: 'gallery',
    title: 'Item details',
    link: '/item-details',
  },
  {
    icon: 'upload',
    title: 'Upload Types',
    link: '/upload-type',
  },
  {
    icon: 'auction',
    title: 'Live Auctions',
    link: '/live-auctions',
  },
  {
    icon: 'upload',
    title: 'Upcoming projects',
    link: '/upcoming-projects',
  },
  {
    icon: 'mail-open',
    title: 'Newsletter',
    link: '/newsletter',
  },
  {
    icon: 'discuss',
    title: 'Forum & community',
    link: '/forum',
  },
  {
    icon: 'chat-check',
    title: 'Forum details',
    link: '/post-details',
  },
  {
    icon: 'file-search',
    title: 'No Result',
    link: '/no-results',
  },
  {
    icon: 'customer-service-2',
    title: 'Contact',
    link: '/contact',
  },
];
const RightMenu = [
  {
    icon: 'wallet-3',
    title: 'Connect wallet',
    link: '/connect-wallet',
  },
  {
    icon: 'question',
    title: 'Faq',
    link: '/faq',
  },
  {
    icon: 'share-forward',
    title: 'Submit request',
    link: '/submit-request',
  },
  {
    icon: 'message-3',
    title: 'Chat',
    link: '/chat',
  },
  {
    icon: 'layout',
    title: 'Blog',
    link: '/blog',
  },
  {
    icon: 'newspaper',
    title: 'Article',
    link: '/article',
  },
  {
    icon: 'lock',
    title: 'Register',
    link: '/register',
  },
  {
    icon: 'shield-user',
    title: 'Login',
    link: '/Login',
  },
  {
    icon: 'funds',
    title: 'Ranking',
    link: '/ranking',
  },
  {
    icon: 'file-text',
    title: 'Privacy Policy',
    link: '/privacy-policy',
  },
  {
    icon: 'file-damage',
    title: '404',
    link: '/404',
  },
];

function MegaMenu() {
  return (
    <div>
      <div className="row sub_menu_row">
        <div className="col-lg-6 space-y-10">
          {LeftMenu.map((val, i) => (
            <li key={i}>
              <Link to={val.link}>
                <i className={`ri-${val.icon}-line`} />
                {val.title}
              </Link>
            </li>
          ))}
        </div>
        <div className="col-lg-6 space-y-10">
          {RightMenu.map((val, i) => (
            <li key={i} >
              <Link to={val.link}>
                <i className={`ri-${val.icon}-line`} />
                {val.title}
              </Link>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MegaMenu;
