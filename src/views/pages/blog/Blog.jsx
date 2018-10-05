import React from 'react';
import {Link} from 'react-router-dom';
import Footer from '../../../components/footer/Footer';
import Header from '../../../components/header/Header';
import HeroBlog from '../../../components/hero/HeroBlog';
import SidebarBlog from '../../../components/sidebars/SidebarBlog';
import useDocumentTitle from '../../../components/useDocumentTitle';

const BlogItems = [
  {
    img: '1',
    avatar: '1',
    title: 'Design Trends From Top Designers',
    text: 'creabik is a digital design platform that combines a powerful, native Mac app with collaboration features in the cloud. The Mac app gives all the tools you need to',
  },
  {
    img: '2',
    avatar: '2',
    title: 'Behind the Scenes of the creabik App',
    text: 'There was this general idea that the existent tools were not tailored for UI/UX design, pair it with a strong codebase that creabik was,',
  },
  {
    img: '3',
    avatar: '3',
    title: 'the official repository for designs',
    text: 'I think my role back then was doing everything! Haha, we were a two-man team for quite a while. I focused a lot of my time in design, ',
  },
  {
    img: '4',
    avatar: '1',
    title: 'Meet fennouni, Product Designer at GitHub',
    text: 'We felt frustrated that there was no product that focused specifically on interface design and we wanted to change that. ',
  },
  {
    img: '5',
    avatar: '2',
    title: 'Simple, beautiful interfaces are the future',
    text: 'hosting events, creating content and promoting the tool — and the creabik community started blowing up.',
  },
  {
    img: '6',
    avatar: '3',
    title: 'The Winner of the Vice Presidential Debate',
    text: "I don't think there was any one tool that was the inspiration for creabik. We knew what we wanted to build, and I wanted an app ",
  },
];
const Blog = () => {
  useDocumentTitle(' Submit Request');
  return (
    <div>
      <Header />
      <HeroBlog />
      <main className="mt-100">
        <div className="container">
          <div className="main" id="main-content">
            {/* ================================= blog */}
            <div className="row">
              <div className="col-lg-8 pr-5 pr-sm-0 pl-sm-0">
                <div id="content">
                  <div className="container">
                    <div className="row">
                      {BlogItems.map((val, i) => (
                        <div className="col-lg-6" key={i}>
                          <div className="blog has_style_grid">
                            <div className="row align-items-center">
                              <div className="col-row col-12">
                                <div className="blog-img">
                                  <div className="meta absolute">
                                    <Link
                                      to="#"
                                      className="comments
                                                                meta-info mobile">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24
                                                                    24"
                                        width={24}
                                        height={24}>
                                        <path
                                          fill="none"
                                          d="M0
                                                                        0h24v24H0z"
                                        />
                                        <path
                                          d="M2
                                                                        8.994A5.99
                                                                        5.99 0 0 1 8
                                                                        3h8c3.313 0
                                                                        6 2.695 6
                                                                        5.994V21H8c-3.313
                                                                        0-6-2.695-6-5.994V8.994zM14
                                                                        11v2h2v-2h-2zm-6
                                                                        0v2h2v-2H8z"></path>
                                      </svg>
                                      <span className="comment-count ml-1">
                                        1
                                      </span>
                                    </Link>
                                    <span
                                      className="views-counter
                                                                meta-info mobile
                                                                comments">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24
                                                                    24"
                                        width={24}
                                        height={24}>
                                        <path
                                          fill="none"
                                          d="M0
                                                                        0h24v24H0z"
                                        />
                                        <path
                                          d="M12
                                                                        23a7.5 7.5 0
                                                                        0
                                                                        1-5.138-12.963C8.204
                                                                        8.774 11.5
                                                                        6.5 11 1.5c6
                                                                        4 9 8 3 14 1
                                                                        0 2.5 0
                                                                        5-2.47.27.773.5
                                                                        1.604.5
                                                                        2.47A7.5 7.5
                                                                        0 0 1 12
                                                                        23z"></path>
                                      </svg>
                                      <span className="ml-1">5480</span>
                                    </span>
                                    <div
                                      className="min-read
                                                                meta-info d-flex"
                                      title="3
                                                                Min Read">
                                      <div className="mr-1">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 24
                                                                    24"
                                          width={24}
                                          height={24}>
                                          <path
                                            fill="none"
                                            d="M0
                                                                        0h24v24H0z"
                                          />
                                          <path
                                            d="M6.382
                                                                        5.968A8.962
                                                                        8.962 0 0 1
                                                                        12 4c2.125 0
                                                                        4.078.736
                                                                        5.618
                                                                        1.968l1.453-1.453
                                                                        1.414
                                                                        1.414-1.453
                                                                        1.453a9 9 0
                                                                        1 1-14.064
                                                                        0L3.515
                                                                        5.93l1.414-1.414
                                                                        1.453
                                                                        1.453zM13
                                                                        12V7.495L8
                                                                        14h3v4.5l5-6.5h-3zM8
                                                                        1h8v2H8V1z"></path>
                                        </svg>
                                      </div>
                                      3
                                    </div>
                                  </div>
                                  <img
                                    src={`img/posts/post_${val.img}.jpg`}
                                    alt="post"
                                  />
                                </div>
                              </div>
                              <div className="col-row col-12">
                                <div className="blog-wrap">
                                  <h3 className="blog-title">
                                    <Link to="article">{val.title}</Link>
                                  </h3>
                                  <p className="blog-excerpt">{val.text}</p>
                                  <div
                                    className="blog-author-detail
                                                            d-flex
                                                            justify-content-between
                                                            align-items-center">
                                    <div
                                      className="c-customer-review-meta
                                                                d-flex
                                                                justify-content-start
                                                                align-items-center">
                                      <div className="user">
                                        <img
                                          src={`img/avatars/avatar_${val.avatar}.png`}
                                          alt="Avatar"
                                          className="avatar avatar-sm rounded-circle"
                                        />
                                      </div>
                                      <div
                                        className="meta
                                                                    pl-20">
                                        <p className="name">Joshua William</p>
                                        <p className="author-post">
                                          Verified writer
                                        </p>
                                      </div>
                                    </div>
                                    <span
                                      className="font-semibold
                                                                text-gray">
                                      08 May
                                    </span>
                                  </div>
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
              {/* ================================= sidebar */}
              <div className="col-lg-4">
                <SidebarBlog />
              </div>
            </div>
          </div>
        </div>
        {/* End. blog_inner_list */}
        {/* End. simple-subscribe */}
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
