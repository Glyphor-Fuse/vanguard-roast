
import { Star, Coffee } from 'lucide-react';

export default function MoodTicker() {
  return (
    <div className="w-full bg-black text-white py-4 overflow-hidden border-y border-neutral-800">
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-12 px-4">
          {/* Item 1 */}
          <div className="flex items-center gap-4">
            <Disc className="h-5 w-5 animate-spin-slow text-neutral-400" />
            <span className="font-mono text-sm uppercase tracking-widest text-neutral-400">Now Spinning:</span>
            <span className="font-heading text-xl uppercase">Radiohead — In Rainbows</span>
          </div>
          
          <span className="text-neutral-700 text-xl">///</span>

          {/* Item 2 */}
          <div className="flex items-center gap-4">
            <Coffee className="h-5 w-5 text-neutral-400" />
            <span className="font-mono text-sm uppercase tracking-widest text-neutral-400">Batch Brew:</span>
            <span className="font-heading text-xl uppercase">Ethiopia Guji — Washed</span>
          </div>

          <span className="text-neutral-700 text-xl">///</span>

           {/* Item 3 */}
           <div className="flex items-center gap-4">
            <Disc className="h-5 w-5 animate-spin-slow text-neutral-400" />
            <span className="font-mono text-sm uppercase tracking-widest text-neutral-400">Up Next:</span>
            <span className="font-heading text-xl uppercase">Burial — Untrue</span>
          </div>

          <span className="text-neutral-700 text-xl">///</span>
          
           {/* Duplicate for infinite loop */}
           <div className="flex items-center gap-4">
            <Disc className="h-5 w-5 animate-spin-slow text-neutral-400" />
            <span className="font-mono text-sm uppercase tracking-widest text-neutral-400">Now Spinning:</span>
            <span className="font-heading text-xl uppercase">Radiohead — In Rainbows</span>
          </div>
          <span className="text-neutral-700 text-xl">///</span>
          <div className="flex items-center gap-4">
            <Coffee className="h-5 w-5 text-neutral-400" />
            <span className="font-mono text-sm uppercase tracking-widest text-neutral-400">Batch Brew:</span>
            <span className="font-heading text-xl uppercase">Ethiopia Guji — Washed</span>
          </div>
        </div>
      </div>
    </div>
  );
}
