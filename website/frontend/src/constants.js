export const fadeInAnimation = {
    hidden : {
        opacity : 0,
    },
    visible : {
        opacity: 1,
        transition: {
            delay: 0.2,
            duration: 0.2
        }
    },
    exit : {
        opacity: 0
    }
};

export const dropInAnimation = {
    hidden: {
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 100,
            stiffness: 500,
            delay: 0.2,
        }
    },
    exit : {
        y: "-100vh",
        opacity: 0,
        transition: {
            ease: "easeInOut",
            duration: 0.1,
            type: "spring",
            damping: 100,
            stiffness: 500,
            delay: 0.2,
        }
    }
};

export const appearAnimation = {
    hidden : {
        opacity: 0,
        y: -100,
    },
    visible: custom => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: custom * 0.1,
            duration: 0.5
        },
    }),
};

export const rotateAnimation = {
    animate: {
        color: "#A3C926",
        borderColor: "#A3C926",
        rotate: 360,
        borderRadius: "25%",
        transition: {
            duration: 0.5,
            repeatType: "reverse",
            repeatDelay: 1
        }
    }
};
