'use client'

import { motion } from 'framer-motion'
import { Code, Smartphone, Award, Clock } from 'lucide-react'
import Image from 'next/image'

const About = () => {
  const stats = [
    { icon: Code, label: 'Projects Delivered', value: '5+' },
    { icon: Smartphone, label: 'Apps Published', value: '4' },
    { icon: Award, label: 'Awards Won', value: '3' },
    { icon: Clock, label: 'Years Experience', value: '3.8+' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="about" className="bg-gray-50 dark:bg-gray-800">
      <div className="container-custom section-padding">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-7xl mx-auto"
        >
          {/* Enhanced Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16 lg:mb-20">
            <motion.h2
              className="text-responsive-xl font-black text-gray-900 dark:text-white mb-4 sm:mb-6"
              whileInView={{ y: [20, 0], opacity: [0, 1] }}
              transition={{ duration: 0.6 }}
            >
              About Me
            </motion.h2>
            <motion.div
              className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"
              whileInView={{ scaleX: [0, 1] }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.p
              className="mt-4 text-responsive-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
              whileInView={{ y: [20, 0], opacity: [0, 1] }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Get to know more about my journey, skills, and passion for mobile development
            </motion.p>
          </motion.div>

          {/* Section 1: Profile Photo + Summary Grid */}
          <div className="gap-8 lg:gap-12 items-start mb-16">
            {/* Profile Image - Smaller, Left Aligned */}
            {/* <motion.div variants={itemVariants} className="lg:col-span-2 relative">
              <div className="relative group">
                <motion.div
                  className="w-full aspect-square max-w-sm mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/profile pic.png"
                    alt="Vignesh Kumar S - Senior Developer"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </motion.div>
                <motion.div
                  className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-60 blur-sm hidden lg:block"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full opacity-60 blur-sm hidden lg:block"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </motion.div> */}

            {/* Summary Content - Right Side */}
            <motion.div variants={itemVariants} className="lg:col-span-3 space-y-6">
              <motion.h3
                className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white"
                whileInView={{ y: [20, 0], opacity: [0, 1] }}
                transition={{ duration: 0.6 }}
              >
                Senior Developer | Mobile & Full Stack
              </motion.h3>

              <motion.div
                className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed"
                whileInView={{ y: [20, 0], opacity: [0, 1] }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p className="text-base sm:text-lg">
                  {"I'm"} a Senior Developer with <span className="font-semibold text-blue-600 dark:text-blue-400">3.8+ years of experience</span> building
                  cross-platform mobile applications using React Native with Android Studio for Android and Xcode for iOS deployment.
                  I specialize in creating high-performance apps that maintain 99.5% crash-free sessions for large-scale user bases.
                </p>

                <p className="text-base sm:text-lg">
                  My technical journey includes <span className="font-semibold text-purple-600 dark:text-purple-400">3.8 years of JavaScript</span>, 1 year of React.js,
                  6 months of TypeScript, and 6 months of Python FastAPI with PostgreSQL for backend development.
                  I deliver end-to-end solutions across healthcare, education, project management, tourism, and sports domains.
                </p>

                <p className="text-base sm:text-lg">
                  At <span className="font-semibold text-gradient">ApplogiQ</span>, I earned <span className="font-semibold">Performer of the Year (2023)</span> for
                  delivering the Squads cricket platform ahead of schedule, <span className="font-semibold">Programmer of the Year (2024)</span> for
                  achieving 99.5% crash-free sessions on QBace, and <span className="font-semibold">Solution Provider of the Year (2025)</span> for
                  building the Ayushya AI medical assistant supporting 14+ languages.
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Section 2: Technical Expertise + Soft Skills Grid */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* Technical Expertise */}
            <motion.div
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 sm:p-8 shadow-lg"
              whileInView={{ y: [20, 0], opacity: [0, 1] }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-xl flex items-center justify-center">
                  <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </span>
                Technical Expertise
              </h4>
              <div className="grid grid-cols-1 gap-3">
                {[
                  'React Native Development',
                  'Python FastAPI Backend',
                  'React.js & Next.js',
                  'API Integration',
                  'Payment Gateway Integration',
                  'WebSocket Real-time Apps'
                ].map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                    whileHover={{ x: 4 }}
                    className="flex items-center space-x-3 group p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full group-hover:scale-125 transition-transform" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Soft Skills */}
            <motion.div
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 sm:p-8 shadow-lg"
              whileInView={{ y: [20, 0], opacity: [0, 1] }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 rounded-xl flex items-center justify-center">
                  <Award className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </span>
                Soft Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'Technical Problem Solving',
                  'Product Requirement Translation',
                  'Team Leadership',
                  'Agile Project Delivery',
                  'Stakeholder Management',
                  'Cross-functional Collaboration',
                  'Adaptability & Rapid Upskilling'
                ].map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium border border-purple-200 dark:border-purple-700 hover:border-purple-400 dark:hover:border-purple-500 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Stats Section */}
          <motion.div
            variants={containerVariants}
            className="mt-16 sm:mt-20 lg:mt-24 pb-12"
          >
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
              whileInView={{ y: [40, 0], opacity: [0, 1] }}
              transition={{ duration: 0.8 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center group"
                >
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-2xl sm:rounded-3xl mb-4 sm:mb-6 group-hover:from-blue-200 group-hover:to-purple-200 dark:group-hover:from-blue-800 dark:group-hover:to-purple-800 transition-all duration-300 shadow-soft"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <stat.icon className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
                  </motion.div>
                  <motion.div
                    className="text-2xl sm:text-3xl lg:text-4xl font-black text-gradient mb-2"
                    whileInView={{ scale: [0.8, 1.1, 1] }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm sm:text-base font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About