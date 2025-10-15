import React from 'react';
import { PhoneIcon, MailIcon, InstagramIcon, TelegramIcon, FacebookIcon } from './icons';

const profileImageUrl = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAEAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAfEAABBAICAwEAAAAAAAAAAAABAgMEBQARBiExQRT/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AnLicopbMyzgsy3mY6lJccbbKkoIHQJA7JHvGfK3mK6xblOuWNRBehvLKlNtIKUkn3wBnJSlLVLdSkJSSogAcAZ4AAD//Z';

const DeveloperCredit: React.FC = () => {
  return (
    <a 
      href="https://github.com/vikash"
      target="_blank" 
      rel="noopener noreferrer"
      className="group inline-flex items-center p-1 bg-white/10 dark:bg-gray-900/20 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
    >
      <img 
        src={profileImageUrl}
        alt="Developer: Vikash"
        className="w-8 h-8 rounded-full border-2 border-primary-light dark:border-primary object-cover transition-transform duration-300 group-hover:scale-110" 
      />
      <div className="overflow-hidden transition-all duration-500 ease-in-out max-w-0 group-hover:max-w-xs">
        <span className="pl-2 pr-3 text-xs font-medium text-gray-800 dark:text-gray-200 whitespace-nowrap">
          Developed by Vikash
        </span>
      </div>
    </a>
  );
};

const Footer: React.FC = () => {
  const socialLinks = [
    { href: "https://www.instagram.com/official_vikash_gurjar_/", Icon: InstagramIcon, label: "Instagram" },
    { href: "https://t.me/Vikashgujjar6378", Icon: TelegramIcon, label: "Telegram" },
    { href: "https://www.facebook.com/share/17N63bnLmC/?mibextid=wwXIfr", Icon: FacebookIcon, label: "Facebook" },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-800 dark:text-white">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center justify-center md:justify-start">
                <PhoneIcon className="h-5 w-5 mr-3 text-primary" />
                <a href="tel:+916378565324" className="hover:text-primary-light">+91 63785 65324</a>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <MailIcon className="h-5 w-5 mr-3 text-primary" />
                <a href="mailto:vikashgurjar77777@gmail.com" className="hover:text-primary-light break-all">vikashgurjar77777@gmail.com</a>
              </li>
            </ul>
          </div>
          
          {/* Social Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-800 dark:text-white">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map(({ href, Icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="text-gray-500 hover:text-primary transition-colors">
                  <Icon className="h-7 w-7" />
                </a>
              ))}
            </div>
          </div>
          
          {/* About */}
          <div>
             <h3 className="font-bold text-lg mb-4 text-gray-800 dark:text-white">About PDF Power Tools</h3>
             <p className="text-sm">A project demonstrating a powerful and easy-to-use suite of PDF tools, built with React, Tailwind CSS, and love.</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} PDF Power Tools. All rights reserved.
          </p>
          <DeveloperCredit />
        </div>
      </div>
    </footer>
  );
};

export default Footer;