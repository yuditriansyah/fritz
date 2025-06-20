
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle }from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, Video, Theater } from 'lucide-react';

const Schedule = () => {
  const [selectedType, setSelectedType] = useState('all');

  const scheduleTypes = [
    { id: 'all', label: 'All Events' },
    { id: 'theater', label: 'Theater Shows' },
    { id: 'video-call', label: 'Video Calls' }
  ];

  const scheduleData = [
    {
      id: 1,
      type: 'theater',
      title: 'Fritzy Live Concert',
      date: '2024-07-15',
      time: '19:00',
      venue: 'Tokyo Dome',
      description: 'Special summer concert featuring new songs and fan favorites',
      status: 'upcoming',
      ticketsAvailable: true
    },
    {
      id: 2,
      type: 'video-call',
      title: 'Fan Video Call Event',
      date: '2024-07-08',
      time: '15:00',
      venue: 'Online',
      description: 'Exclusive 1-on-1 video call sessions with Fritzy',
      status: 'upcoming',
      ticketsAvailable: true
    },
    {
      id: 3,
      type: 'theater',
      title: 'Birthday Special Show',
      date: '2024-06-25',
      time: '18:30',
      venue: 'Shibuya Theater',
      description: 'Intimate birthday celebration with special guests',
      status: 'completed',
      ticketsAvailable: false
    },
    {
      id: 4,
      type: 'video-call',
      title: 'Monthly Check-in',
      date: '2024-07-20',
      time: '20:00',
      venue: 'Online',
      description: 'Monthly video call to chat with fans about recent activities',
      status: 'upcoming',
      ticketsAvailable: true
    },
    {
      id: 5,
      type: 'theater',
      title: 'Autumn Festival',
      date: '2024-08-10',
      time: '17:00',
      venue: 'Osaka Arena',
      description: 'Grand autumn festival with special collaborations',
      status: 'upcoming',
      ticketsAvailable: false
    }
  ];

  const filteredSchedule = selectedType === 'all' 
    ? scheduleData 
    : scheduleData.filter(event => event.type === selectedType);

  const getEventIcon = (type: string) => {
    return type === 'theater' ? Theater : Video;
  };

  const getEventBg = (type: string) => {
    return type === 'theater' 
      ? 'bg-gradient-to-br from-fritzy-pink to-fritzy-pink-dark' 
      : 'bg-gradient-to-br from-fritzy-purple to-fritzy-purple-dark';
  };

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 mb-4">
            Fritzy's Schedule
          </h1>
          <p className="text-xl text-gray-600 font-nunito max-w-2xl mx-auto">
            Don't miss any upcoming events! Check out Fritzy's theater shows and video call sessions.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {scheduleTypes.map((type) => (
            <Button
              key={type.id}
              onClick={() => setSelectedType(type.id)}
              variant={selectedType === type.id ? "default" : "outline"}
              className={`
                ${selectedType === type.id 
                  ? 'fritzy-button' 
                  : 'border-fritzy-pink-dark text-fritzy-pink-dark hover:bg-fritzy-pink/10'
                }
              `}
            >
              {type.label}
            </Button>
          ))}
        </div>

        {/* Schedule Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredSchedule.map((event) => {
            const EventIcon = getEventIcon(event.type);
            return (
              <Card key={event.id} className="fritzy-card group hover:transform hover:scale-105 transition-all duration-300">
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
                  <CardTitle className="text-xl font-poppins">
                    {event.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Calendar className="w-5 h-5 text-fritzy-pink-dark" />
                    <span className="font-nunito">{event.date}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Clock className="w-5 h-5 text-fritzy-pink-dark" />
                    <span className="font-nunito">{event.time}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3 text-gray-600">
                    <MapPin className="w-5 h-5 text-fritzy-pink-dark" />
                    <span className="font-nunito">{event.venue}</span>
                  </div>
                  
                  <p className="text-gray-700 font-nunito text-sm leading-relaxed">
                    {event.description}
                  </p>
                  
                  <div className="pt-4 border-t border-gray-100">
                    {event.ticketsAvailable && event.status === 'upcoming' ? (
                      <Button className="w-full fritzy-button">
                        Get Tickets
                      </Button>
                    ) : event.status === 'upcoming' ? (
                      <Button variant="outline" className="w-full" disabled>
                        Sold Out
                      </Button>
                    ) : (
                      <Button variant="outline" className="w-full" disabled>
                        Event Completed
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 text-center">
          <Card className="fritzy-card max-w-md mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-poppins font-bold text-gray-800 mb-4">
                Never Miss an Event!
              </h3>
              <p className="text-gray-600 font-nunito mb-6">
                Subscribe to get notified about new events and ticket sales.
              </p>
              <Button className="fritzy-button w-full">
                Subscribe to Updates
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
