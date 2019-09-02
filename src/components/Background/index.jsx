import React from "react";
import styles from "./background.module.css";

export default function Background() {
    let bowl_puns = [
        "Incredibowl",
        "Unbowlievabowl",
        "Remarkabowl",
        "Appreciabowl",
        "Considerabowl",
        "Adorabowl",
        "Marbowlous",
        "Fabowlous",
    ];
    return (
        <React.Fragment>
            <div className={styles.BackgroundImage}></div>
            <div className={styles.BackgroundText}>
                <h1 className={styles.Title}>
                    {bowl_puns[Math.floor(Math.random() * bowl_puns.length)]}
                </h1>
                <h2 className="text-muted text-center">
                    Satisfy your bowl-related needs
                </h2>
            </div>
        </React.Fragment>
    );
}
