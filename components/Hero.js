"use client";

import { motion } from "framer-motion";
import { ChevronDown, Download, Mail } from "lucide-react";
import ReactNative from "../public/techStack/react_native.svg";
import ReactJS from "../public/techStack/react-js.svg";
import NextJS from "../public/techStack/next-js.svg";
import JavaScript from "../public/techStack/javascript.svg";
import Python from "../public/techStack/python.svg";
import Postgresql from "../public/techStack/postgresql.svg";
import AWS from "../public/techStack/aws.svg";
import Firebase from "../public/techStack/firebase.svg";
import Redux from "../public/techStack/redux.svg";
import Image from "next/image";

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const techStackData = [
    ReactNative,
    ReactJS,
    NextJS,
    JavaScript,
    Python,
    Postgresql,
    AWS,
    Firebase,
    Redux,
  ];

  const handleDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement("a");
    link.href = "/vignesh_kumar_s_resume.pdf";
    link.download = "Vignesh_Kumar_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Enhanced Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 via-white to-purple-50/90 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />

      {/* Grid Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, #000 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -25, 0],
            rotate: [0, 15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-4 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-400 to-blue-600 dark:from-blue-600 dark:to-blue-800 rounded-full opacity-20 blur-sm"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, -20, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-32 right-4 sm:right-20 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-r from-purple-400 to-purple-600 dark:from-purple-600 dark:to-purple-800 rounded-full opacity-15 blur-sm"
        />
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0],
            rotate: [0, 25, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-32 left-4 sm:left-20 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-green-400 to-emerald-600 dark:from-green-600 dark:to-emerald-800 rounded-full opacity-25 blur-sm"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -15, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 right-8 sm:right-32 w-14 h-14 sm:w-18 sm:h-18 bg-gradient-to-r from-yellow-400 to-orange-500 dark:from-yellow-600 dark:to-orange-700 rounded-full opacity-20 blur-sm"
        />
      </div>

      <div className="container-custom section-padding relative z-10 py-12 sm:py-20">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-4 pt-8"
          >
            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg lg:text-xl text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase"
            >
              {"Hello, I'm"}
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-gray-900 dark:text-white leading-tight tracking-tight"
            >
              Vignesh Kumar S
            </motion.h1>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gradient leading-tight"
            >
              Senior Developer | Mobile & Full Stack
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed pt-4 pb-4 px-4 sm:px-0"
            >
              Senior Developer with 3.8+ years of experience building cross-platform
              mobile applications using React Native, with apps published on both
              Google Play Store and Apple App Store. Also skilled in Python FastAPI
              backend development.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-8 sm:pt-12"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("contact")}
                className="btn-primary flex items-center gap-3 px-8 py-4 text-base sm:text-lg w-full sm:w-auto min-w-[200px] justify-center shadow-soft"
              >
                <Mail size={20} />
                Get In Touch
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownload}
                className="btn-secondary flex items-center gap-3 px-8 py-4 text-base sm:text-lg w-full sm:w-auto min-w-[200px] justify-center"
              >
                <Download size={20} />
                Download CV
              </motion.button>
            </motion.div>

            {/* Tech Stack Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="pt-12 sm:pt-16 flex flex-col gap-4"
            >
              <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mb-8 font-medium">
                Technologies I work with
              </p>
              <div className="flex flex-wrap items-center justify-between gap-4">
                {techStackData.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <Image
                      src={tech}
                      alt="tech icon"
                      width={40}
                      height={40}
                      className="flex items-center justify-center"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => scrollToSection("about")}
          className="group p-3 sm:p-4 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-soft hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="bounce-animation"
          >
            <ChevronDown
              size={24}
              className="text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors"
            />
          </motion.div>
        </motion.button>
      </motion.div> */}
    </section>
  );
};

export default Hero;
