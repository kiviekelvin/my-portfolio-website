import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Smartphone, Palette, Layers, Globe, Zap } from 'lucide-react';
import TestimonialsSlider from './TestimonialsSlider';

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'End-to-end web application development using modern frameworks like React, Next.js, and TypeScript.',
      features: ['Custom Web Applications', 'API Development', 'Database Design', 'Third-party Integrations'],
      color: 'from-blue-500 to-primary',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android using React Native and Flutter.',
      features: ['iOS & Android Apps', 'Cross-platform Solutions', 'App Store Deployment', 'Performance Optimization'],
      color: 'from-purple-500 to-secondary',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centered design approach creating intuitive and visually appealing digital experiences.',
      features: ['User Research', 'Wireframing & Prototyping', 'Visual Design', 'Usability Testing'],
      color: 'from-pink-500 to-accent',
    },
    {
      icon: Layers,
      title: 'No Code Web Development',
      description: 'Rapid website and application development using no-code platforms like WordPress, Webflow, and modern builders.',
      features: ['WordPress Development', 'Webflow Design', 'CMS Integration', 'Rapid Prototyping'],
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: Globe,
      title: 'Web Performance',
      description: 'Optimization services to improve website speed, SEO, and overall user experience.',
      features: ['Performance Audits', 'SEO Optimization', 'Core Web Vitals', 'Accessibility'],
      color: 'from-orange-500 to-yellow-500',
    },
    {
      icon: Zap,
      title: 'Consulting & Training',
      description: 'Technical consulting, code reviews, and team training to elevate your development practices.',
      features: ['Technical Strategy', 'Code Reviews', 'Team Training', 'Best Practices'],
      color: 'from-red-500 to-pink-500',
    },
  ];

  return (
    <section id="services" className="py-32 px-4 overflow-hidden">
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
            My <span className="text-primary">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Comprehensive digital solutions tailored to your needs. From concept to deployment,
            I provide end-to-end services to bring your ideas to life.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group backdrop-blur-sm bg-white dark:bg-white/5 rounded-2xl p-8 border border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20 transition-all duration-500 relative overflow-hidden shadow-xl"
            >
              {/* Background Gradient */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.05 }}
                transition={{ duration: 0.5 }}
                className={`absolute inset-0 bg-gradient-to-br ${service.color}`} 
              />
              
              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0.8, rotate: -10 }}
                  animate={inView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} mb-6 shadow-lg`}
                >
                  <service.icon size={32} className="text-white" />
                </motion.div>

                {/* Content */}
                <motion.h3 
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors text-gray-900 dark:text-white"
                >
                  {service.title}
                </motion.h3>
                
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                  className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-sm"
                >
                  {service.description}
                </motion.p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ 
                        duration: 0.4, 
                        delay: (index * 0.1) + (featureIndex * 0.1) + 0.5 
                      }}
                      whileHover={{ x: 5 }}
                      className="flex items-center text-xs text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors"
                    >
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={inView ? { scale: 1 } : {}}
                        transition={{ 
                          duration: 0.3, 
                          delay: (index * 0.1) + (featureIndex * 0.1) + 0.6 
                        }}
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3 flex-shrink-0`} 
                      />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Slider */}
        <TestimonialsSlider />
      </div>
    </section>
  );
};

export default Services;