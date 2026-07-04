import { Metadata } from "next";
import WholesaleHero from "@/components/wholesale/WholesaleHero";
import PartnerBenefits from "@/components/wholesale/PartnerBenefits";
import WholesaleForm from "@/components/wholesale/WholesaleForm";

export const metadata: Metadata = {
  title: "Wholesale & B2B | Hari Tea Traders",
  description: "Wholesale supply of premium tea, coffee, and organic spices. Ideal for tea shops, hotels, grocery stores, and corporate gifting.",
};

export default function WholesalePage() {
  return (
    <div className="bg-cream min-h-screen">
      <WholesaleHero />
      <PartnerBenefits />
      <WholesaleForm />
    </div>
  );
}
