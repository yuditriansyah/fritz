import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, Instagram, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'About Fritzy Rosmerian';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8, type: 'spring' as const, stiffness: 60 },
    }),
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.6, type: 'spring' as const, stiffness: 100 }
    },
  };

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={0}
        >
          <h1 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 mb-4">
            {displayText}
            <span className="animate-pulse">|</span>
          </h1>
          <motion.p 
            className="text-xl text-gray-600 font-nunito max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
            custom={1}
          >
            Abracadabra! Si pesulap yang siap membuat hatimu terpikat. Halo semuanya, it's me, Fritzy. 
          </motion.p>
        </motion.div>

        {/* Background Section */}
        <motion.div 
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
        >
          <Card className="fritzy-card">
            <CardHeader>
              <CardTitle className="text-2xl font-poppins text-gray-800 flex items-center gap-3">
                <Heart className="w-6 h-6 text-fritzy-pink-dark" />
                Latar Belakang
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="prose prose-gray max-w-none">
                <motion.p 
                  className="text-gray-700 font-nunito leading-relaxed mb-4"
                  variants={fadeInUp}
                  custom={0}
                >
                  Sejak kecil Fritzy aktif di dunia hiburan. Ia mulai menekuni modeling pada usia 4 tahun dan menjadi 
                  <strong className="text-fritzy-pink-dark"> Best Talent Putri Cilik Indonesia</strong>.
                </motion.p>
                
                <motion.p 
                  className="text-gray-700 font-nunito leading-relaxed mb-4"
                  variants={fadeInUp}
                  custom={1}
                >
                  Sejak usia 7–8 tahun Fritzy serius menekuni sulap hingga dikenal sebagai pesulap muda. 
                  Ia sering tampil di acara TV, misalnya:
                </motion.p>
                
                <motion.div 
                  className="grid md:grid-cols-2 gap-4 mb-4"
                  variants={fadeInUp}
                  custom={2}
                >
                  <div className="bg-gradient-to-r from-fritzy-pink/10 to-rose-50 p-4 rounded-lg border border-fritzy-pink/20">
                    <h4 className="font-semibold text-fritzy-pink-dark mb-2">Acara TV</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Little Big Shots Indonesia (GTV 2019)</li>
                      <li>• Hitam Putih (Trans7 2019)</li>
                      <li>• Indonesia's Got Talent - Finalis Top 5 (RCTI 2022)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-50 to-fritzy-pink/10 p-4 rounded-lg border border-purple-200">
                    <h4 className="font-semibold text-fritzy-pink-dark mb-2">Prestasi Lainnya</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Juara kompetisi dance cover K-pop (2022)</li>
                      <li>• Best Talent Putri Cilik Indonesia</li>
                      <li>• Pesulap muda terkenal</li>
                    </ul>
                  </div>
                </motion.div>
                
                <motion.p 
                  className="text-gray-700 font-nunito leading-relaxed"
                  variants={fadeInUp}
                  custom={3}
                >
                  Fritzy juga aktif menari; contohnya ia pernah menjuarai kompetisi dance cover K-pop tahun 2022. 
                  Dengan berbagai talenta yang dimilikinya, Fritzy kini menjadi member JKT48 yang siap memukau fans 
                  dengan kemampuan sulap, menari, dan pesonanya yang unik.
                </motion.p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Prestasi dan Fakta Menarik Section */}
        <motion.div 
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
        >
          <Card className="fritzy-card">
            <CardHeader>
              <CardTitle className="text-2xl font-poppins text-gray-800 flex items-center gap-3">
                <Heart className="w-6 h-6 text-fritzy-pink-dark" />
                Prestasi dan Fakta Menarik
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Prestasi Sulap */}
                <div className="bg-gradient-to-r from-fritzy-pink/10 to-rose-50 p-5 rounded-lg border border-fritzy-pink/20">
                  <h4 className="font-semibold text-fritzy-pink-dark mb-3 flex items-center gap-2">
                    🎩 Pesulap Cilik Berprestasi
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• <strong>Juara 1</strong> Online Magic Competition Surya Pharmacon 2022</li>
                    <li>• <strong>Juara 1</strong> FESTA Magic Competition 2022</li>
                    <li>• <strong>Juara 5</strong> Indonesia's Got Talent</li>
                    <li>• <strong>Agustus 2024:</strong> Diundang tampil di America's Got Talent: Fantasy League 2024 sebagai kontestan dari Indonesia</li>
                  </ul>
                </div>

                {/* Model Cilik */}
                <div className="bg-gradient-to-r from-purple-50 to-fritzy-pink/10 p-5 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-fritzy-pink-dark mb-3 flex items-center gap-2">
                    👑 Model Cilik
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• <strong>Best Talent Putri Cilik Indonesia</strong> (2018)</li>
                    <li>• Tampil di banyak fashion show anak</li>
                    <li>• Aktif modeling sejak usia 4 tahun</li>
                  </ul>
                </div>

                {/* JKT48 Achievement */}
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-5 rounded-lg border border-yellow-200">
                  <h4 className="font-semibold text-fritzy-pink-dark mb-3 flex items-center gap-2">
                    ⭐ Center Generasi 12
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Dijuluki <strong>original ace Gen 12 JKT48</strong></li>
                    <li>• Sering mendapat posisi center dalam pertunjukan</li>
                    <li>• Member yang menonjol di generasi 12</li>
                  </ul>
                </div>

                {/* Hobi dan Karakter */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-5 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-fritzy-pink-dark mb-3 flex items-center gap-2">
                    🎨 Hobi dan Karakter
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• <strong>Hobi utama:</strong> Sulap, menari, dan desain</li>
                    <li>• <strong>Suka :</strong> Matcha (Yang dulunya tidak suka :v)</li>
                    <li>• Sering berbagi konten kreatif di media sosial</li>
                    <li>• Terkenal dengan "gombalan" lucu di sosmed</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Hashtags Section */}
        <motion.div 
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
        >
          {/* Popular Hashtags */}
          <Card className="fritzy-card">
            <CardHeader>
              <CardTitle className="text-2xl font-poppins text-gray-800 flex items-center gap-3">
                <Twitter className="w-6 h-6 text-fritzy-pink-dark" />
                Popular Hashtags
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600 font-nunito mb-4">
                Gunakan hashtag ini untuk terhubung dengan Fritzy di media sosial:
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="bg-fritzy-pink/10 border-fritzy-pink text-fritzy-pink-dark px-3 py-1 text-sm">
                  Every-Morning: #MornZy
                </Badge>
                <Badge variant="outline" className="bg-fritzy-pink/10 border-fritzy-pink text-fritzy-pink-dark px-3 py-1 text-sm">
                  Before-Bed: #SweetZyDream and #Zleep
                </Badge>
                <Badge variant="outline" className="bg-fritzy-pink/10 border-fritzy-pink text-fritzy-pink-dark px-3 py-1 text-sm">
                  Encouragement: #betterwithfritzy
                </Badge>
                <Badge variant="outline" className="bg-fritzy-pink/10 border-fritzy-pink text-fritzy-pink-dark px-3 py-1 text-sm">
                  School scout uniform: #PramukaZy
                </Badge>
                <Badge variant="outline" className="bg-fritzy-pink/10 border-fritzy-pink text-fritzy-pink-dark px-3 py-1 text-sm">
                  Every-Friday: #FritzDay
                </Badge>
                <Badge variant="outline" className="bg-fritzy-pink/10 border-fritzy-pink text-fritzy-pink-dark px-3 py-1 text-sm">
                  Swag or Helmet: #Zymet
                </Badge>
                <Badge variant="outline" className="bg-fritzy-pink/10 border-fritzy-pink text-fritzy-pink-dark px-3 py-1 text-sm">
                  During Ramadan:
                  Every-Sahur: #Zyahur
                  Before-Iftar: #ZyapBerbuka
                </Badge>
                <Badge variant="outline" className="bg-fritzy-pink/10 border-fritzy-pink text-fritzy-pink-dark px-3 py-1 text-sm">
                  Mathematics: #frikzymt
                </Badge>
                <Badge variant="outline" className="bg-fritzy-pink/10 border-fritzy-pink text-fritzy-pink-dark px-3 py-1 text-sm">
                  JKT48 Private Message: #BaleZyin
                </Badge>
                <Badge variant="outline" className="bg-fritzy-pink/10 border-fritzy-pink text-fritzy-pink-dark px-3 py-1 text-sm">
                  Video Call: #FritzCall
                </Badge>
                <Badge variant="outline" className="bg-fritzy-pink/10 border-fritzy-pink text-fritzy-pink-dark px-3 py-1 text-sm">
                  Vacations: #Zyburan        
                </Badge>
                <Badge variant="outline" className="bg-fritzy-pink/10 border-fritzy-pink text-fritzy-pink-dark px-3 py-1 text-sm">
                  DIY Magic: #DSWFRITZY (DIY Sulap With Fritzy / DIY Magic with Fritzy) 
                </Badge>
              </div>
              <div className="mt-4 p-3 bg-pink-50 rounded-lg">
                <p className="text-sm text-gray-600 font-nunito">
                  💡 <strong>Tips:</strong> Gunakan hashtag ini saat posting tentang Fritzy untuk meningkatkan visibility dan terhubung dengan fans lainnya!
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Official Social Media */}
        <motion.div 
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
        >
          <Card className="fritzy-card">
            <CardHeader>
              <CardTitle className="text-2xl font-poppins text-gray-800 flex items-center gap-3">
                Official Social Media
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-600 font-nunito">
                Ikuti akun resmi Fritzy untuk update terbaru:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg border border-pink-100">
                  <Instagram className="w-8 h-8 text-pink-600" />
                  <div>
                    <h4 className="font-semibold text-gray-800">@jkt48.fritzy</h4>
                    <p className="text-sm text-gray-600">Instagram personal Fritzy</p>
                    <Button 
                      size="sm" 
                      className="mt-2 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white"
                      onClick={() => window.open('https://www.instagram.com/jkt48.fritzy', '_blank')}
                    >
                      Follow
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
                  <Twitter className="w-8 h-8 text-blue-600" />
                  <div>
                    <h4 className="font-semibold text-gray-800">@RFritzy_JKT48</h4>
                    <p className="text-sm text-gray-600">Twitter resmi Fritzy</p>
                    <Button 
                      size="sm" 
                      className="mt-2 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white"
                      onClick={() => window.open('https://twitter.com/RFritzy_JKT48', '_blank')}
                    >
                      Follow
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-red-50 to-pink-50 rounded-lg border border-red-100">
                  <img 
                    src="https://d3g5ywftkpzr0e.cloudfront.net/wp-content/uploads/2019/04/23153500/IDN-logo.png" 
                    alt="IDN Logo" 
                    className="w-8 h-8 object-contain"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">Fritzy JKT48</h4>
                    <p className="text-sm text-gray-600">IDN Live</p>
                    <Button 
                      size="sm" 
                      className="mt-2 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white"
                      onClick={() => window.open('https://app.idn.media/6X95JUDQAkoBPCpx9', '_blank')}
                    >
                      Visit
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-100">
                  <img 
                    src="https://i.ibb.co/m5rtfnfZ/icon.png" 
                    alt="SHOWROOM Logo" 
                    className="w-8 h-8 object-contain"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">SHOWROOM</h4>
                    <p className="text-sm text-gray-600">Live streaming platform</p>
                    <Button 
                      size="sm" 
                      className="mt-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                      onClick={() => window.open('https://www.showroom-live.com/room/profile?room_id=510011', '_blank')}
                    >
                      Watch Live
                    </Button>
                  </div>
                </div>
              </div>              
            </CardContent>
          </Card>
        </motion.div>

        {/* Source/Reference Section */}
        <motion.div 
          className="mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
        >
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-lg border border-gray-200">
            <p className="text-xs text-gray-500 font-nunito text-center">
              <strong>Sumber:</strong> Informasi disusun dari profil resmi dan wawancara media (JKT48 Fandom, KapanLagi, IDN Times) tentang Fritzy Rosmerian
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
