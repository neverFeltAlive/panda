import React from 'react';

import {Card, CardImg, Col, Row} from "react-bootstrap";
import {motion} from "framer-motion";
import Highlighted from "../UI/Highlighted/Highlighted";
import Separator from "../UI/Separator/Separator";
import Name from "../Name/Name";
import AnimatedButton from "../UI/AnimatedButton/AnimatedButton";
import LeaveComment from "../LeaveComment/LeaveComment";

import {appearAnimation} from "../../constants";

import {FaRegCommentAlt} from "react-icons/fa";

import styles from "./Comments.module.css";

import desert from "../../assets/desert.jpg";

const Comments = ({setModal}) => {
    return (
        <motion.div
            className={[styles["comments-block"], "container-fluid row m-0 p-5 text-center"].join(" ")}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.4, once: true }}
        >
            <motion.div
                custom={0}
                variants={appearAnimation}
            >
                <Name/><h1>В СЛОВАХ</h1>
            </motion.div>
            <Separator/>
            <div className="col m-auto text-center">
                <motion.div
                    className={[styles.card, "card flex-row m-3 mx-auto"].join(" ")}
                    custom={1}
                    variants={appearAnimation}
                >
                    <div className="card-body d-flex flex-column align-items-start">
                        <strong className="d-inline-block" style={{color: "#A3C926"}}>МАМА</strong>
                        <Card.Title><h2><Highlighted>Ольга</Highlighted></h2></Card.Title>
                        <strong className={[styles["text-muted"], "mb-2"].join(" ")}>СЕНТ, 2022</strong>
                        <p className={[styles.text, "card-text"].join(" ")}>
                            Наш ребенок с радостью идет в Панду и с нетерпением ждёт встречи с друзьями. Прекрасные
                            нянички. Доброе, уважительное, заботливое отношение. Спасибо вам огромное
                        </p>
                    </div>
                    {/*<CardImg*/}
                    {/*    className={[styles.image, "card-img-right flex-auto d-none d-md-block"].join(" ")}*/}
                    {/*    src={forest}*/}
                    {/*/>*/}
                </motion.div>
                <motion.div
                    className={[styles.card, styles["card-dark"], "card flex-row m-3 mx-auto"].join(" ")}
                    custom={2}
                    variants={appearAnimation}
                >
                    {/*<CardImg*/}
                    {/*    className={[styles.image, "card-img-right flex-auto d-none d-md-block"].join(" ")}*/}
                    {/*    src={ice}*/}
                    {/*/>*/}
                    <div className="card-body d-flex flex-column align-items-end">
                        <strong className="d-inline-block" style={{color: "#40322F"}}>ПАПА</strong>
                        <Card.Title><h2><Highlighted>Виктор</Highlighted></h2></Card.Title>
                        <strong className={[styles["text-muted"], "mb-2"].join(" ")}>СЕНТ, 2022</strong>
                        <p className={[styles.text, "card-text"].join(" ")} style={{textAlign: "right"}}>
                            Наш ребенок с радостью идет в Панду и с нетерпением ждёт встречи с друзьями. Прекрасные
                            нянички. Доброе, уважительное, заботливое отношение. Спасибо вам огромное
                        </p>
                    </div>
                </motion.div>
            </div>
            <div className="col m-auto">
                <motion.div
                    className={[styles.card, styles["card-big"], "card h-100 m-3 mx-auto"].join(" ")}
                    custom={0}
                    variants={appearAnimation}
                >
                    <CardImg
                        variant="top"
                        src={desert}
                    />
                    <Card.Body>
                        <strong className="d-inline-block" style={{color: "#DAC16D"}}>ВОСПИТАТЕЛЬ</strong>
                        <Card.Title><h2><Highlighted>Анастасия</Highlighted></h2></Card.Title>
                        <strong className={[styles["text-muted"], "mb-2"].join(" ")}>ОКТ, 2022</strong>
                        <p className={[styles.text, "card-text"].join(" ")} style={{textAlign: "left"}}>
                            Наш ребенок с радостью идет в Панду и с нетерпением ждёт встречи с друзьями. Прекрасные
                            нянички. Доброе, уважительное, заботливое отношение. Спасибо вам огромное
                        </p>
                    </Card.Body>
                </motion.div>
            </div>
            <div className="p-0 m-0" style={{ textAlign: "left" }}>
                <AnimatedButton reverse={true} handleClick={() => setModal(<LeaveComment/>)} ><FaRegCommentAlt/> оставить комментарий</AnimatedButton>
            </div>
        </motion.div>
    );
};

export default Comments;