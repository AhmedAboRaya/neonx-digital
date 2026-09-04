import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiTypescript,
  SiSass,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiBootstrap,
  SiGit,
  SiFigma,
  SiCanva,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
import MotionWrapper from "./MotionWrapper";

const tools = [
  {
    name: "React",
    description: "Frontend Library",
    icon: SiReact,
    color: "#61DAFB",
  },
  {
    name: "Next.js",
    description: "React Framework",
    icon: SiNextdotjs,
    color: "#000000",
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS",
    icon: SiTailwindcss,
    color: "#06B6D4",
  },
  {
    name: "HTML",
    description: "Markup Language",
    icon: SiHtml5,
    color: "#E34F26",
  },
  {
    name: "CSS",
    description: "Styling Language",
    icon: SiCss3,
    color: "#1572B6",
  },
  {
    name: "TypeScript",
    description: "Typed JavaScript",
    icon: SiTypescript,
    color: "#3178C6",
  },
  {
    name: "SASS",
    description: "CSS Preprocessor",
    icon: SiSass,
    color: "#CC6699",
  },
  {
    name: "Node.js",
    description: "JavaScript Runtime",
    icon: SiNodedotjs,
    color: "#339933",
  },
  {
    name: "Express.js",
    description: "Web Application Framework",
    icon: SiExpress,
    color: "#000000",
  },
  {
    name: "JavaScript",
    description: "Programming Language",
    icon: IoLogoJavascript,
    color: "#F7DF1E",
  },
  {
    name: "MongoDB",
    description: "NoSQL Database",
    icon: SiMongodb,
    color: "#47A248",
  },
  {
    name: "Bootstrap",
    description: "CSS Framework",
    icon: SiBootstrap,
    color: "#7952B3",
  },
  {
    name: "Figma",
    description: "Design Tool",
    icon: SiFigma,
    color: "#F24E1E",
  },
  {
    name: "Azure DevOps",
    description: "Development Platform",
    icon: VscAzure,
    color: "#0078D7",
  },
  {
    name: "Canva",
    description: "Graphic Design Platform",
    icon: SiCanva,
    color: "#00C4CC",
  },
];

export default function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <div id="techStack" className="container flex flex-col justify-center items-center pt-24">
        <div className="flex justify-center mx-auto mt-22">
          <MotionWrapper animationType="slideUp">
            <h1 className="mt-10 px-5 py-2 text-primary border border-[#00F0FF]/30 bg-[#080B11]/80 font-urbanist rounded-full text-md tracking-wide font-thin shadow-[0_0_10px_rgba(0,240,255,0.15)]">
              TechStack
            </h1>
          </MotionWrapper>
        </div>
        <div className="mt-7">
          <MotionWrapper animationType="slideUp" delay={0.2}>
            <p className="text-center text-[#CCCCCC] font-urbanist text-xl md:text-3xl lg:text-4xl max-w-xl">
              Our Toolbox for Excellence
            </p>
          </MotionWrapper>
        </div>
      </div>
      <div className="mb-20 p-4 sm:p-8" ref={ref}>
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative overflow-hidden rounded-2xl bg-[#0D131F] border border-white/10 hover:border-[#00F0FF]/50 p-3 sm:p-4 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,240,255,0.35)] h-full flex flex-col justify-between"
              >
                <MotionWrapper
                  animationType="slideLeft"
                  threshold={0.7}
                  duration={1}
                  delay={index * 0.1}
                >
                  <div className="flex items-center sm:items-start sm:flex-row flex-col space-x-2 sm:space-x-3">
                    <div className="rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/30 shadow-[0_0_8px_rgba(0,240,255,0.2)] p-2">
                      <tool.icon
                        className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                        style={{ color: tool.color }}
                      />
                    </div>
                    <div className="space-y-0.5">
                      <h3 className="text-center sm:text-left pt-3 sm:pt-0 text-sm font-semibold text-white">
                        {tool.name}
                      </h3>
                      <p className="text-center sm:text-left text-xs text-gray-400">
                        {tool.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </MotionWrapper>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
