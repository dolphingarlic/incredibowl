import React, { Component } from "react";
import "./bowllist.module.css";

class BowlList extends Component {
    constructor() {
        super();
        this.state = {
            bowls: [],
        };
    }

    componentDidMount() {
        fetch("http://localhost:3001/bowls/", {method: "GET", mode: "cors"})
        .then((response) => response.json())
        .then(data => {
            let bowls = data.map((bowl) => {
                return (
                    <li>
                        <div className="card" style={{width: '18rem'}}>
                            <img className="card-img-top" src={bowl.image} alt={bowl.name}/>
                            <div className="card-body">
                                <h5 className="card-title">{bowl.name}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{bowl.style}</h6>
                                <p className="card-text">{bowl.description}</p>
                            </div>
                        </div>
                    </li>
                )
            });

            this.setState({bowls: bowls});
        });
    }

    render() {
        return (
            <div className="container-fluid">
                <ul>
                    {this.state.bowls}
                </ul>
            </div>
        );
    }
}

export default BowlList;
