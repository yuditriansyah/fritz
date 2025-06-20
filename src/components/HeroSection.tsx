
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Calendar, Users, MapPin } from 'lucide-react';

const HeroSection = () => {
  const profileData = {
    fullName: 'Fritzy Rosmerian',
    stageName: 'Fritzy',
    dateOfBirth: 'March 15, 1998',
    group: 'Solo Artist',
    height: '165 cm',
    hobbies: ['Dancing', 'Reading', 'Photography', 'Cooking']
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-fritzy-pink/30 via-white to-fritzy-purple/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFB6C1' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Image */}
          <div className="relative animate-fade-in">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=800&fit=crop&crop=face&auto=format"
                alt="Fritzy Rosmerian"
                className="w-full h-[600px] object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-fritzy-pink/20 to-transparent rounded-3xl"></div>
              
              {/* Floating Hearts Animation */}
              <div className="absolute -top-4 -right-4">
                <Heart className="w-8 h-8 text-fritzy-pink-dark fill-current animate-pulse" />
              </div>
              <div className="absolute top-10 -left-6">
                <Heart className="w-6 h-6 text-fritzy-purple-dark fill-current animate-pulse delay-1000" />
              </div>
            </div>
          </div>

          {/* Profile Card */}
          <div className="space-y-8 animate-fade-in">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl font-poppins font-bold text-gray-800 mb-4">
                Welcome to
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-fritzy-pink-dark to-fritzy-purple-dark">
                  Fritzy's World
                </span>
              </h1>
              <p className="text-xl text-gray-600 font-nunito">
                Your ultimate destination for everything Fritzy Rosmerian
              </p>
            </div>

            {/* Profile Card */}
            <Card className="fritzy-card">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h2 className="text-3xl font-poppins font-bold text-gray-800 mb-2">
                    {profileData.fullName}
                  </h2>
                  <p className="text-fritzy-pink-dark font-semibold text-lg">
                    Stage Name: {profileData.stageName}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-fritzy-pink-dark" />
                    <div>
                      <p className="text-sm text-gray-500">Birth Date</p>
                      <p className="font-semibold">{profileData.dateOfBirth}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-fritzy-pink-dark" />
                    <div>
                      <p className="text-sm text-gray-500">Group</p>
                      <p className="font-semibold">{profileData.group}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-fritzy-pink-dark" />
                    <div>
                      <p className="text-sm text-gray-500">Height</p>
                      <p className="font-semibold">{profileData.height}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Heart className="w-5 h-5 text-fritzy-pink-dark" />
                    <div>
                      <p className="text-sm text-gray-500">Hobbies</p>
                      <p className="font-semibold text-sm">{profileData.hobbies.join(', ')}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button className="fritzy-button flex-1">
                    View Gallery
                  </Button>
                  <Button variant="outline" className="flex-1 border-fritzy-pink-dark text-fritzy-pink-dark hover:bg-fritzy-pink/10">
                    Latest News
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 fritzy-card rounded-2xl">
                <div className="text-2xl font-bold text-fritzy-pink-dark">500K+</div>
                <div className="text-sm text-gray-600">Followers</div>
              </div>
              <div className="text-center p-4 fritzy-card rounded-2xl">
                <div className="text-2xl font-bold text-fritzy-pink-dark">25+</div>
                <div className="text-sm text-gray-600">Performances</div>
              </div>
              <div className="text-center p-4 fritzy-card rounded-2xl">
                <div className="text-2xl font-bold text-fritzy-pink-dark">12</div>
                <div className="text-sm text-gray-600">Albums</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
