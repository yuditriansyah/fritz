
import React from 'react';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calendar, Image, Newspaper, Users, Heart, Star } from 'lucide-react';

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
      title: 'Latest News',
      description: 'Stay updated with announcements and media coverage',
      icon: Newspaper,
      link: '/news',
      color: 'from-pink-400 to-purple-400'
    },
    {
      title: 'Join Community',
      description: 'Become part of the Fritzy Force family',
      icon: Users,
      link: '/about',
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Quick Links Section */}
      <div className="py-20 px-4 bg-gradient-to-br from-white to-fritzy-pink/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-gray-800 mb-4">
              Explore Fritzy's World
            </h2>
            <p className="text-lg text-gray-600 font-nunito max-w-2xl mx-auto">
              Quick access to the most popular sections of our fan community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((item, index) => (
              <Link key={index} to={item.link}>
                <Card className="fritzy-card h-full group cursor-pointer hover:transform hover:scale-105 transition-all duration-300">
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
            ))}
          </div>
        </div>
      </div>

      {/* Recent Highlights */}
      <div className="py-20 px-4">
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
              <Card key={index} className="fritzy-card group overflow-hidden">
                <div className="relative">
                  <img
                    src={highlight.image}
                    alt={highlight.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                      <Star className="w-4 h-4 text-fritzy-pink-dark fill-current" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="w-4 h-4 text-fritzy-pink-dark" />
                    <span className="text-sm text-gray-500 font-nunito">{highlight.date}</span>
                  </div>
                  <h3 className="text-xl font-poppins font-bold text-gray-800 mb-2 group-hover:text-fritzy-pink-dark transition-colors">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600 font-nunito text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/news">
              <Button className="fritzy-button">
                View All News
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="py-20 px-4 bg-gradient-to-r from-fritzy-pink/20 to-fritzy-purple/20">
        <div className="container mx-auto max-w-4xl text-center">
          <Card className="fritzy-card">
            <CardContent className="p-12">
              <Heart className="w-16 h-16 text-fritzy-pink-dark mx-auto mb-6 fill-current" />
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
