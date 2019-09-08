import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import styles from "./addbowl.module.css"

class AddBowl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            style: "",
            description: "",
            image: "",
            username: props.username,
        };
    }

    validateForm() {
        return (
            this.state.name.length > 0 &&
            this.state.style.length > 0 &&
            this.state.description.length > 0 &&
            this.state.image.length > 0
        );
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value,
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        fetch("/api/bowls/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state),
        })
            .catch(() => {
                alert("Invalid data");
            });
    }

    render() {
        return (
            <div className={styles.AddBowl}>
                <form
                    onSubmit={e => {
                        this.handleSubmit(e);
                        this.props.history.push("/bowls");
                    }}
                >
                    <FormGroup controlId="name" bsSize="large">
                        <FormLabel>Bowl Name</FormLabel>
                        <FormControl
                            autoFocus
                            value={this.state.name}
                            onChange={this.handleChange}
                            type="text"
                        />
                    </FormGroup>
                    <FormGroup controlId="style" bsSize="large">
                        <FormLabel>Bowl Style</FormLabel>
                        <FormControl
                            value={this.state.style}
                            onChange={this.handleChange}
                            type="text"
                        />
                    </FormGroup>
                    <FormGroup controlId="description" bsSize="large">
                        <FormLabel>Bowl Description</FormLabel>
                        <FormControl
                            value={this.state.description}
                            onChange={this.handleChange}
                            as="textarea"
                            rows="3"
                        />
                    </FormGroup>
                    <FormGroup controlId="image" bsSize="large">
                        <FormLabel>Image URL</FormLabel>
                        <FormControl
                            value={this.state.image}
                            onChange={this.handleChange}
                            type="text"
                        />
                    </FormGroup>
                    <Button
                        block
                        bsSize="large"
                        disabled={!this.validateForm()}
                        type="submit"
                    >
                        Submit
                    </Button>
                </form>
            </div>
        );
    }
}

export default AddBowl;