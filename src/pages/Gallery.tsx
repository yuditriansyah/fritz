import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import CleanCard from '@/components/CleanCard';
import CleanGrid from '@/components/CleanGrid';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'performance', label: 'Performance' },
    { id: 'lifestyle', label: 'Lifestyle' },
  ];

  const galleryImages = [
    {
      id: 1,
      src: 'https://image.idntimes.com/post/20250603/1000008825-e87e81eb9e9782f67c148903bdbd2991.jpg?tr=w-1920,f-webp,q-75&width=1920&format=webp&quality=75',
      category: 'performance',
      title: 'Go and Fight Music Video',
      date: '2025-05-22'
    },
    {
      id: 2,
      src: 'https://i.pinimg.com/736x/f1/4f/44/f14f4408f0de68c1b0c4b6eebb9150e4.jpg',
      category: 'performance',
      title: 'Go and Fight Music Video',
      date: '2025-05-22'
    },
    {
      id: 3,
      src: 'https://i.pinimg.com/736x/a8/77/12/a87712e277e5d4a0316594272d67a922.jpg',
      category: 'performance',
      title: 'Go and Fight Music Video',
      date: '2025-05-22'
    },
    {
      id: 4,
      src: 'https://i.pinimg.com/736x/e2/eb/2d/e2eb2ded16128474fa0e052b45104761.jpg',
      category: 'performance',
      title: 'Go and Fight Music Video',
      date: '2025-05-22'
    },
    {
      id: 5,
      src: 'https://nosqjejiadlbiznntsme.supabase.co/storage/v1/object/public/file//20250621_114636.jpg',
      category: 'performance',
      title: 'Stage Performance',
      date: '-'
    },
    {
      id: 6,
      src: 'https://nosqjejiadlbiznntsme.supabase.co/storage/v1/object/public/file//20250621_114631.jpg',
      category: 'performance',
      title: 'Stage Performance',
      date: '-'
    },
    {
      id: 7,
      src: 'https://nosqjejiadlbiznntsme.supabase.co/storage/v1/object/public/file//20250621_114752.jpg',
      category: 'performance',
      title: 'Stage Performance',
      date: '-'
    },
    {
      id: 8,
      src: 'https://nosqjejiadlbiznntsme.supabase.co/storage/v1/object/public/file//20250621_114804.jpg',
      category: 'performance',
      title: 'Stage Performance',
      date: '-'
    },
    {
      id: 9,
      src: 'https://nosqjejiadlbiznntsme.supabase.co/storage/v1/object/public/file//20250621_115403.jpg',
      category: 'performance',
      title: 'Stage Performance',
      date: '-'
    },
    {
      id: 10,
      src: 'https://nosqjejiadlbiznntsme.supabase.co/storage/v1/object/public/file//20250621_115230.jpg',
      category: 'performance',
      title: 'Stage Performance',
      date: '-'
    },
    {
      id: 11,
      src: 'https://nosqjejiadlbiznntsme.supabase.co/storage/v1/object/public/file//20250621_115420.jpg',
      category: 'performance',
      title: 'Stage Performance',
      date: '-'
    },
    {
      id: 12,
      src: 'https://nosqjejiadlbiznntsme.supabase.co/storage/v1/object/public/file//snaplytics.io_photo_1.jpg',
      category: 'lifestyle',
      title: '#Zymet',
      date: '-'
    },
    {
      id: 13,
      src: 'https://nosqjejiadlbiznntsme.supabase.co/storage/v1/object/public/file//snaplytics.io_photo_2.jpg',
      category: 'lifestyle',
      title: '#Zymet ',
      date: '-'
    },
    {
      id: 14,
      src: 'https://i.ibb.co/q3xjK91d/1936800942407700787-2-jpg.jpg',
      category: 'performance',
      title: 'Stage Performance',
      date: '-'
    },
    {
      id: 15,
      src: 'https://i.ibb.co/Fk8sBMDN/1936800942407700787-1-jpg.jpg',
      category: 'performance',
      title: 'Stage Performance',
      date: '-'
    },
    {
      id: 16,
      src: 'https://i.ibb.co/xKRY0T8C/1936372074542694810-0-jpg.jpg',
      category: 'performance',
      title: 'Stage Performance',
      date: '-'
    },
    {
      id: 17,
      src: 'https://i.ibb.co/ZR56XRdX/1936372074542694810-1-jpg.jpg',
      category: 'performance',
      title: 'Stage Performance',
      date: '-'
    },
    {
      id: 18,
      src: 'https://pbs.twimg.com/media/GtuOYa-aQAA_zWU?format=jpg&name=large',
      category: 'performance',
      title: 'Stage Performance',
      date: '-'
    },
    {
      id: 19,
      src: 'https://pbs.twimg.com/media/Gs1SM-Ja8AAiGct?format=jpg&name=large',
      category: 'lifestyle',
      title: 'Fritzy Rosmerian',
      date: '-'
    },
    {
      id: 20,
      src: 'https://pbs.twimg.com/media/Gsbjq2FbkAAYwLt?format=jpg&name=4096x4096',
      category: 'lifestyle',
      title: 'Fritzy Photography',
      date: '-'
    }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white pt-20 pb-12">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            #BetterWithFritzy
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our collection of beautiful moments captured with our beloved Fritzy
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              style={{ outline: 'none', boxShadow: 'none' }}
              className={`
                px-6 py-3 rounded-full font-medium text-sm transition-all duration-200 
                focus:outline-none focus:ring-0 focus:ring-offset-0 outline-none border-0 focus:border-0
                ${selectedCategory === category.id 
                  ? 'bg-gray-900 text-white shadow-md' 
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-gray-300 shadow-sm'
                }
              `}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Clean Gallery Grid - No Pink Backgrounds */}
        <CleanGrid 
          columns={{ default: 2, sm: 3, lg: 4 }}
          gap="md"
          className="mb-12"
        >
          {filteredImages.map((image) => (
            <Dialog key={image.id}>
              <DialogTrigger asChild>
                <CleanCard 
                  className="group cursor-pointer"
                  hover={true}
                >
                  {/* Image Container */}
                  <div className="aspect-[4/5] overflow-hidden bg-white">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=600&fit=crop&auto=format';
                      }}
                    />
                  </div>
                  
                  {/* Text Section */}
                  <div className="p-3 bg-white">
                    <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2">
                      {image.title}
                    </h3>
                    <div className="flex justify-between items-center text-xs">
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                        {categories.find(c => c.id === image.category)?.label || image.category}
                      </span>
                      <span className="text-gray-500">
                        {image.date}
                      </span>
                    </div>
                  </div>
                </CleanCard>
              </DialogTrigger>
              {/* Clean Modal Dialog */}
              <DialogContent className="max-w-4xl p-0 bg-white rounded-lg overflow-hidden border border-gray-200 shadow-lg">
                <div className="relative bg-white">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-auto max-h-[70vh] object-contain bg-white"
                  />
                </div>
                <div className="p-6 bg-white border-t border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {image.title}
                  </h3>
                  <div className="flex justify-between items-center">
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm font-medium">
                      {categories.find(c => c.id === image.category)?.label || image.category}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {image.date}
                    </span>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </CleanGrid>

        {/* Simple Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-lg font-medium transition-colors duration-200">
            Load More Photos
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
