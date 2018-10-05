import React from "react";
import Preview from "../views/Preview";


// All HOME PAGE ROUTES

import Home1 from "../views/homes/Home1"
import Home2 from "../views/homes/Home2"
import Home3 from "../views/homes/Home3"

//  Account inner pages
import ConnectWalllet from "../views/pages/account/ConnectWalllet"
import EditProfile from "../views/pages/account/EditProfile"
import Login from "../views/pages/account/Login"
import Profile from "../views/pages/account/Profile"
import Register from "../views/pages/account/Register"

//  Blog inner pages
import Blog from "../views/pages/blog/Blog"
import Article from "../views/pages/blog/Article"

//  item inner pages

import ItemDetails from "../views/pages/item/ItemDetails"
import Upload from "../views/pages/item/Upload"
import UploadType from "../views/pages/item/UploadType"

// NftPages
import Collections from "../views/pages/NftPages/Collections"
import Creators from "../views/pages/NftPages/Creators"
import LiveAuctions from "../views/pages/NftPages/LiveAuctions"
import Marketplace from "../views/pages/NftPages/Marketplace"
import Ranking from "../views/pages/NftPages/Ranking"
import UpcomingProjects from "../views/pages/NftPages/UpcomingProjects"

// other pages
import Activity from "../views/pages/others/Activity"
import Newsletter from "../views/pages/others/Newsletter"
import NoResults from "../views/pages/others/NoResults"
import PrivacyPolicy from "../views/pages/others/PrivacyPolicy"
import NotFound from "../views/NotFound"
import Chat from "../views/pages/Support/Chat"
import SubmitRequest from "../views/pages/Support/SubmitRequest"
import Faq from "../views/pages/Support/Faq"
import Forum from "../views/pages/forum/Forum"
import PostDetails from "../views/pages/forum/PostDetails"
import Contact from "../views/pages/Support/Contact"






// Route Specific
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const Routes = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/" component={Preview} />
                    <Route path="/home-1" component={Home1} />
                    <Route path="/home-2" component={Home2} />
                    <Route path="/home-3" component={Home3} />
                    {/* inner pages */}
                    <Route path="/connect-wallet" component={ConnectWalllet} />
                    <Route path="/login" component={Login} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/edit-profile" component={EditProfile} />
                    <Route path="/register" component={Register} />
                    <Route path="/blog" component={Blog} />
                    <Route path="/article" component={Article} />
                    <Route path="/item-details" component={ItemDetails} />
                    <Route path="/upload" component={Upload} />
                    <Route path="/upload-type" component={UploadType} />
                    <Route path="/collections" component={Collections} />
                    <Route path="/creators" component={Creators} />
                    <Route path="/live-auctions" component={LiveAuctions} />
                    <Route path="/marketplace" component={Marketplace} />
                    <Route path="/ranking" component={Ranking} />
                    <Route path="/upcoming-projects" component={UpcomingProjects} />
                    <Route path="/activity" component={Activity} />
                    <Route path="/newsletter" component={Newsletter} />
                    <Route path="/chat" component={Chat} />
                    <Route path="/submit-request" component={SubmitRequest} />
                    <Route path="/no-results" component={NoResults} />
                    <Route path="/faq" component={Faq} />
                    <Route path="/privacy-policy" component={PrivacyPolicy} />
                    <Route path="/forum" component={Forum} />
                    <Route path="/post-details" component={PostDetails} />
                    <Route path="/contact" component={Contact} />
                    <Route component={NotFound} />

                </Switch>
            </Router>
        </>
    );
};

export default Routes;
