import { ProductService } from '@/api/services/Product';
import Button from '@/components/button/Button';
import ImageSwiper from '@/components/swiper/ImageSwiper';
import ProductSlides from '@/components/swiper/ProductSlides';

type Params = Promise<{ id: string }>;

async function ProductDetailPage(props: { params: Params }) {
  const params = await props.params;
  const id = params.id;

  const { product } = await ProductService.getProductDetail(id);

  const images = [
    { name: 'cover', image_path: product.cover },
    ...product.ProductImages,
  ];

  return (
    <div className='flex flex-col gap-4 lg:gap-8'>
      <section className='flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-8'>
        <ImageSwiper images={images} />
        <div className='flex flex-col gap-4 lg:flex-1'>
          <span className='w-fit rounded-md bg-bgColor-newTag p-2 text-sm font-medium text-white'>
            New Release
          </span>
          <h1 className='text-3xl font-bold text-text-brown'>{product.name}</h1>
          <p className='text-xl font-bold'>${product.price_regular}</p>
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
            <p className='text-text-lightGray'>{product.description}</p>
          </div>
        </div>
      </section>
      <section>
        <h2 className='text-2xl font-bold text-text-brown'>
          You may also like ...
        </h2>
        <ProductSlides />
      </section>
    </div>
  );
}

export default ProductDetailPage;
