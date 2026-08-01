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
      </main>
    </>
  );
}

export default App;
