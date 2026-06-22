import { Metadata } from "next";
import { MapPin, ArrowRight, Compass, Calendar, Info } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tourist Spots | Hari Tea Traders",
  description: "Discover the best tourist spots around Valparai with distance from Valparai Town, travel guides, and local recommendations.",
};

const touristSpots = [
  {
    name: "Koolangal River (Koozhangal)",
    distance: "2 km",
    category: "River & Picnic Spot",
    description: "Known for its shallow, slow-flowing crystal clear waters and pebble-strewn river bed. It is a highly popular spot for families to relax and enjoy a safe wading experience amidst scenic tea gardens.",
    highlight: "Shallow water, perfect for relaxing.",
    bestTime: "September to March",
    image: "/images/places/kulangal river.jpg",
  },
  {
    name: "Vellamalai Tunnel River",
    distance: "3.5 km",
    category: "Offbeat Stream",
    description: "An offbeat tourist destination where water flows through an artificial tunnel carved out of a hill. It offers a scenic, peaceful environment, but visitors are advised to be highly cautious during rainy seasons due to water surges.",
    highlight: "Unique tunnel water flow, peaceful environment.",
    bestTime: "September to March (Avoid heavy monsoon)",
    image: "/images/places/velamalai tunnel.jpeg",
  },
  {
    name: "Karumalai Balaji Temple",
    distance: "10 km",
    category: "Pilgrimage & Serenity",
    description: "A famous, beautifully maintained temple dedicated to Lord Balaji, nestled deep inside the private Karumalai Tea Estate. The vehicle-free zone around the temple ensures a serene, silent walk to the shrine.",
    highlight: "Peaceful atmosphere, strict silence maintained.",
    bestTime: "Year-round",
    image: "/images/places/blaji temple.jpeg",
  },
  {
    name: "Nirar Dam (Upper & Lower)",
    distance: "10 km & 16 km",
    category: "Dam & Hydro Project",
    description: "A beautiful reservoir tucked inside thick evergreen forests, built for hydroelectric power and water diversion. The area is highly picturesque and is a great place to spot local wildlife and enjoy the mist.",
    highlight: "Surrounded by lush forest and mist.",
    bestTime: "Post-monsoon (October to March)",
    image: "/images/places/nirar dam.jpeg",
  },
  {
    name: "Nallamudi Viewpoint",
    distance: "15 km",
    category: "Viewpoint & Trek",
    description: "One of the most spectacular viewpoints in Valparai. After a brief walk through lush green tea estates, you are greeted with a majestic panoramic view of deep valleys, waterfalls, and tribal settlements in the neighboring hills.",
    highlight: "Stunning valley views and tribal village sightings.",
    bestTime: "Morning hours (for clear views)",
    image: "/images/places/nallamudi view point.jpeg",
  },
  {
    name: "Grass Hills",
    distance: "15 km",
    category: "High Altitude Grasslands",
    description: "A protected national park and UNESCO World Heritage site, displaying a unique ecosystem of shola forests and high-altitude grasslands. Home to the Nilgiri Tahr and other rare species. (Requires prior permission from the Forest Department).",
    highlight: "High-altitude shola grasslands, rare wildlife.",
    bestTime: "November to January",
    image: "/images/places/grass hills.jpeg",
  },
  {
    name: "Sholayar Dam",
    distance: "20 km",
    category: "Hydroelectric Dam",
    description: "One of the largest reservoirs in Asia, Sholayar Dam is an engineering marvel. It is surrounded by dense Western Ghats forests and sprawling tea estates, making it a very popular drive-in spot for tourists seeking scenic nature views.",
    highlight: "One of the tallest and largest dams in Asia.",
    bestTime: "September to February",
    image: "/images/places/sholayar dam.jpeg",
  },
  {
    name: "Chinnakallar Falls",
    distance: "26 km",
    category: "Waterfall",
    description: "Often referred to as the 'Cherrapunji of South India' due to receiving the second-highest rainfall in the country. A hanging bridge provides a thrilling, misty view of the roaring falls cascading through deep woods.",
    highlight: "Hanging bridge view, heavy rain and mist.",
    bestTime: "September to December",
    image: "/images/places/chinnakallar falls.jpeg",
  },
  {
    name: "Monkey Falls",
    distance: "30 km",
    category: "Waterfall",
    description: "A natural waterfall located on the foothills of Valparai along the Pollachi-Valparai road. Its cool, cascading waters make it a highly popular stop for a refreshing bath and family picnic on the way up to Valparai.",
    highlight: "Refreshing natural bath spot, roadside location.",
    bestTime: "October to March",
    image: "/images/places/monkey falls.jpeg",
  },
  {
    name: "Aliyar Dam",
    distance: "40 km",
    category: "Dam & Park",
    description: "Situated at the foot of Valparai hills, Aliyar Dam is a beautiful reservoir featuring well-maintained parks, play areas, an aquarium, and boating facilities. It is the starting point of the scenic 40-hairpin bend drive.",
    highlight: "Boating, family park, starting point of ghat road.",
    bestTime: "Year-round",
    image: "/images/places/aliyar dam.jpeg",
  },
  {
    name: "Athirappilly Waterfalls",
    distance: "80 km",
    category: "Grand Waterfall",
    description: "Often called the 'Niagara of India', Athirappilly Falls is the largest waterfall in Kerala. The drive from Valparai via Malakkappara forest route is highly scenic, crossing dense rainforests and checkposts (Day travel only: 6 AM - 6 PM).",
    highlight: "Niagara of India, largest falls in Kerala, scenic forest drive.",
    bestTime: "June to January (heavy monsoon flow)",
    image: "/images/places/athirapally falls.jpeg",
  },
];

