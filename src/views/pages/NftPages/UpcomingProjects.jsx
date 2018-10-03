import React from 'react';
import Footer from '../../../components/footer/Footer';
import Header from '../../../components/header/Header';
import HeroUpcoming from '../../../components/hero/HeroUpcoming';
import useDocumentTitle from '../../../components/useDocumentTitle';

const UpcomingItems1 = [
  {
    Project: 'The Botties',
    Time: '10 PM UTC',
    Count: '-100%',
    Price: 'Free mint',
    Extras: 'If SOL is above $200, 1 SOL',
    Project_w: 'Hell Hounds',
    Time_w: '9 PM UTC',
    Count_w: '-900%',
    Price_w: 'Free mint',
    Extras_w: 'If SOL is above $400, 1 SOL',
  },
  {
    Project: 'Red Dead',
    Time: '8 PM UTC',
    Count: '-750%',
    Price: 'Free mint',
    Extras: 'If SOL is above $300, 1 SOL',
    Project_w: 'Phantoms',
    Time_w: '7 PM UTC',
    Count_w: '-10%',
    Price_w: 'Free mint',
    Extras_w: 'If SOL is above $100, 1 SOL',
  },
  {
    Project: 'CrowPunks',
    Time: '6 PM UTC',
    Count: '-150%',
    Price: 'Free mint',
    Extras: 'If SOL is above $700, 1 SOL',
    Project_w: 'Halloween',
    Time_w: '5 PM UTC',
    Count_w: '-50%',
    Price_w: 'Free mint',
    Extras_w: 'If SOL is above $400, 1 SOL',
  },
  {
    Project: 'Nomad Presale',
    Time: '4 PM UTC',
    Count: '-26%',
    Price: 'Free mint',
    Extras: 'If SOL is above $100, 2 SOL',
    Project_w: 'ClubCards',
    Time_w: '3 PM UTC',
    Count_w: '-97%',
    Price_w: 'Free mint',
    Extras_w: 'If SOL is above $200, 1 SOL',
  },
];
const UpcomingItems2 = [
  {
    Project: 'NFBeans',
    Time: '10 PM UTC',
    Count: '-700%',
    Price: 'Free mint',
    Extras: 'If SOL is above $200, 1 SOL',
    Project_w: 'The Hourglass',
    Time_w: '9 PM UTC',
    Count_w: '-900%',
    Price_w: 'Free mint',
    Extras_w: 'If SOL is above $400, 1 SOL',
  },
  {
    Project: 'Deaf beef',
    Time: '8 PM UTC',
    Count: '-450%',
    Price: 'Free mint',
    Extras: 'If SOL is above $500, 1 SOL',
    Project_w: 'PEGZ',
    Time_w: '7 PM UTC',
    Count_w: '-10%',
    Price_w: 'Free mint',
    Extras_w: 'If SOL is above $100, 2 SOL',
  },
  {
    Project: 'CrowPunks',
    Time: '6 PM UTC',
    Count: '-180%',
    Price: 'Free mint',
    Extras: 'If SOL is above $700, 1 SOL',
    Project_w: 'Halloween',
    Time_w: '5 PM UTC',
    Count_w: '-50%',
    Price_w: 'Free mint',
    Extras_w: 'If SOL is above $200, 1 SOL',
  },
  {
    Project: 'Nomad Presale',
    Time: '4 PM UTC',
    Count: '-260%',
    Price: 'Free mint',
    Extras: 'If SOL is above $400, 1 SOL',
    Project_w: 'ClubCards',
    Time_w: '3 PM UTC',
    Count_w: '-987%',
    Price_w: 'Free mint',
    Extras_w: 'If SOL is above $500, 1 SOL',
  },
];
const UpcomingProjects = () => {
  useDocumentTitle('Upcoming Projects');
  return (
    <div>
      <Header />
      <HeroUpcoming />
      <div>
        <section className="section upcoming_projects mt-100">
          <div className="container">
            <div className="space-x-10 d-flex align-items-center mb-20">
              <div className="calendar_icon">
                <i className="ri-calendar-event-line" />
              </div>
              <h3>September 16th</h3>
            </div>
            <div className="box d-flex table-responsive">
              <table className="table upcoming_projects">
                <thead>
                  <tr>
                    <th scope="col">
                      <span>Project</span>
                    </th>
                    <th className="space-x-5" scope="col">
                      <i className="ri-link" />
                      <span>Links</span>
                    </th>
                    <th className="space-x-5" scope="col">
                      <i className="ri-time-line" />
                      <span>Time</span>
                    </th>
                    <th className="space-x-5" scope="col">
                      <i className="ri-price-tag-3-line" />
                      <span>Count</span>
                    </th>
                    <th className="space-x-5" scope="col">
                      <i className="ri-money-dollar-circle-line" />
                      <span>Price</span>
                    </th>
                    <th className="space-x-5" scope="col">
                      <i className="ri-file-line" />
                      <span>Extras</span>
                    </th>
                  </tr>
                </thead>
                {UpcomingItems1.map((val, i) => (
                  <tbody key={i}>
                    <tr>
                      <td>
                        <span className="color_black">{val.Project}</span>
                      </td>
                      <td>
                        <img
                          src={`img/icons/browsers.png`}
                          className="img-fluid"
                          alt="browser1"
                        />
                      </td>
                      <td>
                        <span className="color_green">{val.Time}</span>
                      </td>
                      <td>
                        <span className="color_red">{val.Count}</span>
                      </td>
                      <td>
                        <span className="color_info">{val.Price}</span>
                      </td>
                      <td>
                        <span className="color_black">{val.Extras}</span>
                      </td>
                    </tr>
                    <tr className="white">
                      <td>
                        <span className="color_black">{val.Project_w}</span>
                      </td>
                      <td>
                        <img
                          src={`img/icons/browsers.png`}
                          className="img-fluid"
                          alt="browser2"
                        />
                      </td>
                      <td>
                        <span className="color_green">{val.Time_w}</span>
                      </td>
                      <td>
                        <span className="color_red">{val.Count_w}</span>
                      </td>
                      <td>
                        <span className="color_info">{val.Price_w}</span>
                      </td>
                      <td>
                        <span className="color_black">{val.Extras_w}</span>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </section>
        <section className="section upcoming_projects mt-100">
          <div className="container">
            <div className="space-x-10 d-flex align-items-center mb-20">
              <div className="calendar_icon">
                <i className="ri-calendar-event-line" />
              </div>
              <h3>September 17th</h3>
            </div>
            <div className="box d-flex table-responsive">
              <table className="table upcoming_projects">
                <thead>
                  <tr>
                    <th scope="col">
                      <span>Project</span>
                    </th>
                    <th className="space-x-5" scope="col">
                      <i className="ri-link" />
                      <span>Links</span>
                    </th>
                    <th className="space-x-5" scope="col">
                      <i className="ri-time-line" />
                      <span>Time</span>
                    </th>
                    <th className="space-x-5" scope="col">
                      <i className="ri-price-tag-3-line" />
                      <span>Count</span>
                    </th>
                    <th className="space-x-5" scope="col">
                      <i className="ri-money-dollar-circle-line" />
                      <span>Price</span>
                    </th>
                    <th className="space-x-5" scope="col">
                      <i className="ri-file-line" />
                      <span>Extras</span>
                    </th>
                  </tr>
                </thead>
                {UpcomingItems2.map((val, i) => (
                  <tbody key={i}>
                    <tr>
                      <td>
                        <span className="color_black">{val.Project}</span>
                      </td>
                      <td>
                        <img
                          src={`img/icons/browsers.png`}
                          className="img-fluid"
                          alt="browser3"
                        />
                      </td>
                      <td>
                        <span className="color_green">{val.Time}</span>
                      </td>
                      <td>
                        <span className="color_red">{val.Count}</span>
                      </td>
                      <td>
                        <span className="color_info">{val.Price}</span>
                      </td>
                      <td>
                        <span className="color_black">{val.Extras}</span>
                      </td>
                    </tr>
                    <tr className="white">
                      <td>
                        <span className="color_black">{val.Project_w}</span>
                      </td>
                      <td>
                        <img
                          src={`img/icons/browsers.png`}
                          className="img-fluid"
                          alt="browser4"
                        />
                      </td>
                      <td>
                        <span className="color_green">{val.Time_w}</span>
                      </td>
                      <td>
                        <span className="color_red">{val.Count_w}</span>
                      </td>
                      <td>
                        <span className="color_info">{val.Price_w}</span>
                      </td>
                      <td>
                        <span className="color_black">{val.Extras_w}</span>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default UpcomingProjects;
