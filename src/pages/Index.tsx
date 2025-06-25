import React from 'react';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calendar, Image, Star, Play, User } from 'lucide-react';
import { motion } from 'framer-motion';
import CleanCard from '@/components/CleanCard';
import CleanGrid from '@/components/CleanGrid';

const Index = () => {
  const quickLinks = [
    {
      title: 'About Fritzy',
      description: 'Discover Fritzy\'s journey and connect through social media',
      icon: User,
      link: '/about',
      color: 'from-pink-500 to-rose-600'
    },
    {
      title: 'Photo Gallery',
      description: 'Browse stunning photos from events and behind-the-scenes',
      icon: Image,
      link: '/gallery',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Schedule',
      description: 'Stay updated with upcoming shows and appearances',
      icon: Calendar,
      link: '/schedule',
      color: 'from-indigo-500 to-purple-600'
    },
    {
      title: 'Timeline',
      description: 'Explore milestones, Total Performance, and Music Videos',
      icon: Star,
      link: '/timeline',
      color: 'from-amber-400 to-orange-500'
    }
  ];

  const recentHighlights = [
    {
      title: 'Go And Fight Music Video',
      date: '2025-05-22',
      description: 'Watch the latest music video JKT48 - Go And Fight',
      image: 'https://i.ytimg.com/vi/V5t-MdoYhJM/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBqGpJCLt4qVI050sE-UM282jkgmw',
      link: 'https://www.youtube.com/watch?v=V5t-MdoYhJM'
    },
    {
      title: 'MV JKT48 - Belalang Yang Membangkang',
      date: '2024-08-22',
      description: 'MV JKT48 - Belalang Yang Membangkang JKT48 Trainee',
      image: 'https://i.ytimg.com/vi/Ztg79dr34n4/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLB3CQarK3G2kJowMDaskNEORVCmcA',
      link: 'https://www.youtube.com/watch?v=Ztg79dr34n4'
    },
    {
      title: 'Akibat Damage 43, Member Harus Belajar',
      date: '2025-05-27',
      description: 'Member JKT48 siap buktikan bahwa mereka siap jadi jago main Free Fire! ',
      image: 'https://img.youtube.com/vi/TKvwxi6zVh8/mqdefault.jpg',
      link: 'https://www.youtube.com/watch?v=TKvwxi6zVh8'
    },
    {
      title: 'Sahur Bowl - Puasa, Takjil, THR',
      date: '2025-03-28',
      description: 'Makan sahur sambil ngobrol santai, tapi topiknya gacukup satu. Ada kejutan apalagi yaa di Sahur Bowl ?',
      image: 'https://img.youtube.com/vi/NiDen1GrWXc/mqdefault.jpg',
      link: 'https://www.youtube.com/watch?v=NiDen1GrWXc'
    },
    {
      title: 'Breakfest Time with Fritzy',
      date: '2024-11-16',
      description: 'Serial Breakfast Time ini akan membantu kita memahami setiap keunikan dari member generasi 12 lebih dekat lagi.',
      image: 'https://img.youtube.com/vi/6fqJMH5KPmA/mqdefault.jpg',
      link: 'https://www.youtube.com/watch?v=6fqJMH5KPmA'
    },
    {
      title: '[CEKIDOT] TAHUN BARUAN EDISI JOGJA!',
      date: '2025-01-21',
      description: 'Setelah tampil di event Swara Prambanan, para member JKT48 yang berada di Yogyakarta menikmati waktu liburan dengan mengikuti Lava Tour! 🚙✨',
      image: 'https://img.youtube.com/vi/A_oJveTk21Q/mqdefault.jpg',
      link: 'https://www.youtube.com/watch?v=A_oJveTk21Q'
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

      {/* Quick Links Section */}
      <motion.div
        className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-br from-white to-fritzy-pink/10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 sm:mb-12 flex flex-col items-center justify-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-poppins font-bold text-gray-800 mb-4">
              Explore Fritzy's World
            </h2>
            <p className="text-base sm:text-lg text-gray-600 font-nunito max-w-2xl mx-auto px-4">
              Quick access to the most popular sections of Fritzy World
            </p>
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full max-w-6xl">
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
                        <div className={`w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-md`}>
                          <item.icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-poppins font-bold text-gray-800 mb-2 group-hover:text-fritzy-pink-dark transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 font-nunito text-sm flex-grow">
                          {item.description}
                        </p>
                        <div className="mt-4">
                          <Button size="sm" className="fritzy-button">
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

          {/* Responsive Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {recentHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
              >
                <Card className={`fritzy-card group overflow-hidden cursor-pointer ${highlight.title === 'Go And Fight Music Video' ? 'border-fritzy-pink-dark border-4 shadow-lg' : ''}`}>
                  <div 
                    className="relative"
                    onClick={() => window.open(highlight.link, '_blank')}
                  >
                    <img
                      src={highlight.image}
                      alt={highlight.title}
                      className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Play overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-white rounded-lg p-3 shadow-md border border-gray-100">
                        <Play className="w-6 h-6 text-fritzy-pink-dark fill-current" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-poppins font-bold text-gray-800 mb-2 line-clamp-2">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-600 font-nunito text-sm mb-4 line-clamp-3">
                      {highlight.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400 font-nunito">
                        {highlight.date}
                      </span>
                      <Button 
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(highlight.link, '_blank');
                        }}
                        size="sm" 
                        className="fritzy-button flex items-center gap-1.5 text-xs px-3 py-1.5"
                      >
                        <Play className="w-3 h-3" />
                        Watch
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Footer Section */}
      <footer className="bg-gradient-to-r from-fritzy-pink/20 to-fritzy-purple/20 py-8 px-4 border-t border-fritzy-pink/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-gray-600 font-nunito text-sm mb-2">
              Made with ❤️ for Fritzy Rosmerian 
            </p>
            <p className="text-fritzy-pink-dark font-poppins font-semibold text-base">
              Made by Rizz
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
