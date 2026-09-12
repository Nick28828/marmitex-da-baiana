import type { Product } from '../types';

export const products: Product[] = [
  // Marmitas
  {
    id: 'marmita-pequena',
    name: 'Marmita Pequena',
    description: 'Arroz, feijão, 1 tipo de carne, farofa e salada.',
    price: 16.0,
    image: '/products/marmita-pequena.jpg',
    category: 'marmitas',
  },
  {
    id: 'marmita-media',
    name: 'Marmita Média',
    description: 'Arroz, feijão, 2 tipos de carne, farofa e salada.',
    price: 18.0,
    image: '/products/marmita-media.jpg',
    category: 'marmitas',
  },
  {
    id: 'marmita-grande',
    name: 'Marmita Grande',
    description: 'Arroz, feijão, 2 tipos de carne, farofa, salada e acompanhamento.',
    price: 22.0,
    image: '/products/marmita-grande.jpg',
    category: 'marmitas',
  },
  // Pratos do Dia
  {
    id: 'feijoada',
    name: 'Feijoada',
    description: 'Feijoada completa com arroz, couve, farofa e laranja.',
    price: 25.0,
    image: '/products/feijoada.jpg',
    category: 'pratos',
  },
  {
    id: 'bife-acebolado',
    name: 'Bife Acebolado',
    description: 'Bife suculento com arroz, feijão, farofa e salada.',
    price: 23.0,
    image: '/products/bife-acebolado.jpg',
    category: 'pratos',
  },
  {
    id: 'frango-grelhado',
    name: 'Frango Grelhado',
    description: 'Frango grelhado com arroz, feijão, farofa e salada.',
    price: 22.0,
    image: '/products/frango-grelhado.jpg',
    category: 'pratos',
  },
  // Bebidas
  {
    id: 'coca-cola',
    name: 'Coca-Cola 350ml',
    description: 'Lata gelada.',
    price: 6.0,
    image: '/products/coca-cola.jpg',
    category: 'bebidas',
  },
  {
    id: 'suco-natural',
    name: 'Suco Natural 300ml',
    description: 'Laranja, limão ou maracujá.',
    price: 7.0,
    image: '/products/suco.jpg',
    category: 'bebidas',
  },
  {
    id: 'agua',
    name: 'Água 500ml',
    description: 'Com ou sem gás.',
    price: 4.0,
    image: '/products/agua.jpg',
    category: 'bebidas',
  },
];

export const categories = [
  { id: 'marmitas' as const, label: 'Marmitas', icon: 'UtensilsCrossed' },
  { id: 'pratos' as const, label: 'Pratos do Dia', icon: 'ChefHat' },
  { id: 'bebidas' as const, label: 'Bebidas', icon: 'Coffee' },
] as const;
