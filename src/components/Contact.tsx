import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Send, CheckCircle, XCircle } from 'lucide-react';
import { sendEmail, type EmailData } from '../services/emailService';

// Counter component for animated numbers
const AnimatedCounter: React.FC<{ 
  end: number; 
  duration?: number; 
  suffix?: string;
  inView: boolean;
}> = ({ end, duration = 2, suffix = '', inView }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!inView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, inView]);

  return <span>{count}{suffix}</span>;
};

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EmailData>();

  const onSubmit = async (data: EmailData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');
    
    try {
      // Send email using EmailJS with your configured credentials
      await sendEmail(data);
      
      setSubmitStatus('success');
      reset();
      
      // Auto-hide success message after 8 seconds
      setTimeout(() => setSubmitStatus('idle'), 8000);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An unexpected error occurred');
      
      // Auto-hide error message after 8 seconds
      setTimeout(() => setSubmitStatus('idle'), 8000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'kelvinkivie@gmail.com',
      href: 'mailto:kelvinkivie@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+234 906 658 8231',
      href: 'tel:+2349066588231',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Abuja, Nigeria',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="py-32 px-4 bg-gray-50 dark:bg-dark-50/50 overflow-hidden">
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
            Get In <span className="text-primary">Touch</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Have a project in mind? Let's discuss how we can work together to create
            something amazing. I'm always excited to take on new challenges.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="backdrop-blur-sm bg-white dark:bg-white/10 rounded-2xl p-8 border border-gray-200 dark:border-white/20 shadow-xl"
            >
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-2xl font-semibold mb-6 text-primary"
              >
                Let's Start a Conversation
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-sm"
              >
                I'm always open to discussing new opportunities, creative ideas, or
                potential partnerships. Whether you have a specific project in mind
                or just want to explore possibilities, I'd love to hear from you.
              </motion.p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20, x: -20 }}
                    animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    whileHover={{ x: 5, scale: 1.02 }}
                    className="flex items-center space-x-4 group cursor-pointer"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                      className="p-3 bg-gradient-to-br from-primary to-secondary rounded-xl group-hover:shadow-lg group-hover:shadow-primary/25 transition-all duration-300"
                    >
                      <info.icon size={24} className="text-white" />
                    </motion.div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                        {info.title}
                      </p>
                      <a
                        href={info.href}
                        className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors text-sm"
                      >
                        {info.value}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick Stats with Animated Counters */}
            <motion.div
              ref={statsRef}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-3 gap-4"
            >
              {[
                { number: 50, label: 'Projects Completed', suffix: '+' },
                { number: 5, label: 'Years Experience', suffix: '+' },
                { number: 98, label: 'Client Satisfaction', suffix: '%' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={statsInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.05, y: -3 }}
                  className="backdrop-blur-sm bg-white dark:bg-white/10 rounded-xl p-4 border border-gray-200 dark:border-white/20 text-center shadow-lg group"
                >
                  <motion.div 
                    className="text-2xl font-bold text-primary mb-1"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <AnimatedCounter 
                      end={stat.number} 
                      suffix={stat.suffix} 
                      inView={statsInView}
                      duration={2.5}
                    />
                  </motion.div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="backdrop-blur-sm bg-white dark:bg-white/10 rounded-2xl p-8 border border-gray-200 dark:border-white/20 shadow-xl"
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-900 dark:text-white">
                      Name *
                    </label>
                    <input
                      {...register('name', { required: 'Name is required' })}
                      type="text"
                      id="name"
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/20 focus:border-primary focus:outline-none transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-gray-900 dark:text-white focus:ring-2 focus:ring-primary/20"
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <motion.p 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-xs mt-1"
                      >
                        {errors.name.message}
                      </motion.p>
                    )}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.9 }}
                  >
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-900 dark:text-white">
                      Email *
                    </label>
                    <input
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address',
                        },
                      })}
                      type="email"
                      id="email"
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/20 focus:border-primary focus:outline-none transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-gray-900 dark:text-white focus:ring-2 focus:ring-primary/20"
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <motion.p 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-xs mt-1"
                      >
                        {errors.email.message}
                      </motion.p>
                    )}
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-900 dark:text-white">
                    Subject *
                  </label>
                  <input
                    {...register('subject', { required: 'Subject is required' })}
                    type="text"
                    id="subject"
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/20 focus:border-primary focus:outline-none transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-gray-900 dark:text-white focus:ring-2 focus:ring-primary/20"
                    placeholder="What's this about?"
                  />
                  {errors.subject && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-xs mt-1"
                    >
                      {errors.subject.message}
                    </motion.p>
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1.1 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-900 dark:text-white">
                    Message *
                  </label>
                  <textarea
                    {...register('message', { required: 'Message is required' })}
                    id="message"
                    rows={6}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/20 focus:border-primary focus:outline-none transition-all duration-300 resize-none disabled:opacity-50 disabled:cursor-not-allowed text-gray-900 dark:text-white focus:ring-2 focus:ring-primary/20"
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-xs mt-1"
                    >
                      {errors.message.message}
                    </motion.p>
                  )}
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  className="w-full py-4 px-6 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold shadow-lg hover:shadow-primary/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="flex items-center gap-2 text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-400/10 p-4 rounded-xl border border-green-300 dark:border-green-400/20"
                  >
                    <CheckCircle size={20} />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Message sent successfully!</p>
                      <p className="text-xs text-green-500 dark:text-green-300 mt-1">I'll get back to you within 24 hours.</p>
                    </div>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="flex items-center gap-2 text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-400/10 p-4 rounded-xl border border-red-300 dark:border-red-400/20"
                  >
                    <XCircle size={20} />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Failed to send message</p>
                      <p className="text-xs text-red-500 dark:text-red-300 mt-1">
                        {errorMessage || 'Please try again or contact me directly.'}
                      </p>
                    </div>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;