export default function TouristInfoPage() {
  return (
    <div className="pb-20 bg-cream min-h-screen">
      {/* Header */}
      <div className="h-[360px] md:h-[520px] relative overflow-hidden w-full">
        <img 
          src="/images/tourist images.jpg" 
          alt="Valparai Tourist Spots"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center py-6">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-heading text-3xl md:text-5xl font-bold mb-2 text-gold-400">Valparai Tourist Spots</h1>
            <p className="text-xs md:text-base text-forest-100 max-w-2xl mx-auto">
              Explore the untouched beauty, roaring waterfalls, massive reservoirs, and scenic viewpoints around Valparai.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16">
        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Compass className="w-6 h-6 text-gold-500 animate-spin-slow" />
            <span className="text-forest-700 uppercase tracking-widest text-sm font-semibold">Traveler's Directory</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-forest-900 mb-6">
            Explore the Wonders of <span className="text-forest-600">Valparai</span>
          </h2>
          <p className="text-charcoal/80 text-lg leading-relaxed">
            Valparai is a unique hill station surrounded by the Anamalai Tiger Reserve. Unlike commercialized tourist destinations, it offers quiet, clean, and untouched nature. Below is a list of must-visit places with their distances from Valparai Town to help you plan your itinerary.
          </p>
        </div>

        {/* Tourist Spots Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {touristSpots.map((spot, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-forest-100/50 flex flex-col h-full group">
              {/* Image & Distance Badge */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={spot.image} 
                  alt={spot.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-forest-900/90 backdrop-blur-sm text-cream px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-md">
                  <MapPin className="w-3.5 h-3.5 text-gold-400" />
                  <span>{spot.distance} from Town</span>
                </div>
                <div className="absolute bottom-4 right-4 bg-gold-500 text-white px-2.5 py-1 rounded-md text-xxs uppercase tracking-wider font-extrabold shadow-sm">
                  {spot.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-heading text-xl font-bold text-forest-900 mb-3 group-hover:text-forest-700 transition-colors">
                    {spot.name}
                  </h3>
                  <p className="text-charcoal/70 text-sm leading-relaxed mb-6">
                    {spot.description}
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-forest-50 text-xs">
                  <div className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-forest-950">Highlight: </span>
                      <span className="text-charcoal/80">{spot.highlight}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Calendar className="w-4 h-4 text-forest-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-forest-950">Best Time: </span>
                      <span className="text-charcoal/80">{spot.bestTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Travel Tips Banner */}
        <div className="bg-gradient-to-br from-forest-900 to-forest-950 text-cream rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-xl border border-gold-500/20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl -mr-16 -mt-16" />
          <div className="relative z-10 max-w-3xl">
            <h3 className="font-heading text-3xl font-bold mb-4 text-gold-400">Local Travel Tips</h3>
            <ul className="space-y-4 text-sm text-forest-100/90 mb-8 list-disc list-inside">
              <li>Valparai falls inside a Tiger Reserve; avoid driving after 6:00 PM due to active wildlife crossings.</li>
              <li>Always carry raincoats or umbrellas as weather in Valparai can change and drizzle unexpectedly.</li>
              <li>Prior permissions are required for Grass Hills and certain inner treks. Contact local forest officials for permits.</li>
              <li>Please keep Valparai green and plastic-free. Do not litter or feed wild animals on the roads.</li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <span className="text-gold-300 font-medium">Visiting Valparai Town?</span>
              <Link 
                href="/contact" 
                className="bg-gold-500 hover:bg-gold-600 text-white px-6 py-3 rounded-full font-bold text-sm transition-all flex items-center gap-2 group shadow-lg"
              >
                Find Our Shop location
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
