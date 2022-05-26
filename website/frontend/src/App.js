import React, {useEffect, useState} from "react";

import {AnimatePresence} from "framer-motion";
import {Route, Routes, useLocation} from "react-router-dom";
import BackgroundParticles from "./components/BackgroungParticles/BackgroundParticles";
import Cover from "./components/Cover/Cover";
import Details from "./pages/Details/Details";
import About from "./pages/About/About";
import Contacts from "./pages/Contacts/Contacts";
import Modal from "./components/Modal/Modal";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    const location = useLocation();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalChild, setModalChild] = useState(null);

    const setModal = (child) => {
        setModalChild(child);
        setIsModalVisible(true);
    }

    return (
        <div className="App">
            <BackgroundParticles/>
            <Modal isVisible={isModalVisible} setVisible={setIsModalVisible}>{modalChild}</Modal>

            <AnimatePresence exitBeforeEnter>
                <Routes location={location} key={location.key}>
                    <Route path="/" element={<Cover/>}/>
                    <Route path="/about" element={<About setModal={setModal}/>}/>
                    <Route path="/details" element={<Details setModal={setModal}/>}/>
                    <Route path="/contacts" element={<Contacts setModal={setModal}/>}/>
                </Routes>
            </AnimatePresence>
        </div>
    );
}

// TODO: Call Button
// TODO: Call Button Dragging
// TODO: Animation Cleanup
// TODO: 3D animations

export default App;
