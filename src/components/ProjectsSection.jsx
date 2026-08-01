import React, { useState } from "react";

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Portfolio Web Design 2026",
      subtitle: "UI/UX Design & Frontend Development",
      description:
        "A modern, minimalist portfolio featuring interactive UI components, structured layout hierarchy, and responsive dark mode aesthetic.",
      tags: ["Figma", "React", "Tailwind CSS"],
      badge: "Figma + Coded",
      figmaUrl: "https://www.figma.com",
      liveUrl: "http://localhost:5174",
      laptopImg: "/imgs/trish.png",
      mobileImg: "/imgs/trish.png",
    },
    {
      id: 2,
      title: "System Management Portal",
      subtitle: "System Analysis & Architecture",
      description:
        "A comprehensive administrative system designed to streamline workflow analysis, operational metrics, and user management.",
      tags: ["System Analysis", "Figma", "Node.js"],
      badge: "Figma Prototype",
      figmaUrl: "https://www.figma.com",
      liveUrl: "",
      laptopImg: "/imgs/trish.png",
      mobileImg: "/imgs/trish.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const currentProject = projects[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length,
    );
  };

  return (
    <section
      id="projects"
      className="bg-[#173B4C]/85 py-20 px-4 md:px-12 text-white min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="uppercase font-mono text-2xl md:text-4xl font-bold tracking-wider text-white">
            Featured Projects
          </h2>
          <p className="mt-2 text-xs md:text-sm font-mono text-slate-300">
            Project {currentIndex + 1} of {projects.length}
          </p>
        </div>

        {/* Main Wrapper with Side Navigation Buttons */}
        <div className="relative flex items-center justify-center gap-2 md:gap-6">
          {/* PREVIOUS BUTTON (Left Side) */}
          <button
            onClick={handlePrev}
            aria-label="Previous project"
            className="shrink-0 p-3 md:p-4 bg-[#112d3b] hover:bg-slate-700 border border-slate-600/60 rounded-full md:rounded-xl text-white transition-all cursor-pointer shadow-lg active:scale-95"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-5 h-5 md:w-6 md:h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          {/* PROJECT CARD */}
          <div className="w-full max-w-5xl bg-[#112d3b] border border-slate-700/60 rounded-3xl p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl transition-all duration-500">
            {/* LEFT SIDE: Details (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div>
                <span className="inline-block text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 mb-4">
                  {currentProject.badge}
                </span>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {currentProject.title}
                </h3>
                <p className="text-xs font-mono text-cyan-400 mb-4">
                  {currentProject.subtitle}
                </p>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {currentProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {currentProject.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono bg-[#173B4C] text-slate-200 px-3 py-1 rounded-md border border-slate-600/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-6 pt-4 border-t border-slate-700/50">
                {currentProject.figmaUrl && (
                  <a
                    href={currentProject.figmaUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-mono flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                  >
                    <svg
                      className="w-4 h-4 text-pink-400"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M8 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0zm0-8a4 4 0 0 1 4 4v4H8a4 4 0 1 1 0-8zm8 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm-8 8h4v4a4 4 0 1 1-4-4z" />
                    </svg>
                    Figma Design
                  </a>
                )}

                {currentProject.liveUrl && (
                  <a
                    href={currentProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-mono flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4 text-cyan-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                    Live Preview
                  </a>
                )}
              </div>
            </div>

            {/* RIGHT SIDE: Device Showcase (7 cols) */}
            <div className="lg:col-span-7 relative flex items-center justify-center min-h-[260px] md:min-h-[360px] p-4 bg-[#173B4C]/40 rounded-2xl border border-slate-700/40 overflow-hidden group">
              {/* Laptop View */}
              <div className="relative w-[82%] aspect-[16/10] bg-slate-800 rounded-xl p-2 shadow-2xl border border-slate-600/50">
                <div className="h-3 bg-slate-700/80 rounded-t-lg flex items-center px-2 gap-1 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                </div>
                <div className="w-full h-[calc(100%-1rem)] bg-slate-900 rounded-b-md overflow-hidden">
                  <img
                    src={currentProject.laptopImg}
                    alt="Laptop view"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Mobile View */}
              <div className="absolute right-4 bottom-3 w-[26%] aspect-[9/19] bg-slate-900 rounded-2xl p-1.5 shadow-2xl border-2 border-slate-600/70 group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-slate-800 rounded-xl overflow-hidden relative">
                  <div className="absolute top-1 left-1/2 -translate-x-1/2 w-7 h-1.5 bg-slate-900 rounded-full z-10"></div>
                  <img
                    src={currentProject.mobileImg}
                    alt="Mobile view"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* NEXT BUTTON (Right Side) */}
          <button
            onClick={handleNext}
            aria-label="Next project"
            className="shrink-0 p-3 md:p-4 bg-[#112d3b] hover:bg-slate-700 border border-slate-600/60 rounded-full md:rounded-xl text-white transition-all cursor-pointer shadow-lg active:scale-95"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-5 h-5 md:w-6 md:h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
