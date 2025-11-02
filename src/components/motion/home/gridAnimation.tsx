import { Variants } from "framer-motion";

export const ContainerMotion = (): {
    containerAnimation: Variants;
    childrenContainerAnimation: Variants;
    gridsAnimation: Variants;
} => {
    const containerAnimation: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                staggerChildren: 0.15,
            }
        }
    }

    const childrenContainerAnimation: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                staggerChildren: 0.1,
            }
        }
    }

    const gridsAnimation: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    }

    return { containerAnimation, childrenContainerAnimation, gridsAnimation }
}
