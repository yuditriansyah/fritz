import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Calendar, Users, Ruler, UserCheck } from 'lucide-react';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const fullText = "Fritzy's World";

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const typeWriter = () => {
      if (displayText.length < fullText.length) {
        setDisplayText(fullText.slice(0, displayText.length + 1));
      } else {
        // Setelah selesai ketik, tunggu 3 detik lalu restart
        setIsTyping(false);
        timeoutId = setTimeout(() => {
          setDisplayText('');
          setIsTyping(true);
        }, 3000);
        return;
      }
    };

    if (isTyping && displayText.length < fullText.length) {
      timeoutId = setTimeout(typeWriter, 120); // Kecepatan ketik
    } else if (displayText.length === 0 && isTyping) {
      timeoutId = setTimeout(typeWriter, 500); // Delay awal
    }

    return () => clearTimeout(timeoutId);
  }, [displayText, fullText, isTyping]);

  const profileData = {
    fullName: 'Fritzy Rosmerian',
    stageName: 'Fritzy',
    dateOfBirth: 'July 28, 2008',
    group: 'JKT48 Group',
    height: '157 cm',
    hobbies: ['Modelling', 'Dancing', 'Magic'],
    friendship: ['Letycia Moreen', 'Fiony Alveria', 'Freya Jayawardana']
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-fritzy-pink/30 via-white to-fritzy-purple/30 px-4 sm:px-6 lg:px-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='4' fill='%23fff' fill-opacity='0.7'/%3E%3Ccircle cx='15' cy='15' r='3' fill='%23FFB6C1' fill-opacity='0.5'/%3E%3Ccircle cx='45' cy='45' r='3' fill='%23FFB6C1' fill-opacity='0.5'/%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      <div className="container mx-auto py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Hero Image */}
          <div className="relative animate-fade-in order-2 lg:order-1">
            <div className="relative">
              <img
                src="https://cdn.idn.media/idnaccount/avatar/500/f4d25811b1b50effd560fb480cac8ba0.webp?v=1746084944"
                alt="Fritzy Rosmerian"
                className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-fritzy-pink/20 to-transparent rounded-3xl"></div>
              
              {/* Floating Hearts Animation */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4">
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-fritzy-pink-dark fill-current animate-pulse" />
              </div>
              <div className="absolute top-6 -left-3 sm:top-10 sm:-left-6">
                <Heart className="w-4 h-4 sm:w-6 sm:h-6 text-fritzy-purple-dark fill-current animate-pulse delay-1000" />
              </div>
            </div>
          </div>

          {/* Profile Card */}
          <div className="space-y-6 lg:space-y-8 animate-fade-in order-1 lg:order-2">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-poppins font-bold text-gray-800 mb-4">
                Welcome to
                <span 
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-fritzy-pink-dark to-fritzy-purple-dark relative"
                  style={{
                    textShadow: "0 0 20px rgba(255, 182, 193, 0.4), 0 0 40px rgba(221, 160, 221, 0.3)"
                  }}
                >
                  {displayText}
                  <span className="typewriter-cursor absolute">|</span>
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 font-nunito leading-relaxed">
                Abracadabra! Si pesulap yang siap membuat hatimu terpikat. Halo semuanya, it's me, Fritzy.
                <span className="block mt-2 text-base sm:text-lg text-gray-500">
                  (Abracadabra! The magician ready to captivate your heart. Hello everyone, it's me, Fritzy)
                </span>
              </p>
            </div>

            {/* Profile Card */}
            <Card className="fritzy-card">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <div className="text-center mb-4 sm:mb-6">
                  <h2 className="text-2xl sm:text-3xl font-poppins font-bold text-gray-800 mb-2">
                    {profileData.fullName}
                  </h2>
                  <p className="text-fritzy-pink-dark font-semibold text-base sm:text-lg">
                    Stage Name: {profileData.stageName}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-fritzy-pink-dark flex-shrink-0" />
                    <div>
                      <p className="text-xs sm:text-sm text-gray-500">Birth Date</p>
                      <p className="font-semibold text-sm sm:text-base">{profileData.dateOfBirth}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 text-fritzy-pink-dark flex-shrink-0" />
                    <div>
                      <p className="text-xs sm:text-sm text-gray-500">Group</p>
                      <p className="font-semibold text-sm sm:text-base">{profileData.group}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 sm:col-span-2">
                    <Ruler className="w-4 h-4 sm:w-5 sm:h-5 text-fritzy-pink-dark flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-xs sm:text-sm text-gray-500">Height</p>
                      <p className="font-semibold text-sm sm:text-base">{profileData.height}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 sm:col-span-2">
                    <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-fritzy-pink-dark flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <p className="text-xs sm:text-sm text-gray-500">Hobbies</p>
                      <p className="font-semibold text-sm sm:text-base">{profileData.hobbies.join(', ')}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 sm:col-span-2">
                    <UserCheck className="w-4 h-4 sm:w-5 sm:h-5 text-fritzy-pink-dark flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <p className="text-xs sm:text-sm text-gray-500">Close Friends</p>
                      <p className="font-semibold text-sm sm:text-base">{profileData.friendship.join(', ')}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              <div className="text-center p-3 sm:p-4 fritzy-card rounded-2xl">
                <div className="text-xl sm:text-2xl font-bold text-fritzy-pink-dark">600K+</div>
                <div className="text-xs sm:text-sm text-gray-600">Followers</div>
              </div>
              <div className="text-center p-3 sm:p-4 fritzy-card rounded-2xl">
                <div className="text-xl sm:text-2xl font-bold text-fritzy-pink-dark">60+</div>
                <div className="text-xs sm:text-sm text-gray-600">Performances</div>
              </div>
              <div className="text-center p-3 sm:p-4 fritzy-card rounded-2xl col-span-2 sm:col-span-1">
                <div className="text-xl sm:text-2xl font-bold text-fritzy-pink-dark">1+</div>
                <div className="text-xs sm:text-sm text-gray-600">Years Active</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
