import React from "react";
import { CloudRain, Sun, Mountain, Trees } from "lucide-react";

export default function WhyValparai() {
  const features = [
    {
      icon: Mountain,
      title: "High Altitude",
      desc: "Situated at 3,500+ feet, the elevation slows down the growth of tea and coffee, locking in deeper, more complex flavors."
    },
    {
      icon: CloudRain,
      title: "Perennial Mists",
      desc: "The constant mist and heavy rainfall provide natural irrigation, eliminating the need for artificial watering and retaining soil nutrients."
    },
    {
      icon: Trees,
      title: "Forest Canopy",
      desc: "Our spices and coffee grow under the shade of ancient forest trees, creating a unique micro-climate that enhances aroma."
    },
    {
      icon: Sun,
      title: "Traditional Farming",
      desc: "Smallholder estates and tribal communities use generational knowledge to farm without relying on harsh chemical pesticides."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-forest-950">
      
      {/* Background Image / Video effect */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/valparai.jpg" 
          alt="Valparai Tea Plantations"
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950 via-forest-950/80 to-forest-950" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-gold-500 uppercase tracking-widest text-sm font-bold block mb-3">
            The Magic of the Hills
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            Why Valparai?
          </h2>
          <p className="text-forest-100/80 text-lg leading-relaxed font-light">
            It isn't just about what we grow, but where we grow it. Tucked away in the Anamalai Tiger Reserve, Valparai is a pristine ecosystem where nature does the heavy lifting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className="bg-white/5 border border-white/10 backdrop-blur-md p-8 rounded-3xl hover:bg-white/10 transition-colors group"
            >
              <div className="w-14 h-14 rounded-full bg-gold-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-gold-400" />
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-forest-100/70 leading-relaxed font-light">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="font-heading text-2xl md:text-3xl text-gold-400 font-medium italic">
            "Every product carries the freshness of the hills."
          </p>
        </div>

      </div>
    </section>
  );
}
