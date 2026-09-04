import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Eye } from "lucide-react";
import { Button } from "./ui/button";

export default function Carousel3D({ projects, onSelectProject }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  const touchStartX = useRef(null);

  // Responsive width tracking
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 640;
  const isTablet = windowWidth >= 640 && windowWidth < 1024;
  const total = projects.length;

  const nextSlide = () => {
    if (total === 0) return;
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    if (total === 0) return;
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  // Keyboard navigation when hovering or focused
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isHovered) return;
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isHovered, total]);

  // Auto-play when not hovered
  useEffect(() => {
    if (isHovered || total <= 1) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(timer);
  }, [isHovered, total]);

  // Touch swipe support with sensitive threshold for mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (diff > 40) {
      prevSlide();
    } else if (diff < -40) {
      nextSlide();
    }
    touchStartX.current = null;
  };

  // Helper to calculate circular distance
  const getOffset = (index) => {
    let diff = index - activeIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  if (total === 0) return null;

  // On mobile: show only immediate neighbors (offset -1, 0, 1) so side cards peek cleanly without edge clipping
  const maxVisibleOffset = isMobile ? 1 : 2;

  return (
    <div
      className="relative w-full py-6 sm:py-10 select-none overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Subtle Radial Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[500px] md:w-[700px] h-[260px] sm:h-[350px] bg-gradient-to-r from-[#00F0FF]/15 via-[#C026D3]/15 to-[#00F0FF]/15 blur-[90px] rounded-full pointer-events-none -z-10" />

      {/* 3D Perspective Stage */}
      <div
        className="relative mx-auto flex items-center justify-center min-h-[420px] sm:min-h-[460px] md:min-h-[500px] px-2 sm:px-4"
        style={{
          perspective: isMobile ? "850px" : isTablet ? "1050px" : "1250px",
          perspectiveOrigin: "center center",
        }}
      >
        <div
          className="relative w-[265px] sm:w-[360px] md:w-[460px] h-[390px] sm:h-[420px] md:h-[440px]"
          style={{ transformStyle: "preserve-3d" }}
        >
          {projects.map((project, index) => {
            const offset = getOffset(index);
            const isActive = offset === 0;
            const isVisible = Math.abs(offset) <= maxVisibleOffset;

            if (!isVisible) return null;

            // Tailored 3D math:
            // On mobile (265px card): xSpacing 108px makes ~60px of the adjacent card visibly peek on each side!
            const xSpacing = isMobile ? 108 : isTablet ? 200 : 275;
            const tx = offset * xSpacing;
            const tz = isActive
              ? isMobile
                ? 70
                : 110
              : isMobile
              ? -50
              : -Math.abs(offset) * 100;
            const ry =
              offset === 0
                ? 0
                : offset > 0
                ? isMobile
                  ? -28
                  : -36
                : isMobile
                ? 28
                : 36;
            const scale = isActive
              ? 1
              : isMobile
              ? 0.82
              : Math.max(0.7, 1 - Math.abs(offset) * 0.16);
            const opacity = isActive
              ? 1
              : isMobile
              ? 0.65
              : Math.max(0.35, 1 - Math.abs(offset) * 0.35);
            const zIndex = 30 - Math.abs(offset) * 10;

            return (
              <div
                key={project.id}
                onClick={() => {
                  if (!isActive) {
                    setActiveIndex(index);
                  }
                }}
                className={`absolute inset-0 rounded-2xl transition-all duration-500 ease-out cursor-pointer ${
                  isActive ? "cursor-default" : "hover:brightness-125"
                }`}
                style={{
                  transform: `translateX(${tx}px) translateZ(${tz}px) rotateY(${ry}deg) scale(${scale})`,
                  opacity,
                  zIndex,
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Card Shell */}
                <div
                  className={`w-full h-full rounded-2xl flex flex-col justify-between overflow-hidden backdrop-blur-xl border transition-all duration-500 bg-[#080B11]/95 ${
                    isActive
                      ? "border-[#00F0FF]/60 shadow-[0_0_30px_rgba(0,240,255,0.3),0_15px_35px_rgba(0,0,0,0.85)]"
                      : "border-white/15 shadow-[0_10px_25px_rgba(0,0,0,0.7)]"
                  }`}
                >
                  {/* Card Top Header */}
                  <div className="flex items-center justify-between px-3.5 sm:px-5 pt-3 sm:pt-4 pb-2 border-b border-white/5 bg-white/[0.02]">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#00F0FF] animate-pulse" />
                      <span className="text-[10px] sm:text-xs font-urbanist font-medium tracking-wider text-slate-300 uppercase">
                        {project.category === "saas"
                          ? "SaaS Platform"
                          : project.category === "ecommerce"
                          ? "E-Commerce"
                          : "AI & Web"}
                      </span>
                    </div>

                    <span className="text-[10px] sm:text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 font-urbanist">
                      {project.imageCount} {project.imageCount > 1 ? "Screens" : "Screen"}
                    </span>
                  </div>

                  {/* Thumbnail Preview */}
                  <div className="relative mx-3 sm:mx-4 my-2 rounded-xl overflow-hidden border border-white/10 bg-black/40 h-36 sm:h-44 md:h-48 flex-shrink-0 group">
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-out hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#080B11] via-transparent to-transparent opacity-80" />

                    {isActive && project.stats && (
                      <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
                        <span className="text-[10px] sm:text-xs px-2 py-0.5 rounded-full bg-[#080B11]/85 backdrop-blur-md border border-[#00F0FF]/40 text-[#00F0FF] font-urbanist">
                          {project.stats}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Card Content & Details */}
                  <div className="px-3.5 sm:px-5 pb-4 sm:pb-5 pt-1 flex flex-col gap-2 sm:gap-3 flex-1 justify-between">
                    <div>
                      <h4
                        className={`font-urbanist font-bold text-sm sm:text-lg line-clamp-1 transition-colors ${
                          isActive ? "text-white" : "text-slate-300"
                        }`}
                      >
                        {project.title}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-slate-400 font-urbanist line-clamp-1 mt-0.5">
                        {project.tagline || project.description}
                      </p>
                    </div>

                    {/* Tags List */}
                    <div className="flex flex-wrap gap-1">
                      {project.tags.slice(0, isMobile ? 2 : 3).map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] sm:text-[11px] px-1.5 sm:px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-300 font-urbanist"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > (isMobile ? 2 : 3) && (
                        <span className="text-[10px] sm:text-[11px] px-1 py-0.5 rounded-md text-slate-400 font-urbanist">
                          +{project.tags.length - (isMobile ? 2 : 3)}
                        </span>
                      )}
                    </div>

                    {/* Actions */}
                    {isActive ? (
                      <div className="flex items-center gap-2 pt-2 border-t border-white/5">
                        <Button
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectProject(project);
                          }}
                          className="flex-1 py-1.5 sm:py-2 h-8 sm:h-9 rounded-xl bg-gradient-to-r from-[#00F0FF] to-[#00D2FF] text-[#080B11] font-urbanist font-bold text-[11px] sm:text-xs tracking-wide hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all flex items-center justify-center gap-1.5"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          Explore 
                        </Button>

                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (project.link === "#") {
                              e.preventDefault();
                              alert("Closed Source Enterprise System");
                            }
                          }}
                          className="h-8 sm:h-9 px-2.5 sm:px-3 rounded-xl border border-white/15 bg-white/5 hover:bg-[#00F0FF]/15 hover:border-[#00F0FF]/40 text-slate-200 hover:text-[#00F0FF] transition-all flex items-center justify-center text-[11px] sm:text-xs font-urbanist gap-1"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          Live
                        </a>
                      </div>
                    ) : (
                      <div className="pt-2 border-t border-white/5 flex items-center justify-center text-[10px] sm:text-[11px] text-slate-400 font-urbanist">
                        Tap to view
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom Reflection Glow */}
                {isActive && (
                  <div className="h-5 sm:h-6 w-[80%] mx-auto bg-gradient-to-b from-[#00F0FF]/20 to-transparent blur-md -mt-1 rounded-full pointer-events-none" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center gap-3 sm:gap-6 mt-4 sm:mt-6 px-4">
        <button
          onClick={prevSlide}
          aria-label="Previous Project"
          className="p-2 sm:p-3 rounded-full bg-white/5 hover:bg-[#00F0FF]/20 border border-white/10 hover:border-[#00F0FF]/50 text-slate-300 hover:text-[#00F0FF] transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:scale-110 active:scale-95 flex-shrink-0"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Dots Pagination */}
        <div className="flex items-center gap-1 sm:gap-2 overflow-hidden py-1 max-w-[220px] sm:max-w-none">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 flex-shrink-0 ${
                i === activeIndex
                  ? "w-5 sm:w-8 bg-gradient-to-r from-[#00F0FF] to-[#C026D3] shadow-[0_0_10px_rgba(0,240,255,0.7)]"
                  : "w-1.5 sm:w-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          aria-label="Next Project"
          className="p-2 sm:p-3 rounded-full bg-white/5 hover:bg-[#00F0FF]/20 border border-white/10 hover:border-[#00F0FF]/50 text-slate-300 hover:text-[#00F0FF] transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:scale-110 active:scale-95 flex-shrink-0"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      {/* Active Project Counter */}
      {/* <div className="text-center mt-2 sm:mt-3">
        <span className="text-[10px] sm:text-xs text-slate-400 font-urbanist tracking-widest uppercase">
          Project <span className="text-[#00F0FF] font-bold">{activeIndex + 1}</span> of {total}
        </span>
      </div> */}
    </div>
  );
}
