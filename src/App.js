import React from "react";
import "./App.css";

//pages
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Header from "./utilities/Header";
import Explore from "./Pages/Explore";
import Footer from "./utilities/Footer";
import Profile from "./Pages/Profile";
import ScrollToTop from "./utilities/Scrolltotop;";
import Deshboard from "./Pages/Deshboard";
import Headerdashboard from "./utilities/Headerdeshboard";

function App() {
  return (
    <React.Fragment>
      <Router>
        <ScrollToTop />
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
            <Footer />
          </Route>

          <Route exact path="/explore">
            <Header />
            <Explore />
            <Footer />
          </Route>

          <Route path="/profile">
            <Header />
            <Profile />
            <Footer />
          </Route>

          <Route path="/deshboard">
            <Headerdashboard />
            <Deshboard />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
