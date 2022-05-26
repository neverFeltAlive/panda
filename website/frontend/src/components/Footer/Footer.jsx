import React from 'react';

import {Col, Container, Row} from "react-bootstrap";
import Name from "../Name/Name";
import LeaveComment from "../LeaveComment/LeaveComment";
import {Link} from "react-router-dom";
import MediaLinks from "../MediaLinks/MediaLinks";
import RequestPhoneCall from "../RequestPhoneCall/RequestPhoneCall";
import CreateApplication from "../CreateApplication/CreateApplication";

import { FaPhoneAlt, FaEnvelope, FaHome } from "react-icons/fa";

import styles from "./Footer.module.css";

const Footer = ({setModal}) => {
    return (
        <div className={[styles.footer, "position-relative bottom-o w-100"].join(" ")}>
            <section className='d-flex justify-content-center justify-content-lg-between p-4'
                style={{ borderBottom: "1px solid #40322F" }}
            >
                <div className='me-5 d-none d-lg-flex align-items-center'>
                    <p className="m-0">
                        Свяжитесь с нами в социальных сетях:
                    </p>
                </div>
                <div>
                    <MediaLinks />
                </div>
            </section>
            <Container className="text-center text-md-start mt-5">
                <Row className="mt-3">
                    <Col sm={3} className="mx-auto mb-4 text-center">
                        <h1>Частный</h1>
                        <Name/>
                    </Col>
                    <Col sm={5} className="mx-auto mb-4">
                        <h3 className='text-uppercase fw-bold mb-4'>Полезные ссылки</h3>
                        <Row>
                            <Col sm={7}>
                                <p>
                                    <a
                                        href="#"
                                        className='text-reset'
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setModal(<LeaveComment/>);
                                        }}
                                    >
                                        Оставить комментарий
                                    </a>
                                </p>
                                <p>
                                    <a
                                        href="#"
                                        className='text-reset'
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setModal(<RequestPhoneCall/>);
                                        }}
                                    >
                                        Заказать телефонный звонок
                                    </a>
                                </p>
                                <p>
                                    <a
                                        href="#"
                                        className='text-reset'
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setModal(<CreateApplication/>);
                                        }}
                                    >
                                        Оставить заявку
                                    </a>
                                </p>
                            </Col>
                            <Col sm={5}>
                                <p>
                                    <Link to='/about' className='text-reset'>
                                        Главная
                                    </Link>
                                </p>
                                <p>
                                    <Link to="/details" className='text-reset'>
                                        Родителям
                                    </Link>
                                </p>
                                <p>
                                    <Link to="/contacts" className='text-reset'>
                                        О нас
                                    </Link>
                                </p>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={3} className="mx-auto mb-4">
                        <h3 className='text-uppercase fw-bold mb-4'>Наши контакты</h3>
                        <p>
                            <FaHome/> Владимир, <br/> Верхне-Лыбедская 18А
                        </p>
                        <p>
                            <FaEnvelope/> info@example.com
                        </p>
                        <p>
                            <FaPhoneAlt/> +7 910 170 23 53
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>

    );
};

export default Footer;