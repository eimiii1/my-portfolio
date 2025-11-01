'use client'
import { Switch } from "@/components/ui/switch";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ThemeSwitch } from "@/components/global/ThemeSwitch";
import { MapPin, Mail, Github, Box, Link2, ExternalLink, FileUser, ChevronRight } from "lucide-react";
import TechStacks from "@/components/ui/techStacks";
import { Badge } from "@/components/ui/badge";
import Experience from "@/components/ui/Experience";
import { Separator } from "@/components/ui/separator";

export default function Main() {
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

  const techStacks = TechStacks();
  const experiences = Experience();

  const todayYear: number = new Date().getFullYear();


  return (
    <motion.div
      variants={containerAnimation}
      initial="hidden"
      animate="visible"
      className="h-screen w-[1000px] relative p-5 flex flex-col gap-8">
      {/* header */}
      <motion.div
        variants={childrenContainerAnimation}
        className="flex gap-6 items-center flex-col lg:flex-row">
        <Image src="/profile/philip.jpg" width={150} height={150} className="rounded-sm h-40 w-40" alt="Profile photo" />
        <div className="w-full flex flex-col gap-1">
          <div className="flex items-center justify-between pl-[5px]">
            <h1 className="font-extrabold text-lg md:text-2xl tracking-tight text-balance text-primary">Philip Barcelo</h1>
            <ThemeSwitch />
          </div>
          <div className="flex items-center">
            <MapPin className="scale-60" />
            <span className="text-xs md:text-sm font-normal text-primary">Nueva Ecija, Philippines</span>
          </div>
          <div className=" pl-[5px]">
            <h1 className="text-[0.75rem] md:text-[1rem] mt-2 mb-2 text-primary">College Student <span className="text-[#7e7e7e]">\</span> Major in Web Development</h1>
          </div>
          <div className="flex flex-wrap gap-2 lg:justify-start w-full">
            <Button asChild value="Github" className="text-[0.6rem] md:text-[0.8rem] flex items-center justify-center h-8 flex-1">
              <Link href="https://github.com/eimiii1">
                <Github className="scale-90" />
                Github</Link>
            </Button>
            <Button className="text-[0.6rem] md:text-[0.8rem] flex items-center justify-center h-8 flex-1" variant="outline">
              <Mail className="scale-90" />
              Send Email
            </Button>
            <Button className="text-[0.6rem] md:text-[0.8rem] flex items-center justify-center h-8 flex-6" variant="secondary">
              <FileUser className="scale-90" />
              Resume / CV
            </Button>
          </div>
        </div>
      </motion.div>
      {/* content */}
      <motion.div
        variants={childrenContainerAnimation}
        className="grid grid-cols-3 gap-2">
        <motion.div variants={gridsAnimation} className="border rounded-lg p-5 flex flex-col gap-4 lg:row-span-2 col-span-3 bg-accent/20">
          <h1 className="font-bold text-lg text-primary">About Me</h1>
          <div className="flex flex-col gap-7 text-shadow-2xs text-sm font-normal leading-relaxed">
            <p>
              I'm a web development student at the Nueva Ecija University of Science and Technology (NEUST) with a passion for creating modern, responsive, and user-friendly websites. I’m currently learning JavaScript and building projects using frameworks like React and Next.js to develop dynamic and efficient web applications.
            </p>
            <p>
              Throughout my studies, I’ve worked on various projects focused on web application development, optimization, and creating digital experiences that combine creativity and functionality. I’m also exploring backend technologies such as Node.js and databases like PostegreSQL and Supabase as the platform to broaden my skills and understand the full development process.
            </p>
            <p>
              Outside of web development, I enjoy exploring game development as a hobby. While it’s not part of my career path, I find it a fun and creative way to practice problem-solving and experiment with different technologies.
            </p>
          </div>
        </motion.div>
        <motion.div variants={gridsAnimation} className="flex flex-col gap-5 border col-span-3 lg:col-span-2 rows-span-1 h-fit rounded-lg p-5 bg-accent/20">
          <h1 className="font-bold text-lg text-primary">
            Experience
          </h1>
          <div className="flex flex-col justify-around gap-5 overflow-hidden h-48">
            {experiences.map(({ title, description, date, isActive }, index) => (
              <div key={index} className="flex gap-5">
                <div className="relative h-10">
                  <Badge className={`overflow-visible text-xs scale-90 flex items-center justify-center h-5 self-end border-gray-200
                  after:content-[''] after:h-15 after:w-0.5 after:absolute after:bg-gray-200 after:-bottom-15.25
                  font-semibold
                  ${isActive ? "border-primary!" : ""}
                  `} variant={`${isActive ? "default" : "outline"}`}>{date}</Badge>
                </div>
                <div className="w-full h-10">
                  <div className="flex flex-col gap-1.5">
                    <h1 className="text-[0.7rem] md:text-sm lg:text-sm font-semibold text-primary">
                      {title}
                    </h1>
                  </div>
                  <div className="flex items-center w-full justify-between">
                    <p className="text-[0.6rem] md:text-xs lg:text-xs text-primary">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div variants={gridsAnimation} className="flex flex-col gap-4 col-span-3 lg:col-span-1 row-span-3 border rounded-lg p-5 bg-accent/20">
          <h1 className="font-bold text-lg text-primary">
            Tech Stack
          </h1>
          <div className="flex flex-col gap-4 ">
            {techStacks.map(({ category, stacks }, index) => (
              <div key={index} className="flex flex-col gap-2">
                <h1 className="font-semibold text-sm">{category}</h1>
                <div className="flex gap-2 flex-wrap">
                  {stacks.map((stack, i) => (
                    <Badge key={i}
                      className="scale-100 rounded-md flex items-center justify-center"
                      variant="secondary"
                    >{stack}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div variants={gridsAnimation} className="flex flex-col gap-4 border rounded-lg bg-accent/20 row-span-3 col-span-3 h-full lg:col-span-2 p-5 text-sm font-semibold">
          <div className="flex items-center gap-1">
            <Link2 className="text-primary/30 scale-75" />
            <h1 className="text-primary">Social Links</h1>
          </div>
          <div className="flex flex-col gap-2">
            <Button asChild variant="outline"><Link href="https://github.com/eimiii1" target="blank" rel="noopener noreferrer">Github<ExternalLink className="scale-80" /></Link></Button>
            <Button asChild variant="outline"><Link href="https://www.facebook.com/johnphilip.barcelo/" target="_blank" rel="noopener noreferrer">Facebook<ExternalLink className="scale-80" /></Link></Button>
            <Button asChild variant="outline"><Link href="" target="_blank" rel="noopener noreferrer">LinkedIn<ExternalLink className="scale-80" /></Link></Button>
          </div>
        </motion.div>
        <motion.div variants={gridsAnimation} className="flex flex-col rounded-lg border p-5 col-span-3 lg:col-span-1 bg-accent/20">
          <div className="flex gap-1 items-center">
            <Mail className="text-primary scale-60" />
            <h1 className="text-sm">Email</h1>
          </div>
          <p className="text-[0.8rem] font-semibold text-primary">
            philipjohn1627@gmail.com
          </p>
        </motion.div>
      </motion.div>
      <div className="flex justify-end">
        <div className="flex justify-center items-center gap-2">
            <Button variant="link" className="p-0 font-medium text-primary" asChild><Link href="/projects">Recent Projects</Link></Button>
          <ChevronRight className="w-3" />
        </div>
      </div>
      <Separator />

      <div className="p-1 pb-7 text-sm text-center">
        © {todayYear} Philip Barcelo. Portfolio design inspired by Bryl Lim.
      </div>
    </motion.div>
  )
}