'use client'
import { Switch } from "@/components/ui/switch";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ContainerMotion } from "@/components/motion/home/gridAnimation";
import { AboutMotion } from "@/components/motion/home/aboutAnimation";
import { ExperienceMotion } from "@/components/motion/home/experienceAnimation";
import { ThemeSwitch } from "@/components/global/ThemeSwitch";
import { MapPin, Mail, Github, Box, Link2, ExternalLink, FileUser, MoveRight, ArrowRight, Linkedin, Facebook } from "lucide-react";
import TechStacks from "@/components/ui/techStacks";
import { Badge } from "@/components/ui/badge";
import Experience from "@/components/ui/Experience";
import { Separator } from "@/components/ui/separator";
import Certificates from "@/components/ui/Certificates";
import { StackMotion } from "@/components/motion/home/stackAnimation";
import { ProjectsMotion } from "@/components/motion/home/projectsAnimation";

export default function Main() {
  // Container Motion
  const { containerAnimation, childrenContainerAnimation, gridsAnimation } = ContainerMotion();

  // "About Me" section motion 
  const { aboutContainerAnimation, aboutChildrenAnimation } = AboutMotion();

  // "Experience" section motion
  const { experienceContainerAnimation, experienceChildrenAnimation } = ExperienceMotion();

  // "Tech Stack" section motion 
  const { stackContainerAnimation, stackChildrenAnimation } = StackMotion();

  // "Projects" section motion
  const { projectsContainerAnimation, projectsChildrenAnimation } = ProjectsMotion();


  const about = [
    "I'm a web development student at the Nueva Ecija University of Science and Technology (NEUST) with a passion for creating modern, responsive, and user-friendly websites. I’m currently learning JavaScript and building projects using frameworks like React and Next.js to develop dynamic and efficient web applications.",
    "Throughout my studies, I’ve worked on various projects focused on web application development, optimization, and creating digital experiences that combine creativity and functionality. I’m also exploring backend technologies such as Node.js and databases like PostegreSQL and Supabase as the platform to broaden my skills and understand the full development process.",
    "Outside of web development, I enjoy exploring game development as a hobby. While it’s not part of my career path, I find it a fun and creative way to practice problem-solving and experiment with different technologies."
  ]

  const techStacks = TechStacks();
  const experiences = Experience();
  const certifications = Certificates();

  const todayYear: number = new Date().getFullYear();

  const MotionBadge = motion(Badge)

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
            <h1 className="font-extrabold text-lg md:text-2xl tracking-tight text-balance text-primary antialiased">Philip Barcelo</h1>
            <ThemeSwitch />
          </div>
          <div className="flex items-center">
            <MapPin className="scale-60" />
            <span className="text-xs md:text-sm font-normal text-primary">Gapan City, Nueva Ecija, Philippines</span>
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
          <motion.div variants={aboutContainerAnimation} className="flex flex-col gap-4 text-sm font-normal leading-relaxed">
            {about.map((para, i) => (
              <motion.p key={i} className=" tracking-tight text-primary antialiased font-medium" variants={aboutChildrenAnimation}>
                {para}
              </motion.p>
            ))}
          </motion.div>
        </motion.div>
        <motion.div variants={gridsAnimation} className="flex flex-col gap-5 border col-span-3 lg:col-span-2 rows-span-1 h-fit rounded-lg p-5 bg-accent/20">
          <h1 className="font-bold text-lg text-primary">
            Experience
          </h1>
          <motion.div variants={experienceContainerAnimation} whileInView="visible" initial="hidden" viewport={{ once: true, amount: 0.3 }} className="flex flex-col justify-around gap-5 overflow-hidden h-48">
            {experiences.map(({ title, description, date, isActive }, index) => (
              <motion.div key={index} className="flex gap-5" variants={experienceChildrenAnimation}>
                <div className="relative h-10">
                  <Badge className={`overflow-visible text-xs scale-90 flex items-center justify-center h-5 self-end border-gray-200
                  after:content-[''] after:h-15 after:w-px after:absolute after:bg-gray-200 after:-bottom-15.25
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
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <motion.div variants={gridsAnimation} className="flex flex-col gap-4 col-span-3 lg:col-span-1 row-span-3 border rounded-lg p-5 bg-accent/20">
          <h1 className="font-bold text-lg text-primary">
            Tech Stack
          </h1>
          <motion.div variants={stackContainerAnimation} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="flex flex-col gap-4 ">
            {techStacks.map(({ category, stacks }, index) => (
              <div key={index} className="flex flex-col gap-2">
                <h1 className="font-semibold text-sm">{category}</h1>
                <motion.div className="flex gap-2 flex-wrap">
                  {stacks.map((stack, i) => (
                    <MotionBadge variants={stackChildrenAnimation} key={i}
                      className="scale-100 rounded-md flex items-center justify-center"
                      variant="secondary"
                    >{stack}</MotionBadge>
                  ))}
                </motion.div>
              </div>
            ))}
          </motion.div>
        </motion.div>
        <motion.div variants={gridsAnimation} className="flex flex-col gap-4 border rounded-lg bg-accent/20 row-span-3 col-span-3 h-fit lg:col-span-2 p-5 text-sm font-semibold">
          <div className="flex items-center gap-1">
            <Link2 className="text-primary/30 scale-75" />
            <h1 className="text-primary">Social Links</h1>
          </div>
          <div className="flex flex-col gap-2">
            <Button asChild variant="default"><Link href="https://github.com/eimiii1" target="blank" rel="noopener noreferrer"><Github />Github<ExternalLink className="scale-80" /></Link></Button>
            <Button asChild variant="destructive" className="bg-blue-600 dark:bg-blue-600 hover:bg-blue-800 dark:hover:bg-blue-800"><Link href="https://www.facebook.com/johnphilip.barcelo/" target="_blank" rel="noopener noreferrer"><Facebook />Facebook<ExternalLink className="scale-80" /></Link></Button>
            <Button asChild variant="destructive" className="bg-blue-400 dark:bg-blue-400 hover:bg-blue-500 dark:hover:bg-blue-500"><Link href="" target="_blank" rel="noopener noreferrer"><Linkedin />LinkedIn<ExternalLink className="scale-80" /></Link></Button>
          </div>
        </motion.div>
        <motion.div variants={gridsAnimation} className="flex flex-col border rounded-lg p-5 col-span-3 lg:col-span-1 bg-accent/80">
          <div className="flex gap-1 items-center">
            <Mail className="text-primary scale-60" />
            <h1 className="text-sm">Email</h1>
          </div>
          <p className="text-[0.8rem] font-semibold text-primary">
            philipjohn1627@gmail.com
          </p>
        </motion.div>
        <motion.div variants={gridsAnimation} className="flex flex-col gap-2 rounded-lg border p-5 col-span-3 lg:col-span-3 bg-accent/20">
          <div className="flex justify-start items-center gap-2">
            <h1 className="font-bold text-lg text-primary">Certifications</h1>
            <Link href="/projects" className="flex gap-1 justify-center items-center">
              <span className="text-xs">View All</span>
              <ArrowRight className="w-3" />
            </Link>
          </div>
          <div className="z-0 hover:-translate-y-0.5 transition-transform">
            {certifications.map(({ title, organization, link }, index) => (
              <Link href={link} target="_blank" key={index} className="">
                <div className="border p-3 rounded-lg bg-accent/50 hover:bg-secondary">
                  <h1 className="font-bold text-sm">{title}</h1>
                  <p className="text-xs">{organization}</p>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </motion.div>
      <Separator className="shadow-2xl" />
      <motion.div variants={childrenContainerAnimation} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="flex flex-col justify-center gap-4">
        <div className="flex justify-start items-center gap-2">
          <h1 className="text-lg font-bold text-balance">Projects</h1>
          <Link href="/projects" className="flex gap-1 justify-center items-center">
            <span className="text-xs">View All</span>
            <ArrowRight className="w-3" />
          </Link>
        </div>
        <motion.div variants={projectsContainerAnimation} className="grid lg:grid-cols-3 gap-5">
          {Array.from({ length: 6 }).map((_, index) => (
            <motion.div key={index} variants={projectsChildrenAnimation} className="h-30 border rounded-lg shadow-xs">
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <Separator />

      <div className="p-1 pb-7 text-sm text-center">
        © {todayYear} Philip Barcelo. Portfolio design inspired by Bryl Lim.
      </div>
    </motion.div>
  )
}