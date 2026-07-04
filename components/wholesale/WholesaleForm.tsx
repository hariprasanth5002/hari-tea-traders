"use client";

import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { getWhatsAppLink } from "@/components/whatsapp/whatsappUtils";
import { products } from "@/data/products";

export default function WholesaleForm() {
  const [formData, setFormData] = useState({
    businessName: "",
    contactPerson: "",
    phone: "",
    email: "",
    gst: "",
    city: "",
    state: "",
    estimatedQuantity: "",
    preferredContact: "WhatsApp",
    additionalNotes: ""
  });

  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  // Filter only wholesale available products
  const wholesaleProducts = products.filter(p => p.wholesaleAvailable);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleProductToggle = (productName: string) => {
    setSelectedProducts(prev => 
      prev.includes(productName) 
        ? prev.filter(p => p !== productName)
        : [...prev, productName]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct structured WhatsApp message
    let message = `*NEW WHOLESALE INQUIRY* 🏢\n\n`;
    message += `*Business Details*\n`;
    message += `Business Name: ${formData.businessName}\n`;
    message += `Contact Person: ${formData.contactPerson}\n`;
    message += `Phone: ${formData.phone}\n`;
    if (formData.email) message += `Email: ${formData.email}\n`;
    if (formData.gst) message += `GST: ${formData.gst}\n`;
    message += `Location: ${formData.city}, ${formData.state}\n\n`;

    message += `*Order Requirements*\n`;
    message += `Interested Products:\n`;
    if (selectedProducts.length > 0) {
      selectedProducts.forEach(p => {
        message += `• ${p}\n`;
      });
    } else {
      message += `• Not specified\n`;
    }
    
    message += `\nEstimated Monthly Quantity: ${formData.estimatedQuantity || "Not specified"}\n`;
    message += `Preferred Contact Method: ${formData.preferredContact}\n`;
    
    if (formData.additionalNotes) {
      message += `\n*Additional Notes*\n${formData.additionalNotes}\n`;
    }

    const link = getWhatsAppLink(message);
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <div id="inquiry-form" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-forest-900 mb-4">
              Start Your Wholesale Inquiry
            </h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto">
              Fill out the form below to help us understand your business needs. 
              Submitting this form will securely open WhatsApp to send us your details directly.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-forest-50/30 p-6 md:p-10 rounded-3xl border border-forest-100 shadow-sm">
            
            <h3 className="font-heading text-xl font-bold text-forest-900 mb-6 border-b border-forest-100 pb-2">
              Business Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-semibold text-forest-900 mb-2">Business Name *</label>
                <input 
                  required 
                  type="text" 
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-xl border border-forest-100 bg-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all"
                  placeholder="e.g. ABC Organics"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-forest-900 mb-2">Contact Person *</label>
                <input 
                  required 
                  type="text" 
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-xl border border-forest-100 bg-white focus:outline-none focus:border-gold-500 transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-forest-900 mb-2">Phone Number *</label>
                <input 
                  required 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-xl border border-forest-100 bg-white focus:outline-none focus:border-gold-500 transition-all"
                  placeholder="+91"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-forest-900 mb-2">Email Address (Optional)</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-xl border border-forest-100 bg-white focus:outline-none focus:border-gold-500 transition-all"
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-forest-900 mb-2">City *</label>
                <input 
                  required 
                  type="text" 
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-xl border border-forest-100 bg-white focus:outline-none focus:border-gold-500 transition-all"
                  placeholder="City"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-forest-900 mb-2">State *</label>
                <input 
                  required 
                  type="text" 
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-xl border border-forest-100 bg-white focus:outline-none focus:border-gold-500 transition-all"
                  placeholder="State"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-forest-900 mb-2">GST Number (Optional)</label>
                <input 
                  type="text" 
                  name="gst"
                  value={formData.gst}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-xl border border-forest-100 bg-white focus:outline-none focus:border-gold-500 transition-all"
                  placeholder="For B2B billing"
                />
              </div>
            </div>

            <h3 className="font-heading text-xl font-bold text-forest-900 mb-6 border-b border-forest-100 pb-2">
              Order Requirements
            </h3>
            
            <div className="mb-6">
              <label className="block text-sm font-semibold text-forest-900 mb-3">Products Interested In *</label>
              <div className="flex flex-wrap gap-3">
                {wholesaleProducts.map((product) => (
                  <button
                    key={product.id}
                    type="button"
                    onClick={() => handleProductToggle(product.name)}
                    className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all border ${
                      selectedProducts.includes(product.name)
                        ? "bg-forest-900 border-forest-900 text-white"
                        : "bg-white border-forest-100 text-forest-800 hover:border-forest-300"
                    }`}
                  >
                    {product.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-semibold text-forest-900 mb-2">Estimated Monthly Quantity</label>
                <select 
                  name="estimatedQuantity"
                  value={formData.estimatedQuantity}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-xl border border-forest-100 bg-white focus:outline-none focus:border-gold-500 transition-all"
                >
                  <option value="">Select an option</option>
                  <option value="10kg - 50kg">10kg - 50kg</option>
                  <option value="50kg - 100kg">50kg - 100kg</option>
                  <option value="100kg - 500kg">100kg - 500kg</option>
                  <option value="500kg+">500kg+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-forest-900 mb-2">Preferred Contact Method</label>
                <select 
                  name="preferredContact"
                  value={formData.preferredContact}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-xl border border-forest-100 bg-white focus:outline-none focus:border-gold-500 transition-all"
                >
                  <option value="WhatsApp">WhatsApp</option>
                  <option value="Phone Call">Phone Call</option>
                  <option value="Email">Email</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-forest-900 mb-2">Additional Notes / Custom Requests</label>
                <textarea 
                  name="additionalNotes"
                  value={formData.additionalNotes}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full p-3 rounded-xl border border-forest-100 bg-white focus:outline-none focus:border-gold-500 transition-all"
                  placeholder="Any specific blends, packaging needs, or questions..."
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={!formData.businessName || !formData.contactPerson || !formData.phone || !formData.city || !formData.state}
              className="w-full py-5 bg-[#25D366] hover:bg-[#1ebd5b] text-white rounded-2xl font-bold text-lg uppercase tracking-wider transition-all flex items-center justify-center gap-3 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FaWhatsapp className="w-6 h-6" />
              Continue on WhatsApp
            </button>
            <p className="text-center text-xs text-charcoal/50 mt-4">
              By clicking continue, you will be redirected to WhatsApp with your securely formatted inquiry.
            </p>

          </form>
        </div>
      </div>
    </div>
  );
}
