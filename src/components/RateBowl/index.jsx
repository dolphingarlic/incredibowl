import "rc-slider/assets/index.css";
import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Slider from "rc-slider";
import styles from "./ratebowl.module.css";

const marks = {
    1: "Horribowl",
    2: "Miserabowl",
    3: "Tolerabowl",
    4: "Remarkabowl",
    5: "Incredibowl",
};

class RateBowl extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rating: 3,
            bowl: null,
        };
    }

    componentDidMount() {
        fetch(`http://localhost:3001/bowl/${this.props.match.params.bowlId}`, { method: "GET", mode: "cors" })
            .then(response => response.json())
            .then(data => {
                this.setState({ bowl: data });
            })
    }

    handleChange = value => {
        this.setState({
            rating: value,
        });
    };

    handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:3001/rate_bowl/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state),
        })
            .catch(() => {
                alert("Something went wrong");
            })
    }

    render() {
        if (!this.props.logged_in) this.props.history.push("/bowls");
        if (this.state.bowl === null) return (<React.Fragment />);

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

                        <hr />
                        <h3>This bowl is...</h3>

                        <form onSubmit={e => {
                            this.handleSubmit(e);
                            this.props.history.push("/bowls");
                        }}>
                            <Slider
                                className={styles.Slider}
                                min={1}
                                max={5}
                                marks={marks}
                                step={null}
                                onChange={this.handleChange}
                                defaultValue={3}
                            />

                            <Button
                                bsSize="large"
                                type="submit"
                            >
                                Submit
                            </Button>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default RateBowl;
