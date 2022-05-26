import React from 'react';

import {Card, CardGroup, Container} from "react-bootstrap";
import {motion} from "framer-motion";
import Highlighted from "../UI/Highlighted/Highlighted";
import AnimatedButton from "../UI/AnimatedButton/AnimatedButton";
import ContentBlock from "../ContentBlock/ContentBlock";
import Separator from "../UI/Separator/Separator";

import {appearAnimation} from "../../constants";

import styles from "./SimpleCardDeck.module.css";

const SimpleCardDeck = ({cards, title}) => {
    return (
        <ContentBlock>
            <div className="container">
                <motion.h1
                    style={{ textAlign: "right" }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.4, once: true }}
                    custom={0}
                    variants={appearAnimation}
                >
                    {title}
                </motion.h1>
                <Separator/>
                <div className="card-group text-center row-cols-lg-3">
                    {cards.map((card, index) =>
                        card.id % 2 === 0
                            ?(
                                <div key={card.id} className="col">
                                    <motion.div
                                        className={[styles.card, styles["card-dark"], "card m-4"].join(" ")}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ amount: 0.4, once: true }}
                                        custom={index}
                                        variants={appearAnimation}
                                    >
                                        <Card.Header style={{ backgroundColor: "rgba(218, 193, 109, 0.7)"}}>
                                            <h2><Highlighted>{card.head}</Highlighted></h2>
                                        </Card.Header>
                                        <Card.Body>
                                            <img
                                                className={[styles.image, "rounded-circle mb-2"].join(" ")}
                                                width="140"
                                                height="140"
                                                src={card.image}
                                                alt="Image"
                                            />
                                            <Card.Title><h2>{card.title}</h2></Card.Title>
                                        </Card.Body>
                                    </motion.div>
                                </div>

                            )
                            :(
                                <div key={card.id} className="col">
                                    <motion.div
                                        className={[styles.card, "card m-4"].join(" ")}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ amount: 0.4, once: true }}
                                        custom={index}
                                        variants={appearAnimation}
                                    >
                                        <Card.Header style={{ backgroundColor: "rgba(163, 201, 38, 0.5)"}}>
                                            <h2><Highlighted>{card.head}</Highlighted></h2>
                                        </Card.Header>
                                        <Card.Body>
                                            <img
                                                className={[styles.image, styles["image-dark"], "rounded-circle mb-2"].join(" ")}
                                                width="140"
                                                height="140"
                                                src={card.image}
                                                alt="Image"
                                            />
                                            <Card.Title><h2>{card.title}</h2></Card.Title>
                                        </Card.Body>
                                    </motion.div>
                                </div>
                            )
                    )}
                </div>
            </div>
        </ContentBlock>
    );
};

export default SimpleCardDeck;