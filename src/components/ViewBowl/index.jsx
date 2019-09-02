import React, { Component } from "react";
import styles from "./viewbowl.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

class ViewBowl extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bowl: null,
        };
    }

    componentDidMount() {
        fetch(`http://localhost:3001/bowl/${this.props.match.params.bowlId}`, {
            method: "GET",
            mode: "cors",
        })
            .then(response => response.json())
            .then(data => {
                this.setState({ bowl: data });
            });
    }

    render() {
        if (this.state.bowl === null) return <React.Fragment />;

        const rate_button = (
            <Link
                className="btn btn-outline-secondary"
                to={"/rate/" + this.props.match.params.bowlId}
            >
                Rate it
            </Link>
        );

        let rating;
        if (this.state.bowl.ratings_cnt === 0) rating = "N/A";
        else
            rating =
                Math.round(
                    (this.state.bowl.ratings_sum /
                        this.state.bowl.ratings_cnt) *
                        10
                ) / 10;

        return (
            <React.Fragment>
                <div className={styles.Container}>
                    <div className={styles.Image}>
                        <img
                            src={this.state.bowl.image}
                            alt={this.state.bowl.name}
                        />
                    </div>
                    <div className={styles.Detail}>
                        <h1 className="display-3">{this.state.bowl.name}</h1>
                        <h2 className="text-muted">{this.state.bowl.style}</h2>
                        <div>
                            <span>
                                <FontAwesomeIcon
                                    icon={faStar}
                                    className={styles.Star}
                                />{" "}
                                - {rating}
                            </span>
                            <span>{this.props.logged_in ? rate_button : null}</span>
                        </div>
                        <p>{this.state.bowl.description}</p>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ViewBowl;

ViewBowl.propTypes = {
    logged_in: PropTypes.bool.isRequired,
};
