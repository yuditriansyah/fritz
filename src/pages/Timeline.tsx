import React, { useState, useEffect, useRef } from 'react';
import { Calendar, MapPin, Clock, Star, Award, Camera, Heart, Music, Users, Mic } from 'lucide-react';

interface TimelineEvent {
  id: number;
  title: string;
  description: string;
  date: string;
  year: string;
  location?: string;
  type: 'debut' | 'performance' | 'achievement' | 'milestone' | 'mv' | 'special' | 'promotion';
  image: string;
  category: string;
}

const IdolTimeline: React.FC = () => {
  const [counters, setCounters] = useState({ events: 0, performances: 0, musicVideos: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  // Initialize component
  useEffect(() => {
    // Set up intersection observer for stats animation
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [isVisible]);

  const animateCounters = () => {
    const targets = { events: 19, performances: 65, musicVideos: 3 };
    const duration = 2000; // 2 seconds
    const steps = 60; // 60 steps for smooth animation
    const stepTime = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      // Easing function for smoother animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      setCounters({
        events: Math.floor(targets.events * easeOutQuart),
        performances: Math.floor(targets.performances * easeOutQuart),
        musicVideos: Math.floor(targets.musicVideos * easeOutQuart)
      });

      if (currentStep >= steps) {
        setCounters(targets);
        clearInterval(timer);
      }
    }, stepTime);
  };

  const events: TimelineEvent[] = [
    {
      id: 1,
      title: "JKT48 Trainee Debut",
      description: "Resmi diperkenalkan sebagai anggota Trainee JKT48 generasi ke-12. Moment bersejarah yang menandai dimulainya perjalanan sebagai idol di panggung JKT48 Theater.",
      date: "18 November",
      year: "2023",
      location: "Jakarta Japan Matsuri",
      type: "debut",
      image: "https://i.pinimg.com/736x/ea/38/0f/ea380fb812f5086ebffef07d6417dd63.jpg",
      category: "Debut"
    },
    {
      id: 2,
      title: "First Shonichi Performance - Aitakatta",
      description: "Tampil pertama kali dalam pertunjukan Shonichi dengan membawakan setlist legendaris Aitakatta. Debut panggung yang memukau dan penuh emosi di hadapan fans.",
      date: "1 Maret",
      year: "2024",
      location: "JKT48 Theater",
      type: "performance",
      image: "https://nosqjejiadlbiznntsme.supabase.co/storage/v1/object/public/file//20250621_114631.jpg",
      category: "Performance"
    },
    {
      id: 3,
      title: "First Off Air Show - Narayafest",
      description: "Penampilan pertama dalam pertunjukan Off Air (Shonichi Off Air) di acara Narayafest. Pengalaman berharga tampil di luar Jakarta dan bertemu fans dari berbagai daerah.",
      date: "5 Mei",
      year: "2024",
      location: "Kota Tegal",
      type: "special",
      image: "https://nosqjejiadlbiznntsme.supabase.co/storage/v1/object/public/file//IMG_20250621_122808.jpg",
      category: "Special Event"
    },
    {
      id: 4,
      title: "Spring Has Come Meet & Greet",
      description: "Mengikuti sesi Meet & Greet dalam acara Spring Has Come. Kesempatan emas untuk berinteraksi langsung dengan fans.",
      date: "11 Mei",
      year: "2024",
      location: "Jakarta",
      type: "milestone",
      image: "https://nosqjejiadlbiznntsme.supabase.co/storage/v1/object/public/file//20250621_123253.jpg",
      category: "Fan Event"
    },
    {
      id: 5,
      title: "First Music Video - Belalang yang Membangkang",
      description: "Debut pertama dalam video musik JKT48 yang berjudul 'Belalang yang Membangkang'. Milestone penting sebagai member yang mulai mendapat exposure lebih luas.",
      date: "20 Agustus",
      year: "2024",
      location: "Jakarta",
      type: "mv",
      image: "https://pbs.twimg.com/media/GVd7PjKaMAQK0x6?format=jpg&name=large",
      category: "Music Video"
    },
    {
      id: 8,
      title: "Ramune no Nomikata",
      description: "Tampil memukau dalam pertunjukan Ramune no Nomikata. Performance yang menunjukkan kemampuan vokal dan dance yang semakin matang.",
      date: "11 November",
      year: "2024",
      location: "JKT48 Theater",
      type: "performance",
      image: "https://nosqjejiadlbiznntsme.supabase.co/storage/v1/object/public/file//20250621_120111.jpg",
      category: "Performance"
    },
    {
      id: 10,
      title: "Promoted to Regular Member",
      description: "Dinyatakan sebagai member Reguler JKT48",
      date: "1 May",
      year: "2025",
      location: "Jakarta",
      type: "promotion",
      image: "https://pbs.twimg.com/media/GrNcAhjXkAAD2fY?format=jpg&name=medium",
      category: "Promotion Member"
    },
    {
      id: 12,
      title: "Te wo Tsunaginagara Shonichi",
      description: "Melaksanakan pertunjukan dengan setlist Te wo Tsunaginagara.",
      date: "30 Mei",
      year: "2025",
      location: "JKT48 Theater",
      type: "performance",
      image: "https://nosqjejiadlbiznntsme.supabase.co/storage/v1/object/public/file//20250621_115422.jpg",
      category: "Performance"
    },
    {
      id: 14,
      title: "Renai Kinshi Jourei",
      description: "will perform setlist for the first time on 27/6/25",
      date: "27 Juni",
      year: "2025",
      location: "JKT48 Theater",
      type: "performance",
      image: "https://nosqjejiadlbiznntsme.supabase.co/storage/v1/object/public/file//20250621_121234.jpg",
      category: "Theater"
    }
  ];

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'debut':
        return <Star className="w-4 h-4" />;
      case 'performance':
        return <Mic className="w-4 h-4" />;
      case 'achievement':
        return <Award className="w-4 h-4" />;
      case 'milestone':
        return <Heart className="w-4 h-4" />;
      case 'mv':
        return <Camera className="w-4 h-4" />;
      case 'special':
        return <Music className="w-4 h-4" />;
      case 'promotion':
        return <Users className="w-4 h-4" />;
      default:
        return <Calendar className="w-4 h-4" />;
    }
  };

  const getEventGradient = (type: string) => {
    switch (type) {
      case 'debut':
        return 'from-pink-600 via-pink-500 to-rose-400';
      case 'performance':
        return 'from-pink-500 via-rose-400 to-pink-300';
      case 'achievement':
        return 'from-pink-700 via-pink-600 to-pink-400';
      case 'milestone':
        return 'from-pink-400 via-rose-300 to-white';
      case 'mv':
        return 'from-pink-600 via-rose-500 to-pink-300';
      case 'special':
        return 'from-pink-500 via-pink-400 to-rose-300';
      case 'promotion':
        return 'from-pink-700 via-pink-600 to-pink-500';
      default:
        return 'from-pink-400 to-white';
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Debut': 'from-pink-600 to-rose-500',
      'Performance': 'from-pink-500 to-rose-400',
      'Achievement': 'from-pink-700 to-pink-500',
      'Fan Event': 'from-pink-400 to-rose-300',
      'Music Video': 'from-pink-600 to-rose-500',
      'Birthday': 'from-pink-500 to-pink-300',
      'Sousenkyo': 'from-pink-700 to-pink-600',
      'Special Event': 'from-pink-500 to-rose-400',
      'Promotion Member': 'from-pink-700 to-pink-600',
      'Theater': 'from-pink-500 to-rose-400'
    };
    return colors[category as keyof typeof colors] || 'from-pink-400 to-rose-300';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-pink-100 via-white to-rose-100 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-200/20 via-transparent to-rose-200/20"></div>
        <div className="relative max-w-4xl mx-auto text-center px-6">
          <div className="mb-6">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 flex items-center justify-center shadow-xl">
              <Star className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-600 via-rose-500 to-pink-400 bg-clip-text text-transparent">
              Fritzy Journey
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-4">
            Timeline perjalanan Fritzy Rosmerian sebagai member JKT48.
          </p>
          <div className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-lg border border-pink-100">
            <Calendar className="w-5 h-5 text-pink-500 mr-2" />
            <span className="text-pink-600 font-semibold">Debut: 18 November 2023</span>
          </div>
          <div className="mt-8 w-24 h-1 bg-gradient-to-r from-pink-400 to-rose-400 mx-auto rounded-full"></div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div 
          ref={statsRef}
          className={`grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-pink-100 transform transition-all duration-500 hover:scale-105 hover:shadow-lg group">
             <div className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent group-hover:from-pink-700 group-hover:to-rose-600 transition-all duration-300">
              {counters.events}
            </div>
            <div className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Total Events</div>
          </div>
          <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-pink-100 transform transition-all duration-500 hover:scale-105 hover:shadow-lg group delay-100">
            <div className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent group-hover:from-pink-700 group-hover:to-rose-600 transition-all duration-300">
              {counters.performances}
            </div>
            <div className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Performances</div>
          </div>
          <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-pink-100 transform transition-all duration-500 hover:scale-105 hover:shadow-lg group delay-200">
            <div className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent group-hover:from-pink-700 group-hover:to-rose-600 transition-all duration-300">
              {counters.musicVideos}
            </div>
            <div className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Music Videos</div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-300 via-rose-200 to-pink-100 transform md:-translate-x-0.5"></div>

          {events.map((event, index) => (
            <div 
              key={event.id}
              className="relative mb-16 group"
            >
              {/* Year Badge */}
              <div className={`absolute ${index % 2 === 0 ? 'left-16 md:left-1/2 md:ml-8' : 'left-16 md:right-1/2 md:mr-8'} -top-4 z-20`}>
                <div className="bg-gradient-to-r from-pink-500 to-rose-400 text-white px-6 py-1 rounded-full text-sm font-semibold shadow-lg border-4 border-pink-400 w-32 text-center mx-auto hover:scale-110 transition-transform duration-300">
                  {event.year}
                </div>
              </div>

              {/* Timeline Dot */}
              <div className="absolute left-3 md:left-1/2 md:transform md:-translate-x-1/2 w-6 h-6 z-20 mt-8">
                <div className={`w-full h-full rounded-full bg-gradient-to-r ${getEventGradient(event.type)} shadow-lg flex items-center justify-center text-white transform transition-all duration-300 group-hover:scale-125 group-hover:shadow-xl animate-pulse`}>
                  {getEventIcon(event.type)}
                </div>
              </div>

              {/* Event Card */}
              <div className={`flex ${index % 2 === 0 ? 'justify-start md:justify-end' : 'justify-start'} w-full`}>
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group-hover:transform group-hover:-translate-y-2 border border-pink-100 hover:border-pink-200">
                    {/* Image */}
                    <div className="relative overflow-hidden">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-80 md:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                      <div className="absolute top-4 right-4 transform transition-all duration-300 group-hover:scale-110">
                        <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${getEventGradient(event.type)} flex items-center justify-center shadow-md`}>
                          {getEventIcon(event.type)}
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4 transform transition-all duration-300 group-hover:translate-x-1">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getCategoryColor(event.category)} shadow-md`}>
                          {event.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-gray-800 leading-tight group-hover:text-pink-700 transition-colors duration-300">
                          {event.title}
                        </h3>
                        <span className="text-pink-600 font-semibold text-sm bg-pink-50 px-3 py-1 rounded-full whitespace-nowrap ml-2 group-hover:bg-pink-100 transition-colors duration-300">
                          {event.date}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4 leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-300">
                        {event.description}
                      </p>
                      {event.location && (
                        <div className="flex items-center text-pink-500 text-sm mb-3 group-hover:text-pink-600 transition-colors duration-300">
                          <MapPin className="w-4 h-4 mr-2" />
                          {event.location}
                        </div>
                      )}
                      <div className="flex items-center justify-between">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 group-hover:scale-105 ${
                          event.type === 'debut' 
                            ? 'bg-gradient-to-r from-pink-200 to-rose-200 text-pink-800' 
                            : event.type === 'achievement'
                            ? 'bg-gradient-to-r from-pink-300 to-rose-300 text-pink-900'
                            : 'bg-gradient-to-r from-pink-100 to-rose-100 text-pink-700'
                        }`}>
                          {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                        </span>
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-100 to-rose-100 flex items-center justify-center group-hover:from-pink-200 group-hover:to-rose-200 transition-all duration-300">
                            {getEventIcon(event.type)}
                          </div>
                          <Heart className="w-4 h-4 text-pink-400 group-hover:text-pink-500 transition-colors duration-300 group-hover:scale-110 transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Timeline End */}
          <div className="relative flex justify-center mt-12">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 via-rose-300 to-white shadow-xl border-4 border-white relative z-10">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdolTimeline;