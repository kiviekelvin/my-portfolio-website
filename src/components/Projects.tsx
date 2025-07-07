import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Filter, Plus } from 'lucide-react';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'Child Immunisation Record System (CIRS)',
      description: 'A comprehensive web-based application for managing and tracking child immunisation records. Features include patient registration, vaccination scheduling, immunisation history tracking, and healthcare provider dashboard with real-time analytics.',
      image: 'https://raw.githubusercontent.com/kiviekelvin/child-immunisation-record-system/main/CIRSScreenshot.png',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase'],
      category: 'Web App',
      github: 'https://github.com/kiviekelvin/child-immunisation-record-system',
      live: 'https://charming-pixie-366189.netlify.app/',
      featured: true,
    },
    {
      id: 2,
      title: 'EduSync Student Portal',
      description: 'A modern student portal that helps learners manage their classes, schedules, tasks, and progress in one intuitive interface. The dashboard provides visual insights into academic performance and personal goals for weekly reflection. Seamlessly integrated with social platforms, it promotes a collaborative and personalized learning journey.',
      image: 'https://raw.githubusercontent.com/chinazaaa-6th/student-portal/main/SPScreenshot.png',
      tech: ['HTMX', 'CSS', 'JavaScript', 'Firebase'],
      category: 'Web App',
      github: 'https://github.com/chinazaaa-6th/student-portal',
      live: 'https://admirable-cactus-b63fb7.netlify.app/',
      featured: true,
    },
    {
      id: 3,
      title: 'RoboConnect',
      description: 'A fun and interactive robot directory app where users can explore and connect with quirky, AI-generated robot profiles. It features a real-time search bar that filters robots by name, making it easy to find your perfect robo-friend. Each robot card showcases a name, email, and unique design for playful engagement. Ideal for beginners in React, this app demonstrates component structure, props usage, and dynamic filtering.',
      image: 'https://raw.githubusercontent.com/kiviekelvin/robo-friends-app/main/RFScreenshot.png',
      tech: ['React', 'AI', 'API', 'Next.js'],
      category: 'Web App',
      github: 'https://github.com/kiviekelvin/robo-friends-app',
      live: 'https://my-first-project-vxow.vercel.app/',
      featured: true,
    },
    {
      id: 4,
      title: 'GlobalWeatherNow',
      description: 'A sleek weather web app that lets you check real-time weather conditions for any city across the world. Simply enter a city name to instantly view key weather details like temperature, humidity, and sky conditions. It fetches accurate data from a live weather API and presents it in a clean, user-friendly interface. Ideal for travelers, planners, and weather enthusiasts who want fast, location-based forecasts anytime.',
      image: 'https://raw.githubusercontent.com/kiviekelvin/weather-web-app/main/weatherScreenshot.png',
      tech: ['React', 'API', 'CSS', 'JavaScript'],
      category: 'Web App',
      github: 'https://github.com/kiviekelvin/weather-web-app',
      live: 'https://kiviekelvin.github.io/weather-web-app/',
      featured: true,
    },
    {
      id: 5,
      title: 'Wiseview Legal Consultancy',
      description: 'At Wiseview Legal Consultancy, we transform complex legal challenges into clear, actionable solutions. Since 2010, we\'ve been at the forefront of Property and Commercial Law in Nigeria, offering bespoke legal services that empower businesses, institutions, and individuals to thrive. Our multidisciplinary team combines deep local insight with global perspectives, ensuring that every client receives strategic, forward-thinking counsel tailored to their unique needs.',
      image: 'https://raw.githubusercontent.com/kiviekelvin/images-repo/main/wiseviewScreenshot.png',
      tech: ['WordPress', 'Figma', 'jQuery', 'CSS'],
      category: 'Websites',
      github: '#',
      live: 'https://wiseviewlegal.com/',
      featured: true,
    },
    {
      id: 6,
      title: 'Civil Society Legislative Advocacy Centre (CISLAC)',
      description: 'CISLAC is a non-governmental, non-profit, advocacy, information sharing, research, and capacity building organisation. Its mission is to strengthen the link between civil society and the legislature through advocacy and capacity building for civil society groups and policy makers on legislative processes and governance issues. CISLAC was integrated as a corporate body (CAC/IT/NO22738) with the Nigeria\'s Corporate Affairs Commission (CAC) on the 28th December 2006.',
      image: 'https://raw.githubusercontent.com/kiviekelvin/images-repo/main/cislacScreenshot.png',
      tech: ['WordPress', 'Figma', 'PHP', 'CSS'],
      category: 'Websites',
      github: '#',
      live: 'https://cislac.org/',
      featured: true,
    },
    {
      id: 7,
      title: 'Mobile Banking App',
      description: 'Secure mobile banking application with biometric authentication, transaction history, and budget tracking.',
      image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Flutter', 'Dart', 'Firebase', 'Supabase'],
      category: 'Mobile App',
      github: '#',
      live: '#',
    },
    {
      id: 8,
      title: 'Real Estate Platform',
      description: 'Property listing platform with virtual tours, mortgage calculator, and advanced search filters.',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS'],
      category: 'Web App',
      github: '#',
      live: '#',
    },
    {
      id: 9,
      title: 'Fitness Tracker',
      description: 'Comprehensive fitness tracking app with workout plans, nutrition tracking, and social features.',
      image: 'https://images.pexels.com/photos/669584/pexels-photo-669584.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Flutter', 'Firebase', 'Dart', 'REST API'],
      category: 'Mobile App',
      github: '#',
      live: '#',
    },
    // Additional projects (shown after "Load More")
    {
      id: 10,
      title: 'Restaurant Website',
      description: 'Beautiful restaurant website with online menu, reservation system, and food delivery integration.',
      image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Webflow', 'JavaScript', 'CSS', 'CMS'],
      category: 'Websites',
      github: '#',
      live: '#',
    },
    {
      id: 11,
      title: 'SaaS Dashboard Design',
      description: 'Complete UI/UX design system for a SaaS analytics platform, including user research, wireframes, and prototypes.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
      category: 'UI/UX Design',
      github: '#',
      live: '#',
    },
    {
      id: 12,
      title: 'Blog & Portfolio Site',
      description: 'Custom WordPress theme development with Figma design system, featuring blog functionality and portfolio showcase.',
      image: 'https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Figma', 'WordPress', 'PHP', 'Custom Theme'],
      category: 'Websites',
      github: '#',
      live: '#',
    },
  ];

  const categories = ['All', 'Web App', 'Mobile App', 'Websites', 'UI/UX Design'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Show only first 6 projects initially, or all if showAll is true
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);
  const hasMoreProjects = filteredProjects.length > 6;

  return (
    <section id="projects" className="py-32 px-4 bg-gray-50 dark:bg-dark-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Featured <span className="text-primary">Projects</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            A showcase of my recent work, featuring modern web applications,
            mobile apps, websites, and UI/UX designs built with cutting-edge technologies.
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setActiveFilter(category);
                setShowAll(false); // Reset to show first 6 when changing filter
              }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/25'
                  : 'backdrop-blur-sm bg-white dark:bg-white/10 border border-gray-200 dark:border-white/20 hover:bg-gray-50 dark:hover:bg-white/20 text-gray-700 dark:text-gray-300 hover:border-primary/30'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index, type: "spring", stiffness: 100 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`group backdrop-blur-sm bg-white dark:bg-white/10 rounded-2xl border border-gray-200 dark:border-white/20 overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 shadow-xl ${
                project.featured ? 'ring-2 ring-primary/30 shadow-lg shadow-primary/10' : ''
              }`}
            >
              {/* Featured Badge */}
              {project.featured && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8, x: -20 }}
                  animate={inView ? { opacity: 1, scale: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="absolute top-4 left-4 z-10"
                >
                  <span className="px-3 py-1 bg-gradient-to-r from-primary to-secondary text-white text-xs font-semibold rounded-full shadow-lg">
                    Featured
                  </span>
                </motion.div>
              )}

              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  initial={{ scale: 1.1 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                  whileHover={{ scale: 1.1 }}
                  className="w-full h-48 object-cover transition-transform duration-500"
                />
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                />
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-4 right-4 flex gap-2"
                >
                  {project.github !== '#' && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-colors"
                    >
                      <Github size={16} className="text-white" />
                    </motion.a>
                  )}
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-colors"
                  >
                    <ExternalLink size={16} className="text-white" />
                  </motion.a>
                </motion.div>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="p-6"
              >
                <motion.h3 
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors text-gray-900 dark:text-white"
                >
                  {project.title}
                </motion.h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-xs leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 + techIndex * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 text-xs bg-primary/20 text-primary rounded-full border border-primary/30 hover:bg-primary/30 transition-colors"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {project.category}
                  </span>
                  <div className="flex gap-2">
                    {project.github !== '#' && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 hover:text-primary transition-colors text-gray-600 dark:text-gray-400"
                      >
                        <Github size={18} />
                      </motion.a>
                    )}
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 hover:text-primary transition-colors text-gray-600 dark:text-gray-400"
                    >
                      <ExternalLink size={18} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button */}
        {hasMoreProjects && !showAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAll(true)}
              className="px-8 py-4 backdrop-blur-sm bg-white dark:bg-white/10 border border-gray-200 dark:border-white/20 rounded-full font-semibold hover:bg-gray-50 dark:hover:bg-white/20 transition-all duration-300 flex items-center gap-3 mx-auto group shadow-lg text-gray-700 dark:text-gray-300 hover:border-primary/30"
            >
              <motion.div
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.3 }}
              >
                <Plus size={20} />
              </motion.div>
              Load More Projects
              <span className="text-sm text-gray-500 dark:text-gray-400">
                ({filteredProjects.length - 6} more)
              </span>
            </motion.button>
          </motion.div>
        )}

        {/* Show Less Button (when all projects are shown) */}
        {showAll && hasMoreProjects && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAll(false)}
              className="px-8 py-4 backdrop-blur-sm bg-white dark:bg-white/10 border border-gray-200 dark:border-white/20 rounded-full font-semibold hover:bg-gray-50 dark:hover:bg-white/20 transition-all duration-300 flex items-center gap-3 mx-auto shadow-lg text-gray-700 dark:text-gray-300 hover:border-primary/30"
            >
              Show Less
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;