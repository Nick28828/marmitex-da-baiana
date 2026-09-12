import type { CartItem, CustomerData } from '../types';
import { store } from '../config/store';
import { formatCurrency } from './currency';

export function generateWhatsAppUrl(items: CartItem[], customer: CustomerData): string {
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const deliveryFee = customer.deliveryType === 'entrega' ? store.deliveryFee : 0;
  const total = subtotal + deliveryFee;

  let msg = `🍽️ *PEDIDO - ${store.storeName.toUpperCase()}*\n`;
  msg += `━━━━━━━━━━━━━━━━━━\n\n`;

  items.forEach((item) => {
    msg += `${item.quantity}x ${item.product.name}\n`;
    msg += `   ${formatCurrency(item.product.price * item.quantity)}\n`;
    msg += `   ${item.product.description}\n\n`;
  });

  msg += `━━━━━━━━━━━━━━━━━━\n`;
  msg += `💰 *Subtotal:* ${formatCurrency(subtotal)}\n`;

  if (customer.deliveryType === 'entrega') {
    msg += `🚚 *Taxa de entrega:* ${formatCurrency(deliveryFee)}\n`;
  }

  msg += `💳 *TOTAL:* ${formatCurrency(total)}\n\n`;

  msg += `👤 *Cliente:* ${customer.name}\n`;
  msg += `📱 *WhatsApp:* ${customer.phone}\n\n`;

  if (customer.deliveryType === 'entrega') {
    msg += `🚚 *Entrega em casa*\n`;
    if (customer.address) {
      msg += `📍 ${customer.address.street}, ${customer.address.number}\n`;
      if (customer.address.complement) {
        msg += `   ${customer.address.complement}\n`;
      }
      msg += `   ${customer.address.neighborhood}\n`;
      msg += `   ${customer.address.city} - ${customer.address.cep}\n`;
    }
  } else {
    msg += `🏪 *Retirada no local*\n`;
    msg += `📍 ${store.address}\n`;
  }

  msg += `\n💳 *Pagamento:* ${customer.payment === 'pix' ? 'Pix' : customer.payment === 'dinheiro' ? 'Dinheiro' : 'Cartão'}\n`;

  if (customer.payment === 'dinheiro' && customer.changeFor) {
    msg += `💵 *Troco para:* ${customer.changeFor}\n`;
  }

  if (customer.observation) {
    msg += `\n📝 *Observação:* ${customer.observation}\n`;
  }

  msg += `\nObrigado! ❤️`;

  const encoded = encodeURIComponent(msg);
  return `https://wa.me/${store.whatsappNumber}?text=${encoded}`;
}
