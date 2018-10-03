import React from 'react';
import Header from '../../../components/header/Header';
import HeroRanking from '../../../components/hero/HeroRanking';
import Footer from '../../../components/footer/Footer';
import useDocumentTitle from '../../../components/useDocumentTitle';
import {Link} from 'react-router-dom';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';

const Ranking = () => {
  useDocumentTitle(' Ranking');
  return (
    <div className="ranking">
      <Header />
      <HeroRanking />
      <div className="w-100">
        <Tabs className=" border-b">
          <TabList className="menu_categories  bg_white py-20 px-15 w-100">
            <Tab>
              <li>
                <Link to="ranking">
                  <i className="ri-gamepad-line" />
                  <span> Games</span>
                </Link>
              </li>
            </Tab>
            <Tab>
              <li>
                <Link to="ranking">
                  <i className="ri-brush-line" />
                  <span> Art</span>
                </Link>
              </li>
            </Tab>
            <Tab>
              <li>
                <Link to="ranking">
                  <i className="ri-stock-line" />
                  <span> Trading Cards</span>
                </Link>
              </li>
            </Tab>
            <Tab>
              <li>
                <Link to="ranking">
                  <i className="ri-music-line" />
                  <span> Music</span>
                </Link>
              </li>
            </Tab>
            <Tab>
              <li>
                <Link to="ranking">
                  <i className="ri-global-line" />
                  <span> Domain Names</span>
                </Link>
              </li>
            </Tab>
            <Tab>
              <li>
                <Link to="ranking">
                  <i className="ri-emotion-laugh-line" />
                  <span> Memes</span>
                </Link>
              </li>
            </Tab>
            <Tab>
              <li>
                <Link to="ranking">
                  <i className="ri-layout-4-line" />
                  <span> Collectibles</span>
                </Link>
              </li>
            </Tab>
          </TabList>

          <TabPanel>
            <section className="section ranking mt-100">
              <div className="container">
                <div className="box d-flex table-responsive">
                  <table className="table ranking ">
                    <thead>
                      <tr>
                        <th scope="col">
                          <span>Collection</span>
                        </th>
                        <th scope="col">
                          <span>Volume</span>
                        </th>
                        <th scope="col">
                          <span>24h %</span>
                        </th>
                        <th scope="col">
                          <span>7d %</span>
                        </th>
                        <th scope="col">
                          <span>Floor Price</span>
                        </th>
                        <th scope="col">
                          <span>Owners</span>
                        </th>
                        <th scope="col">
                          <span>Assets</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="collection space-x-10">
                            <div className="media">
                              <div className="has_number">1</div>
                              <img
                                src={`img/bg/collection-game.png`}
                                alt="collection"
                                className="collection__img"
                              />
                            </div>
                            <div>
                              <h6 className="title color_black">
                                Creative Game collection
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span>12,4353</span>
                        </td>
                        <td>
                          <span className="color_green">+3456%</span>
                        </td>
                        <td>
                          <span className="color_red">-564%</span>
                        </td>
                        <td>
                          <span>12,4353 ETH</span>
                        </td>
                        <td>
                          <span>
                            3.3k
                            <span />
                          </span>
                        </td>
                        <td>
                          <span>
                            23k
                            <span />
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="collection space-x-10">
                            <div className="media">
                              <div className="has_number">1</div>
                              <img
                                src={`img/bg/collection-game.png`}
                                alt="collection"
                                className="collection__img"
                              />
                            </div>
                            <div>
                              <h6 className="title color_black">
                                Creative Art collection
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span>12,4353</span>
                        </td>
                        <td>
                          <span className="color_green">+3456%</span>
                        </td>
                        <td>
                          <span className="color_red">-564%</span>
                        </td>
                        <td>
                          <span>
                            12,4353 ETH
                            <span />
                          </span>
                        </td>
                        <td>
                          <span>
                            3.3k
                            <span />
                          </span>
                        </td>
                        <td>
                          <span>
                            23k
                            <span />
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="collection space-x-10">
                            <div className="media">
                              <div className="has_number">1</div>
                              <img
                                src={`img/bg/collection-game.png`}
                                alt="collection"
                                className="collection__img"
                              />
                            </div>
                            <div>
                              <h6 className="title color_black">
                                Creative Art collection
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span>12,4353</span>
                        </td>
                        <td>
                          <span className="color_green">+3456%</span>
                        </td>
                        <td>
                          <span className="color_red">-564%</span>
                        </td>
                        <td>
                          <span>
                            12,4353 ETH
                            <span />
                          </span>
                        </td>
                        <td>
                          <span>
                            3.3k
                            <span />
                          </span>
                        </td>
                        <td>
                          <span>
                            23k
                            <span />
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="collection space-x-10">
                            <div className="media">
                              <div className="has_number">1</div>
                              <img
                                src={`img/bg/collection-game.png`}
                                alt="collection"
                                className="collection__img"
                              />
                            </div>
                            <div>
                              <h6 className="title color_black">
                                Creative Art collection
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span>12,4353</span>
                        </td>
                        <td>
                          <span className="color_green">+3456%</span>
                        </td>
                        <td>
                          <span className="color_red">-564%</span>
                        </td>
                        <td>
                          <span>
                            12,4353 ETH
                            <span />
                          </span>
                        </td>
                        <td>
                          <span>
                            3.3k
                            <span />
                          </span>
                        </td>
                        <td>
                          <span>
                            23k
                            <span />
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="collection space-x-10">
                            <div className="media">
                              <div className="has_number">1</div>
                              <img
                                src={`img/bg/collection-game.png`}
                                alt="collection"
                                className="collection__img"
                              />
                            </div>
                            <div>
                              <h6 className="title color_black">
                                Creative Art collection
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span>12,4353</span>
                        </td>
                        <td>
                          <span className="color_green">+3456%</span>
                        </td>
                        <td>
                          <span className="color_red">-564%</span>
                        </td>
                        <td>
                          <span>
                            12,4353 ETH
                            <span />
                          </span>
                        </td>
                        <td>
                          <span>
                            3.3k
                            <span />
                          </span>
                        </td>
                        <td>
                          <span>
                            23k
                            <span />
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </TabPanel>
          <TabPanel>
            <section className="section ranking mt-100">
              <div className="container">
                <div className="box d-flex table-responsive">
                  <table className="table ranking ">
                    <thead>
                      <tr>
                        <th scope="col">
                          <span>Collection</span>
                        </th>
                        <th scope="col">
                          <span>Volume</span>
                        </th>
                        <th scope="col">
                          <span>24h %</span>
                        </th>
                        <th scope="col">
                          <span>7d %</span>
                        </th>
                        <th scope="col">
                          <span>Floor Price</span>
                        </th>
                        <th scope="col">
                          <span>Owners</span>
                        </th>
                        <th scope="col">
                          <span>Assets</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="collection space-x-10">
                            <div className="media">
                              <div className="has_number">1</div>
                              <img
                                src={`img/bg/collection-art.png`}
                                alt="collection"
                                className="collection__img"
                              />
                            </div>
                            <div>
                              <h6 className="title color_black">
                                Creative Art collection
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span>12,4353</span>
                        </td>
                        <td>
                          <span className="color_green">+3456%</span>
                        </td>
                        <td>
                          <span className="color_red">-564%</span>
                        </td>
                        <td>
                          <span>12,4353 ETH</span>
                        </td>
                        <td>
                          <span>
                            3.3k
                            <span />
                          </span>
                        </td>
                        <td>
                          <span>
                            23k
                            <span />
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="collection space-x-10">
                            <div className="media">
                              <div className="has_number">1</div>
                              <img
                                src={`img/bg/collection-art.png`}
                                alt="collection"
                                className="collection__img"
                              />
                            </div>
                            <div>
                              <h6 className="title color_black">
                                Creative Art collection
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span>12,4353</span>
                        </td>
                        <td>
                          <span className="color_green">+3456%</span>
                        </td>
                        <td>
                          <span className="color_red">-564%</span>
                        </td>
                        <td>
                          <span>
                            12,4353 ETH
                            <span />
                          </span>
                        </td>
                        <td>
                          <span>
                            3.3k
                            <span />
                          </span>
                        </td>
                        <td>
                          <span>
                            23k
                            <span />
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="collection space-x-10">
                            <div className="media">
                              <div className="has_number">1</div>
                              <img
                                src={`img/bg/collection-art.png`}
                                alt="collection"
                                className="collection__img"
                              />
                            </div>
                            <div>
                              <h6 className="title color_black">
                                Creative Art collection
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span>12,4353</span>
                        </td>
                        <td>
                          <span className="color_green">+3456%</span>
                        </td>
                        <td>
                          <span className="color_red">-564%</span>
                        </td>
                        <td>
                          <span>
                            12,4353 ETH
                            <span />
                          </span>
                        </td>
                        <td>
                          <span>
                            3.3k
                            <span />
                          </span>
                        </td>
                        <td>
                          <span>
                            23k
                            <span />
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="collection space-x-10">
                            <div className="media">
                              <div className="has_number">1</div>
                              <img
                                src={`img/bg/collection-art.png`}
                                alt="collection"
                                className="collection__img"
                              />
                            </div>
                            <div>
                              <h6 className="title color_black">
                                Creative Art collection
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span>12,4353</span>
                        </td>
                        <td>
                          <span className="color_green">+3456%</span>
                        </td>
                        <td>
                          <span className="color_red">-564%</span>
                        </td>
                        <td>
                          <span>
                            12,4353 ETH
                            <span />
                          </span>
                        </td>
                        <td>
                          <span>
                            3.3k
                            <span />
                          </span>
                        </td>
                        <td>
                          <span>
                            23k
                            <span />
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="collection space-x-10">
                            <div className="media">
                              <div className="has_number">1</div>
                              <img
                                src={`img/bg/collection-art.png`}
                                alt="collection"
                                className="collection__img"
                              />
                            </div>
                            <div>
                              <h6 className="title color_black">
                                Creative Art collection
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span>12,4353</span>
                        </td>
                        <td>
                          <span className="color_green">+3456%</span>
                        </td>
                        <td>
                          <span className="color_red">-564%</span>
                        </td>
                        <td>
                          <span>
                            12,4353 ETH
                            <span />
                          </span>
                        </td>
                        <td>
                          <span>
                            3.3k
                            <span />
                          </span>
                        </td>
                        <td>
                          <span>
                            23k
                            <span />
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </TabPanel>
          <TabPanel>
            <section className="section ranking mt-100">
              <div className="container">
                <div className="box d-flex table-responsive">
                  <table className="table ranking ">
                    <thead>
                      <tr>
                        <th scope="col">
                          <span>Collection</span>
                        </th>
                        <th scope="col">
                          <span>Volume</span>
                        </th>
                        <th scope="col">
                          <span>24h %</span>
                        </th>
                        <th scope="col">
                          <span>7d %</span>
                        </th>
                        <th scope="col">
                          <span>Floor Price</span>
                        </th>
                        <th scope="col">
                          <span>Owners</span>
                        </th>
                        <th scope="col">
                          <span>Assets</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="collection space-x-10">
                            <div className="media">
                              <div className="has_number">1</div>
                              <img
                                src={`img/bg/collection-cards.png`}
                                alt="collection"
                                className="collection__img"
                              />
                            </div>
                            <div>
                              <h6 className="title color_black">
                                Creative Trading Cards collection
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span>12,4353</span>
                        </td>
                        <td>
                          <span className="color_green">+3456%</span>
                        </td>
                        <td>
                          <span className="color_red">-564%</span>
                        </td>
                        <td>
                          <span>12,4353 ETH</span>
                        </td>
                        <td>
                          <span>
                            3.3k
                            <span />
                          </span>
                        </td>
                        <td>
                          <span>
                            23k
                            <span />
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="collection space-x-10">
                            <div className="media">
                              <div className="has_number">1</div>
                              <img
                                src={`img/bg/collection-cards.png`}
                                alt="collection"
                                className="collection__img"
                              />
                            </div>
                            <div>
                              <h6 className="title color_black">
                                Creative Art collection
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span>12,4353</span>
                        </td>
                        <td>
                          <span className="color_green">+3456%</span>
                        </td>
                        <td>
                          <span className="color_red">-564%</span>
                        </td>
                        <td>
                          <span>
                            12,4353 ETH
                            <span />
                          </span>
                        </td>
                        <td>
                          <span>
                            3.3k
                            <span />
                          </span>
                        </td>
                        <td>
                          <span>
                            23k
                            <span />
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="collection space-x-10">
                            <div className="media">
                              <div className="has_number">1</div>
                              <img
                                src={`img/bg/collection-cards.png`}
                                alt="collection"
                                className="collection__img"
                              />
                            </div>
                            <div>
                              <h6 className="title color_black">
                                Creative Art collection
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span>12,4353</span>
                        </td>
                        <td>
                          <span className="color_green">+3456%</span>
                        </td>
                        <td>
                          <span className="color_red">-564%</span>
                        </td>
                        <td>
                          <span>
                            12,4353 ETH
                            <span />
                          </span>
                        </td>
                        <td>
                          <span>
                            3.3k
                            <span />
                          </span>
                        </td>
                        <td>
                          <span>
                            23k
                            <span />
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="collection space-x-10">
                            <div className="media">
                              <div className="has_number">1</div>
                              <img
                                src={`img/bg/collection-cards.png`}
                                alt="collection"
                                className="collection__img"
                              />
                            </div>
                            <div>
                              <h6 className="title color_black">
                                Creative Art collection
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span>12,4353</span>
                        </td>
                        <td>
                          <span className="color_green">+3456%</span>
                        </td>
                        <td>
                          <span className="color_red">-564%</span>
                        </td>
                        <td>
                          <span>
                            12,4353 ETH
                            <span />
                          </span>
                        </td>
                        <td>
                          <span>
                            3.3k
                            <span />
                          </span>
                        </td>
                        <td>
                          <span>
                            23k
                            <span />
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="collection space-x-10">
                            <div className="media">
                              <div className="has_number">1</div>
                              <img
                                src={`img/bg/collection-cards.png`}
                                alt="collection"
                                className="collection__img"
                              />
                            </div>
                            <div>
                              <h6 className="title color_black">
                                Creative Art collection
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span>12,4353</span>
                        </td>
                        <td>
                          <span className="color_green">+3456%</span>
                        </td>
                        <td>
                          <span className="color_red">-564%</span>
                        </td>
                        <td>
                          <span>
                            12,4353 ETH
                            <span />
                          </span>
                        </td>
                        <td>
                          <span>
                            3.3k
                            <span />
                          </span>
                        </td>
                        <td>
                          <span>
                            23k
                            <span />
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </TabPanel>
          <TabPanel>
            <section className="section ranking mt-100">
              <div className="container">
                <div className="box d-flex table-responsive">
                  <table className="table ranking ">
                    <thead>
                      <tr>
                        <th scope="col">
                          <span>Collection</span>
                        </th>
                        <th scope="col">
                          <span>Volume</span>
                        </th>
                        <th scope="col">
                          <span>24h %</span>
                        </th>
                        <th scope="col">
                          <span>7d %</span>
                        </th>
                        <th scope="col">
                          <span>Floor Price</span>
                        </th>
                        <th scope="col">
                          <span>Owners</span>
                        </th>
                        <th scope="col">
                          <span>Assets</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="collection space-x-10">
                            <div className="media">
                              <div className="has_number">1</div>
                              <img
                                src={`img/bg/collection-music.png`}
                                alt="collection"
                                className="collection__img"
                              />
                            </div>
                            <div>
                              <h6 className="title color_black">
                                Creative Music collection
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span>12,4353</span>
                        </td>
                        <td>
                          <span className="color_green">+3456%</span>
                        </td>
                        <td>
                          <span className="color_red">-564%</span>
                        </td>
                        <td>
                          <span>12,4353 ETH</span>
                        </td>
                        <td>
                          <span>
                            3.3k
                            <span />
                          </span>
                        </td>
                        <td>
                          <span>
                            23k
                            <span />
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="collection space-x-10">
                            <div className="media">
                              <div className="has_number">1</div>
                              <img
                                src={`img/bg/collection-music.png`}
                                alt="collection"
                                className="collection__img"
                              />
                            </div>
                            <div>
                              <h6 className="title color_black">
                                Creative Art collection
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span>12,4353</span>
                        </td>
                        <td>
                          <span className="color_green">+3456%</span>
                        </td>
                        <td>
                          <span className="color_red">-564%</span>
                        </td>
                        <td>
                          <span>
                            12,4353 ETH
                            <span />
                          </span>
                        </td>
                        <td>
                          <span>
                            3.3k
                            <span />
                          </span>
                        </td>
                        <td>
                          <span>
                            23k
                            <span />
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="collection space-x-10">
                            <div className="media">
                              <div className="has_number">1</div>
                              <img
                                src={`img/bg/collection-music.png`}
                                alt="collection"
                                className="collection__img"
                              />
                            </div>
                            <div>
                              <h6 className="title color_black">
                                Creative Art collection
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span>12,4353</span>
                        </td>
                        <td>
                          <span className="color_green">+3456%</span>
                        </td>
                        <td>
                          <span className="color_red">-564%</span>
                        </td>
                        <td>
                          <span>
                            12,4353 ETH
                            <span />
                          </span>
                        </td>
                        <td>
                          <span>
                            3.3k
                            <span />
                          </span>
                        </td>
                        <td>
                          <span>
                            23k
                            <span />
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="collection space-x-10">
                            <div className="media">
                              <div className="has_number">1</div>
                              <img
                                src={`img/bg/collection-music.png`}
                                alt="collection"
                                className="collection__img"
                              />
                            </div>
                            <div>
                              <h6 className="title color_black">
                                Creative Art collection
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span>12,4353</span>
                        </td>
                        <td>
                          <span className="color_green">+3456%</span>
                        </td>
                        <td>
                          <span className="color_red">-564%</span>
                        </td>
                        <td>
                          <span>
                            12,4353 ETH
                            <span />
                          </span>
                        </td>
                        <td>
                          <span>
                            3.3k
                            <span />
                          </span>
                        </td>
                        <td>
                          <span>
                            23k
                            <span />
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="collection space-x-10">
                            <div className="media">
                              <div className="has_number">1</div>
                              <img
                                src={`img/bg/collection-music.png`}
                                alt="collection"
                                className="collection__img"
                              />
                            </div>
                            <div>
                              <h6 className="title color_black">
                                Creative Art collection
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span>12,4353</span>
                        </td>
                        <td>
                          <span className="color_green">+3456%</span>
                        </td>
                        <td>
                          <span className="color_red">-564%</span>
                        </td>
                        <td>
                          <span>
                            12,4353 ETH
                            <span />
                          </span>
                        </td>
                        <td>
                          <span>
                            3.3k
                            <span />
                          </span>
                        </td>
                        <td>
                          <span>
                            23k
                            <span />
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </TabPanel>
          <TabPanel>
            <section className="section ranking mt-100">
              <div className="container">
                <div className="box d-flex table-responsive">
                  <table className="table ranking ">
                    <thead>
                      <tr>
                        <th scope="col">
                          <span>Collection</span>
                        </th>
                        <th scope="col">
                          <span>Volume</span>
                        </th>
                        <th scope="col">
                          <span>24h %</span>
                        </th>
                        <th scope="col">
                          <span>7d %</span>
                        </th>
                        <th scope="col">
                          <span>Floor Price</span>
                        </th>
                        <th scope="col">
                          <span>Owners</span>
                        </th>
                        <th scope="col">
                          <span>Assets</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="collection space-x-10">
                            <div className="media">
                              <div className="has_number">1</div>
                              <img
                                src={`img/bg/collection-domain.png`}
                                alt="collection"
                                className="collection__img"
                              />
                            </div>
                            <div>
                              <h6 className="title color_black">
                                Creative Domain Names collection
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span>12,4353</span>
                        </td>
                        <td>
                          <span className="color_green">+3456%</span>
                        </td>
                        <td>
                          <span className="color_red">-564%</span>
                        </td>
                        <td>
                          <span>12,4353 ETH</span>
                        </td>
                        <td>
                          <span>
                            3.3k
                            <span />
                          </span>
                        </td>
                        <td>
                          <span>
                            23k
                            <span />
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="collection space-x-10">
                            <div className="media">
                              <div className="has_number">1</div>
                              <img
                                src={`img/bg/collection-domain.png`}
                                alt="collection"
                                className="collection__img"
                              />
                            </div>
                            <div>
                              <h6 className="title color_black">
                                Creative Art collection
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span>12,4353</span>
                        </td>
                        <td>
                          <span className="color_green">+3456%</span>
                        </td>
                        <td>
                          <span className="color_red">-564%</span>
                        </td>
                        <td>
                          <span>
                            12,4353 ETH
                            <span />
                          </span>
                        </td>
                        <td>
                          <span>
                            3.3k
                            <span />
                          </span>
                        </td>
                        <td>
                          <span>
                            23k
                            <span />
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="collection space-x-10">
                            <div className="media">
                              <div className="has_number">1</div>
                              <img
                                src={`img/bg/collection-domain.png`}
                                alt="collection"
                                className="collection__img"
                              />
                            </div>
                            <div>
                              <h6 className="title color_black">
                                Creative Art collection
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span>12,4353</span>
                        </td>
                        <td>
                          <span className="color_green">+3456%</span>
                        </td>
                        <td>
                          <span className="color_red">-564%</span>
                        </td>
                        <td>
                          <span>
                            12,4353 ETH
                            <span />
                          </span>
                        </td>
                        <td>
                          <span>
                            3.3k
                            <span />
                          </span>
                        </td>
                        <td>
                          <span>
                            23k
                            <span />
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="collection space-x-10">
                            <div className="media">
                              <div className="has_number">1</div>
                              <img
                                src={`img/bg/collection-domain.png`}
                                alt="collection"
                                className="collection__img"
                              />
                            </div>
                            <div>
                              <h6 className="title color_black">
                                Creative Art collection
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span>12,4353</span>
                        </td>
                        <td>
                          <span className="color_green">+3456%</span>
                        </td>
                        <td>
                          <span className="color_red">-564%</span>
                        </td>
                        <td>
                          <span>
                            12,4353 ETH
                            <span />
                          </span>
                        </td>
                        <td>
                          <span>
                            3.3k
                            <span />
                          </span>
                        </td>
                        <td>
                          <span>
                            23k
                            <span />
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="collection space-x-10">
                            <div className="media">
                              <div className="has_number">1</div>
                              <img
                                src={`img/bg/collection-domain.png`}
                                alt="collection"
                                className="collection__img"
                              />
                            </div>
                            <div>
                              <h6 className="title color_black">
                                Creative Art collection
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span>12,4353</span>
                        </td>
                        <td>
                          <span className="color_green">+3456%</span>
                        </td>
                        <td>
                          <span className="color_red">-564%</span>
                        </td>
                        <td>
                          <span>
                            12,4353 ETH
                            <span />
                          </span>
                        </td>
                        <td>
                          <span>
                            3.3k
                            <span />
                          </span>
                        </td>
                        <td>
                          <span>
                            23k
                            <span />
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </TabPanel>
          <TabPanel>
            <section className="section ranking mt-100">
              <div className="container">
                <div className="box d-flex table-responsive">
                  <table className="table ranking ">
                    <thead>
                      <tr>
                        <th scope="col">
                          <span>Collection</span>
                        </th>
                        <th scope="col">
                          <span>Volume</span>
                        </th>
                        <th scope="col">
                          <span>24h %</span>
                        </th>
                        <th scope="col">
                          <span>7d %</span>
                        </th>
                        <th scope="col">
                          <span>Floor Price</span>
                        </th>
                        <th scope="col">
                          <span>Owners</span>
                        </th>
                        <th scope="col">
                          <span>Assets</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="collection space-x-10">
                            <div className="media">
                              <div className="has_number">1</div>
                              <img
                                src={`img/bg/collection-memes.png`}
                                alt="collection"
                                className="collection__img"
                              />
                            </div>
                            <div>
                              <h6 className="title color_black">
                                Creative Memes collection
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span>12,4353</span>
                        </td>
                        <td>
                          <span className="color_green">+3456%</span>
                        </td>
                        <td>
                          <span className="color_red">-564%</span>
                        </td>
                        <td>
                          <span>12,4353 ETH</span>
                        </td>
                        <td>
                          <span>
                            3.3k
                            <span />
                          </span>
                        </td>
                        <td>
                          <span>
                            23k
                            <span />
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="collection space-x-10">
                            <div className="media">
                              <div className="has_number">1</div>
                              <img
                                src={`img/bg/collection-memes.png`}
                                alt="collection"
                                className="collection__img"
                              />
                            </div>
                            <div>
                              <h6 className="title color_black">
                                Creative Art collection
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span>12,4353</span>
                        </td>
                        <td>
                          <span className="color_green">+3456%</span>
                        </td>
                        <td>
                          <span className="color_red">-564%</span>
                        </td>
                        <td>
                          <span>
                            12,4353 ETH
                            <span />
                          </span>
                        </td>
                        <td>
                          <span>
                            3.3k
                            <span />
                          </span>
                        </td>
                        <td>
                          <span>
                            23k
                            <span />
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="collection space-x-10">
                            <div className="media">
                              <div className="has_number">1</div>
                              <img
                                src={`img/bg/collection-memes.png`}
                                alt="collection"
                                className="collection__img"
                              />
                            </div>
                            <div>
                              <h6 className="title color_black">
                                Creative Art collection
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span>12,4353</span>
                        </td>
                        <td>
                          <span className="color_green">+3456%</span>
                        </td>
                        <td>
                          <span className="color_red">-564%</span>
                        </td>
                        <td>
                          <span>
                            12,4353 ETH
                            <span />
                          </span>
                        </td>
                        <td>
                          <span>
                            3.3k
                            <span />
                          </span>
                        </td>
                        <td>
                          <span>
                            23k
                            <span />
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="collection space-x-10">
                            <div className="media">
                              <div className="has_number">1</div>
                              <img
                                src={`img/bg/collection-memes.png`}
                                alt="collection"
                                className="collection__img"
                              />
                            </div>
                            <div>
                              <h6 className="title color_black">
                                Creative Art collection
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span>12,4353</span>
                        </td>
                        <td>
                          <span className="color_green">+3456%</span>
                        </td>
                        <td>
                          <span className="color_red">-564%</span>
                        </td>
                        <td>
                          <span>
                            12,4353 ETH
                            <span />
                          </span>
                        </td>
                        <td>
                          <span>
                            3.3k
                            <span />
                          </span>
                        </td>
                        <td>
                          <span>
                            23k
                            <span />
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="collection space-x-10">
                            <div className="media">
                              <div className="has_number">1</div>
                              <img
                                src={`img/bg/collection-memes.png`}
                                alt="collection"
                                className="collection__img"
                              />
                            </div>
                            <div>
                              <h6 className="title color_black">
                                Creative Art collection
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span>12,4353</span>
                        </td>
                        <td>
                          <span className="color_green">+3456%</span>
                        </td>
                        <td>
                          <span className="color_red">-564%</span>
                        </td>
                        <td>
                          <span>
                            12,4353 ETH
                            <span />
                          </span>
                        </td>
                        <td>
                          <span>
                            3.3k
                            <span />
                          </span>
                        </td>
                        <td>
                          <span>
                            23k
                            <span />
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </TabPanel>
          <TabPanel>
            <section className="section ranking mt-100">
              <div className="container">
                <div className="box d-flex table-responsive">
                  <table className="table ranking ">
                    <thead>
                      <tr>
                        <th scope="col">
                          <span>Collection</span>
                        </th>
                        <th scope="col">
                          <span>Volume</span>
                        </th>
                        <th scope="col">
                          <span>24h %</span>
                        </th>
                        <th scope="col">
                          <span>7d %</span>
                        </th>
                        <th scope="col">
                          <span>Floor Price</span>
                        </th>
                        <th scope="col">
                          <span>Owners</span>
                        </th>
                        <th scope="col">
                          <span>Assets</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="collection space-x-10">
                            <div className="media">
                              <div className="has_number">1</div>
                              <img
                                src={`img/bg/collection-Collectibles.png`}
                                alt="collection"
                                className="collection__img"
                              />
                            </div>
                            <div>
                              <h6 className="title color_black">
                                Creative Collectibles collection
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span>12,4353</span>
                        </td>
                        <td>
                          <span className="color_green">+3456%</span>
                        </td>
                        <td>
                          <span className="color_red">-564%</span>
                        </td>
                        <td>
                          <span>12,4353 ETH</span>
                        </td>
                        <td>
                          <span>
                            3.3k
                            <span />
                          </span>
                        </td>
                        <td>
                          <span>
                            23k
                            <span />
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="collection space-x-10">
                            <div className="media">
                              <div className="has_number">1</div>
                              <img
                                src={`img/bg/collection-collectibles.png`}
                                alt="collection"
                                className="collection__img"
                              />
                            </div>
                            <div>
                              <h6 className="title color_black">
                                Creative Collectibles collection
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span>12,4353</span>
                        </td>
                        <td>
                          <span className="color_green">+3456%</span>
                        </td>
                        <td>
                          <span className="color_red">-564%</span>
                        </td>
                        <td>
                          <span>
                            12,4353 ETH
                            <span />
                          </span>
                        </td>
                        <td>
                          <span>
                            3.3k
                            <span />
                          </span>
                        </td>
                        <td>
                          <span>
                            23k
                            <span />
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="collection space-x-10">
                            <div className="media">
                              <div className="has_number">1</div>
                              <img
                                src={`img/bg/collection-collectibles.png`}
                                alt="collection"
                                className="collection__img"
                              />
                            </div>
                            <div>
                              <h6 className="title color_black">
                                Creative Collectibles collection
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span>12,4353</span>
                        </td>
                        <td>
                          <span className="color_green">+3456%</span>
                        </td>
                        <td>
                          <span className="color_red">-564%</span>
                        </td>
                        <td>
                          <span>
                            12,4353 ETH
                            <span />
                          </span>
                        </td>
                        <td>
                          <span>
                            3.3k
                            <span />
                          </span>
                        </td>
                        <td>
                          <span>
                            23k
                            <span />
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="collection space-x-10">
                            <div className="media">
                              <div className="has_number">1</div>
                              <img
                                src={`img/bg/collection-collectibles.png`}
                                alt="collection"
                                className="collection__img"
                              />
                            </div>
                            <div>
                              <h6 className="title color_black">
                                Creative Collectibles collection
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span>12,4353</span>
                        </td>
                        <td>
                          <span className="color_green">+3456%</span>
                        </td>
                        <td>
                          <span className="color_red">-564%</span>
                        </td>
                        <td>
                          <span>
                            12,4353 ETH
                            <span />
                          </span>
                        </td>
                        <td>
                          <span>
                            3.3k
                            <span />
                          </span>
                        </td>
                        <td>
                          <span>
                            23k
                            <span />
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="collection space-x-10">
                            <div className="media">
                              <div className="has_number">1</div>
                              <img
                                src={`img/bg/collection-collectibles.png`}
                                alt="collection"
                                className="collection__img"
                              />
                            </div>
                            <div>
                              <h6 className="title color_black">
                                Creative Collectibles collection
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span>12,4353</span>
                        </td>
                        <td>
                          <span className="color_green">+3456%</span>
                        </td>
                        <td>
                          <span className="color_red">-564%</span>
                        </td>
                        <td>
                          <span>
                            12,4353 ETH
                            <span />
                          </span>
                        </td>
                        <td>
                          <span>
                            3.3k
                            <span />
                          </span>
                        </td>
                        <td>
                          <span>
                            23k
                            <span />
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </TabPanel>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default Ranking;
