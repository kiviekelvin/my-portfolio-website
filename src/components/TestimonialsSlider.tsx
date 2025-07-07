import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const TestimonialsSlider: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: 'Adebayo Ogundimu',
      role: 'Managing Partner',
      company: 'Ogundimu & Associates Law Firm',
      image: 'https://images.pexels.com/photos/8837549/pexels-photo-8837549.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'Kelvin transformed our law firm\'s online presence with a professional website that perfectly represents our brand. His attention to legal industry requirements and user experience is exceptional.',
      rating: 5,
      project: 'Corporate Website'
    },
    {
      id: 2,
      name: 'Chioma Nwankwo',
      role: 'CEO & Founder',
      company: 'AfriMarket Online',
      image: 'https://images.pexels.com/photos/16940578/pexels-photo-16940578.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'Our e-commerce platform built by Kelvin has revolutionized our business. The seamless payment integration and inventory management system exceeded all expectations. Sales increased by 300%!',
      rating: 5,
      project: 'E-Commerce Platform'
    },
    {
      id: 3,
      name: 'Dr. Emeka Okwu',
      role: 'Director of Digital Learning',
      company: 'EduTech Nigeria',
      image: 'https://images.pexels.com/photos/2955375/pexels-photo-2955375.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'The LMS dashboard design Kelvin created is intuitive and engaging. Our students love the interface, and our completion rates have improved significantly. Outstanding UI/UX work!',
      rating: 5,
      project: 'SaaS Dashboard Design'
    },
    {
      id: 4,
      name: 'Fatima Abdullahi',
      role: 'Product Manager',
      company: 'NaijaPay Fintech',
      image: 'https://images.pexels.com/photos/32615180/pexels-photo-32615180.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'Kelvin delivered a secure and user-friendly mobile banking app that our customers absolutely love. His expertise in fintech security and Flutter development is world-class.',
      rating: 5,
      project: 'Mobile Banking App'
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="mt-24"
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.h3
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          What Clients <span className="text-primary">Say</span>
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm"
        >
          Don't just take my word for it. Here's what some of my clients have to say about working with me.
        </motion.p>
      </div>

      {/* Testimonials Slider */}
      <div className="relative max-w-4xl mx-auto">
        {/* Main Testimonial Card */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 300, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -300, scale: 0.9 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="backdrop-blur-sm bg-white dark:bg-white/5 rounded-3xl p-8 md:p-12 border border-gray-200 dark:border-white/10 relative overflow-hidden shadow-xl"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
              
              {/* Quote Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute top-6 right-6 p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl"
              >
                <Quote size={24} className="text-primary" />
              </motion.div>

              <div className="relative z-10">
                {/* Rating Stars */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="flex items-center gap-1 mb-6"
                >
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                    >
                      <Star size={20} className="fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Testimonial Content */}
                <motion.blockquote
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-base md:text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-8 italic"
                >
                  "{testimonials[currentIndex].content}"
                </motion.blockquote>

                {/* Client Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex items-center gap-4"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    className="relative"
                  >
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-primary/30"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    <h4 className="font-semibold text-lg text-gray-900 dark:text-white">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {testimonials[currentIndex].role}
                    </p>
                    <p className="text-xs text-primary font-medium">
                      {testimonials[currentIndex].company}
                    </p>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="ml-auto text-right"
                  >
                    <div className="text-xs text-gray-500 dark:text-gray-400">Project:</div>
                    <div className="text-xs font-medium text-primary">
                      {testimonials[currentIndex].project}
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 1 }}
          whileHover={{ scale: 1.1, x: -2 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevTestimonial}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 backdrop-blur-sm bg-white dark:bg-white/10 border border-gray-200 dark:border-white/20 rounded-full hover:bg-gray-50 dark:hover:bg-white/20 transition-all duration-300 group shadow-lg"
        >
          <ChevronLeft size={24} className="group-hover:text-primary transition-colors text-gray-600 dark:text-gray-400" />
        </motion.button>

        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 1 }}
          whileHover={{ scale: 1.1, x: 2 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextTestimonial}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 backdrop-blur-sm bg-white dark:bg-white/10 border border-gray-200 dark:border-white/20 rounded-full hover:bg-gray-50 dark:hover:bg-white/20 transition-all duration-300 group shadow-lg"
        >
          <ChevronRight size={24} className="group-hover:text-primary transition-colors text-gray-600 dark:text-gray-400" />
        </motion.button>

        {/* Dots Indicator */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="flex justify-center gap-3 mt-8"
        >
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 1.3 + index * 0.1 }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-gradient-to-r from-primary to-secondary scale-125'
                  : 'bg-gray-300 dark:bg-white/30 hover:bg-gray-400 dark:hover:bg-white/50'
              }`}
            />
          ))}
        </motion.div>

        {/* Auto-play Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.5 }}
          className="flex justify-center mt-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`text-xs px-3 py-1 rounded-full transition-all duration-300 ${
              isAutoPlaying
                ? 'bg-primary/20 text-primary border border-primary/30'
                : 'bg-gray-200 dark:bg-white/10 text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-white/20'
            }`}
          >
            {isAutoPlaying ? 'Auto-playing' : 'Paused'}
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TestimonialsSlider;