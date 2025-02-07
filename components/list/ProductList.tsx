'use client';

import Image from 'next/image';
import CategoryBanner from '@/public/images/banner-category.jpg';
import ProductCard from '../card/ProductCard';
import Paginator from '../paginator/Paginator';
import { GetProductsResponse } from '@/api/types/product';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { ProductService } from '@/api/services/Product';

interface ProductListProps {
  initialProductData: GetProductsResponse;
  category: string;
  categoryId: number | undefined;
  keyword: string | undefined;
}

function ProductList({
  initialProductData,
  category,
  categoryId,
  keyword,
}: ProductListProps) {
  const [sortOption, setSortOption] = useState(
    category === 'new' ? 'date_desc' : 'price_desc'
  );
  const [page, setPage] = useState(1);

  const { data } = useQuery({
    queryKey: ['products', category, sortOption, page, keyword],
    queryFn: () =>
      ProductService.getProducts({
        page,
        sort: sortOption,
        ...(keyword && { keyword }),
        ...(categoryId && { category: categoryId }),
      }),
    initialData: initialProductData,
  });

  function showCategoryName(category: string) {
    switch (category) {
      case 'all':
        return 'All PRODUCTS';
      case 'new':
        return 'NEW IN PRODUCTS';
      case 'search':
        return `SEARCH FOR '${keyword?.toUpperCase()}'`;
      default:
        return category.toUpperCase();
    }
  }

  function sortOptionHandler(e: React.ChangeEvent<HTMLSelectElement>) {
    setSortOption(e.target.value);
  }

  function pageClickHandler(page: number) {
    if (page === 0 || page > data.pagination.totalPage) return;
    setPage(page);
  }

  return (
    <section className='flex w-full flex-col gap-4 lg:flex-1'>
      <div className='relative w-full overflow-hidden rounded-lg pt-[25%]'>
        <Image
          src={CategoryBanner}
          alt='category-banner'
          fill={true}
          className='object-cover'
        />
        <div className='absolute inset-0 flex flex-col items-center justify-center gap-1 text-title-seconday'>
          <h1 className='text-2xl font-bold md:text-3xl lg:text-4xl'>
            {showCategoryName(category)}
          </h1>
          <p className='font-medium md:text-lg lg:text-xl'>
            Fresh, Natural, Thoughtfully Baked
          </p>
        </div>
      </div>
      <div className='flex items-center justify-between gap-4 text-sm font-medium text-text-brown sm:text-base'>
        <div>
          <label htmlFor='sort'>Sort by：</label>
          <select
            name='sort'
            id='sort'
            value={sortOption}
            onChange={sortOptionHandler}
          >
            <option value='date_desc'>Date: New to Old</option>
            <option value='date_asc'>Date: Old to New</option>
            <option value='price_asc'>Price: Low to High</option>
            <option value='price_desc'>Price: High to Low</option>
          </select>
        </div>
        <p>{data.pagination.productCount} products</p>
      </div>
      {data.pagination.productCount > 0 ? (
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {data.products.map((product) => (
            <ProductCard
              key={product.id}
              category={category}
              product={product}
            />
          ))}
        </div>
      ) : (
        <div className='flex w-full items-center justify-center py-20'>
          <p className='text-2xl font-medium text-text-lightGray'>
            No Products Found
          </p>
        </div>
      )}

      <Paginator
        pagination={data.pagination}
        pageClickHandler={pageClickHandler}
      />
    </section>
  );
}

export default ProductList;
