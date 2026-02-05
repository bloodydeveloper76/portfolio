"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase, GraduationCap, Smartphone, ExternalLink, Code, XCircle } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      type: "work",
      title: "Junior Backend Developer",
      company: "ApplogiQ - Planora (Project Management System)",
      location: "Tiruppur, Tamil Nadu",
      period: "Nov 2025 - Present",
      status: "developing",
      detail:
        "Planora is a comprehensive project management system that helps teams organize tasks, track progress, and collaborate effectively. It features dynamic Kanban boards, real-time dashboards, and role-based access control for different user types including admins, managers, and team members.",
      description: [
        "Developed core backend modules for a PMS solution using FastAPI and PostgreSQL, supporting 500+ active users",
        "Implemented role-based permissions to manage access for 5+ user types, securing the application environment",
        "Built dynamic boards and live dashboards in React JS, reducing task coordination time by 30%",
        "Optimized API performance, resulting in 35-40% faster response times during peak traffic",
      ],
      technologies: [
        "Python FastAPI",
        "PostgreSQL",
        "React.js",
        "RBAC",
        "REST APIs",
      ],
    },
    {
      type: "work",
      title: "Senior React Native Developer",
      company: "ApplogiQ - Ayushya AI (Medical Assistant)",
      location: "Tiruppur, Tamil Nadu",
      period: "Jan 2025 - Nov 2025",
      status: "developing",
      statusNote: "4 phases completed",
      detail:
        "Ayushya is a multilingual AI medical assistant that helps people describe their symptoms in their own language before meeting a doctor. It engages users in natural conversations through voice or text to understand their health concerns. By asking smart follow-up questions, it identifies possible conditions and creates a pre-consultation summary.",
      description: [
        "Built Android, iOS, and kiosk applications with support for 14+ Indian languages",
        "Reduced AI response latency by 40% using WebSockets for real-time communication",
        "Ensured offline access and secure voice recording with RNFS for low-connectivity environments",
        "Delivered FastAPI backend services and role-based admin panels (Super Admin, Medical Center, Doctor)",
      ],
      technologies: [
        "React Native",
        "WebSockets",
        "Python FastAPI",
        "React.js",
        "RNFS",
        "i18n",
      ],
    },
    {
      type: "work",
      title: "React Native Developer",
      company: "ApplogiQ - QBace (Medical Exam Platform)",
      location: "Tiruppur, Tamil Nadu",
      period: "May 2024 - Jan 2025",
      status: "published",
      appLinks: {
        android: "https://play.google.com/store/apps/details?id=com.prod.qbace",
        ios: "https://apps.apple.com/in/app/qbace/id1609351548"
      },
      detail:
        "QBace is a practice and test-oriented application for medical students preparing for USMLE (United States Medical Licensing Examination). The app features note-taking, randomized test questions, bulk question uploads, and detailed progress analytics to help students track their preparation.",
      description: [
        "Led end-to-end mobile application delivery across iOS and Android, maintaining 99.5% crash-free sessions",
        "Successfully deployed to Google Play Store and Apple App Store",
        "Standardized UI using React Native Paper and Reanimated, lowering interface-related issues by 25%",
        "Delivered interactive progress analytics with Victory Native, used by 10K+ learners",
        "Integrated Razorpay and Apple In-App Purchases for secure subscription payments",
      ],
      technologies: [
        "React Native",
        "React Native Paper",
        "Victory Native",
        "Reanimated",
        "Razorpay",
      ],
    },
    {
      type: "work",
      title: "React Native Developer",
      company: "ApplogiQ - Planit (Tourism & Travel Platform)",
      location: "Tiruppur, Tamil Nadu",
      period: "May 2023 - May 2024",
      status: "completed",
      detail:
        "Planit is a tourism, travel, and social media app designed to help travelers explore the rich cultural heritage and attractions of the Middle East region. The app provides comprehensive information on events, restaurants, hotels, museums, and tourist spots, making it an essential tool for cultural exploration.",
      description: [
        "Refined performance of a cross-platform travel application with 50K+ monthly users",
        "Developed and deployed complete application for both Android and iOS platforms",
        "Implemented location-based discovery using interactive maps, increasing engagement by 35%",
        "Integrated real-time event and content feeds, reducing data load delays by 40%",
        "Collaborated with managers, designers and backend engineers to deliver sprint commitments",
      ],
      technologies: [
        "React Native",
        "React Native Paper",
        "React Native Maps",
        "API Integration",
      ],
    },
    {
      type: "work",
      title: "Junior React Native Developer",
      company: "ApplogiQ - Squads (Cricket Platform)",
      location: "Tiruppur, Tamil Nadu",
      period: "Jun 2022 - May 2023",
      status: "discontinued",
      detail:
        "Squads was a cricket-focused app designed for live scores, fixtures, and meetings within local communities. It served cricket enthusiasts, players, club owners, tournament organizers, and parents with real-time live streaming and rapid stat updates.",
      description: [
        "Crafted reusable UI components across 50+ screens using React Native Paper",
        "Presented live match insights and player analytics through Victory Native charts, extending session duration by 25%",
        "Developed venue and club discovery for 100+ locations using Google Map-based navigation",
        "Supported secure payments for memberships and tournaments via Stripe",
      ],
      technologies: [
        "React Native",
        "React Native Paper",
        "Victory Native",
        "React Native Maps",
        "Stripe",
      ],
    },
    {
      type: "education",
      title: "B.Sc. Computer Science & Application",
      company: "Sasurie College of Arts & Science",
      location: "Tamil Nadu, India",
      period: "Jun 2019 - May 2022",
      description: [
        "Graduated with CGPA 7.8/10",
        "Specialized in Computer Science and Application development",
        "Gained strong foundation in programming and software development",
        "Completed various projects in mobile and web development",
      ],
      technologies: [
        "Java",
        "Python",
        "JavaScript",
        "HTML/CSS",
        "Mobile Development",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey at ApplogiQ
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mt-6" />
        </div>

        {/* Professional Experience */}
        <div>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    {exp.type === "work" ? (
                      <Briefcase className="w-6 h-6 text-blue-600" />
                    ) : (
                      <GraduationCap className="w-6 h-6 text-blue-600" />
                    )}
                  </div>

                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {exp.title}
                        </h4>
                        <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-sm text-blue-600 font-medium bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full whitespace-nowrap inline-block">
                          {exp.type === "work" ? "Work Experience" : "Education"}
                        </span>
                        {exp.status === "published" && (
                          <span className="text-sm text-green-600 font-medium bg-green-50 dark:bg-green-900/30 px-3 py-1 rounded-full whitespace-nowrap inline-flex items-center gap-1">
                            <Smartphone className="w-3 h-3" />
                            Published App
                          </span>
                        )}
                        {exp.status === "developing" && (
                          <span className="text-sm text-yellow-600 font-medium bg-yellow-50 dark:bg-yellow-900/30 px-3 py-1 rounded-full whitespace-nowrap inline-flex items-center gap-1">
                            <Code className="w-3 h-3" />
                            In Development {exp.statusNote && `(${exp.statusNote})`}
                          </span>
                        )}
                        {exp.status === "completed" && (
                          <span className="text-sm text-purple-600 font-medium bg-purple-50 dark:bg-purple-900/30 px-3 py-1 rounded-full whitespace-nowrap inline-flex items-center gap-1">
                            <Smartphone className="w-3 h-3" />
                            Completed
                          </span>
                        )}
                        {exp.status === "discontinued" && (
                          <span className="text-sm text-gray-500 font-medium bg-gray-100 dark:bg-gray-700/30 px-3 py-1 rounded-full whitespace-nowrap inline-flex items-center gap-1">
                            <XCircle className="w-3 h-3" />
                            Discontinued
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <span className="space-y-2 mb-2 dark:text-gray-300 text-sm flex items-start">
                      {exp.detail}
                    </span>
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="text-gray-600 dark:text-gray-300 text-sm flex items-start"
                        >
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* App Store Links */}
                    {exp.appLinks && (
                      <div className="flex flex-wrap gap-3 pt-2 border-t border-gray-200 dark:border-gray-700">
                        <a
                          href={exp.appLinks.android}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 font-medium transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Google Play Store
                        </a>
                        <a
                          href={exp.appLinks.ios}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Apple App Store
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
