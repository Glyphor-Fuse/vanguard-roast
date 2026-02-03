
import { MapPin, Clock, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background py-20 px-4 border-t border-neutral-200">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-12">
        
        {/* Logo Mark */}
        <div className="w-16 h-16 bg-black text-white flex items-center justify-center font-heading text-2xl font-bold rounded-none">
          VR
        </div>

        {/* Central Info Block - The 'Digital Business Card' */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
          <div className="flex flex-col items-center space-y-4">
            <MapPin className="h-6 w-6 text-neutral-400" />
            <h3 className="font-heading text-xl uppercase tracking-widest">Location</h3>
            <address className="not-italic text-neutral-600 font-light leading-relaxed">
              142 Bethnal Green Road<br/>
              London, E2 6DG<br/>
              United Kingdom
            </address>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <Clock className="h-6 w-6 text-neutral-400" />
            <h3 className="font-heading text-xl uppercase tracking-widest">Hours</h3>
            <ul className="text-neutral-600 font-light leading-relaxed space-y-1">
              <li>Mon - Fri: 07:00 — 16:00</li>
              <li>Sat - Sun: 08:00 — 17:00</li>
            </ul>
          </div>
        </div>

        {/* Socials & Legal */}
        <div className="w-full pt-12 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="flex gap-6">
              <a href="#" className="text-neutral-400 hover:text-black transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-neutral-400 hover:text-black transition-colors"><Mail className="h-5 w-5" /></a>
           </div>
           
           <p className="text-xs text-neutral-400 font-mono uppercase tracking-wider">
             © 2024 Vanguard Roast. All rights reserved.
           </p>
        </div>
      </div>
    </footer>
  );
}
