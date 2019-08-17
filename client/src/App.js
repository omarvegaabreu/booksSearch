import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Nav from "./components/Nav";
import Header from "./components/Header";
// import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Header />
          <Switch>
            <Route exact path="/" component={Search} />
            <Route path="/saved" component={Saved} />
          </Switch>
          <br />
          <br />
          <br />
          <br />
          {/* <Footer /> */}
        </div>
      </Router>
    );
  }
}

export default App;
