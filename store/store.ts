import { create } from 'zustand';
import { Product } from '@/api/types/product';

interface StoreState {
  cartItemsCount: number;
  newProducts: Product[];
}

interface StoreAction {
  setCartItemsCount: (cartItemsCount: StoreState['cartItemsCount']) => void;
  setNewProducts: (newProducts: StoreState['newProducts']) => void;
}

const useStore = create<StoreState & StoreAction>((set) => ({
  cartItemsCount: 0,
  newProducts: [],
  setCartItemsCount: (cartItemsCount) => set(() => ({ cartItemsCount })),
  setNewProducts: (newProducts) => set(() => ({ newProducts })),
}));

export default useStore;
