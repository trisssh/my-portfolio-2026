import React from "react";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-white text-slate-600 py-16 px-6 md:px-12 border-t border-slate-800"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* TOP ROW: Large Name Branding */}
        <div className="mb-12 pb-8 text-center">
          <h1 className="font-mono text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-wider text-purple-500 uppercase">
            TRISHA SAMILLANO
          </h1>
          <p className="mt-2 text-xs md:text-sm font-mono text-purple-400">
            UI/UX Designer • Web Developer • System Analyst
          </p>
        </div>

        {/* MIDDLE ROW: 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Column 1: Short Tagline / Bio (5 cols) */}
          <div className="md:col-span-5 space-y-3">
            <h3 className="text-gray-800 text-sm font-mono uppercase tracking-widest">
              About
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
              Passionate about bridging human-centered design with clean
              front-end code and system architecture. Open for freelance
              opportunities and collaborations.
            </p>
          </div>

          {/* Column 2: Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-gray-800  text-sm font-mono uppercase tracking-widest">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm font-mono text-gray-800 ">
              <li>
                <a
                  href="#home"
                  className="hover:text-purple-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-purple-400 transition-colors"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-purple-400 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-purple-400 transition-colors"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Socials (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-gray-800 text-sm font-mono uppercase tracking-widest">
              Connect
            </h3>
            <ul className="space-y-2 text-sm font-mono text-gray-800 ">
              <li>
                <a
                  href="mailto:samillanotrisha@gmail.com"
                  className="flex items-center gap-2 hover:text-purple-400 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 text-purple-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                  samillanotrisha768@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/trisha-samillano-94b147263/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-purple-400 transition-colors"
                >
                  <svg
                    className="w-4 h-4 text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                  LinkedIn
                </a>
              </li>
              <li>  
                <a
                  href="//github.com/trisssh"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-purple-400 transition-colors"
                >
                  <svg
                    className="w-4 h-4 text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                  </svg>
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR: Copyright */}
        <div className="border-t border-slate-800/80 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-2">
          <p>
            © {new Date().getFullYear()} Trisha Samillano. All rights reserved.
          </p>
          <p>Designed in Figma • Built with React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
