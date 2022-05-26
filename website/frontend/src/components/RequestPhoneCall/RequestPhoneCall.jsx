import React, {useState} from 'react';

import Separator from "../UI/Separator/Separator";
import {Form} from "react-bootstrap";
import AnimatedButton from "../UI/AnimatedButton/AnimatedButton";
import useInput from "../../hooks/useInput";

const RequestPhoneCall = () => {
    const [checkState, setCheckState] = useState(false);

    const nameInput = useInput("");
    const phoneInput = useInput("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (checkState){
            if (!phoneInput.errorMessage && !nameInput.errorMessage){
                e.preventDefault();
                fetch('/api/create-phone-request', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: nameInput.value,
                        phone_number: phoneInput.value,
                    })
                }).then(response => console.log(response.json()));
            }
        }
    };

    return (
        <>
            <h1>ЗАКАЗАТЬ ЗВОНОК</h1>
            <Separator/>
            {nameInput.errorMessage && (
                <>
                    <strong style={{ color: "red" }}>{nameInput.errorMessage}</strong><br/>
                </>
            )}
            {phoneInput.errorMessage && (
                <>
                    <strong style={{ color: "red" }}>{phoneInput.errorMessage}</strong><br/>
                </>
            )}
            <Form>
                <Form.Group className="m-3">
                    <Form.Control className="form-input" type="text" name="name" onChange={nameInput.onChange} onBlur={phoneInput.onBlur} placeholder="Ваше имя" required/>
                </Form.Group>
                <Form.Group className="m-3">
                    <Form.Control className="form-input" type="text" name="phone" onChange={phoneInput.onChange} onBlur={phoneInput.onBlur} placeholder="Ваш номер телефона"
                                  required/>
                </Form.Group>
                <Form.Group controlId="formCheckbox" className="m-3">
                    <Form.Check className="form-check-box" type="checkbox" onChange={() => setCheckState(!checkState)} label="Я согласен с политикой конфиденциальности." required/>
                </Form.Group>
                <Separator/>
                {!phoneInput.errorMessage && !nameInput.errorMessage && checkState && (
                    <div className="text-center">
                        <AnimatedButton type="submit" style={{ width: "100%" }} handleClick={handleSubmit}>Заказать</AnimatedButton>
                    </div>
                )}
            </Form>
        </>
    );
};

export default RequestPhoneCall;