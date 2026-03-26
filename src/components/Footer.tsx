import { Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary pt-24 pb-12 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-16 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Dr. Farooq <span className="text-accent">Jahangir</span>
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-xs">
              Dedicated to reversing chronic diseases through root-cause focus, clinical hydration, and sustainable healing protocols.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#testimonials" className="hover:text-accent transition-colors">Success Stories</a></li>
              <li><a href="#pricing" className="hover:text-accent transition-colors">Pricing Plans</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex gap-3">
                <span className="text-accent">📞</span>
                +92 300 1234567
              </li>
              <li className="flex gap-3">
                <span className="text-accent">✉️</span>
                xyz@gmail.com
              </li>
              <li className="flex gap-3">
                <span className="text-accent">📍</span>
                123 Health Avenue, Wellness District, City
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/10 text-center text-slate-500 text-xs">
          <p>&copy; {new Date().getFullYear()} Dr. Farooq Jahangir. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
