import React from 'react';

import styles from "./Highlighted.module.css";

const Highlighted = ({children, style, className}) => {
    return (
        <span className={[styles.highlighted, className].join(" ")} style={style}>{children}</span>
    );
};

export default Highlighted;