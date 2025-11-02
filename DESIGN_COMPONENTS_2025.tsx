/**
 * ReplAInow Design System Components 2025
 * Premium, conversion-focused components for the new design
 */

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Star, Globe, Zap, Shield } from 'lucide-react';

// ============================================
// COLOR SYSTEM
// ============================================
export const colors = {
  primary: {
    purple: '#6B46C1',
    dark: '#1F2937',
    white: '#FFFFFF',
  },
  accent: {
    green: '#10B981',
    blue: '#3B82F6',
    orange: '#F59E0B',
  },
  gray: {
    900: '#111827',
    800: '#1F2937',
    600: '#4B5563',
    400: '#9CA3AF',
    200: '#E5E7EB',
    100: '#F3F4F6',
    50: '#F9FAFB',
  },
  gradients: {
    hero: 'linear-gradient(135deg, #6B46C1 0%, #8B5CF6 100%)',
    cta: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
    dark: 'linear-gradient(180deg, #1F2937 0%, #111827 100%)',
  },
};

// ============================================
// BUTTON COMPONENTS
// ============================================
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  icon,
  onClick,
  className = '',
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 cursor-pointer';
  
  const variants = {
    primary: 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5',
    secondary: 'bg-white text-gray-800 border-2 border-gray-200 hover:border-purple-600 hover:text-purple-600',
    ghost: 'text-gray-600 hover:text-purple-600 hover:bg-gray-50',
  };
  
  const sizes = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
  };
  
  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
};

// ============================================
// HERO SECTION
// ============================================
export const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-purple-700 font-medium">New</span>
              <span className="text-gray-600">WhatsApp Integration Live</span>
            </motion.div>
            
            {/* Headline */}
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              AI That Sells<br />
              <span className="text-purple-600">While You Sleep</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Turn every visitor into a customer with the #1 AI helpdesk for Shopify. 
              24/7 support in 95+ languages.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="large" icon={<ArrowRight size={20} />}>
                Start Free Trial
              </Button>
              <Button variant="secondary" size="large">
                Book Demo
              </Button>
            </div>
            
            {/* Trust Elements */}
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="font-semibold">4.9/5</span>
              </div>
              <span className="text-gray-400">•</span>
              <span className="text-gray-600">50,000+ merchants</span>
            </div>
          </motion.div>
          
          {/* Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl blur-3xl opacity-20"></div>
            <img 
              src="/dashboard-preview.png" 
              alt="ReplAInow Dashboard" 
              className="relative rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// STATS BAR
// ============================================
export const StatsBar: React.FC = () => {
  const stats = [
    { value: '$2.5M+', label: 'Generated Today', icon: '📈' },
    { value: '50K+', label: 'Conversations Now', icon: '💬' },
    { value: '95', label: 'Languages Active', icon: '🌍' },
    { value: '0.8s', label: 'Avg Response', icon: '⚡' },
  ];
  
  return (
    <div className="bg-gray-900 py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-light text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ============================================
// FEATURE CARD
// ============================================
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  benefits,
}) => {
  return (
    <motion.div
      className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-purple-200 transition-all duration-300 hover:shadow-xl"
      whileHover={{ y: -4 }}
    >
      <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6 text-purple-600">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">{benefit}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

// ============================================
// PRICING CARD
// ============================================
interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText?: string;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  name,
  price,
  description,
  features,
  isPopular = false,
  ctaText = 'Start Trial',
}) => {
  return (
    <motion.div
      className={`relative rounded-2xl p-8 ${
        isPopular
          ? 'bg-purple-600 text-white shadow-2xl scale-105'
          : 'bg-white border-2 border-gray-200'
      }`}
      whileHover={{ y: -4 }}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      
      <h3 className={`text-2xl font-bold mb-2 ${isPopular ? 'text-white' : 'text-gray-900'}`}>
        {name}
      </h3>
      <div className={`text-4xl font-light mb-4 ${isPopular ? 'text-white' : 'text-gray-900'}`}>
        {price}<span className="text-xl">/mo</span>
      </div>
      <p className={`mb-6 ${isPopular ? 'text-purple-100' : 'text-gray-600'}`}>
        {description}
      </p>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className={`w-5 h-5 flex-shrink-0 ${
              isPopular ? 'text-green-300' : 'text-green-500'
            }`} />
            <span className={isPopular ? 'text-purple-50' : 'text-gray-700'}>
              {feature}
            </span>
          </li>
        ))}
      </ul>
      
      <Button
        variant={isPopular ? 'primary' : 'secondary'}
        className="w-full"
      >
        {ctaText}
      </Button>
    </motion.div>
  );
};

// ============================================
// TESTIMONIAL CARD
// ============================================
interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
  rating: number;
}

export const TestimonialCard: React.FC<TestimonialProps> = ({
  quote,
  author,
  role,
  company,
  image,
  rating,
}) => {
  return (
    <motion.div
      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      
      <p className="text-gray-700 mb-6 italic">"{quote}"</p>
      
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={author}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <div className="font-semibold text-gray-900">{author}</div>
          <div className="text-sm text-gray-600">
            {role} at {company}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// ============================================
// LOGO CLOUD
// ============================================
export const LogoCloud: React.FC<{ logos: string[] }> = ({ logos }) => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <p className="text-center text-gray-600 mb-8">
          Trusted by 50,000+ Shopify merchants worldwide
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {logos.map((logo, index) => (
            <motion.img
              key={index}
              src={logo}
              alt="Customer logo"
              className="h-8 mx-auto filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.6 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// ============================================
// CTA SECTION
// ============================================
export const CTASection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-purple-600 to-purple-700">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl lg:text-5xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Ready to 10x Your Customer Experience?
        </motion.h2>
        
        <motion.p
          className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
        >
          Join 50,000+ Shopify merchants using AI to delight customers and boost sales
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Button size="large" icon={<ArrowRight size={20} />}>
            Start 7-Day Free Trial
          </Button>
          <Button variant="secondary" size="large">
            Schedule Demo
          </Button>
        </motion.div>
        
        <motion.div
          className="flex items-center justify-center gap-6 text-purple-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <span className="flex items-center gap-2">
            <Check className="w-5 h-5" />
            No credit card required
          </span>
          <span className="flex items-center gap-2">
            <Check className="w-5 h-5" />
            5-minute setup
          </span>
          <span className="flex items-center gap-2">
            <Check className="w-5 h-5" />
            Cancel anytime
          </span>
        </motion.div>
      </div>
    </section>
  );
};
