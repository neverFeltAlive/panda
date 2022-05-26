import React from 'react';

import {motion, AnimatePresence} from "framer-motion";

import {dropInAnimation, fadeInAnimation, rotateAnimation} from "../../constants";

import {GrClose} from "react-icons/gr";

import styles from "./Modal.module.css";
import Separator from "../UI/Separator/Separator";

const Modal = ({children, isVisible, setVisible}) => {
    const clickHandler = (e) =>{
        e.stopPropagation();
        setVisible(false);
    }

    return (
        <AnimatePresence>
            { isVisible && (
                <motion.div
                    className={[styles.backdrop, "position-fixed d-flex align-items-center w-100 h-100 m-0 p-0"].join(" ")}
                    onClick={(e) => {clickHandler(e)}}
                    variants={fadeInAnimation}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <motion.div
                        className={[styles.modal, "m-auto"].join(" ")}
                        onClick={(e) => e.stopPropagation()}
                        variants={dropInAnimation}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <div className={styles.content}>
                            <div className="w-100 p-0 m-0"
                                 style={{ textAlign: "right" }}
                            >
                                <h3 className="p-3 pb-0" onClick={(e) => clickHandler(e)}>
                                    <GrClose/>
                                </h3>
                            </div>
                            <div className="p-5 pt-0">
                                {children}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

// TODO: icon animation

export default Modal;