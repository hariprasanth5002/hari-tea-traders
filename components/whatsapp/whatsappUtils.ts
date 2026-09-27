import { CartItem } from "@/context/CartContext";

const WHATSAPP_NUMBER = "919486353900"; // Shop's WhatsApp number

/**
 * Encodes a string message into a WhatsApp link.
 */
export function getWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Generates the WhatsApp checkout message for a single product.
 * Format requirement:
 * Product → Variant/Flavour/Form → Weight → Quantity → Unit Price → Subtotal → Total
 */
export function getSingleProductWhatsAppMessage(
  productName: string,
  packSize: string,
  quantity: number,
  price: number,
  selectedVariant?: string,
  variantLabel?: string
): string {
  const subtotal = price * quantity;
  const variantLine = selectedVariant
    ? `\n• ${variantLabel || "Variant"}: ${selectedVariant}`
    : "";

  return `Hello Hari Tea Traders 🌿

I would like to place an order:

• Product: ${productName}${variantLine}
• Weight: ${packSize}
• Quantity: ${quantity}
• Unit Price: ₹${price}
• Subtotal: ₹${subtotal}
• Total: ₹${subtotal}

Order Flow:
${productName}${selectedVariant ? ` → ${selectedVariant}` : ""} → ${packSize} → ${quantity} qty → ₹${price} unit price → ₹${subtotal} subtotal → ₹${subtotal} total

Please confirm product availability and dispatch details.`;
}

/**
 * Generates the WhatsApp checkout message for a complete cart.
 * Format requirement:
 * Product → Variant/Flavour/Form → Weight → Quantity → Unit Price → Subtotal → Total
 */
export function getCartWhatsAppMessage(
  name: string,
  phone: string,
  city: string,
  items: CartItem[],
  subtotal: number
): string {
  const productLines = items
    .map((item, idx) => {
      const variantStr = item.selectedVariant ? ` → ${item.selectedVariant}` : "";
      const itemSubtotal = item.price * item.quantity;
      return `${idx + 1}. ${item.productName}${variantStr} → ${item.selectedPackSize} → ${item.quantity} qty → ₹${item.price} unit price → ₹${itemSubtotal} subtotal`;
    })
    .join("\n");

  return `Hello Hari Tea Traders 🌿

I would like to place an order from your website.

Customer Name: ${name}
Phone: ${phone}
City: ${city}

Order Items (Product → Variant/Flavour/Form → Weight → Quantity → Unit Price → Subtotal):
${productLines}

Total: ₹${subtotal}

Please confirm availability, payment method and delivery timeline.`;
}
