import React, { Component } from "react";
import styles from "./bowllist.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Card } from "react-bootstrap";

class BowlList extends Component {
    constructor() {
        super();
        this.state = {
            bowls: [],
        };
    }

    componentDidMount() {
        fetch("http://localhost:3001/bowls/", { method: "GET", mode: "cors" })
            .then(response => response.json())
            .then(data => {
                let bowls = data.map(bowl => {
                    let rating;
                    if (bowl.ratings_cnt === 0) rating = "N/A";
                    else
                        rating =
                            Math.round(
                                (bowl.ratings_sum / bowl.ratings_cnt) * 10
                            ) / 10;

                    return (
                        <Card style={{ width: "20rem", margin: "1rem" }}>
                            <Card.Img
                                variant="top"
                                className={styles.CardImage}
                                src={bowl.image}
                                alt={bowl.name}
                            />
                            <Card.Body style={{ background: "#eee" }}>
                                <Card.Title>
                                    <Link to={`bowl/${bowl.pk}`}>
                                        {bowl.name}
                                    </Link>
                                </Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">
                                    {bowl.style}
                                </Card.Subtitle>
                                <p>
                                    <FontAwesomeIcon
                                        icon={faStar}
                                        className={styles.Star}
                                    />{" "}
                                    - {rating}
                                </p>
                                <Card.Text>{bowl.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    );
                });

                this.setState({ bowls: bowls });
            })
            .catch(e => {
                let msg = (
                    <h1 className={styles.ErrorMsg}>An error occurred :C</h1>
                );

                this.setState({ bowls: msg });
            });
    }

    render() {
        return (
            <React.Fragment>
                <div className="container-fluid row justify-content-around">
                    {this.state.bowls}
                </div>
            </React.Fragment>
        );
    }
}

export default BowlList;
