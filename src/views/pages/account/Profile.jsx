import React from 'react';
import CardProfile from '../../../components/cards/CardProfile';
import Footer from '../../../components/footer/Footer';
import Header from '../../../components/header/Header';
import HeroProfile from '../../../components/hero/HeroProfile';
import SidebarProfile from '../../../components/sidebars/SidebarProfile';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import CollectionProfile from '../../../components/collection/CollectionProfile';
import useDocumentTitle from '../../../components/useDocumentTitle';
import {Link} from 'react-router-dom';

const Profile = () => {
  useDocumentTitle('Profile ');
  return (
    <div>
      <Header />
      <HeroProfile />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-3 col-md-7 order-md-0 order-1">
            <SidebarProfile />
          </div>
          <div className="col-lg-9 col-md-12 order-md-1 order-0">
            <div className="profile__content">
              <div className="d-flex justify-content-between">
                <Tabs className="space-x-10">
                  <div className="d-flex justify-content-between">
                    <TabList className="d-flex space-x-10 mb-30 nav-tabs">
                      <Tab className="nav-item">
                        <Link
                          className="btn btn-white btn-sm"
                          data-toggle="tab"
                          to="#tabs-1"
                          role="tab">
                          Creations
                        </Link>
                      </Tab>
                      <Tab>
                        <Link
                          className="btn btn-white btn-sm"
                          data-toggle="tab"
                          to="#tabs-2"
                          role="tab">
                          Collections
                        </Link>
                      </Tab>
                    </TabList>

                  </div>
                  <div className="tab-content">
                    <TabPanel className="active">
                      <CardProfile />
                    </TabPanel>
                    <TabPanel>
                      <CollectionProfile />
                    </TabPanel>
                  </div>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
