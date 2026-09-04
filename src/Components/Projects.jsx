import React, { useState, useRef, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import { Layers, Sparkles, Filter } from "lucide-react";
import MotionWrapper from "./MotionWrapper.jsx";
import Carousel3D from "./Carousel3D.jsx";
import ProjectModal from "./ui/ProjectModal.jsx";
import {
  projects,
  categories,
  getProjectImages,
} from "../data/projectsData.js";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.1 });

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  // Filter projects dynamically by selected category
  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="md:px-4 mb-20 pt-16 relative"
    >
      <div id="projects" className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col justify-center items-center text-center">
          <div className="flex justify-center mx-auto mt-16">
            <MotionWrapper animationType="slideUp">
              <h2 className="px-5 py-2.5 text-primary border border-[#00F0FF]/30 bg-[#080B11]/80 font-urbanist rounded-full text-xs md:text-sm tracking-wide font-thin shadow-[0_0_12px_rgba(0,240,255,0.15)] flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                Featured Projects
              </h2>
            </MotionWrapper>
          </div>

          <div className="mt-5 mb-8">
            <MotionWrapper animationType="slideUp" delay={0.2}>
              <p className="text-center text-[#CCCCCC] font-urbanist text-xl md:text-3xl lg:text-4xl max-w-xl">
                Seamless Digital Experiences
              </p>
            </MotionWrapper>
          </div>

        </div>

        {/* 3D Coverflow Perspective Carousel */}
        <div className="w-full">
          <Carousel3D
            key={activeCategory}
            projects={filteredProjects}
            onSelectProject={openModal}
          />
        </div>
      </div>

      {/* Project Modal with Multi-Screen Carousel */}
      {selectedProject && (
        <ProjectModal
          isOpen={isModalOpen}
          onClose={closeModal}
          project={selectedProject}
          images={getProjectImages(selectedProject.id)}
        />
      )}
    </motion.section>
  );
}