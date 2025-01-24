import Image from 'next/image';
import CategoryBanner from '@/public/images/banner-category.jpg';
import ProductCard from '@/components/card/ProductCard';

const dummyProducts = [
  {
    id: 1,
    name: 'cake1',
    priceRegular: 100,
    cover: '/images/cake1.jpg',
    stockQantity: 2,
    category: { id: 1, name: 'cake' },
  },
  {
    id: 2,
    name: 'cake2',
    priceRegular: 100,
    cover: '/images/cake1.jpg',
    stockQantity: 2,
    category: { id: 1, name: 'cake' },
  },
  {
    id: 3,
    name: 'cake3',
    priceRegular: 100,
    cover: '/images/cake1.jpg',
    stockQantity: 2,
    category: { id: 1, name: 'cake' },
  },
  {
    id: 4,
    name: 'cake4',
    priceRegular: 100,
    cover: '/images/cake1.jpg',
    stockQantity: 2,
    category: { id: 1, name: 'cake' },
  },
  {
    id: 5,
    name: 'cake5',
    priceRegular: 100,
    cover: '/images/cake1.jpg',
    stockQantity: 2,
    category: { id: 1, name: 'cake' },
  },
  {
    id: 6,
    name: 'cake6',
    priceRegular: 100,
    cover: '/images/cake1.jpg',
    stockQantity: 2,
    category: { id: 1, name: 'cake' },
  },
  {
    id: 7,
    name: 'cake7',
    priceRegular: 100,
    cover: '/images/cake1.jpg',
    stockQantity: 2,
    category: { id: 1, name: 'cake' },
  },
  {
    id: 8,
    name: 'cake8',
    priceRegular: 100,
    cover: '/images/cake1.jpg',
    stockQantity: 2,
    category: { id: 1, name: 'cake' },
  },
  {
    id: 9,
    name: 'cake9',
    priceRegular: 100,
    cover: '/images/cake1.jpg',
    stockQantity: 2,
    category: { id: 1, name: 'cake' },
  },
];

function CategoryPage() {
  return (
    <div className='mx-auto w-full py-2 lg:flex lg:max-w-screen-xl lg:gap-4'>
      <nav className='hidden font-josefin text-xl font-semibold text-title-seconday lg:flex lg:w-[160px] lg:flex-col'>
        <ul className='flex flex-col gap-4'>
          <li className='cursor-pointer hover:text-title-primary hover:underline'>
            All Products
          </li>
          <li className='cursor-pointer hover:text-title-primary hover:underline'>
            Cake
          </li>
          <li className='cursor-pointer hover:text-title-primary hover:underline'>
            Biscuit
          </li>
        </ul>
      </nav>
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
              All Products
            </h1>
            <p className='font-medium md:text-lg lg:text-xl'>
              Fresh, Natural, Thoughtfully Baked
            </p>
          </div>
        </div>
        <div className='flex items-center justify-between gap-4 text-sm font-medium text-text-brown sm:text-base'>
          <div>
            <label htmlFor='sort'>Sort by：</label>
            <select name='sort' id='sort' defaultValue='dateAsc'>
              <option value='dateAsc'>Date: New to Old</option>
              <option value='dateDesc'>Date: Old to New</option>
              <option value='priceAsc'>Price: Low to High</option>
              <option value='priceDesc'>Price: High to Low</option>
            </select>
          </div>
          <p>20 products</p>
        </div>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {dummyProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default CategoryPage;
