
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'performance', label: 'Performance' },
    { id: 'behind-scenes', label: 'Behind the Scenes' },
    { id: 'fan-meetings', label: 'Fan Meetings' }
  ];

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=600&fit=crop&auto=format',
      category: 'performance',
      title: 'Concert Performance',
      date: '2024-01-15'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=500&fit=crop&auto=format',
      category: 'behind-scenes',
      title: 'Studio Recording',
      date: '2024-01-10'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=650&fit=crop&auto=format',
      category: 'fan-meetings',
      title: 'Fan Meet & Greet',
      date: '2024-01-05'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=550&fit=crop&auto=format',
      category: 'behind-scenes',
      title: 'Photoshoot',
      date: '2023-12-20'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=700&fit=crop&auto=format',
      category: 'performance',
      title: 'Live Performance',
      date: '2023-12-15'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=450&fit=crop&auto=format',
      category: 'fan-meetings',
      title: 'Special Event',
      date: '2023-12-10'
    }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 mb-4">
            #BetterWithFritzy
          </h1>
          <p className="text-xl text-gray-600 font-nunito max-w-2xl mx-auto">
            Explore our collection of beautiful moments captured with our beloved Fritzy
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              variant={selectedCategory === category.id ? "default" : "outline"}
              className={`
                ${selectedCategory === category.id 
                  ? 'fritzy-button' 
                  : 'border-fritzy-pink-dark text-fritzy-pink-dark hover:bg-fritzy-pink/10'
                }
              `}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="masonry-grid">
          {filteredImages.map((image) => (
            <Dialog key={image.id}>
              <DialogTrigger asChild>
                <Card className="masonry-item fritzy-card cursor-pointer group overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-white font-semibold text-lg mb-1">
                            {image.title}
                          </h3>
                          <div className="flex justify-between items-center">
                            <Badge variant="secondary" className="bg-fritzy-pink text-gray-800">
                              {categories.find(c => c.id === image.category)?.label}
                            </Badge>
                            <span className="text-white text-sm">
                              {image.date}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-4xl p-0 border-none">
                <div className="relative">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-auto max-h-[80vh] object-contain"
                  />
                  <div className="p-6 bg-white">
                    <h3 className="text-2xl font-poppins font-bold text-gray-800 mb-2">
                      {image.title}
                    </h3>
                    <div className="flex justify-between items-center">
                      <Badge className="bg-fritzy-pink text-gray-800">
                        {categories.find(c => c.id === image.category)?.label}
                      </Badge>
                      <span className="text-gray-600">
                        {image.date}
                      </span>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button className="fritzy-button">
            Load More Photos
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
