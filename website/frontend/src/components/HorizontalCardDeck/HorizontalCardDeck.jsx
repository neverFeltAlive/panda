import React from 'react';

import ContentBlock from "../ContentBlock/ContentBlock";
import {motion} from "framer-motion";
import {Card, CardImg} from "react-bootstrap";
import Highlighted from "../UI/Highlighted/Highlighted";
import Separator from "../UI/Separator/Separator";

import {appearAnimation} from "../../constants";

import styles from "./HorizontalCardDeck.module.css";

import art from "../../assets/art.png";
import sport from "../../assets/sport.png";
import music from "../../assets/music.png";

const HorizontalCardDeck = () => {
    return (
        // <ContentBlock color="rgba(218, 193, 109, 0.2)">
        <ContentBlock>

            <div className="container text-center">
                <motion.h1
                    className="text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{amount: 0.4, once: true}}
                    custom={0}
                    variants={appearAnimation}
                >
                    НАШИ НАПРАВЛЕНИЯ
                </motion.h1>
                <Separator/>
                <motion.div
                    className={[styles.card, "row mx-5 my-0 my-sm-5 mb-0 px-0 py-0 px-sm-5 py-sm-2 text-center"].join(" ")}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{amount: 0.4, once: true}}
                    custom={1}
                    variants={appearAnimation}
                >
                    <div className={[styles.body, "col-sm-7 my-3 my-sm-0 p-3"].join(" ")}>
                        <div className="w-100 text-center">
                            <img
                                className={styles["image-hidden"]}
                                width="80"
                                height="80"
                                src={sport}
                                alt="Image"
                            />
                        </div>
                        <strong className="d-inline-block" style={{color: "#A3C926"}}>СПОРТ</strong>
                        <h2><Highlighted>Акробатики</Highlighted></h2>
                        <p className={[styles.text, "card-text mt-3"].join(" ")}>
                            Для активных детей, любящих спортивные развлечения
                        </p>

                    </div>
                    <div className="col-sm-5">
                        <img
                            className={[styles.image, "mb-2"].join(" ")}
                            width="300"
                            height="300"
                            src={sport}
                            alt="Image"
                        />
                    </div>

                </motion.div>
                <motion.div
                    className={[styles.card, "row mx-5 my-0 my-sm-5 mb-0 px-0 py-0 px-sm-5 py-sm-2 text-center"].join(" ")}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{amount: 0.4, once: true}}
                    custom={2}
                    variants={appearAnimation}
                >
                    <div className="col-sm-5">
                        <img
                            className={[styles.image, "mb-2"].join(" ")}
                            width="300"
                            height="300"
                            src={art}
                            alt="Image"
                        />
                    </div>

                    <div
                        className={[styles.body, "col-sm-7 my-3 my-sm-0 p-3"].join(" ")}
                        style={{ textAlign: "right" }}
                    >
                        <div className="w-100 text-center">
                            <img
                                className={styles["image-hidden"]}
                                width="80"
                                height="80"
                                src={art}
                                alt="Image"
                            />
                        </div>
                        <strong className="d-inline-block" style={{color: "#A3C926"}}>ТВОРЧЕСТВО</strong>
                        <h2><Highlighted>Художнечки</Highlighted></h2>
                        <p className={[styles.text, "card-text mt-3"].join(" ")}>
                            Для творческих ребят, обожающих испачкать руки в краске
                        </p>
                    </div>
                </motion.div>
                <motion.div
                    className={[styles.card, "row mx-5 my-0 my-sm-5 mb-0 px-0 py-0 px-sm-5 py-sm-2 text-center"].join(" ")}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{amount: 0.4, once: true}}
                    custom={3}
                    variants={appearAnimation}
                >
                    <div className={[styles.body, "col-sm-7 my-3 my-sm-0 p-3"].join(" ")}>
                        <div className="w-100 text-center">
                            <img
                                className={styles["image-hidden"]}
                                width="80"
                                height="80"
                                src={music}
                                alt="Image"
                            />
                        </div>
                        <strong className="d-inline-block" style={{color: "#A3C926"}}>МУЗЫКА</strong>
                        <h2><Highlighted>Музыкантики</Highlighted></h2>
                        <p className={[styles.text, "card-text mt-3"].join(" ")}>
                            Для ценителей настоящих калыбелей, не упускающих фальшивых нот
                        </p>
                    </div>
                    <div className="col-sm-5">
                        <img
                            className={[styles.image, "mb-2"].join(" ")}
                            width="300"
                            height="300"
                            src={music}
                            alt="Image"
                        />
                    </div>
                </motion.div>
            </div>
        </ContentBlock>
    );
};

export default HorizontalCardDeck;