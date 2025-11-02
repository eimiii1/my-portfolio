import { Variants } from "framer-motion";

export const AboutMotion = (): {
    aboutContainerAnimation: Variants;
    aboutChildrenAnimation: Variants;
} => {
    const aboutContainerAnimation: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.2,
                ease: "easeOut"
            }
        }
    }

    const aboutChildrenAnimation: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: "easeOut"
            }
        }
    }


    return { aboutContainerAnimation, aboutChildrenAnimation }
}