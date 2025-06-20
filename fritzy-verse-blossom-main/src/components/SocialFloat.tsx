
import React from 'react';
import { Instagram, Twitter, Youtube, Heart } from 'lucide-react';

const SocialFloat = () => {
  const socialLinks = [
    {
      icon: Instagram,
      href: 'https://instagram.com/fritzyforce',
      label: 'Instagram',
      color: 'hover:bg-pink-500'
    },
    {
      icon: Twitter,
      href: 'https://twitter.com/FritzyForce',
      label: 'Twitter',
      color: 'hover:bg-blue-500'
    },
    {
      icon: Youtube,
      href: 'https://youtube.com/@fritzyforce',
      label: 'YouTube',
      color: 'hover:bg-red-500'
    },
    {
      icon: Heart,
      href: '#newsletter',
      label: 'Newsletter',
      color: 'hover:bg-fritzy-pink-dark'
    }
  ];

  return (
    <div className="social-float">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.href}
          target={social.href.startsWith('http') ? '_blank' : '_self'}
          rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
          className={`group flex items-center justify-center w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg ${social.color} hover:text-white transition-all duration-300 transform hover:scale-110`}
          aria-label={social.label}
        >
          <social.icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
};

export default SocialFloat;
