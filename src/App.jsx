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
            src="/imgs/banner.png"
            alt="Top banner"
            className="w-full h-auto object-contain"
          />
        </section>

        <section className="mx-auto max-w-7xl px-4">
          <h1 className="text-5xl font-bold">TRISHA SAMILLANO</h1>
        </section>

        <section className="lg:min-h-screen bg-white py-6 flex justify-center items-center">
          {/* <h2 className="text-center uppercase font-mono text-2xl px-3 md:text-3xl font-semibold pt-8 pb-6">
            San Pablo City of Lakes Festival
          </h2> */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-3 max-w-6xl mx-auto bg-re">
            <img
              src="YAKAPLAWA.png"
              className="w-full backdrop-blur-lg bg-white border border-gray-200 rounded-2xl shadow-md md:col-span-1 object-fill"
            />
            {/* RIGHT SIDE */}
            <div className="flex flex-col md:col-span-2 justify-center">
              <h2 className="text-center uppercase font-mono text-xl px-3  md:text-3xl font-semibold py-2">
                About Me
              </h2>

              <p className="text-xs md:text-base text-center md:px-20">
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

              <div className="flex justify-center">
                <img src="COL.png" className="w-50 md:w-75 lg:w-100" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
