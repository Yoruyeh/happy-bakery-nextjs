import Button from '@/components/button/Button';
import ImageSwiper from '@/components/swiper/ImageSwiper';
import Slides from '@/components/swiper/ProductSlides';

type ProductDetailPageProps = {};

function ProductDetailPage({}: ProductDetailPageProps) {
  return (
    <div className='flex flex-col gap-4 lg:gap-8'>
      <section className='flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-8'>
        <ImageSwiper />
        <div className='flex flex-col gap-4 lg:flex-1'>
          <span className='w-fit rounded-md bg-bgColor-newTag p-2 text-sm font-medium text-white'>
            New Release
          </span>
          <h1 className='text-3xl font-bold text-text-brown'>Chocolate Cake</h1>
          <p className='text-xl font-bold'>$100</p>
          <div className='mb-4 flex items-center gap-2 font-medium'>
            <label htmlFor='quantity'>Quantity</label>
            <select name='quantity' id='quantity' className='w-20'>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
              <option value='6'>6</option>
              <option value='7'>7</option>
              <option value='8'>8</option>
              <option value='9'>9</option>
            </select>
          </div>
          <Button
            text='Add TO CART'
            customClass='font-medium bg-bgColor-secondaryBtn hover:bg-bgColor-secondaryHover text-text-darkGray hover:text-white'
          />
          <Button
            text='BUY IT NOW'
            customClass='font-medium bg-bgColor-primaryBtn hover:bg-bgColor-primaryHover text-text-darkGray hover:text-white'
          />
          <div className='my-6 flex flex-col gap-4'>
            <h3 className='text-lg font-medium text-text-brown'>
              ABOUT THE PRODUCT
            </h3>
            <p className='text-text-lightGray'>
              Experience the Zen of flavors with our Matcha Cake. Every layer is
              a dance of fine Japanese matcha and creamy richness. Its vibrant
              green hue promises a cake that's both refreshingly earthy and
              delightfully sweet. Dive into this fusion of tradition and taste,
              perfect for discerning palates.
            </p>
          </div>
        </div>
      </section>
      <section>
        <h2 className='text-2xl font-bold text-text-brown'>
          You may also like ...
        </h2>
        <Slides />
      </section>
    </div>
  );
}

export default ProductDetailPage;
