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
 */
export function getSingleProductWhatsAppMessage(
  productName: string,
  packSize: string,
  quantity: number,
  price: number
): string {
  const itemTotal = price * quantity;
  return `Hello Hari Tea Traders 🌿

I would like to place an order.

Product: ${productName}
Pack Size: ${packSize}
Quantity: ${quantity}
Price: ₹${itemTotal}

Please confirm availability, pricing and delivery details.`;
}

/**
 * Generates the WhatsApp checkout message for a complete cart.
 */
export function getCartWhatsAppMessage(
  name: string,
  phone: string,
  city: string,
  items: CartItem[],
  subtotal: number
): string {
  const productLines = items
    .map((item) => `• ${item.productName} (${item.selectedPackSize}) - Quantity: ${item.quantity} - ₹${item.price * item.quantity}`)
    .join("\n");

  return `Hello Hari Tea Traders 🌿

I would like to place an order.

Customer Name:
${name}

Phone:
${phone}

City:
${city}

Products:
${productLines}

Total Subtotal: ₹${subtotal}

Please confirm availability, pricing and delivery details.`;
}
