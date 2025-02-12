import { create } from 'zustand';
import { Product } from '@/api/types/product';

interface StoreState {
  cartItemsCount: number;
  newProducts: Product[];
}

interface StoreAction {
  increaseCartItemsCount: () => void;
  decreaseCartItemsCount: () => void;
  resetCartItemsCount: () => void;
  setCartItemsCount: (cartItemsCount: StoreState['cartItemsCount']) => void;
  setNewProducts: (newProducts: StoreState['newProducts']) => void;
}

const useStore = create<StoreState & StoreAction>((set) => ({
  cartItemsCount: 0,
  newProducts: [],
  increaseCartItemsCount: () =>
    set((state) => ({ cartItemsCount: state.cartItemsCount + 1 })),
  decreaseCartItemsCount: () =>
    set((state) => ({ cartItemsCount: state.cartItemsCount - 1 })),
  resetCartItemsCount: () => set(() => ({ cartItemsCount: 0 })),
  setCartItemsCount: (cartItemsCount) => set(() => ({ cartItemsCount })),
  setNewProducts: (newProducts) => set(() => ({ newProducts })),
}));

export default useStore;
