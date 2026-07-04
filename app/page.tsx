import Hero from "@/components/home/Hero";
import Story from "@/components/home/Story";
import WhyValparai from "@/components/home/WhyValparai";
import Categories from "@/components/home/Categories";
import WholesaleCTA from "@/components/home/WholesaleCTA";
import InstagramCTA from "@/components/home/InstagramCTA";
import GoogleReviews from "@/components/home/GoogleReviews";

export default function Home() {
  return (
    <>
      <Hero />
      <Story />
      <WhyValparai />
      <Categories />
      <WholesaleCTA />
      
      {/* Testimonials / Trust Section */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6 sm:px-8 md:px-12 text-center">
          <div className="flex flex-col items-center justify-center mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-[2px] bg-gold-400" />
              <span className="text-forest-700 uppercase tracking-widest text-sm font-semibold">Trusted by Many</span>
              <div className="w-12 h-[2px] bg-gold-400" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-forest-900 leading-tight">
              A Legacy of <span className="text-gold-600">Purity</span>
            </h2>
          </div>
          
          <div className="w-full max-w-5xl mx-auto">
            <GoogleReviews />
            
            <div className="mt-12 text-center">
              <a 
                href="https://g.page/r/CYyWfw4DONDBEBI/review" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-forest-800 text-white font-semibold text-base sm:text-lg rounded-full shadow-md hover:bg-forest-900 transition-all hover:-translate-y-1 text-center"
              >
                Share Your Experience
              </a>
            </div>
          </div>
        </div>
      </section>
      <InstagramCTA />
    </>
  );
}
