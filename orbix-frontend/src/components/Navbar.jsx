import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { path: '/', label: 'Home', end: true },
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/simulation', label: 'Simulation' },
    { path: '/fault-monitor', label: 'Faults' },
    { path: '/bot-control', label: 'Bots' },
    { path: '/analytics', label: 'Analytics' },
    { path: '/about', label: 'About' },
  ];

  return (
    <nav className="bg-space-800/90 backdrop-blur-md border-b border-white/5 sticky top-0 z-50 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      <div className="flex justify-between items-center px-4 md:px-8 h-20">
        <div className="flex items-center gap-3 z-50">
          {/* Glow effect orbit icon */}
          <div className="relative flex items-center justify-center w-8 h-8">
            <div className="absolute inset-0 rounded-full border-2 border-orbix-accent animate-[spin_3s_linear_infinite]"></div>
            <div className="absolute inset-1 rounded-full border border-blue-500 animate-[spin_4s_linear_infinite_reverse]"></div>
            <div className="w-2 h-2 bg-orbix-accent rounded-full shadow-[0_0_10px_#00f2fe]"></div>
          </div>
          <h1 className="text-xl md:text-2xl font-extrabold tracking-widest m-0 text-transparent bg-clip-text bg-gradient-to-r from-orbix-accent to-blue-500 drop-shadow-[0_0_10px_rgba(0,229,255,0.4)]">
            ORBIX
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden xl:flex items-center h-full m-0 p-0 list-none gap-2">
          {navLinks.map((link) => (
            <li key={link.path} className="h-full flex items-center">
              <NavLink 
                to={link.path} 
                end={link.end}
                className={({ isActive }) => `
                  relative flex items-center h-full px-4 xl:px-5 text-xs xl:text-sm font-medium tracking-wider uppercase transition-all duration-300
                  ${isActive 
                    ? 'text-orbix-accent group' 
                    : 'text-gray-400 hover:text-gray-200 hover:bg-white/5 rounded-lg my-3'
                  }
                `}
              >
                {({ isActive }) => (
                  <>
                    <span className="relative z-10">{link.label}</span>
                    {isActive && (
                      <>
                        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-orbix-accent shadow-[0_0_10px_#00f2fe]"></div>
                        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-orbix-accent/10 to-transparent"></div>
                      </>
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
        
        {/* Status indicator right side (Desktop & Mid) */}
        <div className="hidden md:flex items-center gap-3 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
          <span className="text-green-400 text-xs font-mono font-bold tracking-wider">SYSTEM ONLINE</span>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="xl:hidden text-gray-300 hover:text-orbix-accent z-50 p-2"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-space-900/95 backdrop-blur-xl transition-all duration-300 ease-in-out xl:hidden flex flex-col justify-start pt-24 px-6 ${
          isOpen ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible translate-x-12'
        }`}
      >
        <ul className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink 
                to={link.path} 
                end={link.end}
                onClick={closeMenu}
                className={({ isActive }) => `
                  block w-full px-6 py-4 rounded-xl text-lg font-bold tracking-widest uppercase border transition-all duration-300
                  ${isActive 
                    ? 'border-orbix-accent/50 bg-orbix-accent/10 text-orbix-accent flex items-center justify-between shadow-[inset_0_0_20px_rgba(0,229,255,0.1)]' 
                    : 'border-transparent text-gray-400 hover:bg-white/5 hover:text-gray-200'
                  }
                `}
              >
                {({ isActive }) => (
                  <>
                    <span>{link.label}</span>
                    {isActive && <div className="w-2 h-2 rounded-full bg-orbix-accent shadow-[0_0_10px_#00f2fe]" />}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Status indicator */}
        <div className="mt-auto mb-10 flex items-center justify-center gap-3 px-6 py-4 bg-green-500/10 border border-green-500/20 rounded-2xl">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-green-400 text-sm font-mono font-bold tracking-wider">SYSTEM ONLINE</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;