import { Variants } from "framer-motion";

export const ProjectsMotion = (): {
    projectsContainerAnimation: Variants;
    projectsChildrenAnimation: Variants;
} => {
    const projectsContainerAnimation: Variants = {
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

    const projectsChildrenAnimation: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    }

    return { projectsContainerAnimation, projectsChildrenAnimation }
}