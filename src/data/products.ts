import type { Product } from '../types';

export const products: Product[] = [
  {
    id: 'marmita-pequena',
    name: 'Marmita Pequena',
    description: 'Arroz, feijão, 1 tipo de carne, farofa e salada.',
    price: 16,
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&h=450&fit=crop&auto=format&q=82',
    category: 'marmitas',
  },
  {
    id: 'marmita-media',
    name: 'Marmita Média',
    description: 'Arroz, feijão, 2 tipos de carne, farofa e salada.',
    price: 18,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=450&fit=crop&auto=format&q=82',
    category: 'marmitas',
  },
  {
    id: 'marmita-grande',
    name: 'Marmita Grande',
    description: 'Arroz, feijão, 2 tipos de carne, farofa, salada e acompanhamento.',
    price: 22,
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&h=450&fit=crop&auto=format&q=82',
    category: 'marmitas',
  },
  {
    id: 'feijoada',
    name: 'Feijoada',
    description: 'Feijoada completa com arroz, couve, farofa e laranja.',
    price: 25,
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&h=450&fit=crop&auto=format&q=82',
    category: 'pratos',
  },
  {
    id: 'bife-acebolado',
    name: 'Bife Acebolado',
    description: 'Bife suculento com arroz, feijão, farofa e salada.',
    price: 23,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&h=450&fit=crop&auto=format&q=82',
    category: 'pratos',
  },
  {
    id: 'frango-grelhado',
    name: 'Frango Grelhado',
    description: 'Frango grelhado com arroz, feijão, farofa e salada.',
    price: 22,
    image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=600&h=450&fit=crop&auto=format&q=82',
    category: 'pratos',
  },
  {
    id: 'coca-cola',
    name: 'Coca-Cola 350ml',
    description: 'Lata bem gelada.',
    price: 6,
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=600&h=450&fit=crop&auto=format&q=82',
    category: 'bebidas',
  },
  {
    id: 'suco-natural',
    name: 'Suco Natural 300ml',
    description: 'Laranja, limão ou maracujá.',
    price: 7,
    image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=600&h=450&fit=crop&auto=format&q=82',
    category: 'bebidas',
  },
  {
    id: 'agua',
    name: 'Água 500ml',
    description: 'Água mineral gelada.',
    price: 4,
    image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=600&h=450&fit=crop&auto=format&q=82',
    category: 'bebidas',
  },
];

export const categories = [
  { id: 'marmitas' as const, label: 'Marmitas' },
  { id: 'pratos' as const, label: 'Pratos do Dia' },
  { id: 'bebidas' as const, label: 'Bebidas' },
] as const;
