import React from "react";
import PropTypes from "prop-types";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

export default function NavBar(props) {
    const logged_out = (
        <div className="navbar-nav ml-auto">
            <Link className="nav-link" to="/signup">
                Sign up
            </Link>
            <Link className="nav-link" to="/login">
                Login
            </Link>
        </div>
    );

    const logged_in = (
        <div className="navbar-nav ml-auto">
            <Link className="nav-link" onClick={props.handleLogout} to="/">
                Log out
            </Link>
        </div>
    );

    return (
        <React.Fragment>
            <div className={styles.skipLink}>
                <a href="#mainContent">Skip to Main Content</a>
            </div>
            <Navbar expand="md" bg="dark" variant="dark">
                <Link className="navbar-brand" to="/">
                    Incredibowl
                </Link>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="mr-auto">
                        <Link className="nav-link" to="/random">
                            Random bowl
                        </Link>
                        <Link className="nav-link" to="/bowls">
                            All bowls
                        </Link>
                        {props.logged_in ? (
                            <Link className="nav-link" to="/add">
                                Add bowls
                            </Link>
                        ) : (
                            <React.Fragment />
                        )}
                    </Nav>
                    {props.logged_in ? logged_in : logged_out}
                </Navbar.Collapse>
            </Navbar>
        </React.Fragment>
    );
}

NavBar.propTypes = {
    logged_in: PropTypes.bool.isRequired,
    handleLogout: PropTypes.func.isRequired,
};
