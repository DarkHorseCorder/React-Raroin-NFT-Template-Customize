import React from 'react';

const SidebarProfile = () => {
  return (
    <div className="profile__sidebar">
      <div className="space-y-40">
        <div className="space-y-10">
          <h5>About me</h5>
          <div className="box space-y-20">
            <p>
              I make art with the simple goal of giving you something pleasing
              to look at for a few seconds.
            </p>
            <div className="row">
              <div className="col-6">
                <span className="txt_sm color_text">Collections</span>
                <h4>105</h4>
              </div>
              <div className="col-6">
                <span className="txt_sm color_text">Creations</span>
                <h4>406</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-10">
          <h5>Follow me</h5>
          <div className="box">
            <ul className="social_profile space-y-10 overflow-hidden">
              <li>
              <a href="https://www.facebook.com/" rel="noreferrer"  target="_blank">
                  <i className="ri-facebook-line" />
                  <span className="color_text">facebook/</span>
                  @creabik
                </a>
              </li>
              <li>
              <a href="https://www.messenger.com/" rel="noreferrer"  target="_blank">
                  <i className="ri-messenger-line" />
                  <span className="color_text"> messenger/</span>
                  @creabik
                </a>
              </li>
              <li>
              <a href="https://whatsapp.com" target="_blank" rel="noreferrer" >
                  <i className="ri-whatsapp-line" />
                  <span className="color_text"> whatsapp/</span>
                  @creabik
                </a>
              </li>
              <li>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" >
                  <i className="ri-youtube-line" />
                  <span className="color_text">youtube/</span>
                  @creabik
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-center txt_sm mt-20 color_text">Since 2021</p>
    </div>
  );
};

export default SidebarProfile;
