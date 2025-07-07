import React, { useCallback, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Particles } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Container, Engine } from '@tsparticles/engine';
import { Github } from 'lucide-react';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Scroll-based parallax
  const { scrollY } = useScroll();
  
  // Different parallax speeds for layered effect
  const backgroundY = useTransform(scrollY, [0, 1000], [0, -200]);
  const contentY = useTransform(scrollY, [0, 1000], [0, -100]);
  const particlesY = useTransform(scrollY, [0, 1000], [0, -300]);
  const decorativeY = useTransform(scrollY, [0, 1000], [0, -150]);
  
  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX - window.innerWidth / 2) / window.innerWidth;
      const y = (e.clientY - window.innerHeight / 2) / window.innerHeight;
      setMousePosition({ x: x * 20, y: y * 20 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    // Particles loaded callback
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24 lg:pt-28 bg-gray-50 dark:bg-dark-200">
      {/* Parallax Background Layers */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-gray-50 dark:from-dark-200 dark:via-dark-100 dark:to-dark-50 opacity-80 dark:opacity-50"
      />
      
      {/* Animated Background Shapes */}
      <motion.div
        style={{ 
          y: decorativeY,
          x: mousePosition.x * 0.5,
        }}
        className="absolute inset-0 overflow-hidden"
      >
        {/* Large floating orbs */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.1, 0.2],
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-3xl"
        />
      </motion.div>

      {/* Particles Background with Parallax */}
      <motion.div
        style={{ y: particlesY }}
        className="absolute inset-0"
      >
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          className="absolute inset-0"
          options={{
            background: {
              color: {
                value: "transparent",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: {
                  enable: true,
                },
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#00D4FF",
              },
              links: {
                color: "#00D4FF",
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 60,
              },
              opacity: {
                value: 0.4,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 4 },
              },
            },
            detectRetina: true,
          }}
        />
      </motion.div>

      {/* Hero Content with Parallax */}
      <motion.div 
        style={{ 
          y: contentY,
          x: mousePosition.x * 0.2,
        }}
        className="relative z-10 w-full"
      >
        {/* Main Content Container */}
        <div className="px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="max-w-5xl mx-auto">
            <div className="text-center space-y-8 sm:space-y-10 lg:space-y-12">
              
              {/* Main Heading */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-4 sm:space-y-6"
              >
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold leading-tight text-gray-900 dark:text-white"
                >
                  <motion.span 
                    className="block mb-2 sm:mb-3 lg:mb-4"
                    style={{ y: mousePosition.y * 0.1 }}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    Hi, I'm
                  </motion.span>
                  <motion.span 
                    className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
                    style={{ y: mousePosition.y * -0.1 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 100 }}
                  >
                    Kelvin Ahante
                  </motion.span>
                </motion.h1>

                {/* Subtitle with improved spacing */}
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  style={{ y: mousePosition.y * 0.05 }}
                  className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0"
                >
                  Full Stack Developer & UI/UX Designer creating intuitive digital products with modern tech and bold creativity.
                </motion.p>
              </motion.div>

              {/* Action Buttons - NOW SIDE BY SIDE ON ALL SCREEN SIZES */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                style={{ y: mousePosition.y * -0.05 }}
                className="flex flex-row items-center justify-center gap-3 sm:gap-6 px-4 sm:px-0"
              >
                {/* Primary CTA */}
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex-1 sm:flex-none px-4 sm:px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold shadow-lg hover:shadow-primary/25 transition-all duration-300 animate-glow text-xs sm:text-sm"
                >
                  View My Work
                </motion.button>

                {/* GitHub Repository Button */}
                <motion.a
                  href="https://github.com/kiviekelvin?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  className="flex-1 sm:flex-none px-4 sm:px-6 py-3 border-2 border-gray-300 dark:border-white/30 hover:border-primary/50 rounded-full font-semibold bg-white/80 dark:bg-transparent hover:bg-white/90 dark:hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-700 dark:text-white"
                >
                  <Github size={14} className="sm:w-4 sm:h-4" />
                  <span className="hidden xs:inline">View Repos</span>
                  <span className="xs:hidden">Repos</span>
                </motion.a>
              </motion.div>

              {/* Professional Badges with reduced visual weight */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.3 }}
                style={{ y: mousePosition.y * -0.02 }}
                className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0"
              >
                {[
                  { text: '5+ Years Experience', delay: 1.4 },
                  { text: '50+ Projects Completed', delay: 1.5 },
                  { text: 'Available for Hire', delay: 1.6 }
                ].map((badge, index) => (
                  <motion.span
                    key={badge.text}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: badge.delay }}
                    className="px-3 py-1.5 text-xs font-medium text-gray-600 dark:text-gray-500 backdrop-blur-sm bg-white/80 dark:bg-white/5 rounded-full border border-gray-200 dark:border-white/10 shadow-sm dark:shadow-none"
                  >
                    {badge.text}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Decorative Elements with Enhanced Parallax */}
      <motion.div
        style={{ 
          y: decorativeY,
          x: mousePosition.x * 0.3,
        }}
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 0.6, scaleY: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="absolute top-1/4 left-4 sm:left-8 lg:left-16 w-1.5 h-16 sm:h-20 lg:h-24 bg-gradient-to-b from-primary to-transparent rounded-full origin-bottom"
      />
      <motion.div
        style={{ 
          y: decorativeY,
          x: mousePosition.x * -0.3,
        }}
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 0.6, scaleY: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-1/4 right-4 sm:right-8 lg:right-16 w-1.5 h-16 sm:h-20 lg:h-24 bg-gradient-to-t from-secondary to-transparent rounded-full origin-top"
      />
      
      {/* Floating geometric shapes with Mouse Parallax */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 180, 360]
        }}
        style={{
          x: mousePosition.x * 0.4,
          y: mousePosition.y * 0.4,
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2.2
        }}
        className="absolute top-1/3 left-1/4 w-3 h-3 sm:w-4 sm:h-4 bg-accent/30 rounded-full blur-sm"
      />
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [360, 180, 0]
        }}
        style={{
          x: mousePosition.x * -0.4,
          y: mousePosition.y * -0.4,
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2.4
        }}
        className="absolute bottom-1/3 right-1/4 w-2 h-2 sm:w-3 sm:h-3 bg-primary/30 rounded-full blur-sm"
      />

      {/* Additional Floating Elements */}
      <motion.div
        style={{
          y: decorativeY,
          x: mousePosition.x * 0.2,
        }}
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 0.5, scaleY: 1 }}
        transition={{ duration: 0.8, delay: 2.6 }}
        className="absolute top-1/2 left-1/6 w-1 h-8 bg-gradient-to-b from-accent/40 to-transparent rounded-full origin-bottom"
      />
      <motion.div
        style={{
          y: decorativeY,
          x: mousePosition.x * -0.2,
        }}
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 0.5, scaleY: 1 }}
        transition={{ duration: 0.8, delay: 2.8 }}
        className="absolute top-2/3 right-1/6 w-1 h-6 bg-gradient-to-t from-primary/40 to-transparent rounded-full origin-top"
      />

      {/* Subtle Grid Pattern */}
      <motion.div
        style={{ y: backgroundY }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 2, delay: 3 }}
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
    </section>
  );
};

export default Hero;