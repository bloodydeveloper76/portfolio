'use client'

import { motion } from 'framer-motion'
import { Heart, ArrowUp, Linkedin, Github, Twitter, Mail } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/vignesh-kumar-s-886841240',
      label: 'LinkedIn'
    },
    {
      icon: Github,
      href: 'https://github.com/bloodydeveloper76',
      label: 'GitHub'
    },
    {
      icon: Mail,
      href: 'mailto:vigneshkumar5776@gmail.com',
      label: 'Email'
    }
  ]

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' }
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="container-custom section-padding">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="py-12"
        >
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="md:col-span-2">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gradient mb-2">
                  Vignesh Kumar S
                </h3>
                <p className="text-gray-400 mb-4">
                  Senior Developer specializing in React Native mobile apps and Python FastAPI
                  backend solutions with modern technologies.
                </p>
                <p className="text-gray-400">
                  Always excited to work on new mobile projects and connect with fellow developers.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-gray-800 dark:bg-gray-900 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold mb-4 text-white">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold mb-4 text-white">
                Let&apos;s Connect
              </h4>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a
                    href="mailto:vigneshkumar5776@gmail.com"
                    className="text-blue-400 hover:text-blue-300 transition-colors text-sm"
                  >
                    vigneshkumar5776@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-gray-300 text-sm">Tiruppur, Tamil Nadu, India</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Availability</p>
                  <p className="text-green-400 text-sm">Open for opportunities</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            variants={itemVariants}
            className="border-t border-gray-800 dark:border-gray-700 my-8"
          />

          {/* Bottom Section */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
          >
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© {currentYear} Vignesh Kumar S. Made with</span>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              </motion.div>
              <span>using Next.js & TailwindCSS</span>
            </div>

            {/* Scroll to Top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300"
            >
              <span className="text-sm">Back to top</span>
              <div className="w-8 h-8 bg-gray-800 dark:bg-gray-900 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
                <ArrowUp size={16} />
              </div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
            className="absolute w-2 h-2 bg-blue-500 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
          />
        ))}
      </div>
    </footer>
  )
}

export default Footer