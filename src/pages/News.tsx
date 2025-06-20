
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar, Search, Heart, Share } from 'lucide-react';

const News = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All News' },
    { id: 'announcements', label: 'Announcements' },
    { id: 'updates', label: 'Updates' },
    { id: 'media', label: 'Media Coverage' }
  ];

  const newsArticles = [
    {
      id: 1,
      title: 'Fritzy Announces New Album "Dreams Come True"',
      excerpt: 'Get ready for Fritzy\'s most personal album yet, featuring 12 new tracks that showcase her artistic growth and emotional depth.',
      category: 'announcements',
      date: '2024-06-18',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=250&fit=crop&auto=format',
      featured: true
    },
    {
      id: 2,
      title: 'Behind the Scenes: Recording Studio Sessions',
      excerpt: 'Take a peek into Fritzy\'s creative process as she works on her upcoming tracks with top producers.',
      category: 'updates',
      date: '2024-06-15',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop&auto=format',
      featured: false
    },
    {
      id: 3,
      title: 'Fritzy Featured in Vogue Magazine',
      excerpt: 'Our beloved idol graces the cover of Vogue\'s special music issue, discussing fashion, artistry, and her journey.',
      category: 'media',
      date: '2024-06-12',
      image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=250&fit=crop&auto=format',
      featured: false
    },
    {
      id: 4,
      title: 'Summer Concert Tour Dates Revealed',
      excerpt: 'Fritzy will be touring 15 cities this summer! Check out the full schedule and ticket information.',
      category: 'announcements',
      date: '2024-06-10',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=250&fit=crop&auto=format',
      featured: true
    },
    {
      id: 5,
      title: 'Fan Art Contest Winners Announced',
      excerpt: 'Congratulations to all the talented artists who participated in our monthly fan art contest!',
      category: 'updates',
      date: '2024-06-08',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=250&fit=crop&auto=format',
      featured: false
    },
    {
      id: 6,
      title: 'Charity Event: Music for a Cause',
      excerpt: 'Fritzy partners with local charities for a special benefit concert supporting education initiatives.',
      category: 'announcements',
      date: '2024-06-05',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop&auto=format',
      featured: false
    }
  ];

  const filteredNews = newsArticles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredNews = filteredNews.filter(article => article.featured);
  const regularNews = filteredNews.filter(article => !article.featured);

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 mb-4">
            Latest News
          </h1>
          <p className="text-xl text-gray-600 font-nunito max-w-2xl mx-auto">
            Stay updated with the latest news, announcements, and updates from Fritzy's world.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search news articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 border-fritzy-pink/30 focus:border-fritzy-pink-dark"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
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
        </div>

        {/* Featured News */}
        {featuredNews.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-poppins font-bold text-gray-800 mb-6">Featured News</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredNews.map((article) => (
                <Card key={article.id} className="fritzy-card group overflow-hidden">
                  <div className="relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-fritzy-pink text-gray-800">
                      Featured
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="outline" className="border-fritzy-purple text-fritzy-purple-dark">
                        {categories.find(c => c.id === article.category)?.label}
                      </Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        {article.date}
                      </div>
                    </div>
                    <h3 className="text-xl font-poppins font-bold text-gray-800 mb-3 group-hover:text-fritzy-pink-dark transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 font-nunito mb-4 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <Button variant="outline" size="sm" className="border-fritzy-pink-dark text-fritzy-pink-dark hover:bg-fritzy-pink/10">
                        Read More
                      </Button>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                          <Heart className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Share className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Regular News */}
        <div>
          <h2 className="text-2xl font-poppins font-bold text-gray-800 mb-6">Recent Updates</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularNews.map((article) => (
              <Card key={article.id} className="fritzy-card group overflow-hidden">
                <div className="relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className="border-fritzy-purple text-fritzy-purple-dark text-xs">
                      {categories.find(c => c.id === article.category)?.label}
                    </Badge>
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar className="w-3 h-3 mr-1" />
                      {article.date}
                    </div>
                  </div>
                  <h3 className="text-lg font-poppins font-bold text-gray-800 mb-2 group-hover:text-fritzy-pink-dark transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 font-nunito text-sm mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <Button variant="outline" size="sm" className="border-fritzy-pink-dark text-fritzy-pink-dark hover:bg-fritzy-pink/10 text-xs">
                      Read More
                    </Button>
                    <div className="flex items-center gap-1">
                      <Button variant="ghost" size="sm">
                        <Heart className="w-3 h-3" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Share className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 text-center">
          <Card className="fritzy-card max-w-lg mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-poppins font-bold text-gray-800 mb-4">
                Stay in the Loop!
              </h3>
              <p className="text-gray-600 font-nunito mb-6">
                Subscribe to our newsletter to get the latest news directly in your inbox.
              </p>
              <div className="flex gap-3">
                <Input 
                  placeholder="Enter your email..."
                  className="border-fritzy-pink/30 focus:border-fritzy-pink-dark"
                />
                <Button className="fritzy-button">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default News;
