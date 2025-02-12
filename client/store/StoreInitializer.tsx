'use client';

import { Product } from '@/api/types/product';
import { useEffect } from 'react';
import useStore from './store';

interface StoreInitializerProps {
  newProducts: Product[];
  cartItemsCount: number;
}

function StoreInitializer({
  newProducts,
  cartItemsCount,
}: StoreInitializerProps) {
  const setCartItemsCount = useStore((state) => state.setCartItemsCount);
  const setNewProducts = useStore((state) => state.setNewProducts);

  useEffect(() => {
    setCartItemsCount(cartItemsCount);
    setNewProducts(newProducts);
  }, []);

  return null;
}

export default StoreInitializer;
