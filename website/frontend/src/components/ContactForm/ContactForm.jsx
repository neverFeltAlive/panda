import React, {useState} from 'react';

import {Form, Row} from "react-bootstrap";
import {motion} from "framer-motion";
import ContentBlock from "../ContentBlock/ContentBlock";
import AnimatedButton from "../UI/AnimatedButton/AnimatedButton";
import Separator from "../UI/Separator/Separator";
import Highlighted from "../UI/Highlighted/Highlighted";
import useInput from "../../hooks/useInput";

import {appearAnimation} from "../../constants";

import styles from "./ContactForm.module.css";

const ContactForm = () => {
    const [checkState, setCheckState] = useState(false);

    const emailInput = useInput("");
    const nameInput = useInput("");
    const phoneInput = useInput("");
    const questionInput = useInput("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (checkState) {
            if (!nameInput.errorMessage && !emailInput.errorMessage && !phoneInput.errorMessage) {
                fetch('/api/create-question', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: emailInput.value,
                        name: nameInput.value,
                        phone_number: phoneInput.value,
                        question: questionInput.value
                    })
                }).then(response => console.log(response.json()));
            }
        }
    };

    return (
        <ContentBlock>
            <div className="container text-center" >
                <motion.h1
                    custom={0}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{amount: 0.4, once: true}}
                    variants={appearAnimation}
                >
                    ОСТАЛИСЬ ВОПРОСЫ?
                </motion.h1>
                <motion.h2
                    style={{textAlign: "center"}}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{amount: 0.4, once: true}}
                    custom={1}
                    variants={appearAnimation}
                >
                    <Highlighted>
                        Обратитесь за ответом к нашему менеджеру:
                    </Highlighted>
                </motion.h2>
                <Separator/>
                {nameInput.errorMessage && (
                    <>
                        <strong style={{ color: "red" }}>{nameInput.errorMessage}</strong><br/>
                    </>
                )}
                {emailInput.errorMessage && (
                    <>
                        <strong style={{ color: "red" }}>{emailInput.errorMessage}</strong><br/>
                    </>
                )}
                {phoneInput.errorMessage && (
                    <>
                        <strong style={{ color: "red" }}>{phoneInput.errorMessage}</strong><br/>
                    </>
                )}
                <Form className={styles.form}>
                    <Row className="mb-3">
                        <motion.div
                            className="col-sm-6"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{amount: 0.4, once: true}}
                            custom={2}
                            variants={appearAnimation}
                        >
                            <Form.Group controlId="formName" className="m-3 mt-0">
                                <Form.Control className={styles['form-control']} type="text" name="name" onChange={nameInput.onChange} onBlur={nameInput.onBlur} placeholder="Ваше имя" required/>
                            </Form.Group>
                            <Form.Group controlId="formNumber" className="m-3">
                                <Form.Control className={styles['form-control']} type="text" name="phone_number" onChange={phoneInput.onChange} onBlur={phoneInput.onBlur} placeholder="+7 (___) ___ __ __" required/>
                            </Form.Group>
                            <Form.Group controlId="formEmail" className="m-3">
                                <Form.Control className={styles['form-control']} type="email" name="email" onChange={emailInput.onChange} onBlur={emailInput.onBlur} placeholder="e-mail"/>
                            </Form.Group>
                            <Form.Group controlId="formCheckbox" className="m-3">
                                <Form.Check className={styles['form-check-input']} type="checkbox" onChange={() => {setCheckState(!checkState);}} label="Я согласен с политикой конфиденциальности." required/>
                            </Form.Group>
                        </motion.div>
                        <motion.div
                            className="col-sm-6"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{amount: 0.4, once: true}}
                            custom={3}
                            variants={appearAnimation}
                        >
                            <Form.Group controlId="FormText" className="h-100">
                                <Form.Control className={styles['form-control']} as="textarea" name="question" onBlur={questionInput.onBlur} rows="10" placeholder="Ваш Вопрос"/>
                            </Form.Group>
                        </motion.div>
                    </Row>
                    <motion.div
                        custom={4}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{amount: 0.4, once: true}}
                        variants={appearAnimation}
                    >
                        <AnimatedButton type="submit" style={{width: "100%"}} handleClick={handleSubmit}>Отправить</AnimatedButton>
                    </motion.div>
                </Form>
                <Separator/>
            </div>
        </ContentBlock>
    );
};

export default ContactForm;