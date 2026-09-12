import { useMemo } from 'react';
import { store } from '../config/store';

export function useStoreStatus() {
  const isOpen = useMemo(() => {
    const now = new Date();
    const dayNames = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'];
    const today = dayNames[now.getDay()];
    const hours = store.openingHours[today];

    if (!hours) return false;

    const [openH, openM] = hours.open.split(':').map(Number);
    const [closeH, closeM] = hours.close.split(':').map(Number);

    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    const openMinutes = openH * 60 + openM;
    const closeMinutes = closeH * 60 + closeM;

    return currentMinutes >= openMinutes && currentMinutes <= closeMinutes;
  }, []);

  return { isOpen };
}
