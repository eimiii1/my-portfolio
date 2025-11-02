import { Variants } from "framer-motion";

export const ExperienceMotion = (): {
    experienceContainerAnimation: Variants;
    experienceChildrenAnimation: Variants;
} => {
    const experienceContainerAnimation: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.15,
                ease: "easeOut",
            }
        }
    }

    const experienceChildrenAnimation: Variants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                staggerChildren: 0.3,
                ease: "easeOut",
                duration: 1,
            }
        }
    }

    return { experienceContainerAnimation, experienceChildrenAnimation }
}