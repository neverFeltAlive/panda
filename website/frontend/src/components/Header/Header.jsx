import React from "react";

import {useLocation} from "react-router-dom";
import {LinkContainer} from "react-router-bootstrap";
import {motion} from "framer-motion";
import {Nav, Navbar, NavLink, Offcanvas} from "react-bootstrap";
import Name from "../Name/Name";
import Highlighted from "../UI/Highlighted/Highlighted";
import Separator from "../UI/Separator/Separator";
import MediaLinks from "../MediaLinks/MediaLinks";
import RequestPhoneCall from "../RequestPhoneCall/RequestPhoneCall";

import {dropInAnimation, fadeInAnimation} from "../../constants";

import {FaPhoneAlt} from "react-icons/fa"

import styles from "./Header.module.css"

import logo from "../../assets/logo.png"
import AnimatedButton from "../UI/AnimatedButton/AnimatedButton";
import CreateApplication from "../CreateApplication/CreateApplication";

const Header = ({setModal}) => {

    const location = useLocation();

    return (
        <Navbar
            className={styles.header}
            collapseOnSelect
            sticky="top"
            expand="lg"
        >
            <motion.div
                className="container-xl px-md-5"
                variants={dropInAnimation}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <LinkContainer to="/">
                    <Navbar.Brand
                        className="d-flex justify-content-center align-items-center"
                    >
                        <img
                            className={styles.image}
                            src={logo}
                            height="70"
                            width="70"
                            alt="Logo"
                        />
                        <div
                            className="mx-0 mx-md-4"
                        >
                            <h3>Детский Сад <Highlighted>'Панда'</Highlighted></h3>
                        </div>
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Offcanvas
                    id="responsive-navbar-nav"
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>
                            <Name small={true}/>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="d-flex align-items-center ms-auto px-3 p-lg-0" style={{textAlign: "right"}}>
                            <LinkContainer to="/about">
                                <NavLink className="mx-0 mx-lg-2">
                                    <div
                                        className={styles["nav-link"]}
                                        style={location.pathname === "/about" ? {borderBottom: "2px solid #40322F"} : {borderBottom: "2px solid transparent"}}
                                    >
                                        Главная
                                    </div>
                                </NavLink>
                            </LinkContainer>
                            <LinkContainer to="/details">
                                <NavLink className="mx-0 mx-lg-2">
                                    <div
                                        className={styles["nav-link"]}
                                        style={location.pathname === "/details" ? {borderBottom: "2px solid #40322F"} : {borderBottom: "2px solid transparent"}}
                                    >
                                        Родителям
                                    </div>
                                </NavLink>
                            </LinkContainer>
                            <LinkContainer to="/contacts">
                                <NavLink className="mx-0 mx-lg-2">
                                    <div
                                        className={styles["nav-link"]}
                                        style={location.pathname === "/contacts" ? {borderBottom: "2px solid #40322F"} : {borderBottom: "2px solid transparent"}}
                                    >
                                        О нас
                                    </div>
                                </NavLink>
                            </LinkContainer>
                            {/*<NavLink className="mx-0 mx-lg-3">*/}
                            {/*    <div*/}
                            {/*        className={styles["nav-link"]}*/}
                            {/*        onClick={() => {setModal(<RequestPhoneCall/>);}}*/}
                            {/*    >*/}
                            {/*        <FaPhoneAlt/> +7 910 170 23 53*/}
                            {/*    </div>*/}
                            {/*</NavLink>*/}
                            <LinkContainer to={location.pathname}>
                                <NavLink className="mx-0 mx-lg-3">
                                    <AnimatedButton handleClick={() => setModal(<CreateApplication/>) }>Оставить Заявку</AnimatedButton>
                                </NavLink>
                            </LinkContainer>
                        </Nav>
                    </Offcanvas.Body>
                    <div className={styles.socials}>
                        <Separator/>
                        <div className="d-flex justify-content-center mx-4">
                            <h2>
                                <MediaLinks/>
                            </h2>
                        </div>
                        <Separator/>
                    </div>
                </Navbar.Offcanvas>

            </motion.div>
        </Navbar>
    );
}

// TODO: icon animations
// TODO: link styling

export default Header;