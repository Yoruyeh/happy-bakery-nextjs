import Image from 'next/image';
import Link from 'next/link';

interface Category {
  id: number;
  name: string;
}

interface Product {
  id: number;
  name: string;
  priceRegular: number;
  cover: string;
  stockQantity: number;
  category: Category;
}

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <div className='bg-bgColor-card h-fit w-full overflow-hidden rounded-xl p-4 shadow-lg'>
      <div className='relative'>
        <span className='bg-bgColor-newTag absolute left-0 top-0 z-20 rounded-br-xl rounded-tl-xl px-3 py-1 font-bold text-white'>
          New
        </span>
        <div className='relative w-full overflow-hidden rounded-xl pt-[100%]'>
          <Image
            src={product.cover}
            alt={product.name}
            fill={true}
            className='object-cover'
          />
        </div>
      </div>
      <div className='mt-4 flex flex-col gap-2'>
        <div className='text-text-brown flex items-center justify-between gap-4'>
          <h3 className='text-lg font-bold'>{product.name}</h3>
          <span className='relative bottom-1 text-lg font-bold'>
            ${product.priceRegular}
          </span>
        </div>

        <button className='bg-bgColor-secondaryBtn hover:bg-bgColor-secondaryHover text-text-darkGray rounded-md p-2 font-medium hover:text-white'>
          <Link href='/product/category/id'>VIEW PRODUCT</Link>
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
