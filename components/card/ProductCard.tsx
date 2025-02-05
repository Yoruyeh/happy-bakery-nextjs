import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/api/types/product';

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/category/${product.id}`}>
      <div className='h-fit w-full overflow-hidden rounded-xl bg-white p-3 shadow-lg hover:bg-bgColor-card'>
        <div className='relative'>
          <span className='absolute left-0 top-0 z-20 rounded-br-xl rounded-tl-xl bg-bgColor-newTag px-3 py-1 font-bold text-white'>
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

        <div className='mt-3 flex flex-col items-center justify-between text-text-brown'>
          <h3 className='text-lg font-bold'>{product.name}</h3>
          <span className='relative bottom-1 text-lg font-bold'>
            ${product.price_regular}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
