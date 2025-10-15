import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import { SunIcon, MoonIcon, LogoIcon, HamburgerIcon, XIcon } from './icons';

const NavLinks: React.FC<{ className?: string, onLinkClick?: () => void }> = ({ className, onLinkClick }) => (
  <>
    <NavLink to="/" onClick={onLinkClick} className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-primary dark:text-primary-light' : 'hover:text-primary dark:hover:text-primary-light'}`}>Home</NavLink>
    <a href="#" onClick={onLinkClick} className="px-3 py-2 rounded-md text-sm font-medium hover:text-primary dark:hover:text-primary-light">About Us</a>
    <a href="#" onClick={onLinkClick} className="px-3 py-2 rounded-md text-sm font-medium hover:text-primary dark:hover:text-primary-light">Contact</a>
    <NavLink to="/merge-pdf" onClick={onLinkClick} className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-primary dark:text-primary-light' : 'hover:text-primary dark:hover:text-primary-light'}`}>Merge PDF</NavLink>
    <NavLink to="/split-pdf" onClick={onLinkClick} className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-primary dark:text-primary-light' : 'hover:text-primary dark:hover:text-primary-light'}`}>Split PDF</NavLink>
    <NavLink to="/resize-jpg" onClick={onLinkClick} className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-primary dark:text-primary-light' : 'hover:text-primary dark:hover:text-primary-light'}`}>Resize JPG</NavLink>
  </>
);


const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  }

  return (
    <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" onClick={handleLinkClick} className="flex items-center gap-3 text-2xl font-bold text-primary dark:text-primary-light">
            <LogoIcon className="h-8 w-8" />
            <span className="hidden sm:inline">PDF Power Tools</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-4 text-gray-700 dark:text-gray-300">
            <NavLinks />
          </nav>
          
          <div className="flex items-center">
             <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-gray-800"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <MoonIcon className="h-6 w-6" /> : <SunIcon className="h-6 w-6" />}
            </button>
            <div className="md:hidden ml-2">
                <button 
                    onClick={() => setIsOpen(!isOpen)} 
                    className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <XIcon className="h-6 w-6" /> : <HamburgerIcon className="h-6 w-6" />}
                </button>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
            <nav className="flex flex-col items-start space-y-2 p-4 text-gray-700 dark:text-gray-300">
                <NavLinks onLinkClick={handleLinkClick} />
            </nav>
        </div>
      )}
    </header>
  );
};

export default Header;