import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import AddBowl from "./components/AddBowl";
import Background from "./components/Background";
import BowlList from "./components/BowlList";
import Footer from "./components/Footer";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Random from "./components/Random";
import RateBowl from "./components/RateBowl";
import Signup from "./components/Signup";
import ViewBowl from "./components/ViewBowl";

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
                method: "GET",
            })
                .catch(e => alert(e))
                .then(res => res.json())
                .then(json => {
                    this.setState({ username: json.username });
                });
        }

        if (this.state.username === "") this.setState({ logged_in: false });
    }

    handleLogin = (e, data) => {
        e.preventDefault();
        fetch("http://localhost:3001/token_auth/", {
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
            })
            .catch(() => {
                alert("Invalid credentials");
            });
    };

    handleSignup = (e, data) => {
        e.preventDefault();
        fetch("http://localhost:3001/users/", {
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
            })
            .catch(() => {
                alert("Invalid data");
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
                    <Route
                        path="/add"
                        component={props => (
                            <AddBowl
                                username={this.state.username}
                                {...props}
                            />
                        )}
                    />
                    <Route path="/bowls" component={BowlList} />
                    <Route
                        path="/bowl/:bowlId"
                        component={props => (
                            <ViewBowl logged_in={this.state.logged_in} {...props} />
                        )}
                    />
                    <Route path="/random" component={Random} />
                    <Route
                        path="/rate/:bowlId"
                        component={props => (
                            <RateBowl logged_in={this.state.logged_in} {...props} />
                        )}
                    />
                    <Route
                        path="/login"
                        component={props => (
                            <Login handleLogin={this.handleLogin} {...props} />
                        )}
                    />
                    <Route
                        path="/signup"
                        component={props => (
                            <Signup
                                handleSignup={this.handleSignup}
                                {...props}
                            />
                        )}
                    />
                </Switch>
                <Footer />
            </React.Fragment>
        );
    }
}

export default App;
