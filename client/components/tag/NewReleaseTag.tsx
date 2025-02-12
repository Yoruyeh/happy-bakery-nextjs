'use client';

import useStore from '@/store/store';

interface NewReleaseTagProps {
  productId: number;
}

function NewReleaseTag({ productId }: NewReleaseTagProps) {
  const newProducts = useStore((state) => state.newProducts);

  if (!newProducts.find((item) => item.id === productId)) return null;

  return (
    <span className='w-fit rounded-md bg-bgColor-newTag p-2 text-sm font-medium text-white'>
      New Release
    </span>
  );
}

export default NewReleaseTag;
