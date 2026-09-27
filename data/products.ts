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
  variantLabel?: string; // e.g., "Flavour" or "Form"
  variants?: string[];   // e.g., ["Masala", "Ginger", "Cardamom"] or ["Powdered", "Whole / Non-powdered"]
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
    retailPrice: 65,
    wholesaleAvailable: true,
    image: "/images/products/manika rd tea.png",
    description: "Cultivated in the high altitudes of the Manika estate in Valparai, this premium tea powder is handpicked and expertly processed to deliver a brisk, invigorating cup with rich color and deep aroma.",
    shortDescription: "Premium high-altitude Valparai tea known for its brisk strength, rich liquor, and vibrant aroma.",
    availablePackSizes: [
      { size: "250g", price: 65 },
      { size: "500g", price: 130 },
      { size: "1kg", price: 260 }
    ],
    featured: true,
    seasonal: false,
    story: "For generations, the Manika estate in Valparai has been celebrated for cultivating exceptional tea bushes nestled in perennial mountain mist. Handpicked at sunrise and processed with time-honored methods, every cup reflects authentic Western Ghats character.",
    storyDetails: {
      origin: "High-altitude Manika Tea Estate, Valparai, Tamil Nadu (3,500+ ft altitude).",
      taste: "Robust, full-bodied with a classic brisk finish.",
      aroma: "Earthy and deeply fragrant, capturing morning estate dew.",
      freshness: "Sealed at origin to lock in volatile essential tea oils.",
      processing: "Curled and roasted CTC leaves blended for consistent brisk strength."
    },
    whyChooseUs: [
      "Direct from Valparai hill plantations",
      "Freshly packed in aroma-lock pouches",
      "No artificial colors or added chemical flavours",
      "Premium handpicked tea leaves",
      "15+ years of trusted estate trading"
    ],
    benefits: [
      "Natural source of tea antioxidants",
      "Gentle, clean morning refreshment and focus",
      "Consistent brisk brew with rich golden milk color",
      "Great value direct estate pricing"
    ],
    sourceInfo: "Directly sourced from the Manika Tea Estate in Valparai, Tamil Nadu.",
    wholesaleDetails: "Available in wholesale sacks of 10kg, 25kg, and 50kg for hotels, tea stalls, and retailers.",
    deliveryDetails: "Shipped across Tamil Nadu and pan-India via ST Courier, Professional Courier, and bus transport."
  },
  {
    id: "waterfall-tea",
    name: "Water Fall Tea Packs",
    slug: "waterfall-tea-packs",
    category: "Premium Tea",
    retailPrice: 170,
    wholesaleAvailable: true,
    image: "/images/products/water-fall-tea product.jpeg",
    description: "Premium export-quality tea packs containing select leaves from the famous Waterfall estates of Valparai. It offers an exceptionally smooth finish and delicate bouquet, ideal for both black tea and light milk brews.",
    shortDescription: "Export-quality premium tea with a smooth finish and exquisite aroma.",
    availablePackSizes: [
      { size: "250g", price: 170 },
      { size: "500g", price: 200 },
      { size: "1kg", price: 300 }
    ],
    featured: true,
    seasonal: false,
    story: "Grown in the micro-climate surrounding the majestic waterfalls of Valparai, these tea gardens receive steady mountain humidity and cool breeze. This natural habitat yields a remarkably smooth leaf with low astringency.",
    storyDetails: {
      origin: "Waterfall Tea Estates, Valparai, Tamil Nadu.",
      taste: "Exceptionally smooth, balanced liquor with subtle sweetness.",
      aroma: "Clean, delicate, and gently floral.",
      freshness: "Packed in foil laminate to ensure moisture protection.",
      processing: "Gentle rolling and controlled oxidation to retain delicate notes."
    },
    whyChooseUs: [
      "Export-grade quality selection",
      "Grown in pristine waterfall estate micro-climate",
      "100% pure tea leaves with zero additives",
      "Excellent as smooth black tea or mild chai",
      "Authentic estate-packaged guarantee"
    ],
    benefits: [
      "Very smooth mouthfeel with minimal bitterness",
      "Naturally hydrating and comforting hot brew",
      "Abundant in natural tea polyphenols",
      "Direct hill station estate source"
    ],
    sourceInfo: "Harvested from Waterfall tea estates in Valparai.",
    wholesaleDetails: "Bulk orders available from 25kg upwards for commercial establishments and corporate gifting.",
    deliveryDetails: "Prompt dispatch within 24 hours of order confirmation."
  },
  {
    id: "bob-tea",
    name: "BOB Grade Tea Powder",
    slug: "bob-grade-tea-powder",
    category: "Premium Tea",
    retailPrice: 60,
    wholesaleAvailable: true,
    image: "/images/products/bob-grade-tea.png",
    description: "A robust leaf-grade black tea (traditionally referenced under BOP / Broken Orange Pekoe leaf grading) crafted for a brisk, rich brew. Suitable for both strong black tea and traditional milk tea.",
    shortDescription: "Leaf-grade black tea suitable for invigorating black tea and rich milk tea.",
    availablePackSizes: [
      { size: "250g", price: 60 },
      { size: "500g", price: 120 },
      { size: "1kg", price: 240 }
    ],
    featured: false,
    seasonal: false,
    story: "Our BOB Grade tea is blended from broken leaf grades that release color and strong flavor rapidly. Perfect for South Indian home kitchens and tea stalls that demand a hearty, spirited cup.",
    storyDetails: {
      origin: "Select smallholder tea gardens across the Valparai plateau.",
      taste: "Bold, punchy, and briskly astringent, balancing milk and spices effortlessly.",
      aroma: "Strong, malty fragrance with classic hill-station notes.",
      freshness: "Handled through modern moisture-tight storage.",
      processing: "Fine-cut broken leaf grade providing rapid infusion."
    },
    whyChooseUs: [
      "Fast infusion with rich caramel-brown color",
      "Economical daily brew with genuine quality",
      "Ideal foundation for ginger or cardamom tea",
      "Directly sourced without middleman markups"
    ],
    benefits: [
      "Quick extraction saves time during morning preparation",
      "Bold flavour profile that pairs naturally with milk and sweeteners",
      "Clean source of refreshing caffeine",
      "Budget-friendly authentic hill tea"
    ],
    sourceInfo: "Sourced from smallholder tea plantations around Valparai.",
    wholesaleDetails: "Wholesale available in 30kg and 50kg bags. Ideal for cafes, canteens, and hotels.",
    deliveryDetails: "Standard road transport and courier delivery available throughout South India."
  },
  {
    id: "green-tea",
    name: "Green Tea",
    slug: "valparai-green-tea",
    category: "Premium Tea",
    retailPrice: 200,
    wholesaleAvailable: true,
    image: "/images/products/green-tea.jpg",
    description: "Handpicked whole green tea leaves from high-altitude Valparai tea gardens. Carefully pan-fired and unfermented to preserve natural catechins, gentle vegetal notes, and a clean, refreshing palate.",
    shortDescription: "Whole-leaf high-grown green tea packed with natural antioxidants and delicate vegetal notes.",
    availablePackSizes: [
      { size: "250g", price: 200 },
      { size: "500g", price: 400 },
      { size: "1kg", price: 800 }
    ],
    featured: true,
    seasonal: false,
    story: "Nurtured on the misty high ridges of Valparai, our green tea is harvested by hand in early mornings. Because the leaves are unoxidized, they retain their lively green hue, subtle mineral clarity, and pure mountain freshness.",
    storyDetails: {
      origin: "High-altitude organic-certified plots in Valparai.",
      taste: "Delicate, light, with natural vegetal sweetness and zero harsh bitterness.",
      aroma: "Fresh grassy and floral notes of morning estate air.",
      freshness: "Vacuum-sealed at the estate to retain leaf vibrance.",
      processing: "Immediate pan-steaming and rolling to arrest enzymatic oxidation."
    },
    whyChooseUs: [
      "100% whole leaf green tea, not dust or fannings",
      "High natural EGCG and catechin content",
      "Sourced directly from pristine hill elevations",
      "No added essences or flavor chemicals"
    ],
    benefits: [
      "Abundant in natural tea polyphenols and flavonoids",
      "Light and hydrating beverage for everyday wellness",
      "Smooth, clean finish without astringency when brewed right",
      "Authentic single-origin Valparai harvest"
    ],
    sourceInfo: "Harvested from select high-elevation organic tea blocks in Valparai.",
    wholesaleDetails: "Bulk leaf packs available in 5kg, 10kg, and 20kg tins and boxes.",
    deliveryDetails: "Vacuum-packed food-grade packaging. Dispatched within 24 hours."
  },
  {
    id: "flavoured-tea",
    name: "Flavoured Tea",
    slug: "valparai-flavoured-tea",
    category: "Premium Tea",
    retailPrice: 100,
    wholesaleAvailable: true,
    image: "/images/products/flavoured-images.png",
    description: "Estate black tea skillfully blended with 100% natural, farm-sourced spices. Available in your choice of Masala, Ginger, or Cardamom flavours for an authentically warm, fragrant Indian chai experience.",
    shortDescription: "Black tea blended with real natural spices. Choose your flavour: Masala, Ginger, or Cardamom.",
    variantLabel: "Flavour",
    variants: ["Masala", "Ginger", "Cardamom"],
    availablePackSizes: [
      { size: "250g", price: 100 },
      { size: "500g", price: 200 },
      { size: "1kg", price: 400 }
    ],
    featured: true,
    seasonal: false,
    story: "Rather than using synthetic flavoring oils or artificial concentrates, we combine our strong Valparai black tea with real sun-dried spices crushed in small batches. Choose from warming dry ginger, aromatic green cardamom, or our traditional whole masala blend.",
    storyDetails: {
      origin: "Valparai estate tea leaves blended with spices from local Western Ghats gardens.",
      taste: "Rich and layered, marrying brisk tea with genuine spice warmth.",
      aroma: "An inviting aroma of authentic crushed hill spices.",
      freshness: "Blended in small weekly batches for consistent fragrance.",
      processing: "CTC black tea blended with coarsely crushed natural dried spices."
    },
    whyChooseUs: [
      "100% real spices: Masala, Ginger, or Cardamom",
      "Zero synthetic flavors, chemicals, or artificial essences",
      "Freshly prepared in small estate batches",
      "Consistent spice-to-tea balance in every cup"
    ],
    benefits: [
      "Ginger and cardamom provide natural warming comfort",
      "Perfect aromatic accompaniment for morning and evening chai",
      "Made with real whole ingredients you can see and smell",
      "Versatile brew that pairs naturally with milk and sweeteners"
    ],
    sourceInfo: "Blended in Valparai using regional spices and tea.",
    wholesaleDetails: "Available in separate flavour batches (10kg minimum order per flavour).",
    deliveryDetails: "Aroma-barrier packaging ensures essential oils remain intact during transit."
  },
  {
    id: "coffee-jaggery",
    name: "Coffee Powder with Jaggery",
    slug: "coffee-powder-with-jaggery",
    category: "Hill Coffee",
    retailPrice: 100,
    wholesaleAvailable: true,
    image: "/images/products/coffe with jaggrreu.png",
    description: "Shade-grown Valparai coffee beans freshly roasted and blended with traditional unrefined organic jaggery. Delivers a rich, earthy South Indian brew with balanced natural sweetness.",
    shortDescription: "Traditional South Indian shade-grown coffee blended with pure organic jaggery.",
    availablePackSizes: [
      { size: "250g", price: 100 },
      { size: "500g", price: 200 },
      { size: "1kg", price: 400 }
    ],
    featured: true,
    seasonal: false,
    story: "In the Western Ghats hills, coffee was traditionally paired with unrefined palm and cane jaggery. This blend honors that regional tradition by grinding roasted estate beans together with pure jaggery powder for an effortless, comforting brew.",
    storyDetails: {
      origin: "Shade-grown coffee estates in Valparai, blended with organic jaggery.",
      taste: "Deep coffee flavor complemented by earthy caramel sweetness.",
      aroma: "Fresh roasted coffee beans with warm hints of rustic jaggery.",
      freshness: "Ground in small batches to preserve roast character.",
      processing: "Medium-dark roasted beans pulverized with dry granulated jaggery."
    },
    whyChooseUs: [
      "Pre-blended with natural unrefined jaggery",
      "No white refined sugar or artificial sweeteners",
      "Authentic South Indian plantation recipe",
      "Quick and convenient to brew"
    ],
    benefits: [
      "Convenient sweet coffee without needing white sugar",
      "Unrefined jaggery provides natural trace minerals",
      "Robust coffee kick with smooth caramel aftertaste",
      "Estate-level freshness in every pack"
    ],
    sourceInfo: "Coffee harvested from shade-grown estates in Valparai.",
    wholesaleDetails: "Wholesale boxes of 10kg and 20kg available for retail stores and cafes.",
    deliveryDetails: "Moisture-proof sealed packaging to prevent jaggery caking."
  },
  {
    id: "pure-coffee",
    name: "Pure Filter Coffee Powder",
    slug: "pure-filter-coffee-powder",
    category: "Hill Coffee",
    retailPrice: 100,
    wholesaleAvailable: true,
    image: "/images/products/filter-coffe.png",
    description: "100% pure shade-grown Arabica and Robusta beans from Valparai estates, medium-dark roasted and finely ground for authentic South Indian filter decoction with zero chicory.",
    shortDescription: "Authentic 100% pure shade-grown South Indian filter coffee with zero chicory.",
    availablePackSizes: [
      { size: "250g", price: 100 },
      { size: "500g", price: 200 },
      { size: "1kg", price: 400 }
    ],
    featured: false,
    seasonal: false,
    story: "Grown under natural shade trees alongside pepper vines and citrus groves in Valparai, the cherries ripen slowly. The result is a dense, flavourful bean that delivers a rich crema and lingering aroma in traditional filter brewers.",
    storyDetails: {
      origin: "Single-origin shade estates in the Valparai hills.",
      taste: "Bold, full-bodied with notes of dark cocoa and roasted grains.",
      aroma: "Deep, heady, and nostalgic South Indian filter coffee fragrance.",
      freshness: "Roasted and ground in regular batches.",
      processing: "Washed and sun-dried beans, medium-dark roasted and precision ground."
    },
    whyChooseUs: [
      "100% pure coffee, zero chicory fillers",
      "Shade-grown at high Western Ghats elevations",
      "Ideal grind size for traditional brass and stainless steel filters",
      "Direct from local coffee planters"
    ],
    benefits: [
      "Pure, unadulterated coffee flavour and natural aroma",
      "Yields thick, concentrated filter decoction",
      "Clean source of morning alertness",
      "Guaranteed free from synthetic flavoring or additives"
    ],
    sourceInfo: "Grown in shade-canopy coffee estates around Valparai.",
    wholesaleDetails: "Available in custom roasting batches and bulk 10kg packs for cafes and hotels.",
    deliveryDetails: "Sealed in one-way valve degassing bags for peak aroma retention."
  },
  {
    id: "black-pepper",
    name: "Black Pepper",
    slug: "black-pepper",
    category: "Organic Spices",
    retailPrice: 90,
    wholesaleAvailable: true,
    image: "/images/products/black pepper.png",
    description: "Bold, sun-dried whole black peppercorns grown on shade trees in Valparai estates. Unpolished and natural, delivering pungent aroma and sharp warmth.",
    shortDescription: "Sun-dried bold black peppercorns grown on hill estate shade trees.",
    availablePackSizes: [
      { size: "100g", price: 90 },
      { size: "250g", price: 190 },
      { size: "500g", price: 360 },
      { size: "1kg", price: 700 }
    ],
    featured: true,
    seasonal: false,
    story: "Black pepper vines climb the tall silver oak and shade trees of Valparai tea and coffee plantations. Harvested at full maturity and sun-dried naturally, they retain high piperine and deep essential oils.",
    storyDetails: {
      origin: "Grown organically on shade trees across Valparai plantations.",
      taste: "Pungent, bold, and fiery with a warm herbal finish.",
      aroma: "Distinctly woody, floral, and sharply spicy.",
      freshness: "Whole berries retain freshness until crushed in your kitchen.",
      processing: "Hand-picked, naturally sun-dried without mineral oil polish."
    },
    whyChooseUs: [
      "Bold, unsorted premium size peppercorns",
      "No chemical washing, colouring, or polishing oils",
      "Grown naturally as companion crops on hill estates",
      "Intense aroma and authentic heat"
    ],
    benefits: [
      "High natural piperine concentration",
      "Essential spice for traditional South Indian rasam and curries",
      "Whole berries ensure essential oils stay intact",
      "Completely natural and preservative-free"
    ],
    sourceInfo: "Estate companion vines in Valparai, Tamil Nadu.",
    wholesaleDetails: "Bulk gunny sacks of 25kg and 50kg available for retail packers and spice merchants.",
    deliveryDetails: "Moisture-sealed packaging ensuring dryness during transit."
  },
  {
    id: "green-cardamom",
    name: "Green Cardamom",
    slug: "valparai-green-cardamom",
    category: "Organic Spices",
    retailPrice: 350,
    wholesaleAvailable: true,
    image: "/images/products/green-cardamom.jpg",
    description: "Handpicked 8mm+ jumbo green cardamom pods from high-elevation Valparai spice gardens. Intensely fragrant, sweet, and bursting with natural essential oils.",
    shortDescription: "Premium 8mm+ aromatic whole green cardamom pods from Valparai hills.",
    availablePackSizes: [
      { size: "100g", price: 350 },
      { size: "250g", price: 850 },
      { size: "500g", price: 1650 }
    ],
    featured: true,
    seasonal: false,
    story: "Valparai's moist, cool ravines produce some of the finest green cardamoms in South India. These pods are carefully picked at peak ripeness, gently cured in wood-fired dryers, and graded by size to provide unmatched aroma.",
    storyDetails: {
      origin: "High-altitude spice gardens in the Valparai forest boundaries.",
      taste: "Sweet, cooling, and intensely fragrant with citrus and camphor notes.",
      aroma: "Powerful floral bouquet from fresh, unextracted seed oils.",
      freshness: "Strictly sorted and airtight packed to lock in color and scent.",
      processing: "Hand-harvested, cured at low heat, and sorted into 8mm+ grades."
    },
    whyChooseUs: [
      "Jumbo 8mm+ bold pods packed with seeds",
      "Natural curing without artificial green dye or polishing",
      "Direct from Valparai hill farmers",
      "Airtight packing protects volatile terpene oils"
    ],
    benefits: [
      "The 'Queen of Spices' adds royal fragrance to sweets and biryanis",
      "Traditional mouth freshener and culinary staple",
      "Natural digestive aroma and comforting herbal presence",
      "High oil content means a few pods go a long way"
    ],
    sourceInfo: "Sourced directly from spice growers in Valparai, Western Ghats.",
    wholesaleDetails: "Graded lots available from 5kg upwards. Pricing follows weekly cardamom auction trends.",
    deliveryDetails: "Packed in multi-layer aroma-barrier pouches."
  },
  {
    id: "cloves",
    name: "Cloves",
    slug: "valparai-whole-cloves",
    category: "Organic Spices",
    retailPrice: 160,
    wholesaleAvailable: true,
    image: "/images/products/cloves.jpg",
    description: "Selected whole aromatic cloves with intact heads, harvested from Western Ghats hill plantations. Naturally dried with high eugenol oil content.",
    shortDescription: "Aromatic whole dried cloves with intact crowns and high essential oil content.",
    availablePackSizes: [
      { size: "100g", price: 160 },
      { size: "250g", price: 380 },
      { size: "500g", price: 720 }
    ],
    featured: false,
    seasonal: false,
    story: "Harvested from mature clove trees that thrive on the tropical mountain slopes around Valparai. The unopened flower buds are hand-picked just as they turn reddish-pink, then sun-dried to a rich dark brown.",
    storyDetails: {
      origin: "Western Ghats hill plantations near Valparai.",
      taste: "Pungent, warm, sweet, and intensely numbing.",
      aroma: "Deeply spicy, sweet, and comforting.",
      freshness: "Whole intact buds preserve oil until used.",
      processing: "Hand-picked flower buds solar-dried naturally."
    },
    whyChooseUs: [
      "Whole cloves with undamaged crowns and stems",
      "Unextracted essential oils, oily to touch",
      "Clean, hand-sorted lot without stones or dust",
      "Direct farm sourcing from Tamil Nadu hill tracts"
    ],
    benefits: [
      "High natural eugenol content providing robust aroma",
      "Essential foundation for garam masala, biryani, and mulled tea",
      "Traditional home culinary favorite",
      "Pesticide-free hill station produce"
    ],
    sourceInfo: "Harvested in hill plantations around Valparai.",
    wholesaleDetails: "Bulk supply available in 10kg and 25kg packs.",
    deliveryDetails: "Carefully sealed against humidity."
  },
  {
    id: "cinnamon",
    name: "Cinnamon",
    slug: "valparai-cinnamon-bark",
    category: "Organic Spices",
    retailPrice: 120,
    wholesaleAvailable: true,
    image: "/images/products/cinnamon.jpg",
    description: "Sweet, fragrant Ceylon cinnamon bark quills grown in organic Valparai hill gardens. Delicate woodsy fragrance without harsh bitterness.",
    shortDescription: "Sweet, delicate true cinnamon quills harvested in Valparai spice gardens.",
    availablePackSizes: [
      { size: "100g", price: 120 },
      { size: "250g", price: 280 },
      { size: "500g", price: 540 }
    ],
    featured: false,
    seasonal: false,
    story: "Unlike thick, pungent industrial cassia, our true cinnamon bark is peeled from slender branches, scraped, and naturally rolled into fragile layered quills. It imparts a gentle sweetness to both savory and sweet dishes.",
    storyDetails: {
      origin: "Valparai organic spice gardens, Tamil Nadu.",
      taste: "Mild, sweet, and warm without biting astringency.",
      aroma: "Subtle, woody, and sweetly fragrant.",
      freshness: "Shade-dried quills maintaining delicate inner bark layers.",
      processing: "Hand-peeled, layered, and naturally rolled into quills."
    },
    whyChooseUs: [
      "True delicate cinnamon bark quills",
      "Naturally low in coumarin compared to common cassia",
      "Pleasant natural sweetness for cooking and teas",
      "Clean, unadulterated estate quality"
    ],
    benefits: [
      "Subtle fragrance elevates desserts, curries, and spiced teas",
      "Traditional spice revered across Indian culinary traditions",
      "Easy to powder or steep whole in hot water",
      "Pure organic produce direct from the hills"
    ],
    sourceInfo: "Sourced from smallholder spice farmers in Valparai.",
    wholesaleDetails: "Available in 5kg, 10kg, and 25kg bundles.",
    deliveryDetails: "Packed securely in sturdy cartons to prevent quill breakage."
  },
  {
    id: "normal-turmeric",
    name: "Normal Turmeric",
    slug: "valparai-normal-turmeric",
    category: "Organic Spices",
    retailPrice: 100,
    wholesaleAvailable: true,
    image: "/images/products/normal-turmeric.jpg",
    description: "Pure culinary turmeric (Curcuma longa) cultivated by local farmers in the Valparai region. Rich in natural curcumin, providing a vibrant golden hue and warm earthy flavour for everyday culinary recipes.",
    shortDescription: "Pure culinary turmeric with high natural curcumin, available in Powdered or Whole form.",
    variantLabel: "Form",
    variants: ["Powdered", "Whole / Non-powdered"],
    availablePackSizes: [
      { size: "250g", price: 100 },
      { size: "500g", price: 200 },
      { size: "1kg", price: 400 }
    ],
    featured: false,
    seasonal: false,
    story: "Cultivated in fertile hill soil without chemical accelerators. The rhizomes are boiled using traditional methods, sun-dried until rock hard, and either left whole or milled without starches or lead polishing.",
    storyDetails: {
      origin: "Farms around the Valparai valley, Tamil Nadu.",
      taste: "Warm, earthy, and mildly peppery.",
      aroma: "Distinctly pungent, fresh turmeric aroma.",
      freshness: "Processed and packaged in small fresh batches.",
      processing: "Traditional parboiling, sun-curing, and slow cold-milling."
    },
    whyChooseUs: [
      "Zero artificial yellow dye or starch fillers",
      "Available as fine powder or whole dried rhizomes",
      "High natural curcumin percentage",
      "100% pure food-grade culinary turmeric"
    ],
    benefits: [
      "Essential foundation of Indian cooking and curries",
      "Provides authentic deep golden color naturally",
      "Whole form lets you grind at home for guaranteed purity",
      "Direct farm product without industrial polishing"
    ],
    sourceInfo: "Harvested by local farmers in the Valparai area.",
    wholesaleDetails: "Bulk supplies in 25kg bags for food manufacturers and wholesalers.",
    deliveryDetails: "Food-safe moisture-proof lined bags."
  },
  {
    id: "kasthuri-turmeric",
    name: "Kasthuri Turmeric",
    slug: "valparai-kasthuri-turmeric",
    category: "Organic Spices",
    retailPrice: 220,
    wholesaleAvailable: true,
    image: "/images/products/kasthuri-turmeric.jpg",
    description: "Authentic wild aromatic Kasthuri Manjal (Curcuma aromatica) sourced from forest fringes in Valparai. Prized for its sweet, camphoraceous aroma and non-staining quality, it is used exclusively for traditional skincare, face packs, and cosmetic bath powders (not for culinary use).",
    shortDescription: "Aromatic wild Kasthuri Manjal for traditional skincare, available in Powdered or Whole form.",
    variantLabel: "Form",
    variants: ["Powdered", "Whole / Non-powdered"],
    availablePackSizes: [
      { size: "250g", price: 220 },
      { size: "500g", price: 400 },
      { size: "1kg", price: 780 }
    ],
    featured: false,
    seasonal: false,
    story: "Kasthuri Manjal grows naturally in wild forest borders of the Anamalai hills. Unlike culinary turmeric, it does not leave a bright orange food stain on skin and carries an unmistakable sweet, herbal scent cherished in South Indian traditional personal care.",
    storyDetails: {
      origin: "Forest settlements and fringe farms in Valparai.",
      taste: "Not recommended for cooking; bitter and camphoraceous.",
      aroma: "Intensely herbal, camphor-like, and sweet.",
      freshness: "Carefully dried and freshly processed.",
      processing: "Shade-dried wild rhizomes cleaned and processed for cosmetic use."
    },
    whyChooseUs: [
      "Genuine Curcuma aromatica, not stained ordinary turmeric",
      "Non-staining natural herbal formula",
      "Available as fine cosmetic powder or whole roots",
      "Sourced from forest-fringe communities"
    ],
    benefits: [
      "Cherished in South Indian bridal ubtan and daily face masks",
      "Pleasant camphoraceous natural fragrance",
      "Leaves skin feeling fresh without stubborn yellow discoloration",
      "100% natural herb with zero synthetic perfume"
    ],
    sourceInfo: "Sourced from forest-fringe cultivation in the Valparai region.",
    wholesaleDetails: "Bulk bags available for Ayurvedic and herbal cosmetic producers.",
    deliveryDetails: "Hermetically sealed to preserve unique herbal fragrance."
  },
  {
    id: "forest-honey",
    name: "Pure Forest Honey",
    slug: "pure-forest-honey",
    category: "Forest & Seasonal Products",
    retailPrice: 180,
    wholesaleAvailable: true,
    image: "/images/products/honey.png",
    description: "Raw, unprocessed multi-floral forest honey gathered by indigenous tribal communities from wild beehives in the forests of Valparai. Naturally strained without artificial heating, ultra-filtration, or added syrups.",
    shortDescription: "Raw, unprocessed multi-floral wild honey sustainably harvested by forest tribes.",
    availablePackSizes: [
      { size: "250g", price: 180 }
    ],
    featured: true,
    seasonal: false,
    story: "Collected sustainably by tribal honey hunters from tall forest trees and cliffs in the Valparai hills. The bees forage across thousands of wild forest flowers, giving this raw honey a complex multi-floral bouquet that reflects each season.",
    storyDetails: {
      origin: "Deep forest settlements in the Valparai region.",
      taste: "Rich, floral, with earthy caramel notes from wild forest blossoms.",
      aroma: "Deeply floral with the scent of wild forest pollen.",
      freshness: "Raw, unpasteurized, and bottled without micro-filtering.",
      processing: "Naturally strained through clean cloth without boiling."
    },
    whyChooseUs: [
      "100% raw and unheated",
      "Harvested by indigenous tribal honey hunters",
      "No added corn syrup, jaggery syrup, or artificial sugars",
      "Naturally rich multi-floral profile"
    ],
    benefits: [
      "Pure natural sweetener for teas and breakfast bowls",
      "Contains natural wild pollen and enzymes",
      "Comforting soothing beverage when mixed with warm water",
      "Directly supports tribal livelihoods in Valparai"
    ],
    sourceInfo: "Collected by native forest communities in the Valparai region.",
    wholesaleDetails: "Bulk jerrycans available for organic stores and wellness brands upon inquiry.",
    deliveryDetails: "Packaged in food-grade leak-proof bottles. Store at room temperature."
  },
  {
    id: "herbal-oils",
    name: "Eucalyptus & Herbal Oils",
    slug: "eucalyptus-herbal-oils",
    category: "Forest & Seasonal Products",
    retailPrice: 90,
    wholesaleAvailable: true,
    image: "/images/products/oils.png",
    description: "Pure steam-distilled Eucalyptus oil and native herbal oils. Highly effective for refreshing aroma, steam inhalation, and massage.",
    shortDescription: "100% steam-distilled pure eucalyptus and therapeutic herbal oils.",
    availablePackSizes: [
      { size: "50ml", price: 90 },
      { size: "100ml", price: 150 },
      { size: "250ml", price: 340 }
    ],
    featured: false,
    seasonal: false,
    story: "Distilled locally using traditional steam stills. Leaves from ancient Nilgiri and Blue Gum trees around Valparai are harvested sustainably by forest dwellers to extract these potent, aromatic oils.",
    storyDetails: {
      origin: "Distilled at local cooperative cottage units in Valparai.",
      taste: "For external use only. Do not ingest.",
      aroma: "Piercingly fresh, camphorous, and deeply clearing.",
      freshness: "Stored in dark amber containers to protect from light.",
      processing: "Slow wood-fired steam distillation."
    },
    whyChooseUs: [
      "100% pure steam-distilled extracts",
      "No synthetic fragrances or mineral oil dilution",
      "Made by local cooperative cottage units",
      "Highly concentrated and therapeutic"
    ],
    benefits: [
      "Ideal for steam inhalation during chilly hill evenings",
      "Invigorating massage oil for muscle comfort",
      "Natural diffuser oil to refresh indoor spaces",
      "Authentic Valparai cottage craft"
    ],
    sourceInfo: "Distilled at local cooperative cottage units in Valparai, Tamil Nadu.",
    wholesaleDetails: "Bulk packaging in glass carboys or metal drums available at factory rates.",
    deliveryDetails: "Secure inner plugs prevent leakage during courier transit."
  },
  {
    id: "avocados",
    name: "Butter Fruit (Avocados)",
    slug: "valparai-butter-fruit-avocado",
    category: "Forest & Seasonal Products",
    retailPrice: 140,
    wholesaleAvailable: false,
    image: "/images/products/avacadoes.png",
    description: "Fresh, creamy, and organic avocados grown in Valparai estates. Known locally as Butter Fruit, these are harvested at perfect maturity for maximum creaminess.",
    shortDescription: "Creamy, estate-grown organic avocados (Butter Fruit).",
    availablePackSizes: [
      { size: "1kg", price: 140 },
      { size: "2kg", price: 260 },
      { size: "5kg", price: 600 }
    ],
    featured: false,
    seasonal: true,
    story: "Avocado trees thrive as companion shade trees in Valparai coffee estates. Sustained entirely by high-altitude mist and rainfall, the fruit develops a rich, creamy, buttery texture.",
    storyDetails: {
      origin: "Harvested from coffee estate companion trees in Valparai (Seasonal).",
      taste: "Incredibly rich, buttery, and delicately nutty.",
      aroma: "Subtle, fresh, and green.",
      freshness: "Plucked only upon order confirmation to ensure transit viability.",
      processing: "Raw, unwashed natural fruit."
    },
    whyChooseUs: [
      "Grown naturally without chemical fertilizers",
      "High-altitude climate produces creamier fruit",
      "Harvested at peak maturity",
      "Farm-fresh direct dispatch"
    ],
    benefits: [
      "Rich in natural healthy fats and dietary fiber",
      "Great for smoothies, breakfast toast, and salads",
      "Freshly plucked from hill trees",
      "100% natural, pesticide-free shade growth"
    ],
    sourceInfo: "Harvested from coffee estate companion trees in Valparai.",
    wholesaleDetails: "Wholesale inquiry available for bulk regional buyers during harvest season.",
    deliveryDetails: "Shipped slightly semi-ripe to avoid bruising during transit."
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
    story: "Made in small batches using premium cocoa grown on the foothills of the Western Ghats. Blended with rich milk solids and roasted local nuts, crafting a nostalgic hill-station delicacy.",
    storyDetails: {
      origin: "Prepared at local home-cottage confectioneries in Valparai town.",
      taste: "Velvety smooth, melting in the mouth with rich cocoa notes.",
      aroma: "Sweet, roasted cocoa with hints of vanilla and nuts.",
      freshness: "Made in small, continuous batches to ensure freshness.",
      processing: "Traditional tempering and hand-molding by local artisans."
    },
    whyChooseUs: [
      "Handcrafted by local cottage artisans",
      "Rich cocoa without cheap vegetable fat substitutes",
      "Loaded with real roasted nuts",
      "Perfect souvenir from the hills"
    ],
    benefits: [
      "Satisfying treat made in small batches",
      "Great gift item representing Valparai hill station",
      "Supports local cottage entrepreneurs",
      "Fresh taste of handcrafted confectionery"
    ],
    sourceInfo: "Prepared at local confectioneries in Valparai town.",
    wholesaleDetails: "Available in bulk gift boxes and custom packs for corporate gifting.",
    deliveryDetails: "Shipped with protective wrap. Refrigerate for 15 minutes before consuming."
  }
];
