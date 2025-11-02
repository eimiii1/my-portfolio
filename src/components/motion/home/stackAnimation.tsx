import { Variants } from "framer-motion"

export const StackMotion = (): {
    stackContainerAnimation: Variants;
    stackChildrenAnimation: Variants;
} => {
    const stackContainerAnimation: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.05,
                ease: "easeOut"
            }
        }
    }

    const stackChildrenAnimation: Variants = {
        hidden: { opacity: 0, x: -10 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    }

    return { stackContainerAnimation, stackChildrenAnimation }
}