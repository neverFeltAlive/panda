import React from 'react';

import Wrapper from "../../components/Wrapper/Wrapper.jsx";
import Footer from "../../components/Footer/Footer";
import MapBox from "../../components/MapBox/MapBox";
import Header from "../../components/Header/Header";

const Details = ({setModal}) => {
    return (
        <Wrapper>
            <Header/>
            <MapBox/>
            <Footer setModal={setModal}/>
        </Wrapper>
    );
};

export default Details;