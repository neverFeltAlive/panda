import React from 'react';

import {motion} from "framer-motion";

import styles from "./AnimatedButton.module.css";

const AnimatedButton = ({type, handleClick, children, reverse, style, className, disabled}) => {
    return (
        <motion.button
            className={reverse ? [className, styles.button, styles.reverse, "text-center p-2"].join(" ") : [className, styles.button, "text-center p-2"].join(" ")}
            style={style}
            onClick={handleClick}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            type={type}
            disabled={disabled}
        >
            <p className="p-0 m-0">{children}</p>
        </motion.button>
    );
};

export default AnimatedButton;