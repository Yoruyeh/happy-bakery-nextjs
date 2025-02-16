'use client';

import Image from 'next/image';
import CategoryBanner from '@/public/images/banner-category.jpg';
import ProductCard from '../card/ProductCard';
import Paginator from '../paginator/Paginator';
import { GetProductsResponse } from '@/api/types/(user)/product';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

interface ProductListProps {
  productData: GetProductsResponse;
  category: string;
  keyword: string | undefined;
  sort: string | undefined;
}

function ProductList({
  productData,
  category,
  keyword,
  sort,
}: ProductListProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const path = usePathname();

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
    const params = new URLSearchParams(searchParams);
    params.set('sort', e.target.value);

    const newUrl = `${path}?${params.toString()}`;
    router.push(newUrl);
  }

  function pageClickHandler(page: number) {
    if (page === 0 || page > productData.pagination.totalPage) return;

    const params = new URLSearchParams(searchParams);
    params.set('page', page.toString());

    const newUrl = `${path}?${params.toString()}`;
    router.push(newUrl);
  }

  return (
    <section className='flex w-full flex-col gap-4 lg:flex-1'>
      <div className='relative w-full overflow-hidden rounded-lg pt-[25%]'>
        <Image
          src={CategoryBanner}
          alt='category-banner'
          fill={true}
          sizes='100vw'
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
            value={sort}
            onChange={sortOptionHandler}
          >
            <option value='date_desc'>Date: New to Old</option>
            <option value='date_asc'>Date: Old to New</option>
            <option value='price_asc'>Price: Low to High</option>
            <option value='price_desc'>Price: High to Low</option>
          </select>
        </div>
        <p>{productData.pagination.productCount} products</p>
      </div>
      {productData.pagination.productCount > 0 ? (
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {productData.products.map((product) => (
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
        pagination={productData.pagination}
        pageClickHandler={pageClickHandler}
      />
    </section>
  );
}

export default ProductList;
