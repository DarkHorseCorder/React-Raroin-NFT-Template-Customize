import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Link} from 'react-router-dom';

export default function TopArtist() {
  const settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    margin: 20,
    responsive: [
      {
        breakpoint: 4000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const ArtistItems = [
    {
      img: '1',
      name: 'xander_hall',
      price: '16.58',
    },
    {
      img: '2',
      name: 'hamza_pitts',
      price: '14.55',
    },
    {
      img: '3',
      name: 'nathan_walls',
      price: '24.13',
    },
    {
      img: '4',
      name: 'kelton_collier',
      price: '62.68',
    },
    {
      img: '5',
      name: 'cade_glover',
      price: '32.48',
    },
  ];
  return (
    <div className="section__artists mt-100">
      <div className="container">
        <div className="space-y-30">
          <div className="section_head">
            <h2 className="section__title mt-10">Top Artists</h2>
          </div>
          <div className="section_body swiper_artists">
            <Slider {...settings}>
              {ArtistItems.map((val, i) => (
                <div className="item" key={i}>
                  <div className="creator_item creator_card rounded_border space-x-10">
                    <div className="avatars space-x-10">
                      <div className="media">
                        <div className="badge">
                          <img src={`img/icons/Badge.svg`} alt="icons" />
                        </div>
                        <Link to="profile">
                          <img
                            src={`img/avatars/avatar_${val.img}.png`}
                            alt="Avatar"
                            className="avatar avatar-md"
                          />
                        </Link>
                      </div>
                      <div>
                        <Link to="profile">
                          <p className="avatars_name color_black">
                            @{val.name}...
                          </p>
                        </Link>
                        <span className="price color_green">
                          {val.price} ETH
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
