import React from "react";
// import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

export default function Thumbnail(bowl) {
  return(
    <React.Fragment>
      <div>
        <img src="{bowl.image}" alt="A bowl"></img>
      </div>
      <div>
        <p>Name: {bowl.name}</p>
        <p>Style: {bowl.style}</p>
        <p>Date Posted: {bowl.post_date}</p>
        <p>Posted By: {bowl.user}</p>
      </div>
    </React.Fragment>
  );
}
