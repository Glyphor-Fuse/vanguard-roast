
import { motion } from "motion/react";

const stories = [
  {
    id: 1,
    title: "The Concrete Jungle",
    category: "Architecture",
    description: "Our space reflects the raw, unfinished spirit of East London. Exposed steel, poured concrete, and the smell of fresh rain on asphalt.",
    image: "/images/interior-concrete.jpg",
    alt: "Minimalist concrete coffee shop interior",
    align: "left"
  },
  {
    id: 2,
    title: "Precision Extraction",
    category: "Craft",
    description: "We don't believe in magic. We believe in physics, chemistry, and the relentless pursuit of the perfect extraction yield.",
    image: "/images/barista-craft.jpg",
    alt: "Barista pouring latte art with focus",
    align: "right"
  },
  {
    id: 3,
    title: "Direct Trade Origins",
    category: "Sourcing",
    description: "No middlemen. Just us and the farmers in Colombia, Ethiopia, and Rwanda. Transparent pricing, sustainable relationships.",
    image: "/images/coffee-origin.jpg",
    alt: "Raw green coffee beans texture",
    align: "left"
  }
];

export default function ZineGallery() {
  return (
    <section className="py-24 bg-background px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-24">
        {stories.map((story, index) => (
          <div key={story.id} className={`flex flex-col md:flex-row gap-8 md:gap-16 items-center ${story.align === 'right' ? 'md:flex-row-reverse' : ''}`}>
            {/* Image Side */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/2"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100">
                <img 
                  src={story.image} 
                  alt={story.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0"
                />
                <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-xs font-mono uppercase tracking-widest">
                  {story.category}
                </div>
              </div>
            </motion.div>

            {/* Text Side */}
            <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6">
              <span className="font-mono text-neutral-400 text-sm">0{index + 1} /// 03</span>
              <h2 className="font-heading text-5xl md:text-7xl uppercase leading-none">{story.title}</h2>
              <p className="text-lg text-neutral-600 font-light max-w-md leading-relaxed">
                {story.description}
              </p>
              <div>
                <button className="text-sm font-bold uppercase tracking-widest border-b-2 border-black pb-1 hover:text-neutral-600 hover:border-neutral-600 transition-colors">
                  Read Full Story
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
