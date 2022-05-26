import React from 'react';

import {Card, CardImg} from "react-bootstrap";
import {motion} from "framer-motion";
import ContentBlock from "../ContentBlock/ContentBlock";
import AnimatedButton from "../UI/AnimatedButton/AnimatedButton";
import Separator from "../UI/Separator/Separator";
import Highlighted from "../UI/Highlighted/Highlighted";

import {appearAnimation} from "../../constants";

import styles from "./CardDeck.module.css";

const CardDeck = ({cards, title}) => {
    return (
        <ContentBlock>
            <div className="container text-center">
                <motion.h1
                    style={{ textAlign: "left" }}
                    custom={0}
                    variants={appearAnimation}
                >
                    {title}
                </motion.h1>
                <Separator/>
                <div className="card-group text-center row">
                    {cards.map((card, index) =>
                        card.id % 2 === 0
                            ? (
                                <div className="col m-2 my-lg-3 m-xl-1" key={card.id}>
                                    <motion.div
                                        className={[styles.card, styles["card-inner"], styles["card-inner-even"], "card m-auto"].join(" ")}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ amount: 0.4, once: true }}
                                        custom={index}
                                        variants={appearAnimation}
                                    >
                                        <Card.Body>
                                            <Card.Title><h2><Highlighted>{card.title}</Highlighted></h2></Card.Title>
                                            <Separator/>
                                            <Card.Text>{card.text}</Card.Text>
                                            <AnimatedButton reverse={false}>{card.button}</AnimatedButton>
                                        </Card.Body>
                                        <CardImg
                                            variant="bottom"
                                            className={styles.image}
                                            src={card.image}
                                            width="100%"
                                            height="250px"
                                        />
                                    </motion.div>
                                </div>
                            )
                            : (
                                <div className="col m-2 m-xl-1" key={card.id}>
                                    <motion.div
                                        className={[styles.card, styles["card-inner"], "card m-auto"].join(" ")}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ amount: 0.4, once: true }}
                                        custom={index}
                                        variants={appearAnimation}
                                    >
                                        <CardImg
                                            variant="top"
                                            className={styles.image}
                                            src={card.image}
                                            width="100%"
                                            height="250px"
                                        />
                                        <Card.Body>
                                            <Card.Title><h2><Highlighted>{card.title}</Highlighted></h2></Card.Title>
                                            <Separator/>
                                            <Card.Text>{card.text}</Card.Text>
                                            <AnimatedButton reverse={true}>{card.button}</AnimatedButton>
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

export default CardDeck;