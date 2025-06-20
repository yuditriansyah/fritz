
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Users, Heart, Mail, Phone, MapPin, Instagram, Twitter } from 'lucide-react';

const About = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    instagram: '',
    twitter: '',
    reason: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const communityStats = [
    { icon: Users, label: 'Active Members', value: '50,000+' },
    { icon: Heart, label: 'Countries', value: '25+' },
    { icon: Instagram, label: 'Social Followers', value: '500K+' }
  ];

  const guidelines = [
    'Be respectful to all community members',
    'No hate speech or discriminatory language',
    'Keep discussions related to Fritzy and positive topics',
    'Share original content and give credit when reposting',
    'Help newcomers feel welcome in our community',
    'Report any inappropriate behavior to moderators'
  ];

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 mb-4">
            About Fritzy Force
          </h1>
          <p className="text-xl text-gray-600 font-nunito max-w-3xl mx-auto leading-relaxed">
            We are a passionate global community of fans united by our love and support for Fritzy Rosmerian. 
            Join us in celebrating her artistry, achievements, and the joy she brings to our lives.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {communityStats.map((stat, index) => (
            <Card key={index} className="fritzy-card text-center">
              <CardContent className="p-8">
                <stat.icon className="w-12 h-12 text-fritzy-pink-dark mx-auto mb-4" />
                <div className="text-3xl font-poppins font-bold text-gray-800 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-nunito">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Community Information */}
          <div className="space-y-8">
            <Card className="fritzy-card">
              <CardHeader>
                <CardTitle className="text-2xl font-poppins text-gray-800 flex items-center gap-3">
                  <Heart className="w-6 h-6 text-fritzy-pink-dark" />
                  Our Story
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-nunito text-gray-700 leading-relaxed">
                <p>
                  Fritzy Force was founded in 2020 by a group of dedicated fans who wanted to create 
                  a supportive and positive space for fellow admirers of Fritzy Rosmerian. What started 
                  as a small online community has grown into a global family of over 50,000 members.
                </p>
                <p>
                  Our mission is to support Fritzy in all her endeavors while fostering a welcoming 
                  environment where fans can connect, share their creativity, and celebrate the joy 
                  that Fritzy brings to our lives.
                </p>
                <p>
                  From organizing fan projects to supporting charitable causes that align with Fritzy's 
                  values, we strive to make a positive impact both within our community and beyond.
                </p>
              </CardContent>
            </Card>

            {/* Community Guidelines */}
            <Card className="fritzy-card">
              <CardHeader>
                <CardTitle className="text-2xl font-poppins text-gray-800 flex items-center gap-3">
                  <Users className="w-6 h-6 text-fritzy-pink-dark" />
                  Community Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {guidelines.map((guideline, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Badge className="bg-fritzy-pink text-gray-800 text-xs">
                        {index + 1}
                      </Badge>
                      <p className="text-gray-700 font-nunito">
                        {guideline}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="fritzy-card">
              <CardHeader>
                <CardTitle className="text-2xl font-poppins text-gray-800 flex items-center gap-3">
                  <Mail className="w-6 h-6 text-fritzy-pink-dark" />
                  Contact Us
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 text-gray-700">
                  <Mail className="w-5 h-5 text-fritzy-pink-dark" />
                  <span className="font-nunito">admin@fritzyforce.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Instagram className="w-5 h-5 text-fritzy-pink-dark" />
                  <span className="font-nunito">@fritzyforce</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Twitter className="w-5 h-5 text-fritzy-pink-dark" />
                  <span className="font-nunito">@FritzyForce</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Join Form */}
          <div>
            <Card className="fritzy-card">
              <CardHeader>
                <CardTitle className="text-2xl font-poppins text-gray-800 text-center">
                  Join Our Community
                </CardTitle>
                <p className="text-gray-600 font-nunito text-center">
                  Become part of the Fritzy Force family and connect with fellow fans worldwide!
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="border-fritzy-pink/30 focus:border-fritzy-pink-dark"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      className="border-fritzy-pink/30 focus:border-fritzy-pink-dark"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Instagram Handle
                      </label>
                      <Input
                        name="instagram"
                        value={formData.instagram}
                        onChange={handleInputChange}
                        placeholder="@yourusername"
                        className="border-fritzy-pink/30 focus:border-fritzy-pink-dark"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Twitter Handle
                      </label>
                      <Input
                        name="twitter"
                        value={formData.twitter}
                        onChange={handleInputChange}
                        placeholder="@yourusername"
                        className="border-fritzy-pink/30 focus:border-fritzy-pink-dark"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Why do you want to join? *
                    </label>
                    <Textarea
                      name="reason"
                      value={formData.reason}
                      onChange={handleInputChange}
                      placeholder="Tell us why you'd like to be part of our community..."
                      className="border-fritzy-pink/30 focus:border-fritzy-pink-dark min-h-[100px]"
                      required
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="guidelines"
                        className="mt-1"
                        required
                      />
                      <label htmlFor="guidelines" className="text-sm text-gray-700 font-nunito">
                        I agree to follow the community guidelines and maintain a respectful, 
                        positive environment for all members.
                      </label>
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="newsletter"
                        className="mt-1"
                      />
                      <label htmlFor="newsletter" className="text-sm text-gray-700 font-nunito">
                        I would like to receive updates about Fritzy and community events 
                        via email.
                      </label>
                    </div>
                  </div>

                  <Button type="submit" className="w-full fritzy-button">
                    Join Fritzy Force
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
