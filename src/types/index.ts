export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: Category;
}

export type Category = 'marmitas' | 'pratos' | 'bebidas';

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CustomerData {
  name: string;
  phone: string;
  deliveryType: 'entrega' | 'retirada';
  address: Address | null;
  payment: PaymentMethod;
  changeFor: string;
  observation: string;
}

export interface Address {
  cep: string;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
}

export type PaymentMethod = 'pix' | 'dinheiro' | 'cartao';

export type DeliveryType = 'entrega' | 'retirada';

export interface StoreConfig {
  storeName: string;
  whatsappNumber: string;
  deliveryFee: number;
  minimumOrder: number;
  address: string;
  openingHours: OpeningHours;
}

export interface OpeningHours {
  [key: string]: { open: string; close: string } | null;
}
