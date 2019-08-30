import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import styles from "./signup.module.css";
import PropTypes from "prop-types";

class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            first_name: "",
            last_name: "",
            password: "",
        };
    }

    validateForm() {
        return (
            this.state.username.length > 0 &&
            this.state.first_name.length > 0 &&
            this.state.last_name.length > 0 &&
            this.state.password.length > 0
        );
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value,
        });
    }

    render() {
        return (
            <div className={styles.Signup}>
                <form
                    onSubmit={e => {
                        this.props.handleSignup(e, this.state);
                        this.props.history.push("/");
                    }}
                >
                    <FormGroup controlId="username" bsSize="large">
                        <FormLabel>Username</FormLabel>
                        <FormControl
                            autoFocus
                            value={this.state.username}
                            onChange={this.handleChange}
                            type="text"
                        />
                    </FormGroup>
                    <FormGroup controlId="first_name" bsSize="large">
                        <FormLabel>First Name</FormLabel>
                        <FormControl
                            value={this.state.first_name}
                            onChange={this.handleChange}
                            type="text"
                        />
                    </FormGroup>
                    <FormGroup controlId="last_name" bsSize="large">
                        <FormLabel>Last Name</FormLabel>
                        <FormControl
                            value={this.state.last_name}
                            onChange={this.handleChange}
                            type="text"
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <FormLabel>Password</FormLabel>
                        <FormControl
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                        />
                    </FormGroup>
                    <Button
                        block
                        bsSize="large"
                        disabled={!this.validateForm()}
                        type="submit"
                    >
                        Sign Up
                    </Button>
                </form>
            </div>
        );
    }
}

export default Signup;

Signup.propTypes = {
    handleSignup: PropTypes.func.isRequired,
};
