import React from 'react';

function Community() {
  return (
    <div classname="community">
      <div classname="container">
        <div classname="section__head space-y-20">
          <h3 classname="section__title text-center">Global community</h3>
          <p classname="section__text text-center">
            Learn more about raroin, chat with the team, other people in the
            community, and express your opinion on the future development of
            raroin.
          </p>
        </div>
        <div classname="community__items">
          <div classname="row justify-content-center mb-20_reset">
            <div classname="col-md-3">
              <div classname="item space-y-10">
                <div classname="logo">
                  <img src={`img/icons/github.svg`} alt="logo_community" />
                </div>
                <h5 classname="text-center">Github</h5>
                <p classname="text-center">
                  Understand the progress of our code and project
                </p>
              </div>
            </div>
            <div classname="col-md-3">
              <div classname="item space-y-10">
                <div classname="logo is_twitter">
                  <img src={`img/icons/twitter.svg`} alt="logo_community" />
                </div>
                <h5 classname="text-center">Twitter</h5>
                <p classname="text-center">
                  Understand the progress of our code and project
                </p>
              </div>
            </div>
            <div classname="col-md-3">
              <div classname="item space-y-10">
                <div classname="logo is_discord">
                  <img src={`img/icons/discord.svg`} alt="logo_community" />
                </div>
                <h5 classname="text-center">Discord</h5>
                <p classname="text-center">
                  Understand the progress of our code and project
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;
