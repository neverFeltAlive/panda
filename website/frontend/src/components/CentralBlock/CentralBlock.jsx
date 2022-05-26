import React from 'react';

import {motion} from "framer-motion";
import Highlighted from "../UI/Highlighted/Highlighted";
import {Link} from "react-router-dom";

import styles from "./CentralBlock.module.css";

const CentralBlock = () => {
    return (
        <div className={[styles.container, "w-100 d-flex flex-column position-relative justify-content-center align-items-center"].join(" ")}>
            <div className="position-absolute w-100"><hr className={styles.separator}/></div>
            <Link to="/details" className={[styles.content, "position-absolute text-center m-0"].join(" ")}>
                <motion.h2
                    className={"h-100 text-center px-5 py-3 w-100"}
                    whileHover={{
                        scale: 1.1,
                        color: "#40322F"
                    }}
                    whileTap={{scale: 0.9}}
                >
                    подробная информация в разделе для<Highlighted> Родителей</Highlighted>
                </motion.h2>
            </Link>
        </div>
    );
};

export default CentralBlock;