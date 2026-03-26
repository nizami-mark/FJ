import { motion } from 'framer-motion';
import { NAV_LINKS } from '../constants';
import { cn } from '../lib/utils';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-primary">
              Dr. Farooq <span className="text-accent">Jahangir</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              className="bg-[#4d6a36] text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#3d542b] transition-colors inline-block"
            >
              Book Free Consultation
            </a>
          </div>
          
          <div className="md:hidden">
            {/* Mobile menu button could go here */}
            <button className="p-2 text-slate-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
