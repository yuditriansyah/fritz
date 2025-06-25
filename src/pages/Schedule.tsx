import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle }from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, Video, Theater, MessageCircle, Camera, Plus } from 'lucide-react';

const Schedule = () => {
  const [selectedType, setSelectedType] = useState('all');

  const scheduleTypes = [
    { id: 'all', label: 'All Events' },
    { id: 'theater', label: 'Theater Shows' },
    { id: 'video-call', label: 'Video Calls' },
    { id: 'Meet and Greet', label: 'Meet and Greet'}, 
    { id: 'Two Shot', label: 'Two Shoot' } 
  ];

  const scheduleData = [
    {
      id: 1,
      type: 'theater',
      title: 'Aturan Anti Cinta',
      date: '2025-06-27',
      time: '19:00',
      venue: 'Jakarta Theater',
      description: '"Aturan Anti Cinta" adalah salah satu single dan judul lagu dari setlist teater JKT48 yang diadaptasi dari lagu AKB48 berjudul "Anti Rule of Love" (愛のルール / Ai no Rule).',
      status: 'upcoming',
      ticketsAvailable: true
    },
    {
      id: 2,
      type: 'Meet and Greet',
      title: 'Meet and Greet with Fritzy',
      date: '2025-07-05',
      time: '16:45 - 18:00',
      venue: 'Marina Convention Center',
      description: ' Ingin ngobrol langsung sama member JKT48? Meet and Greet adalah momen spesial buat kamu yang ingin menyapa, tersenyum, dan berbagi semangat dengan para idol secara langsung!',
      status: 'upcoming',
      ticketsAvailable: true
    },
    {
      id: 3,
      type: 'Meet and Greet',
      title: 'Meet and greet with Fritzy',
      date: '2025-07-8',
      time: '13:45 - 16:00',
      venue: 'Sleman City Hall, Yogyakarta',
      description: 'Momen spesial untuk menyapa dan berbincang langsung dengan member JKT48. Interaksi singkat, penuh kehangatan—jadi ajang fans merasakan kedekatan langsung dengan idolanya.',
      status: 'upcoming',
      ticketsAvailable: true
    },
    {
      id: 5,
      type: 'Two Shot',
      title: 'Two shot with Fritzy',
      date: '2025-07-05',
      time: '16:45 - 17:00',
      venue: 'Grand City Convention Hall, Surabaya',
      description: 'Ambil momen spesialmu dengan foto berdua bersama member JKT48! Dalam sesi eksklusif ini, kamu bisa mengabadikan kenangan tak terlupakan dengan idola favoritmu.',
      status: 'upcoming',
      ticketsAvailable: true
    },
    { 
      id: 6,
      type: 'Two Shot',
      title: 'Two shot with Fritzy',
      date: '2025-07-12',
      time: '10:45 - 13:00',
      venue: 'Marina Convention Center',
      description: 'Dapatkan kesempatan langka berfoto berdua dengan member pilihanmu! Daftar sekarang dan simpan momen spesialmu selamanya. 💖 ‎ ‎ ‎ ‎ ‎  ',
      status: 'upcoming',
      ticketsAvailable: true
    },
    {
      id: 7,
      type: 'Two Shot',
      title: 'Two shot with Fritzy',
      date: '2025-07-08',
      time: '16:45 - 18:00',
      venue: 'Sleman City Hall, Yogyakarta',
      description: 'Sesi foto eksklusif bersama member JKT48. Abadikan momen spesialmu dengan foto berdua yang tak terlupakan!',
      status: 'upcoming',
      ticketsAvailable: true
    },
    { 
      id: 8,
      type: 'Meet and Greet',
      title: 'Meet and Greet with Fritzy',
      date: '2025-07-15',
      time: '16:45 - 17:00',
      venue: 'Grand City Convention Hall, Surabaya',
      description: 'Kesempatan langka untuk bertemu dan berbincang langsung dengan Fritzy! Jangan lewatkan momen spesial ini.',
      status: 'upcoming',
      ticketsAvailable: true
    },

  ];

  const filteredSchedule = selectedType === 'all' 
    ? scheduleData 
    : scheduleData.filter(event => event.type === selectedType);

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'theater':
        return Theater;
      case 'Meet and Greet':
        return MessageCircle;
      case 'Two Shot':
        return Camera;
      case 'video-call':
        return Video;
      default:
        return Video;
    }
  };

  const getEventBg = (type: string) => {
    return type === 'theater' 
      ? 'bg-gradient-to-br from-fritzy-pink to-fritzy-pink-dark' 
      : 'bg-gradient-to-br from-fritzy-purple to-fritzy-purple-dark';
  };

  return (
    <motion.div 
      className="pt-20 pb-6 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div 
          className="text-center mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold mb-3 gradient-text">
            Fritzy's Schedule
          </h1>
          <p className="text-base sm:text-lg text-gray-600 font-nunito max-w-2xl mx-auto px-4">
            Don't miss any upcoming events! Check out Fritzy's theater shows and video call sessions.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {scheduleTypes.map((type) => (
            <Button
              key={type.id}
              onClick={() => setSelectedType(type.id)}
              variant={selectedType === type.id ? "default" : "outline"}
              size="sm"
              className={`
                text-xs sm:text-sm px-3 sm:px-4 py-2 h-8 sm:h-9
                ${selectedType === type.id 
                  ? 'fritzy-button' 
                  : 'border-fritzy-pink-dark text-fritzy-pink-dark hover:bg-fritzy-pink/10'
                }
              `}
            >
              {type.label}
            </Button>
          ))}
        </motion.div>

        {/* Schedule Grid */}
        <motion.div 
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {filteredSchedule.map((event, index) => {
            const EventIcon = getEventIcon(event.type);
            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.6 + (index * 0.1),
                  ease: "easeOut"
                }}
                whileHover={{ 
                  scale: 1.05, 
                  transition: { duration: 0.2 } 
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="fritzy-card group transition-all duration-300">
                  <CardHeader className={`${getEventBg(event.type)} text-white rounded-t-lg`}>
                  <div className="flex items-center justify-between">
                    <EventIcon className="w-8 h-8" />
                    <Badge 
                      variant={event.status === 'upcoming' ? 'default' : 'secondary'}
                      className={`${event.status === 'upcoming' ? 'bg-white text-gray-800' : 'bg-gray-600'}`}
                    >
                      {event.status === 'upcoming' ? 'Upcoming' : 'Completed'}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-poppins">
                    {event.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="p-4 space-y-3">
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Calendar className="w-4 h-4 text-fritzy-pink-dark" />
                    <span className="font-nunito text-sm">{event.date}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Clock className="w-4 h-4 text-fritzy-pink-dark" />
                    <span className="font-nunito text-sm">{event.time}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3 text-gray-600">
                    <MapPin className="w-4 h-4 text-fritzy-pink-dark" />
                    <span className="font-nunito text-sm">{event.venue}</span>
                  </div>
                  
                  <p className="text-gray-700 font-nunito text-xs leading-relaxed">
                    {event.description}
                  </p>
                  
                  <div className="pt-3 border-t border-fritzy-pink/20">
                    {event.ticketsAvailable && event.status === 'upcoming' ? (
                      <Button 
                        className="w-full fritzy-button" 
                        size="sm"
                        onClick={() => window.open('https://jkt48.com/', '_blank')}
                      >
                        Get Tickets
                      </Button>
                    ) : event.status === 'upcoming' ? (
                      <Button variant="outline" className="w-full" disabled size="sm">
                        Sold Out
                      </Button>
                    ) : (
                      <Button variant="outline" className="w-full" disabled size="sm">
                        Event Completed
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Newsletter Signup - Only show when no events */}
        {filteredSchedule.length === 0 && (
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Card className="fritzy-card never-miss-card max-w-sm mx-auto transform transition-all duration-700 hover:scale-105 hover:shadow-2xl">
              <CardContent className="p-6">
                <motion.div 
                  className="mb-4 stagger-animation stagger-1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-fritzy-pink to-fritzy-purple rounded-full flex items-center justify-center mb-3 animate-bounce">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                </motion.div>
                <motion.h3 
                  className="text-xl font-poppins font-bold text-gray-800 mb-3 gradient-text stagger-animation stagger-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  Never Miss an Event!
                </motion.h3>
                <motion.p 
                  className="text-gray-600 font-nunito mb-4 text-sm stagger-animation stagger-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  No events found for this filter. Follow us for updates about new events and exclusive content from Fritzy!
                </motion.p>
                <motion.div 
                  className="flex gap-2 justify-center stagger-animation stagger-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                >
                  <Button 
                    onClick={() => window.open('https://jkt48.com/', '_blank')}
                    className="fritzy-button text-xs px-4 py-2"
                    size="sm"
                  >
                    Visit JKT48
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Schedule;
