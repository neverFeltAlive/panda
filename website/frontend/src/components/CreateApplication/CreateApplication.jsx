import React, {useState} from 'react';

import Separator from "../UI/Separator/Separator";
import {Col, Form, Row} from "react-bootstrap";
import AnimatedButton from "../UI/AnimatedButton/AnimatedButton";

import "../../App.css";

const initialInput = {
    "name": "",
    "phone_number": "",
    "email": "",
    "group_area": "",
    "group_age": ""
}

const CreateApplication = () => {
    const [inputState, setInputState] = useState(initialInput)

    const handleChange = (e) => {
        const {name, value} = e.target

        setInputState({...inputState, [name]: value})
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/api/create-application', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inputState)
        }).then(response => console.log(response.json()));
    };

    return (
        <>
            <h1>ХОТИТЕ ЗАПИСАТЬСЯ К НАМ?</h1>
            <Separator/>
            <Form>
                <Form.Group className="m-3">
                    <Form.Control className="form-input" type="text" name="name" onChange={handleChange} placeholder="Ваше имя" required/>
                </Form.Group>
                <Form.Group className="m-3">
                    <Form.Control className="form-input" type="text" name="phone_number" onChange={handleChange} placeholder="Ваш номер телефона"
                                  required/>
                </Form.Group>
                <Form.Group className="m-3">
                    <Form.Control className="form-input" type="email" name="email" onChange={handleChange}
                                  placeholder="e-mail"/>
                </Form.Group>
                <Row sm={1} md={2}>
                    <Col md={6}>
                        <Form.Group controlId="formCheckbox" className="m-3">
                            <Form.Label className="form-select-label">Выберите подходящую группу</Form.Label>
                            <Form.Select className="form-select" name="group_age" onChange={handleChange} required>
                                <option className="option" value="small">Младшая</option>
                                <option className="option" value="medium">Средняя</option>
                                <option className="option" value="large">Старшая</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group controlId="formCheckbox" className="m-3">
                            <Form.Label className="form-select-label">Выберите интересующее вас направление</Form.Label>
                            <Form.Select className="form-select" name="group_area" onChange={handleChange} required>
                                <option className="option" value="sport">Спортивное</option>
                                <option className="option" value="art">Творческое</option>
                                <option className="option" value="music">Музыкальное</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group controlId="formCheckbox" className="m-3">
                    <Form.Check className="form-check-box" type="checkbox" label="Я согласен с политикой конфиденциальности." required/>
                </Form.Group>
                <Separator/>
                <div className="text-center">
                    <AnimatedButton type="submit" style={{width: "100%"}} handleClick={handleSubmit}>Записаться</AnimatedButton>
                </div>
            </Form>
        </>
    );
};

export default CreateApplication;