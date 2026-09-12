import type { StoreConfig } from '../types';

export const store: StoreConfig = {
  storeName: 'Marmitex da Baiana',
  whatsappNumber: '5511999999999',
  deliveryFee: 5.0,
  minimumOrder: 15.0,
  address: 'Rua das Flores, 123 - Pelourinho, Salvador - BA',
  openingHours: {
    seg: { open: '11:00', close: '15:00' },
    ter: { open: '11:00', close: '15:00' },
    qua: { open: '11:00', close: '15:00' },
    qui: { open: '11:00', close: '15:00' },
    sex: { open: '11:00', close: '15:00' },
    sab: { open: '11:00', close: '15:00' },
    dom: null,
  },
};
