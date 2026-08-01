import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />

      <main>
        {/* TOP IMAGE SECTION */}
        <section id="home" className="w-full">
          <img
            src="/imgs/hero.png"
            alt="Top banner"
            className="w-full h-auto object-contain"
          />
        </section>

        <section className="lg:min-h-screen bg-white py-6 flex justify-center items-center hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-3 max-w-6xl mx-auto">
            <img
              src="/imgs/trish.png"
              className="size-72 md:size-96 lg:size-[28rem]"
              // className="w-full backdrop-blur-lg bg-white border border-gray-200 rounded-2xl shadow-md md:col-span-1 object-fill"
            />
            {/* RIGHT SIDE */}
            <div className="flex flex-col md:col-span-2 justify-center">
              <h2 className="text-center uppercase font-mono text-xl px-3  md:text-3xl font-semibold py-2">
                About Me
              </h2>

              <p className="text-xs md:text-base text-justify md:px-20">
                Lorem ipsum dolor sit amet consectetur. Id id urna rutrum purus
                consectetur purus. Vestibulum vitae proin facilisis accumsan.
                Eget quis sit senectus parturient accumsan venenatis augue id.
                Viverra vulputate arcu tellus integer in dictum dignissim felis
                nunc. gfggfghi magna. Leo aliquet libero pharetra nisl et
                potenti amet. Maecenas eu est non ipsum egestas ut. Tempor
                lectus interdum ante porttitor pharetra eleifend penatibus amet.
                Duis convallis facilisis malesuada nulla sapien vestibulum amet
                felis amet. Volutpat vitae phasellus dignissim sictum orsemper
                sollicitudin.
              </p>

              {/* <div className="flex justify-center">
                <img src="COL.png" className="w-50 md:w-75 lg:w-100" />
              </div> */}
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="min-h-screen bg-white flex items-center py-12 px-6">
          <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-[320px_1fr] lg:grid-cols-[380px_1fr] gap-12 items-center">
            {/* LEFT SIDE */}
            <div className="flex justify-center">
              <div className="relative">
                {/* Background Blob */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-red-200/80 blur-3xl"></div>
                </div>

                {/* Chibi */}
                <img
                  src="/imgs/trish.png"
                  alt="Trish Chibi"
                  className="relative w-64 md:w-72 lg:w-80 h-auto object-contain rotate-[-3deg] hover:rotate-0 hover:scale-105 transition-all duration-500"
                />
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex flex-col justify-center">
              <h2 className="text-center md:text-left uppercase font-mono text-2xl md:text-4xl font-bold mb-6">
                About Me
              </h2>

              <p className="text-sm md:text-base leading-8 text-justify text-gray-700">
                Lorem ipsum dolor sit amet consectetur. Id id urna rutrum purus
                consectetur purus. Vestibulum vitae proin facilisis accumsan.
                Eget quis sit senectus parturient accumsan venenatis augue id.
                Viverra vulputate arcu tellus integer in dictum dignissim felis
                nunc. Leo aliquet libero pharetra nisl et potenti amet. Maecenas
                eu est non ipsum egestas ut. Tempor lectus interdum ante
                porttitor pharetra eleifend penatibus amet. Duis convallis
                facilisis malesuada nulla sapien vestibulum amet felis amet.
                Volutpat vitae phasellus dignissim dictum semper sollicitudin.
              </p>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section className="min-h-screen bg-purple-50 flex items-center py-12 px-6">
          <div className="max-w-6xl mx-auto w-full">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="uppercase font-mono text-2xl md:text-4xl font-bold tracking-wider text-gray-900">
                Services
              </h2>
              <p className="mt-2 text-sm md:text-base text-gray-600 max-w-md mx-auto">
                What I bring to the table — bridging aesthetics, code, and
                system architecture.
              </p>
            </div>

            {/* 3-Column Responsive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Service 1: UI/UX Design */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-purple-100 hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center">
                <div className="w-14 h-14 mb-5 rounded-xl bg-purple-100 flex items-center justify-center">
                  {/* Swatch / Paint Brush Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 text-purple-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l6.401-6.402a3.75 3.75 0 0 1 5.304 0l.197.198a3.75 3.75 0 0 1 0 5.304l-6.402 6.401"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  UI/UX Design
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Crafting clean, user-centered interfaces, interactive
                  prototypes, and modern layouts focused on seamless usability.
                </p>
              </div>

              {/* Service 2: Web Development */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-purple-100 hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center">
                <div className="w-14 h-14 mb-5 rounded-xl bg-purple-100 flex items-center justify-center">
                  {/* Code Bracket Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 text-purple-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Web Development
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Building fast, responsive, and light frontend interfaces using
                  standard HTML, Tailwind CSS, and optimized code.
                </p>
              </div>

              {/* Service 3: System Analysis */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-purple-100 hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center">
                <div className="w-14 h-14 mb-5 rounded-xl bg-purple-100 flex items-center justify-center">
                  {/* CPU / Chart Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 text-purple-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3 1 3m0 0l.5 1.5m-1-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75M15 6.75v6"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  System Analysis
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Analyzing user requirements, structuring efficient system
                  workflows, and bridging client goals with tech specs.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
