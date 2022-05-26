import React from 'react';

import Highlighted from "../UI/Highlighted/Highlighted";

import styles from "./Name.module.css";

const Name = ({small}) => {
    return (
        <h1 className={[styles.title, "text-center"].join(" ")} style={small ? {fontSize: "30px"} : {}}>
            Детский Сад <Highlighted  className={styles.name} style={small ? {fontSize: "40px"} : {}}>"Панда"</Highlighted>
        </h1>
    );
};

export default Name;