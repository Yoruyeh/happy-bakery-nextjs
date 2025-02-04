import Image from 'next/image';
import CartBanner from '@/public/images/banner-cart.jpg';
import Link from 'next/link';
import CartItem from '@/components/card/CartItem';
import Button from '@/components/button/Button';
import Slides from '@/components/swiper/ProductSlides';

interface CartItemType {
  id: number;
  name: string;
  priceRegular: number;
  cover: string;
  quantity: number;
}

const dummyCartItems: CartItemType[] = [
  {
    id: 1,
    name: 'cake1',
    priceRegular: 100,
    cover: '/images/cake1.jpg',
    quantity: 10,
  },
  {
    id: 2,
    name: 'cake2',
    priceRegular: 80,
    cover: '/images/cake1.jpg',
    quantity: 3,
  },
];

const CartPage = () => {
  const totalPrice = dummyCartItems.reduce((prevTotal, item) => {
    return prevTotal + item.priceRegular * item.quantity;
  }, 0);

  let cartContent;
  if (!dummyCartItems || dummyCartItems.length === 0) {
    cartContent = (
      <div className='flex flex-col items-center justify-center gap-4 px-10 py-20 text-text-brown'>
        <h1 className='text-2xl font-bold'>Your cart is empty!</h1>
        <Link href='/product/all'>
          <Button
            text='Continue Shopping'
            customClass='w-full h-fit font-medium bg-bgColor-primaryBtn text-lg md:text-xl hover:bg-bgColor-primaryHover text-text-darkGray hover:text-white max-w-sm'
          />
        </Link>
      </div>
    );
  } else {
    cartContent = (
      <>
        {/* Cart Header */}
        <div className='flex items-center justify-between gap-2 text-title-seconday'>
          <h1 className='text-2xl font-bold md:text-3xl lg:text-4xl'>
            Your Cart
          </h1>
          <p className='text-sm font-medium underline underline-offset-4 hover:decoration-2 md:text-base lg:text-lg'>
            <Link href='/product/all'>Continue Shopping</Link>
          </p>
        </div>
        {/* Cart Table Header */}
        <div className='grid grid-cols-[1fr_150px] gap-4 py-4 text-text-lightGray md:grid-cols-[2fr_1fr_150px] md:gap-8'>
          <div>PRODUCT</div>
          <div className='hidden md:block'>QUANTITY</div>
          <div className='text-right'>TOTAL</div>
        </div>
        {/* Cart Table Itams */}
        <div className='border-y border-stone-300'>
          {dummyCartItems.map((item) => (
            <CartItem key={item.id} cartItem={item} />
          ))}
        </div>
        {/* Cart Total */}
        <div className='mb-4 mt-8 flex flex-col items-center justify-center gap-4 sm:justify-self-end'>
          <div className='flex items-center justify-between gap-4 text-xl font-bold text-text-darkGray sm:items-end sm:gap-8 md:text-2xl'>
            <h2>Total Price</h2>
            <p className='relative bottom-[2px]'>
              {totalPrice.toLocaleString()}
            </p>
          </div>
          <Link href='/checkout' className='w-full'>
            <Button
              text='Check out'
              customClass='w-full h-fit font-medium bg-bgColor-primaryBtn text-lg md:text-xl hover:bg-bgColor-primaryHover text-text-darkGray hover:text-white'
            />
          </Link>
        </div>
      </>
    );
  }

  return (
    <div className='flex w-full flex-col gap-4 md:gap-6 lg:gap-8'>
      <div className='relative w-full overflow-hidden rounded-lg pt-[25%]'>
        <Image
          src={CartBanner}
          alt='category-banner'
          fill={true}
          className='object-cover opacity-75 contrast-75'
        />
        <div className='absolute inset-0 flex flex-col items-center justify-center gap-1 text-white'>
          <h1 className='text-lg font-bold sm:text-3xl md:text-4xl lg:text-5xl'>
            Baking Joy, Sharing Happiness
          </h1>
        </div>
      </div>
      <section className='mx-auto w-full max-w-5xl'>{cartContent}</section>
      <section className='mx-auto w-full max-w-5xl'>
        <h2 className='text-2xl font-bold text-text-brown'>
          Don't leave without these!
        </h2>
        <Slides />
      </section>
    </div>
  );
};

export default CartPage;
