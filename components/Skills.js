'use client'

import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Mobile Development',
      icon: '📱',
      experience: '3.8 years',
      skills: [
        'React Native',
        'Redux & WebSockets',
        'Reanimated & Victory Native',
        'iOS/Android Deployment',
        'Deep Linking',
        'Internationalization (i18n)',
      ],
    },
    {
      title: 'Frontend',
      icon: '🖥️',
      experience: '1+ year',
      skills: [
        'React.js',
        'Next.js',
        'TypeScript',
        'JavaScript (ES6+)',
        'Tailwind CSS',
        'HTML5 & CSS3',
      ],
    },
    {
      title: 'Backend & APIs',
      icon: '⚙️',
      experience: '6+ months',
      skills: [
        'Python (FastAPI)',
        'PostgreSQL',
        'RESTful APIs',
        'Role-Based Access (RBAC)',
        'Firebase',
        'AWS',
      ],
    },
    {
      title: 'Tools & Integrations',
      icon: '🛠️',
      experience: '3.8 years',
      skills: [
        'Android Studio & Xcode',
        'Git & GitHub',
        'Razorpay & Stripe',
        'Postman & Jira',
        'React Native Paper',
        'React Native FS',
      ],
    },
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
    <section id="skills" className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-900">
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
              Technical Skills
            </motion.h2>
            <motion.p
              className="text-responsive-base text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6"
              whileInView={{ y: [20, 0], opacity: [0, 1] }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Here are the technologies and tools I use to bring ideas to life and create exceptional mobile experiences
            </motion.p>
            <motion.div
              className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"
              whileInView={{ scaleX: [0, 1] }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-xl transition-shadow duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{category.icon}</span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                    {category.experience}
                  </span>
                </div>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.4,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium border border-gray-200 dark:border-gray-700 shadow-sm hover:border-blue-400 dark:hover:border-blue-500 transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Currently Pursuing */}
          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Currently Pursuing
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Backend Engineering',
                  description: 'Deepening Python (FastAPI) and PostgreSQL skills for production-level systems',
                  icon: '🔧'
                },
                {
                  title: 'Full Stack Proficiency',
                  description: 'Building data-driven dashboards with Next.js and React.js for 500+ users',
                  icon: '🌐'
                },
                {
                  title: 'Native Mobile Development',
                  description: 'Advanced Native Android training to complement React Native expertise',
                  icon: '📱'
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-200 dark:border-blue-800"
                >
                  <span className="text-3xl mb-4 block">{item.icon}</span>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills