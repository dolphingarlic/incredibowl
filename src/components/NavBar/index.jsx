import React from "react";
import PropTypes from "prop-types";
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
            <nav className="navbar navbar-expand-sm navbar-light border-bottom justify-content-between">
                <Link className="navbar-brand" to="/">
                    Incredibowl
                </Link>
                <div className="navbar-nav mr-auto">
                    <Link className="nav-link" to="/random">
                        Random bowl
                    </Link>
                    <Link className="nav-link" to="/bowls">
                        All bowls
                    </Link>
                </div>
                {props.logged_in ? logged_in : logged_out}
            </nav>
        </React.Fragment>
    );
}

NavBar.propTypes = {
    logged_in: PropTypes.bool.isRequired,
    handleLogout: PropTypes.func.isRequired,
};
