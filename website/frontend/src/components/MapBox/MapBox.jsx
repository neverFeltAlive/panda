import React from 'react';

import {FullscreenControl, GeolocationControl, Map, Placemark, RoutePanel, YMaps, ZoomControl} from "react-yandex-maps";
import {Col, Row} from "react-bootstrap";
import {motion} from "framer-motion";
import Separator from "../UI/Separator/Separator";
import Highlighted from "../UI/Highlighted/Highlighted";

import styles from "./MapBox.module.css";
import {appearAnimation} from "../../constants";

const MapBox = () => {
    return (
        <div className={[styles["map-block"], "container-fluid row m-0"].join(" ")}>
            <div className="col-lg-8 h-100">
                <div className={[styles["map-container"], "mx-auto my-3 h-100"].join(" ")}>
                    <YMaps style={{width: "100%"}}>
                        <Map
                            defaultState={{
                                center: [56.133327, 40.394867],
                                zoom: 18,
                                controls: [],
                            }}
                            width="100%"
                            className={styles.map}
                        >
                            <FullscreenControl/>
                            <Placemark geometry={[56.133327, 40.394867]}/>
                            <GeolocationControl options={{float: 'left'}}/>
                            {/*<RoutePanel options={{float: 'right'}}/>*/}
                            <ZoomControl options={{float: "right"}}/>
                        </Map>
                    </YMaps>
                </div>
            </div>
            <div className="col-lg-4 h-100">
                <div className={[styles["text-container"], "mx-auto my-3 px-4 py-3 text-center h-100"].join(" ")}>
                    <motion.h2
                        custom={0}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{amount: 0.4, once: true}}
                        variants={appearAnimation}
                    >
                        КАК НАС НАЙТИ
                    </motion.h2>
                    <Separator/>
                    <motion.p
                        className={["p-1", styles.text].join(" ")}
                        custom={1}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{amount: 0.4, once: true}}
                        variants={appearAnimation}
                    >
                        Мы расположены в центре города недалеко от здания <Highlighted>областной
                        администрации</Highlighted>.
                    </motion.p>
                    <motion.p
                        className={["p-1", styles.text].join(" ")}
                        custom={2}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{amount: 0.4, once: true}}
                        variants={appearAnimation}
                    >
                        <Highlighted>Наш адрес:</Highlighted> г.Владимир, ул.
                        Верхне-Лыбедская, 18A
                    </motion.p>
                    <motion.div
                        className={["p-1", styles.text].join(" ")}
                        custom={3}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{amount: 0.4, once: true}}
                        variants={appearAnimation}
                    >
                        <p>
                            В шаговой доступности находится:
                        </p>
                        <ul>
                            <li>
                                <p>
                                    удобная <Highlighted>парковка</Highlighted>
                                </p>
                            </li>
                            <li>
                                <p>
                                    несколько автобусных <Highlighted>остановок</Highlighted>
                                </p>
                            </li>
                            <li>
                                <p>
                                    два муниципальных <Highlighted>парка</Highlighted>
                                </p>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </div>


    );
};

export default MapBox;