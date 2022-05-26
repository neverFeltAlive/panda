import React from 'react';

import Wrapper from "../../components/Wrapper/Wrapper.jsx";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Contacts = ({setModal}) => {
    return (
        <Wrapper>
            <Header/>
            <Footer setModal={setModal}/>
        </Wrapper>
    );
};

export default Contacts;