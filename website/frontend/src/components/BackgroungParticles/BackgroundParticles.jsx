import React from 'react';

import Particles from "react-tsparticles";
import {loadFull} from "tsparticles";

import styles from "./BackgroungParticles.module.css";

import pawBrown from "../../assets/paw-brown.png";

const BackgroundParticles = () => {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    return (
        <div className={styles.particlesCanvas}>
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    background: {
                        color: {
                            value: "#A3C926",
                        },
                        opacity: 0.1,
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#A3C926",
                        },
                        links: {
                            color: "#A3C926",
                            distance: 150,
                            enable: true,
                            opacity: 0.7,
                            width: 6,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 4,
                            straight: false,
                        },
                        rotate: {
                            random: {
                                enable: true,
                                minimumValue: 0
                            },
                            value: 360,
                            direction: "clockwise"
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 600,
                            },
                            value: 40,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            image: {
                                height: 60,
                                src: pawBrown,
                                width: 60,
                                replace_color: true
                            },
                            type: "image",
                        },
                        size: {
                            value: {min: 15, max: 25},
                        },
                    },
                    detectRetina: true,
                }}
            />
        </div>
    );

};

export default BackgroundParticles;