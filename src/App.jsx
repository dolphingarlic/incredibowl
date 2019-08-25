import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import BowlList from "./components/BowlList";
import Background from "./components/Background";

//TODO Web Template Studio: Add routes for your new pages here.
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Background} />
          <Route path="/bowls" component={BowlList} />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
