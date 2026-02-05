'use client'

import { motion } from 'framer-motion'
import { Download, Eye, FileText } from 'lucide-react'

const Resume = () => {
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

  const handleDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement('a')
    link.href = '/vignesh_kumar_s_resume.pdf'
    link.download = 'Vignesh_Kumar_S_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleView = () => {
    // Open PDF in new tab
    window.open('/vignesh_kumar_s_resume.pdf', '_blank')
  }

  return (
    <section id="resume" className="py-20 bg-white dark:bg-gray-900">
      <div className="container-custom section-padding">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Resume
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Download my resume to learn more about my experience, skills, and qualifications
            </p>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mt-6" />
          </motion.div>

          {/* Resume Preview Card */}
          <motion.div
            variants={itemVariants}
            className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 mb-12 shadow-lg hover:shadow-xl transition-shadow"
          >
            {/* Resume Icon */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="inline-flex items-center justify-center w-24 h-24 bg-blue-100 dark:bg-blue-900 rounded-2xl mb-6 mx-auto"
            >
              <FileText className="w-12 h-12 text-blue-600 dark:text-blue-400" />
            </motion.div>

            {/* Resume Title */}
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Senior Developer Resume
            </h3>

            {/* Resume Description */}
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto">
              Comprehensive overview of my professional experience in React Native mobile apps
              and Python FastAPI backend development, technical skills, education, and achievements.
            </p>

            {/* Resume Details */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                  3.8+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                  5+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Projects Delivered
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                  3
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Awards Won
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownload}
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl"
              >
                <Download size={20} />
                Download Resume
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleView}
                className="flex items-center justify-center gap-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                <Eye size={20} />
                View Online
              </motion.button>
            </div>
          </motion.div>

          {/* Resume Highlights */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="text-left">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                What You'll Find
              </h4>
              <ul className="space-y-3">
                {[
                  'React Native & Python FastAPI experience',
                  'Mobile app development for iOS and Android',
                  'Backend development with PostgreSQL & REST APIs',
                  'Award-winning projects and achievements',
                  'Education and professional certifications'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Right Column */}
            <div className="text-left">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Key Highlights
              </h4>
              <ul className="space-y-3">
                {[
                  'Full-stack development capabilities',
                  'Performer, Programmer & Solution Provider awards',
                  'Cross-platform mobile app expertise',
                  'Agile development methodologies',
                  'Continuous learning and adaptation'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800"
          >
            <p className="text-blue-800 dark:text-blue-200 text-sm">
              <strong>Note:</strong> My resume is regularly updated to reflect my latest
              experience and skills. The version available for download includes my most
              recent accomplishments and projects.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Resume