import React from 'react';

import {Carousel, CarouselItem, Container} from "react-bootstrap";

import styles from "./CarouselBos.module.css";

import Highlighted from "../UI/Highlighted/Highlighted";

const CarouselBox = ({items}) => {
    return (
        <div className={[styles["carousel-box"], "container-fluid m-0 p-0 text-center"].join(" ")}>
            <Carousel className={[styles["carousel-item"], "m-0"].join(" ")}>
                {items.map(item =>
                    <CarouselItem key={item.id}>
                        <img
                            className={[styles.image, "d-block w-100"].join(" ")}
                            src={item.image}
                            alt="Image"
                        />
                        <Carousel.Caption>
                            <div className={styles.text}>
                                <h2><Highlighted>{item.title}</Highlighted></h2>
                                <p>{item.text}</p>
                            </div>
                        </Carousel.Caption>
                    </CarouselItem>
                )}
            </Carousel>
        </div>
    );
};

export default CarouselBox;