import React, {useState} from 'react';

import Separator from "../UI/Separator/Separator";
import {Form} from "react-bootstrap";
import AnimatedButton from "../UI/AnimatedButton/AnimatedButton";

const initialInput = {
    "name": "",
    "phone_number": "",
}

const RequestPhoneCall = () => {
    const [inputState, setInputState] = useState(initialInput)

    const handleChange = (e) => {
        const {name, value} = e.target

        setInputState({...inputState, [name]: value})
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/api/create-phone-request', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inputState)
        }).then(response => console.log(response.json()));
    };

    return (
        <>
            <h1>ЗАКАЗАТЬ ЗВОНОК</h1>
            <Separator/>
            <Form>
                <Form.Group className="m-3">
                    <Form.Control className="form-input" type="text" name="name" onChange={handleChange} placeholder="Ваше имя" required/>
                </Form.Group>
                <Form.Group className="m-3">
                    <Form.Control className="form-input" type="text" name="phone" onChange={handleChange} placeholder="Ваш номер телефона"
                                  required/>
                </Form.Group>
                <Form.Group controlId="formCheckbox" className="m-3">
                    <Form.Check className="form-check-box" type="checkbox" label="Я согласен с политикой конфиденциальности." required/>
                </Form.Group>
                <Separator/>
                <div className="text-center">
                    <AnimatedButton type="submit" style={{ width: "100%" }} handleClick={handleSubmit}>Заказать</AnimatedButton>
                </div>
            </Form>
        </>
    );
};

export default RequestPhoneCall;