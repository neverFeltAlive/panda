import React from 'react';

import {motion} from "framer-motion";
import AnimatedButton from "../UI/AnimatedButton/AnimatedButton";
import Name from "../Name/Name";
import Separator from "../UI/Separator/Separator";

import {dropInAnimation, fadeInAnimation} from "../../constants";

import styles from "./Cover.module.css";
import {Link} from "react-router-dom";

const Cover = () => {
    return (
        <motion.div
            className={[styles["particles-mask-image"], "container-fluid d-flex position-relative justify-content-center align-items-center"].join(" ")}
            variants={fadeInAnimation}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <motion.div
                className={[styles.cover, "text-center"].join(" ")}
                variants={dropInAnimation}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <h1>Частный</h1>
                <Name big={true}/>
                <br/>
                <p>Детский сад со спортивным уклоном бла бла бла бла бла бла бла бла бла
                    бла бла бла бла бла бла бла бла...</p>
                <Separator/>
                <Link style={{textDecoration: "none"}} to="/about">
                    <AnimatedButton>
                        Узнать подробнее
                    </AnimatedButton>
                </Link>
            </motion.div>
        </motion.div>
    );
};

export default Cover;