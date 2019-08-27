import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import BowlList from "./components/BowlList";
import Background from "./components/Background";
import Login from "./components/Login";
import Signup from "./components/Signup";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logged_in: localStorage.getItem("token") ? true : false,
            username: "",
        };
    }

    componentDidMount() {
        if (this.state.logged_in) {
            fetch("http://localhost:3001/current_user/", {
                headers: {
                    Authorization: `JWT ${localStorage.getItem("token")}`,
                },
            })
                .then(res => res.json())
                .then(json => {
                    this.setState({ username: json.username });
                });
        }
    }

    handleLogin = (e, data) => {
        e.preventDefault();
        fetch("http://localhost:3000/token_auth/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(json => {
                localStorage.setItem("token", json.token);
                this.setState({
                    logged_in: true,
                    username: json.user.username,
                });
            });
    };

    handleSignup = (e, data) => {
        e.preventDefault();
        fetch("http://localhost:3000/users/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(json => {
                localStorage.setItem("token", json.token);
                this.setState({
                    logged_in: true,
                    username: json.username,
                });
            });
    };

    handleLogout = () => {
        localStorage.removeItem("token");
        this.setState({ logged_in: false, username: "" });
    };

    render() {
        return (
            <React.Fragment>
                <NavBar
                    logged_in={this.state.logged_in}
                    handleLogout={this.handleLogout}
                />
                <Switch>
                    <Route exact path="/" component={Background} />
                    <Route path="/bowls" component={BowlList} />
                    <Route path="/bowl/:bowlId" component={ViewBowl} />
                    <Route path="/login" component={() => <Login handleLogin={this.handleLogin} />} />
                    <Route path="/signup" render={() => <Signup handleSignup={this.handleSignup} />} />
                </Switch>
                <Footer />
            </React.Fragment>
        );
    }
}

export default App;
