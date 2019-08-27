import React, { Component } from "react";
import styles from "./ViewBowl.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

class ViewBowl extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bowl: null,
        };
    }

    componentDidMount() {}

    render() {
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
                <div>
                    <img
                        src={this.state.bowl.image}
                        alt={this.state.bowl.name}
                    />
                </div>
                <div>
                    <h1 clasName="display-1">{this.state.bowl.name}</h1>
                    <h2 className="text-muted">{this.state.bowl.style}</h2>
                    <p>
                        <FontAwesomeIcon
                            icon={faStar}
                            className={styles.Star}
                        />{" "}
                        - {rating}
                    </p>
                    <p>{this.state.bowl.description}</p>
                </div>
            </React.Fragment>
        );
    }
}
