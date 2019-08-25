import React from "react";
import styles from "./footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container-fluid">
                <div className="row justify-content-around">
                    <div className="col-8 col-md-5">
                        <h5 className={styles.title}>Incredibowl</h5>
                        <p className={styles.description}>
                            A website where you can share your love for bowls
                        </p>
                    </div>
                    <div className="col-2">
                        <ul className="list-unstyled">
                            <li>
                                <a
                                    className={styles.footerlink}
                                    href="https://www.patreon.com/andiqu"
                                >
                                    Donate
                                </a>
                            </li>
                            <li>
                                <a
                                    className={styles.footerlink}
                                    href="https://en.wikipedia.org/wiki/Bowl"
                                >
                                    About Bowls
                                </a>
                            </li>
                            <li>
                                <a
                                    className={styles.footerlink}
                                    href="https://www.ikea.com/gb/en/cat/bowls-18864"
                                >
                                    More Bowls
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
