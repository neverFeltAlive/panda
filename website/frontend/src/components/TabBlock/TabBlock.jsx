import React from 'react';

import {motion} from "framer-motion";
import {Col, Container, Nav, NavItem, NavLink, Row, TabContainer, TabContent, TabPane} from "react-bootstrap";
import ContentBlock from "../ContentBlock/ContentBlock";
import Separator from "../UI/Separator/Separator";
import Highlighted from "../UI/Highlighted/Highlighted";

import {appearAnimation} from "../../constants";

import styles from "./TabBlock.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './TabBlock.css';

const TabBlock = ({tabs, title}) => {
    return (
        <ContentBlock>
            <div className={[styles["group-container"], "container"].join(" ")}>
                <motion.h1
                    className="text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{amount: 0.4, once: true}}
                    custom={0}
                    variants={appearAnimation}
                >
                    {title}
                </motion.h1>
                <TabContainer id="led-tabs-example" defaultActiveKey={tabs[0].id.toString()}>
                    <Nav className={[styles.navbar, "justify-content-center", "mt-3"].join(" ")}>
                        {tabs.map((tab, index) =>
                            <NavLink key={tab.id} eventKey={tab.id} className={styles.link}>
                                <motion.h2
                                    className="text-center"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{amount: 0.4, once: true}}
                                    whileHover={{scale: 1.1}}
                                    whileTap={{scale: 0.9}}
                                    custom={index}
                                    variants={appearAnimation}
                                >
                                    <Highlighted>
                                        {tab.title}
                                    </Highlighted>
                                </motion.h2>
                            </NavLink>
                        )}
                    </Nav>
                    <motion.div
                        className="tab-content"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{amount: 0.4, once: true}}
                        custom={4}
                        variants={appearAnimation}
                    >
                        {tabs.map(tab =>
                            <TabPane key={tab.id} eventKey={tab.id.toString()} className="p-0 p-sm-5 m-0 mx-md-5">
                                <p className={[styles.text, "w-100 w-sm-75 h-100 m-auto mt-4"].join(" ")}>{tab.text}</p>
                            </TabPane>
                        )}
                    </motion.div>
                </TabContainer>
            </div>
        </ContentBlock>
    );
};

export default TabBlock;