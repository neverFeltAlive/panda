import React from 'react';

import {motion} from "framer-motion";
import RequestPhoneCall from "../RequestPhoneCall/RequestPhoneCall";

import {rotateAnimation} from "../../constants";

import {FaPhoneAlt} from "react-icons/fa"

import styles from "./FloatingButton.module.css";

const FloatingButton = ({setModal}) => {
    return (
        <div className="position-fixed bottom-0 end-0 p-3 p-md-4 p-xl-5">
            <motion.div
                className={[styles.icon, "d-flex justify-content-center align-items-center"].join(" ")}
                onClick={() => {setModal(<RequestPhoneCall/>);}}
                variants={rotateAnimation}
                whileHover="animate"
            >
                <FaPhoneAlt/>
            </motion.div>
        </div>
    );
};

export default FloatingButton;