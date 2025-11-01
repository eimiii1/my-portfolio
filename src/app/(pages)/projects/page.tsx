'use client';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, ChevronLeft } from "lucide-react";
import Link from "next/link";

const Projects = () => {
    return (
        <motion.div className="h-screen w-[800px] flex justify-center p-5 pt-7.5">
        {/* header */}
        <div className="w-full h-fit flex justify-start items-center gap-4">
            <div className="flex gap-1 justify-center items-center">
                <ArrowLeft className="scale-60" />
                <Button variant="link" className="p-0 text-primary font-medium"><Link href="/">Back</Link></Button>
            </div>
            <h1 className="font-bold text-2xl text-balance">All Projects</h1>
        </div>
        </motion.div>
    )
}

export default Projects;