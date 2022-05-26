import React, {useState} from 'react';

import Name from "../Name/Name";
import {Col, Container, Row} from "react-bootstrap";
import {motion} from "framer-motion";
import Highlighted from "../UI/Highlighted/Highlighted";

import styles from "./Scheme.module.css";

import equals from "../../assets/equals.png";

const Scheme = () => {
    const titleArrays = [
        <h2><Highlighted>Здоровое развитие</Highlighted> вашего ребенка</h2>,
        <h2><Highlighted>Комфорт</Highlighted> всей семьи</h2>,
        <h2><Highlighted>Радость</Highlighted> детей и родителей</h2>,
        <h2><Highlighted>Забота</Highlighted> о малышах</h2>,
        <h2><Highlighted>Отличное воспитание</Highlighted></h2>,
    ];

    const [count, setCount] = useState(0);

    setTimeout(() => {
        setCount(() =>
            count === (titleArrays.length - 1)
                ? 0
                : count + 1
        );
    }, 6000);

    return (
        <Container fluid className={[styles["scheme-container"], "d-flex justify-content-center"].join(" ")}>
            <Row>
                <Col md={5}>
                    <div className="position-relative top-50 start-50 translate-middle text-center">
                        <motion.div
                            className="w-100"
                            animate={{
                                opacity: [0, 1, 1, 0]
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity
                            }}
                        >
                            {titleArrays[count]}
                        </motion.div>
                    </div>
                </Col>
                <Col md={2}>
                    <img
                        className={[styles.image, "position-relative top-50 start-50 translate-middle"].join(" ")}
                        src={equals}
                        alt="Image"
                        width="150px"
                        height="150px"
                    />
                </Col>
                <Col md={5}>
                    <div className="position-relative top-50 start-50 translate-middle text-center w-100">
                        <h2 className="text-center">Частный Детский Сад <Highlighted>"Панда"</Highlighted></h2>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Scheme;
