import React, {useState} from 'react';

import Separator from "../UI/Separator/Separator";
import {Form} from "react-bootstrap";
import AnimatedButton from "../UI/AnimatedButton/AnimatedButton";
import useInput from "../../hooks/useInput";

import "../../App.css";

const LeaveComment = () => {
    const [checkState, setCheckState] = useState(false);

    const nameInput = useInput("");
    const commentInput = useInput("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (checkState){
            if (!nameInput.errorMessage){
                fetch('/api/create-comment', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: nameInput.value,
                        comment: commentInput.value,
                    })
                }).then(response => console.log(response.json()));
            }
        }
    };

    return (
        <>
            <h1>ОСТАВИТЬ КОММЕНТАРИЙ</h1>
            <Separator/>
            {nameInput.errorMessage && (
                <>
                    <strong style={{ color: "red" }}>{nameInput.errorMessage}</strong><br/>
                </>
            )}
            <Form>
                <Form.Group className="m-3">
                    <Form.Control className="form-input" type="text" name="name" onChange={nameInput.onChange} onBlur={nameInput.onBlur} placeholder="Ваше имя" required/>
                </Form.Group>
                <Form.Group className="m-3">
                    <Form.Control className="form-input" as="textarea" name="message" onBlur={commentInput.onBlur} placeholder="Ваш Комментарий"
                                  required/>
                </Form.Group>
                <Form.Group controlId="formCheckbox" className="m-3">
                    <Form.Check className="form-check-box" type="checkbox" onChange={() => {setCheckState(!checkState);}} label="Я согласен с политикой конфиденциальности." required/>
                </Form.Group>
                <Separator/>
                {!nameInput.errorMessage && checkState && (
                    <div className="text-center">
                        <AnimatedButton type="submit" style={{ width: "100%" }} handleClick={handleSubmit}>Отправить</AnimatedButton>
                    </div>
                )}
            </Form>
        </>
    );
};

export default LeaveComment;