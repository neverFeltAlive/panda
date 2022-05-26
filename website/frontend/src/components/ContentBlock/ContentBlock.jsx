import React from 'react';

import styles from "./ContentBlock.module.css";

const ContentBlock = ({children}) => {
    return (
        <div className={styles["content-block-container"]}>
            <div className={[styles["content-block"], "m-0 mx-auto"].join(" ")}>
                {children}
            </div>
        </div>

    );
};

export default ContentBlock;