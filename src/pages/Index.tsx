import React from 'react';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calendar, Image, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Index = () => {
  const quickLinks = [
    {
      title: 'Latest Gallery',
      description: 'View recent photos from events and photoshoots',
      icon: Image,
      link: '/gallery',
      color: 'from-fritzy-pink to-fritzy-pink-dark'
    },
    {
      title: 'Upcoming Events',
      description: 'Check Fritzy\'s schedule for theater shows and video calls',
      icon: Calendar,
      link: '/schedule',
      color: 'from-fritzy-purple to-fritzy-purple-dark'
    },
    {
      title: 'Timeline',
      description: 'See Fritzy\'s journey and milestones as an idol',
      icon: Star,
      link: '/timeline',
      color: 'from-purple-400 to-fritzy-pink'
    }
  ];

  const recentHighlights = [
    {
      title: 'New Album Announcement',
      date: '2024-06-18',
      description: 'Fritzy announces "Dreams Come True" - her most personal album yet',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=200&fit=crop&auto=format'
    },
    {
      title: 'Summer Tour Dates',
      date: '2024-06-15',
      description: 'Get ready for an amazing summer tour across 15 cities',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop&auto=format'
    },
    {
      title: 'Charity Event Success',
      date: '2024-06-12',
      description: 'Music for a Cause event raises funds for education initiatives',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=300&h=200&fit=crop&auto=format'
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.7, type: 'spring' as const, stiffness: 60 },
    }),
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Mobile-only #BetterWithFritzy Banner */}
      <div className="flex w-full justify-center items-center py-6 sm:py-8 md:hidden">
        <span className="text-2xl sm:text-3xl font-bold text-fritzy-pink-dark text-center px-4">#BetterWithFritzy</span>
      </div>

      {/* Quick Links Section */}
      <motion.div
        className="py-20 px-4 bg-gradient-to-br from-white to-fritzy-pink/10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 flex flex-col items-center justify-center">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-gray-800 mb-4">
              Explore Fritzy's World
            </h2>
            <p className="text-lg text-gray-600 font-nunito max-w-2xl mx-auto">
              Quick access to the most popular sections of our fan community
            </p>
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {quickLinks.map((item, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeInUp}
                >
                  <Link to={item.link} className="flex justify-center w-full">
                    <Card className="fritzy-card h-full group cursor-pointer hover:transform hover:scale-105 transition-all duration-300 mx-auto">
                      <CardContent className="p-6 text-center h-full flex flex-col">
                        <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <item.icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-poppins font-bold text-gray-800 mb-2 group-hover:text-fritzy-pink-dark transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 font-nunito text-sm flex-grow">
                          {item.description}
                        </p>
                        <div className="mt-4">
                          <Button variant="outline" size="sm" className="border-fritzy-pink-dark text-fritzy-pink-dark hover:bg-fritzy-pink/10 group-hover:border-fritzy-pink group-hover:text-fritzy-pink transition-colors">
                            Explore
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Recent Highlights */}
      <motion.div
        className="py-20 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-gray-800 mb-4">
              Recent Highlights
            </h2>
            <p className="text-lg text-gray-600 font-nunito max-w-2xl mx-auto">
              Don't miss these exciting updates from Fritzy's journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {recentHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
              >
                <Card className={`fritzy-card group overflow-hidden ${highlight.title === 'New Album Announcement' ? 'border-fritzy-pink-dark border-4 shadow-lg' : ''}`}>
                  <img
                    src={highlight.image}
                    alt={highlight.title}
                    className="w-full h-48 object-cover mb-4 rounded-xl group-hover:scale-105 transition-transform duration-300"
                  />
                  <CardContent className="p-6">
                    <h3 className="text-xl font-poppins font-bold text-gray-800 mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-600 font-nunito text-sm mb-2">
                      {highlight.description}
                    </p>
                    <span className="text-xs text-gray-400 font-nunito">
                      {highlight.date}
                    </span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Newsletter Signup */}
      <div className="py-20 px-4 bg-gradient-to-r from-fritzy-pink/20 to-fritzy-purple/20">
        <div className="container mx-auto max-w-4xl text-center">
          <Card className="fritzy-card">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-gray-800 mb-4">
                Stay Connected with Fritzy
              </h2>
              <p className="text-lg text-gray-600 font-nunito mb-8 max-w-2xl mx-auto">
                Be the first to know about new releases, events, and special announcements. 
                Join our newsletter and never miss a moment!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 border border-fritzy-pink/30 rounded-full focus:outline-none focus:border-fritzy-pink-dark font-nunito"
                />
                <Button className="fritzy-button whitespace-nowrap">
                  Subscribe Now
                </Button>
              </div>
              <p className="text-sm text-gray-500 font-nunito mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
