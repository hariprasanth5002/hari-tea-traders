export interface PackSize {
  size: string;
  price: number;
}

export interface ProductStoryDetails {
  origin?: string;
  taste?: string;
  aroma?: string;
  freshness?: string;
  processing?: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  retailPrice: number; // Base price for smallest pack size
  wholesaleAvailable: boolean;
  image: string;
  description: string;
  shortDescription: string;
  availablePackSizes: PackSize[];
  featured: boolean;
  seasonal: boolean;
  story?: string;
  storyDetails?: ProductStoryDetails;
  whyChooseUs?: string[];
  benefits?: string[];
  sourceInfo?: string;
  wholesaleDetails?: string;
  deliveryDetails?: string;
}

export const products: Product[] = [
  {
    id: "manika-tea",
    name: "Manika Tea Powder",
    slug: "manika-tea-powder",
    category: "Premium Tea",
    retailPrice: 160,
    wholesaleAvailable: true,
    image: "/images/products/manika rd tea.png",
    description: "Sourced from the premium Manika estate in Valparai, this tea offers a strong flavor, rich color, and refreshing taste. It is ideal for daily consumption and is highly favored by traditional tea lovers.",
    shortDescription: "Strong flavor, rich color, and refreshing taste from Manika estate.",
    availablePackSizes: [
      { size: "250g", price: 160 },
      { size: "500g", price: 310 },
      { size: "1kg", price: 600 }
    ],
    featured: true,
    seasonal: false,
    story: "For generations, the Manika estate has been renowned for its premium quality leaves, nurtured by the unique misty climate of Valparai. Handpicked at sunrise and processed using traditional methods, every cup tells the story of the hills.",
    storyDetails: {
      origin: "Cultivated in the high-altitude Manika Tea Estate, wrapped in the perennial mists of Valparai.",
      taste: "Robust, full-bodied with a classic strong briskness.",
      aroma: "Earthy and deeply fragrant, capturing the essence of the morning dew.",
      freshness: "Packed at the source within days of harvesting to seal in volatile oils.",
      processing: "Orthodox and CTC blending methods passed down through generations."
    },
    whyChooseUs: [
      "Direct from Valparai plantations",
      "Freshly packed in aroma-lock bags",
      "No artificial colors or preservatives",
      "Premium handpicked quality leaves",
      "Trusted family business for 15+ years"
    ],
    benefits: [
      "Rich in antioxidants that protect your cells",
      "Boosts energy and alertness naturally",
      "Improves digestion and gut health",
      "Traditional robust taste profile"
    ],
    sourceInfo: "Directly sourced from the Manika Tea Estate in Valparai, Tamil Nadu, situated at an altitude of 3,500 feet.",
    wholesaleDetails: "Available in bags of 10kg, 20kg, and 50kg. Custom branding/white labeling options available for minimum order of 100kg.",
    deliveryDetails: "Shipped across India via Professional/ST Courier. Delivery takes 2-3 business days within Tamil Nadu, and 4-6 business days to other states."
  },
  {
    id: "waterfall-tea",
    name: "Water Fall Tea Packs",
    slug: "waterfall-tea-packs",
    category: "Premium Tea",
    retailPrice: 170,
    wholesaleAvailable: true,
    image: "/images/products/water-fall-tea product.jpeg",
    description: "Premium export-quality tea packs containing select leaves from the famous Waterfall estates of Valparai. It offers a smooth finish and exquisite aroma, perfect for both plain black tea and milk tea.",
    shortDescription: "Export-quality premium tea with a smooth finish and exquisite aroma.",
    availablePackSizes: [
      { size: "250g", price: 170 },
      { size: "500g", price: 330 },
      { size: "1kg", price: 640 }
    ],
    featured: true,
    seasonal: false,
    story: "Grown near the cascading waterfalls of Valparai, these tea leaves receive optimal moisture and sunlight. The constant mist from the falls creates a micro-climate that yields a highly fragrant, incredibly smooth tea leaf sought after by exporters.",
    storyDetails: {
      origin: "Harvested from estates bordering the majestic waterfalls of Valparai.",
      taste: "Exceptionally smooth finish with zero harsh bitterness.",
      aroma: "Delicate and floral, reflecting the pristine waterfall environment.",
      freshness: "Vacuum packed directly from the estate.",
      processing: "Gentle rolling and natural oxidation to preserve delicate flavors."
    },
    whyChooseUs: [
      "Export-grade premium selection",
      "Grown in unique waterfall micro-climate",
      "100% natural and unblended",
      "Perfect for premium black tea",
      "Consistent high-quality standards"
    ],
    benefits: [
      "Extremely smooth flavor without harsh bitterness",
      "Aromatic oils help relieve stress and promote relaxation",
      "Great source of clean energy",
      "High concentration of polyphenols"
    ],
    sourceInfo: "Sourced from the Waterfall tea plantations in Valparai, certified organic farming practices.",
    wholesaleDetails: "Bulk export packaging available. Minimum wholesale volume starts from 50kg with special discounted rates.",
    deliveryDetails: "Secure food-grade sealed packaging. Dispatched within 24 hours of order confirmation."
  },
  {
    id: "bop-tea",
    name: "BOP Grade Tea Powder",
    slug: "bop-grade-tea-powder",
    category: "Premium Tea",
    retailPrice: 150,
    wholesaleAvailable: true,
    image: "/images/products/bob-grade-tea.png",
    description: "Broken Orange Pekoe (BOP) grade tea powder. Highly suitable for making strong, brisk chai. It releases flavor quickly and yields a bright golden-orange color in milk.",
    shortDescription: "Brisk and strong tea, perfect for traditional milk tea.",
    availablePackSizes: [
      { size: "250g", price: 150 },
      { size: "500g", price: 290 },
      { size: "1kg", price: 560 }
    ],
    featured: false,
    seasonal: false,
    story: "Our BOP (Broken Orange Pekoe) grade represents a traditional choice for tea stalls and families who love a strong kick in the morning. Made from fine broken leaf particles that brew rapidly, bringing the robust spirit of the hills straight to your cup.",
    storyDetails: {
      origin: "Blended from selected smallholder tea gardens across the Valparai hills.",
      taste: "Bold, brisk, and perfectly astringent for authentic Indian Chai.",
      aroma: "Strong, malty fragrance that awakens the senses.",
      freshness: "Stored in climate-controlled facilities to maintain punch.",
      processing: "Precision crushed, torn, and curled (CTC) for maximum flavor extraction."
    },
    whyChooseUs: [
      "Yields deep golden-orange color",
      "Economical without compromising quality",
      "Quick brewing time",
      "Perfect base for masala chai",
      "Direct from local farmers"
    ],
    benefits: [
      "Quick brewing time, highly efficient",
      "Strong flavor profile that pairs perfectly with milk and spices",
      "Aids in metabolic function",
      "Economical price point for premium quality"
    ],
    sourceInfo: "Selected and blended from various smallholder tea plantations around Valparai hills.",
    wholesaleDetails: "Ideal for tea shops, cafeterias, and hotels. Bulk discount bags of 30kg available at wholesale rates.",
    deliveryDetails: "Standard shipping via road transport or courier. Minimum shipping weight across our store is 500g."
  },
  {
    id: "specialty-teas",
    name: "Specialty Teas (Green, Masala, Ginger, Cardamom)",
    slug: "specialty-flavored-teas",
    category: "Premium Tea",
    retailPrice: 180,
    wholesaleAvailable: true,
    image: "/images/products/flavoured-images.png",
    description: "A premium range of flavored and specialty teas. Choose between high-grade Green Tea, warming Ginger Tea, aromatic Cardamom Tea, or traditional Indian Masala Tea.",
    shortDescription: "Aromatic specialty teas infused with authentic natural spices.",
    availablePackSizes: [
      { size: "250g", price: 180 },
      { size: "500g", price: 350 },
      { size: "1kg", price: 680 }
    ],
    featured: true,
    seasonal: false,
    story: "We combine our premium CTC tea leaves with crushed real spices sourced directly from local Valparai farms. Instead of artificial essences, you taste the genuine warmth of hill-grown ginger, cardamom, and mountain spices in every sip.",
    storyDetails: {
      origin: "Valparai tea leaves blended with organic spices from regional spice gardens.",
      taste: "Rich and layered, balancing robust tea with warming natural spices.",
      aroma: "An intoxicating blend of pure tea and freshly ground spices.",
      freshness: "Spices are crushed and blended just before packaging.",
      processing: "Artisanal blending of premium CTC tea with raw, sun-dried spices."
    },
    whyChooseUs: [
      "Real crushed spices, no artificial flavors",
      "Multiple health and immunity benefits",
      "Hand-blended in small batches",
      "Premium quality green tea leaves",
      "Authentic Valparai heritage"
    ],
    benefits: [
      "Boosts immunity with anti-inflammatory ginger and cardamom",
      "Green tea option helps with fat oxidation and weight management",
      "Warms the body and relieves throat congestion",
      "Delightful, natural sensory experience"
    ],
    sourceInfo: "Valparai tea leaves blended with organic spices from regional spice gardens.",
    wholesaleDetails: "Available in custom wholesale mixes (e.g., 5kg green tea, 5kg masala). Great margins for organic store resellers.",
    deliveryDetails: "Aroma-lock foil packaging to preserve freshness and spice oils."
  },
  {
    id: "coffee-jaggery",
    name: "Coffee Powder with Jaggery",
    slug: "coffee-powder-with-jaggery",
    category: "Hill Coffee",
    retailPrice: 200,
    wholesaleAvailable: true,
    image: "/images/products/coffe with jaggrreu.png",
    description: "A traditional healthy coffee blend pre-mixed with pure organic jaggery powder. It provides a rich, sweet, and robust flavor without the need for white sugar.",
    shortDescription: "Healthy robust filter coffee pre-mixed with organic jaggery.",
    availablePackSizes: [
      { size: "250g", price: 200 },
      { size: "500g", price: 380 },
      { size: "1kg", price: 740 }
    ],
    featured: true,
    seasonal: false,
    story: "In the Valparai hills, coffee was traditionally sweetened with native palm and cane jaggery. We bring this healthy, rustic heritage directly to you. Carefully roasted Robusta and Arabica beans are intimately mixed with organic jaggery, offering a guilt-free morning ritual.",
    storyDetails: {
      origin: "Coffee from shade-grown estates in Valparai, jaggery from traditional Salem farmers.",
      taste: "Deep, robust coffee notes with a pleasant, earthy caramel undertone.",
      aroma: "Roasted coffee mingling with the sweet, rustic scent of warm jaggery.",
      freshness: "Blended in small batches to prevent moisture absorption.",
      processing: "Medium-dark roast coffee delicately powdered with crystallised organic jaggery."
    },
    whyChooseUs: [
      "100% white sugar-free",
      "Rich in natural minerals (iron, magnesium)",
      "Traditional South Indian health recipe",
      "Ready to brew instantly",
      "Perfect balance of bitter and sweet"
    ],
    benefits: [
      "100% white-sugar free; healthy sweetener alternative",
      "Jaggery provides essential minerals like iron and magnesium",
      "Rich in taste with a pleasant caramel undertone",
      "Instant energy booster with digestive benefits"
    ],
    sourceInfo: "Coffee beans harvested from shade-grown estates in Valparai, blended with organic jaggery from Salem.",
    wholesaleDetails: "Supplied in wholesale boxes of 10kg. Perfect for health cafes and natural food outlets.",
    deliveryDetails: "Double-walled moisture-proof bags to prevent jaggery from absorbing humidity."
  },
  {
    id: "pure-coffee",
    name: "Pure Filter Coffee Powder",
    slug: "pure-filter-coffee-powder",
    category: "Hill Coffee",
    retailPrice: 220,
    wholesaleAvailable: true,
    image: "/images/products/filter-coffe.png",
    description: "Authentic shade-grown coffee beans, roasted and ground to perfection. A strong Robusta and Arabica blend designed for traditional South Indian filter decoction.",
    shortDescription: "Strong authentic filter coffee blend with zero sugar.",
    availablePackSizes: [
      { size: "250g", price: 220 },
      { size: "500g", price: 420 },
      { size: "1kg", price: 800 }
    ],
    featured: false,
    seasonal: false,
    story: "Our coffee beans are shade-grown under a dense canopy of forest trees in Valparai, alongside orange trees and pepper vines. This slow, natural ripening process imparts a unique, complex flavor profile to the bean that cannot be rushed.",
    storyDetails: {
      origin: "Single-origin beans from sustainable, shaded forest estates in Valparai.",
      taste: "Intensely bold, full-bodied with notes of dark chocolate and roasted nuts.",
      aroma: "Heady, rich, and deeply comforting.",
      freshness: "Freshly roasted and ground upon order confirmation.",
      processing: "Washed and sun-dried beans, medium-dark roasted to perfection."
    },
    whyChooseUs: [
      "Shade-grown under natural forest canopy",
      "100% pure coffee, no chicory fillers",
      "Freshly ground before dispatch",
      "Low acidity, easy on the stomach",
      "Supports sustainable farming"
    ],
    benefits: [
      "Rich in aroma and high-quality caffeine",
      "Shade-grown coffee is lower in acidity compared to sun-grown varieties",
      "Provides focus, stamina, and enhances metabolism",
      "No chicory or fillers; 100% pure coffee"
    ],
    sourceInfo: "Single-origin beans collected from sustainable forest-shaded estates in Valparai.",
    wholesaleDetails: "Chicory customization available upon wholesale request (e.g., 80:20 or 70:30 blends). Bulk discount for cafes.",
    deliveryDetails: "Freshly ground upon order confirmation to guarantee peak aroma."
  },
  {
    id: "black-pepper",
    name: "Black Pepper",
    slug: "black-pepper",
    category: "Organic Spices",
    retailPrice: 190,
    wholesaleAvailable: true,
    image: "/images/products/black pepper.png",
    description: "Premium, bold, sun-dried black peppercorns from Valparai. Highly aromatic, with a intense heat and flavor. Fully organic and free from chemical washes.",
    shortDescription: "Sun-dried organic black peppercorns with intense heat.",
    availablePackSizes: [
      { size: "100g", price: 90 },
      { size: "250g", price: 190 },
      { size: "500g", price: 360 },
      { size: "1kg", price: 700 }
    ],
    featured: true,
    seasonal: false,
    story: "Pepper vines are grown climbing the tall shade trees of the tea and coffee estates of Valparai. Hand-harvested by local workers climbing traditional bamboo ladders, these berries are solar-dried naturally to secure their intense heat and high piperine content.",
    storyDetails: {
      origin: "Grown naturally on shade trees within high-altitude Valparai plantations.",
      taste: "Sharp, biting, and intensely warm with a lingering spicy finish.",
      aroma: "Pungent, woody, and intensely fragrant.",
      freshness: "Packed whole to retain essential oils until you grind them.",
      processing: "Hand-plucked and naturally sun-dried without chemical washes."
    },
    whyChooseUs: [
      "Exceptionally high piperine content",
      "Bold, unsorted premium size berries",
      "Zero chemical treatments or polish",
      "Sustainably harvested",
      "Packed with natural essential oils"
    ],
    benefits: [
      "High in piperine, which boosts nutrient absorption",
      "Strong anti-inflammatory and antioxidant properties",
      "Aids digestion and respiratory relief",
      "Helps fight cold and cough when taken with honey"
    ],
    sourceInfo: "Grown naturally on shade trees within the high-altitude plantations of Valparai.",
    wholesaleDetails: "Wholesale available in gunny bags of 25kg and 50kg. Moisture levels strictly controlled below 11%.",
    deliveryDetails: "Sealed polythene liners inside cloth bags to protect from moisture during transit."
  },
  {
    id: "whole-spices",
    name: "Whole Spices (Cardamom, Clove, Cinnamon)",
    slug: "whole-spices-pack",
    category: "Organic Spices",
    retailPrice: 250,
    wholesaleAvailable: true,
    image: "/images/products/spices.png",
    description: "A premium selection of Valparai spice garden products. Includes giant green cardamoms, high-oil cloves, and sweet, fragrant cinnamon bark.",
    shortDescription: "Fragrant green cardamom, cloves, and cinnamon bark.",
    availablePackSizes: [
      { size: "100g", price: 250 },
      { size: "250g", price: 600 },
      { size: "500g", price: 1150 }
    ],
    featured: false,
    seasonal: false,
    story: "Valparai's cool, humid valleys are perfect for spice cultivation. These spices are carefully hand-sorted to extract only the premium grades. Every pod, bud, and bark carries the undiluted, pristine aroma of the Western Ghats forests.",
    storyDetails: {
      origin: "Certified organic smallholder farms in Valparai and surrounding forest boundaries.",
      taste: "Intensely flavorful; sweet cinnamon, fiery clove, and floral cardamom.",
      aroma: "A breathtaking burst of pure, unextracted essential oils.",
      freshness: "Vacuum packed in small batches to prevent oil evaporation.",
      processing: "Hand-picked, meticulously sorted by size, and shade-dried."
    },
    whyChooseUs: [
      "8mm+ premium grade cardamom",
      "High oil-content unextracted cloves",
      "True aromatic cinnamon bark",
      "Pesticide-free cultivation",
      "Vacuum sealed for ultimate freshness"
    ],
    benefits: [
      "Cardamom is a natural breath freshener and detoxifier",
      "Cloves contain eugenol, which has strong antiseptic properties",
      "Cinnamon helps regulate blood sugar levels",
      "Brings rich, natural warmth to culinary preparations"
    ],
    sourceInfo: "Sourced directly from certified organic smallholder farms in Valparai and surrounding forest boundaries.",
    wholesaleDetails: "Sorted by grade (e.g., 8mm Cardamom). Rates fluctuate weekly based on market pricing; contact for live quotes.",
    deliveryDetails: "Airtight vacuum packs to lock in volatile essential oils."
  },
  {
    id: "turmeric",
    name: "Turmeric (Normal & Kasthuri)",
    slug: "organic-turmeric-powder",
    category: "Organic Spices",
    retailPrice: 120,
    wholesaleAvailable: true,
    image: "/images/products/turmeric.png",
    description: "Pure turmeric powder with exceptionally high curcumin content. Also available in Kasthuri Turmeric variety, prized for cosmetic and skincare application.",
    shortDescription: "Curcumin-rich culinary turmeric and cosmetic Kasthuri turmeric.",
    availablePackSizes: [
      { size: "250g", price: 220 },
      { size: "500g", price: 400 },
      { size: "1kg", price: 780 }
    ],
    featured: false,
    seasonal: false,
    story: "Cultivated in forest clearings using traditional tribal practices. The roots are boiled, sun-dried, and ground in local micro-mills without any starch fillers, coloring, or polishing chemicals. This is turmeric in its purest, most potent form.",
    storyDetails: {
      origin: "Harvested by tribal farmers around the forest boundaries of Valparai Tiger Reserve.",
      taste: "Warm, earthy, and slightly bitter with a peppery depth.",
      aroma: "Rich, pungent, and distinctly earthy.",
      freshness: "Ground in small batches throughout the year.",
      processing: "Traditional boiling, extensive sun-drying, and slow cold-grinding."
    },
    whyChooseUs: [
      "Exceptionally high natural curcumin",
      "Zero artificial colors or starch fillers",
      "Sourced from tribal forest farmers",
      "Available in both culinary and cosmetic grades",
      "Traditional cold-grinding process"
    ],
    benefits: [
      "Powerful natural anti-inflammatory agent",
      "High curcumin content boosts immunity",
      "Kasthuri Turmeric is excellent for skin glow, fighting acne and facial hair",
      "Natural antiseptic and healing properties"
    ],
    sourceInfo: "Harvested by tribal farmers around the forest boundaries of Valparai Tiger Reserve.",
    wholesaleDetails: "Bulk shipments in bags of 25kg. Certificate of purity can be provided upon request.",
    deliveryDetails: "Standard courier shipping. Shelf life: 12 months from packing date."
  },
  {
    id: "forest-honey",
    name: "Pure Forest Honey",
    slug: "pure-forest-honey",
    category: "Forest & Seasonal Products",
    retailPrice: 280,
    wholesaleAvailable: true,
    image: "/images/products/honey.png",
    description: "Raw, unprocessed, and multi-floral forest honey. Sourced directly from wild beehives in the deep forests of Valparai by tribal honey hunters. Free from corn syrup and heating processes.",
    shortDescription: "Unprocessed multi-floral wild honey sourced by forest tribes.",
    availablePackSizes: [
      { size: "250g", price: 280 },
      { size: "500g", price: 540 },
      { size: "1kg", price: 1000 }
    ],
    featured: true,
    seasonal: false,
    story: "Collected by native Kadar and Malasar tribal communities who scale giant forest trees and rock cliffs. This honey is completely raw and multi-floral, meaning it carries the nectar of thousands of wild medicinal flowers deep inside the Anamalai Tiger Reserve.",
    storyDetails: {
      origin: "Deep forest settlements in the Anamalai Tiger Reserve region.",
      taste: "Complex, wildly floral with varying notes of caramel and wood depending on the season.",
      aroma: "Intensely floral and rich with the scent of wild pollen.",
      freshness: "Raw, unpasteurized, and bottled without micro-filtering.",
      processing: "Sustainably harvested and naturally strained through cloth."
    },
    whyChooseUs: [
      "100% Raw and Unpasteurized",
      "Collected by indigenous tribal honey hunters",
      "Contains natural wild pollen and enzymes",
      "Zero added sugar or corn syrup",
      "Sustainably harvested protecting bee colonies"
    ],
    benefits: [
      "Rich in wild pollen, minerals, and natural enzymes",
      "Natural cough suppressant and throat soothing remedy",
      "Low glycemic index compared to refined sugar",
      "Supports sustainable tribal livelihoods"
    ],
    sourceInfo: "Sourced directly from forest settlements in the Anamalai Tiger Reserve region of Valparai.",
    wholesaleDetails: "Wholesale supplied in food-grade plastic jerrycans of 10kg and 30kg. Minimum wholesale order: 20kg.",
    deliveryDetails: "Carefully packed in leak-proof, food-safe bottles. Please store at room temperature; do not refrigerate."
  },
  {
    id: "herbal-oils",
    name: "Eucalyptus & Herbal Oils",
    slug: "eucalyptus-herbal-oils",
    category: "Forest & Seasonal Products",
    retailPrice: 150,
    wholesaleAvailable: true,
    image: "/images/products/oils.png",
    description: "Pure steam-distilled Eucalyptus oil and native herbal oils. Highly effective for pain relief, cold congestion, and aromatherapy.",
    shortDescription: "100% steam-distilled pure eucalyptus and therapeutic herbal oils.",
    availablePackSizes: [
      { size: "50ml", price: 90 },
      { size: "100ml", price: 150 },
      { size: "250ml", price: 340 }
    ],
    featured: false,
    seasonal: false,
    story: "Distilled locally using traditional wood-fired steam stills. Leaves from ancient Nilgiri and Blue Gum trees around Valparai are harvested sustainably by forest dwellers to extract these potent, medicinal oils.",
    storyDetails: {
      origin: "Distilled at local cooperative cottage units from native Valparai Blue Gum trees.",
      taste: "For external use only. Do not ingest.",
      aroma: "Piercingly fresh, camphorous, and deeply clearing.",
      freshness: "Stored in dark amber glass to prevent UV degradation.",
      processing: "Traditional slow steam distillation over wood fires."
    },
    whyChooseUs: [
      "100% pure steam-distilled extracts",
      "No synthetic fragrances or mineral oils",
      "Made by local cooperative cottage units",
      "Highly concentrated and therapeutic",
      "Traditional wood-fired distillation"
    ],
    benefits: [
      "Clears nasal passages and eases breathing during colds",
      "Relieves muscle, joint, and headache pain when massaged",
      "Natural insect repellent and air purifier",
      "Calms mind when used in diffusers"
    ],
    sourceInfo: "Distilled at local cooperative cottage units in Valparai, Tamil Nadu.",
    wholesaleDetails: "Bulk packaging in glass carboys or metal drums of 5L, 10L, and 25L available at factory rates.",
    deliveryDetails: "Packed in secure glass/heavy plastic bottles with inner plugs to prevent leakage during courier transit."
  },
  {
    id: "avocados",
    name: "Butter Fruit (Avocados)",
    slug: "valparai-butter-fruit-avocado",
    category: "Forest & Seasonal Products",
    retailPrice: 140,
    wholesaleAvailable: false,
    image: "/images/products/avacadoes.png",
    description: "Fresh, creamy, and organic avocados grown in Valparai estates. Known locally as Butter Fruit, these are rich in healthy fats and harvested at perfect maturity.",
    shortDescription: "Creamy, estate-grown organic avocados (Butter Fruit).",
    availablePackSizes: [
      { size: "1kg", price: 140 },
      { size: "2kg", price: 260 },
      { size: "5kg", price: 600 }
    ],
    featured: false,
    seasonal: true,
    story: "Avocado trees are planted as shade companions in Valparai coffee estates. Sustained entirely by high altitude mist and rainfall, the fruit develops a rich, creamy, and buttery texture that is vastly superior to chemically-forced plains-grown varieties.",
    storyDetails: {
      origin: "Harvested from coffee estate companion trees in Valparai hills (Seasonal: July to October).",
      taste: "Incredibly rich, buttery, and delicately nutty.",
      aroma: "Subtle, fresh, and green.",
      freshness: "Plucked only upon order confirmation to ensure transit viability.",
      processing: "Raw, unwashed natural fruit."
    },
    whyChooseUs: [
      "Grown naturally without chemical fertilizers",
      "High-altitude climate produces creamier fruit",
      "Harvested at peak maturity",
      "Supports local estate workers",
      "Delivered farm-fresh"
    ],
    benefits: [
      "High in heart-healthy monounsaturated fats",
      "Excellent source of dietary fiber, vitamins K, C, E, and B-6",
      "Rich, creamy texture makes it perfect for shakes, salads, and spreads",
      "100% pesticide-free, natural forest-shaded growth"
    ],
    sourceInfo: "Harvested from coffee estate companion trees in Valparai hills (Seasonal: July to October).",
    wholesaleDetails: "Wholesale is not open for online booking due to highly perishable nature, but local buyers can contact us.",
    deliveryDetails: "Shipped slightly semi-ripe to avoid bruising during transit. Wrap in paper to ripen at home in 2-3 days."
  },
  {
    id: "chocolates",
    name: "Homemade Chocolates",
    slug: "homemade-chocolates",
    category: "Forest & Seasonal Products",
    retailPrice: 160,
    wholesaleAvailable: true,
    image: "/images/products/chocolates.png",
    description: "Delicious, rich, locally crafted hill-station chocolates. Available in Milk, Dark, Fruit & Nut, and Almond varieties.",
    shortDescription: "Rich, locally-made chocolates in multiple varieties.",
    availablePackSizes: [
      { size: "250g", price: 160 },
      { size: "500g", price: 300 },
      { size: "1kg", price: 580 }
    ],
    featured: true,
    seasonal: false,
    story: "Made in small batches using premium cocoa grown on the foothills of the Western Ghats. Our local home chocolate makers blend it with rich milk solids and roasted local nuts, crafting a nostalgic hill-station delicacy.",
    storyDetails: {
      origin: "Prepared at local home-cottage confectioneries in Valparai town.",
      taste: "Velvety smooth, melting in the mouth with rich cocoa intensity.",
      aroma: "Sweet, roasted cocoa with hints of vanilla and nuts.",
      freshness: "Made in small, continuous batches to ensure freshness.",
      processing: "Traditional tempering and hand-molding by local artisans."
    },
    whyChooseUs: [
      "Handcrafted by local cottage artisans",
      "Premium cocoa from the Western Ghats",
      "No cheap vegetable fat fillers",
      "Loaded with real roasted nuts",
      "Perfect souvenir from the hills"
    ],
    benefits: [
      "Dark chocolate variants are high in flavonoids and antioxidants",
      "Perfect premium gift from the hills of Valparai",
      "Locally made, helping small cottage industries",
      "Instant mood lifter"
    ],
    sourceInfo: "Prepared at local home-cottage confectioneries in Valparai town.",
    wholesaleDetails: "Available in bulk custom gift boxes and loose packs for resellers. Special discounts above 10kg.",
    deliveryDetails: "Shipped with insulated bubble wrap. Note: chocolate may soften slightly in high summer heat; refrigerate before consumption."
  }
];
