import React from 'react';

import {motion} from "framer-motion";

import {fadeInAnimation} from "../../constants";

const Wrapper = ({children}) => {
    return (
        <motion.div
            className="position-relative w-100"
            variants={fadeInAnimation}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            {children}
        </motion.div>
    );
};

export default Wrapper;