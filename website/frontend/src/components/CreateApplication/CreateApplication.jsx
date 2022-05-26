import React, {useState} from 'react';

import Separator from "../UI/Separator/Separator";
import {Col, Form, Row} from "react-bootstrap";
import AnimatedButton from "../UI/AnimatedButton/AnimatedButton";
import useInput from "../../hooks/useInput";

import "../../App.css";

const CreateApplication = () => {
    const [checkState, setCheckState] = useState(false);

    const emailInput = useInput("");
    const nameInput = useInput("");
    const phoneInput = useInput("");
    const areaInput = useInput("sport");
    const ageInput = useInput("small");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (checkState){
            if (!nameInput.errorMessage && !emailInput.errorMessage && !phoneInput.errorMessage){
                fetch('/api/create-application', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: nameInput.value,
                        phone_number: phoneInput.value,
                        email: emailInput.value,
                        group_area: areaInput.value,
                        group_age: ageInput.value
                    })
                }).then(response => console.log(response.json()));
            }
        }
    };

    return (
        <>
            <h1>ХОТИТЕ ЗАПИСАТЬСЯ К НАМ?</h1>
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
            <Form>
                <Form.Group className="m-3">
                    <Form.Control className="form-input" type="text" name="name" onChange={nameInput.onChange} onBlur={nameInput.onBlur} placeholder="Ваше имя" required/>
                </Form.Group>
                <Form.Group className="m-3">
                    <Form.Control className="form-input" type="text" name="phone_number" onChange={phoneInput.onChange} onBlur={phoneInput.onBlur} placeholder="Ваш номер телефона"
                                  required/>
                </Form.Group>
                <Form.Group className="m-3">
                    <Form.Control className="form-input" type="email" onChange={emailInput.onChange} name="email" onBlur={emailInput.onBlur}
                                  placeholder="e-mail"/>
                </Form.Group>
                <Row sm={1} md={2}>
                    <Col md={6}>
                        <Form.Group controlId="formCheckbox" className="m-3">
                            <Form.Label className="form-select-label">Выберите подходящую группу</Form.Label>
                            <Form.Select className="form-select" name="group_age" onBlur={ageInput.onBlur} required>
                                <option className="option" value="small">Младшая</option>
                                <option className="option" value="medium">Средняя</option>
                                <option className="option" value="large">Старшая</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group controlId="formCheckbox" className="m-3">
                            <Form.Label className="form-select-label">Выберите интересующее вас направление</Form.Label>
                            <Form.Select className="form-select" name="group_area" onBlur={areaInput.onBlur} required>
                                <option className="option" value="sport">Спортивное</option>
                                <option className="option" value="art">Творческое</option>
                                <option className="option" value="music">Музыкальное</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group controlId="formCheckbox" className="m-3">
                    <Form.Check className="form-check-box" type="checkbox" label="Я согласен с политикой конфиденциальности." onChange={() => {setCheckState(!checkState)}} required/>
                </Form.Group>
                <Separator/>
                {!nameInput.errorMessage && !emailInput.errorMessage && !phoneInput.errorMessage && checkState && (
                    <div className="text-center">
                        <AnimatedButton type="submit" style={{width: "100%"}} handleClick={handleSubmit}>Записаться</AnimatedButton>
                    </div>
                )}
            </Form>
        </>
    );
};

export default CreateApplication;