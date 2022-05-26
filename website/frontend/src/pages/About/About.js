import React from 'react';

import Header from "../../components/Header/Header";
import Wrapper from "../../components/Wrapper/Wrapper.jsx";
import CarouselBox from "../../components/CarouselBox/CarouselBox";
import TabBlock from "../../components/TabBlock/TabBlock";
import CardDeck from "../../components/CardDeck/CardDeck";
import MapBox from "../../components/MapBox/MapBox";
import Footer from "../../components/Footer/Footer";
import Scheme from "../../components/Scheme/Scheme";
import ContactForm from "../../components/ContactForm/ContactForm";
import Comments from "../../components/Comments/Comments";
import SimpleCardDeck from "../../components/SimpleCardDeck/SimpleCardDeck";
import HorizontalCardDeck from "../../components/HorizontalCardDeck/HorizontalCardDeck";
import CentralBlock from "../../components/CentralBlock/CentralBlock";
import FloatingButton from "../../components/FloatingButton/FloatingButton";

import forest from "../../assets/forest.jpg";
import desert from "../../assets/desert.jpg";
import ice from "../../assets/ice.jpg";

const About = ({setModal}) => {
    const cards = [
        {
            id: 1,
            title: "Увлекательность",
            text: "Организация осмысленной и интересной жизни детей в саду",
            image: forest,
            button: "Подробнее"
        },
        {
            id: 2,
            title: "Польза",
            text: "Забота о здоровье и физическом развитии малышей",
            image: desert,
            button: "Подробнее"
        },
        {id: 3, title: "Комфорт", text: "Индивидуальный подход к ребёнку и его семье", image: ice, button: "Подробнее"}
    ];

    const tabs = [
        {
            id: 1,
            title: "Эффективность",
            text: "Наша насыщенная и разнообразная программа предоставляет многочисленные возможности для самореализации детей, что помогает в формировании активного, самостоятельного и инициативного ребенка",
            image: forest
        },
        {
            id: 2,
            title: "Безопасность",
            text: "Спецработники следят за развитием каждого ребенка обеспечивая его полную психологическую и физическую безопасность",
            image: desert
        },
        {
            id: 3,
            title: "Граммотный пдоход",
            text: "Наши нянички активно следят за постебенной адаптацией ребенка гарантирую безболезненное погружение в интересную среду",
            image: ice
        },
    ];

    const carouselItems = [
        {
            id: 1,
            title: "КУХНЯ",
            text: "Оборудованная по последнему слову техники для приготовления полезной и вкусной еды детям",
            image: forest
        },
        {
            id: 2,
            title: "СПАЛЬНЯ",
            text: "Продуманное расположение комфортных кроваток для здорового сна малышей",
            image: desert
        },
        {id: 3, title: "СПОРТИВНЫЙ ЗАЛ", text: "Все для безопасного активного занятия спортом", image: ice},
        {id: 4, title: "ИГРОВАЯ", text: "Место где детки могут провести время с друзьями", image: forest},
        {id: 5, title: "ДВОР", text: "Территория для прогулок", image: desert},
    ];

    const secondCards = [
        {
            id: 1,
            head: "Младшая",
            title: "2.5 года - 3.5 года",
            text: "Организация осмысленной и интересной жизни детей в саду",
            image: forest,
            button: "Подробнее"
        },
        {
            id: 2,
            head: "Средняя",
            title: "3.5 года - 5 лет",
            text: "Забота о здоровье и физическом развитии малышей",
            image: desert,
            button: "Подробнее"
        },
        {
            id: 3,
            head: "Старшая",
            title: "5 лет - 7 лет",
            text: "Индивидуальный подход к ребёнку и его семье",
            image: ice,
            button: "Подробнее"
        }
    ];

    return (
        <Wrapper>
            <Header setModal={setModal}/>
            <Scheme/>
            <CardDeck cards={cards} title="НАШИ ПРИОРИТЕТЫ"/>
            <Comments setModal={setModal}/>
            <SimpleCardDeck cards={secondCards} title="НАШИ ГРУППЫ"/>
            <CentralBlock/>
            <HorizontalCardDeck/>
            <CarouselBox items={carouselItems}/>
            <TabBlock tabs={tabs} title={"МЫ ГАРАНТИРУЕМ"}/>
            <MapBox/>
            <ContactForm/>
            <Footer setModal={setModal}/>
            <FloatingButton setModal={setModal}/>
        </Wrapper>
    );
};

export default About;