import React, {useState} from 'react';

import {Form, Row} from "react-bootstrap";
import {motion} from "framer-motion";
import ContentBlock from "../ContentBlock/ContentBlock";
import AnimatedButton from "../UI/AnimatedButton/AnimatedButton";
import Separator from "../UI/Separator/Separator";
import Highlighted from "../UI/Highlighted/Highlighted";

import {appearAnimation} from "../../constants";

import styles from "./ContactForm.module.css";

const initialInput = {
    "name": "",
    "question": "",
    "phone_number": "",
    "email": "",
}

const ContactForm = () => {
    const [inputState, setInputState] = useState(initialInput)

    const handleChange = (e) => {
        const {name, value} = e.target

        setInputState({...inputState, [name]: value})
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/api/create-question', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inputState)
        }).then(response => console.log(response.json()));
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
                                <Form.Control className={styles['form-control']} type="text" name="name" onChange={handleChange} placeholder="Ваше имя" required/>
                            </Form.Group>
                            <Form.Group controlId="formNumber" className="m-3">
                                <Form.Control className={styles['form-control']} type="text" name="phone_number" onChange={handleChange} placeholder="+7 (___) ___ __ __" required/>
                            </Form.Group>
                            <Form.Group controlId="formEmail" className="m-3">
                                <Form.Control className={styles['form-control']} type="email" name="email" onChange={handleChange} placeholder="e-mail"/>
                            </Form.Group>
                            <Form.Group controlId="formCheckbox" className="m-3">
                                <Form.Check className={styles['form-check-input']} type="checkbox" label="Я согласен с политикой конфиденциальности." required/>
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
                                <Form.Control className={styles['form-control']} as="textarea" name="question" onChange={handleChange} rows="10" placeholder="Ваш Вопрос"/>
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