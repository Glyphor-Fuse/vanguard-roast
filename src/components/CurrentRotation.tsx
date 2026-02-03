
import { Separator } from "@/components/ui/separator";

const rotation = [
  { origin: "Kenya", region: "Kirinyaga", process: "Washed", notes: "Blackcurrant, Tomato, Brown Sugar" },
  { origin: "Colombia", region: "Huila", process: "Natural", notes: "Plum, Wine, Cacao Nib" },
  { origin: "Ethiopia", region: "Yirgacheffe", process: "Honey", notes: "Jasmine, Peach, Honeycomb" },
  { origin: "Brazil", region: "Cerrado", process: "Pulped Natural", notes: "Hazelnut, Caramel, Milk Chocolate" },
];

export default function CurrentRotation() {
  return (
    <section className="bg-neutral-950 text-neutral-100 py-24 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <h2 className="font-heading text-6xl md:text-8xl uppercase tracking-tighter">Current<br/>Rotation</h2>
          <p className="font-mono text-neutral-500 text-sm uppercase tracking-widest mb-2 md:mb-4">
            Updated: October 24, 2023
          </p>
        </div>

        <div className="space-y-4">
          {rotation.map((bean, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="flex flex-col md:flex-row md:items-baseline justify-between py-6 group-hover:bg-neutral-900 transition-colors px-4 -mx-4 rounded-none">
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
                  <span className="font-mono text-neutral-600 text-xs">0{idx + 1}</span>
                  <h3 className="font-heading text-3xl uppercase tracking-wide">{bean.origin}</h3>
                  <span className="text-neutral-400 font-light hidden md:inline-block">—</span>
                  <span className="text-neutral-400 font-light uppercase tracking-wider text-sm">{bean.region}</span>
                </div>
                
                <div className="mt-2 md:mt-0 flex flex-col md:items-end">
                   <span className="text-xs font-mono text-neutral-500 uppercase mb-1">{bean.process}</span>
                   <span className="text-sm font-medium text-neutral-300">{bean.notes}</span>
                </div>
              </div>
              <Separator className="bg-neutral-800" />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
            <button className="border border-neutral-700 text-neutral-300 px-8 py-4 uppercase font-heading tracking-widest hover:bg-white hover:text-black transition-all">
                View Full Archive
            </button>
        </div>
      </div>
    </section>
  );
}
