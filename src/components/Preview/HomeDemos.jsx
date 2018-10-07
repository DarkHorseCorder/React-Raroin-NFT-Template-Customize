import React from 'react';
import {Link} from 'react-router-dom';
const Homes = [
  {
    title: ' Home 1',
    img: '1',
    link: '/home-1',
  },
  {
    title: ' Home 2',
    img: '2',
    link: '/home-2',
  },
  {
    title: ' Home 3',
    img: '3',
    link: '/home-3',
  },
  {
    title: ' Home 4 - Sports ',
    img: 'coming',
    link: '#',
  },
];

const HomeDemos = () => {
  return (
    <div className="section mt-100 demos_wrap">
      <div className="container">
        <div className="section__head">
          <h2 className="text-center title_demos mb-20">Different Demos</h2>
        </div>
        <div className="demos mt-100" id="Demos">
          <div className="row justify-content-center">
            {Homes.map((val, i) => (
              <div className="col-xl-3 col-md-4 col-sm-6" key={i}>
                <Link
                  to={val.link}
                  target="_blank"
                  className="demo_item
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

export default HomeDemos;
