import { ProductService } from '@/api/services/Product';
import AddToCartAction from '@/components/action/AddToCartAction';
import ImageSwiper from '@/components/swiper/ImageSwiper';
import ProductSlides from '@/components/swiper/ProductSlides';
import NewReleaseTag from '@/components/tag/NewReleaseTag';
import { cookies } from 'next/headers';

type Params = Promise<{ id: string }>;

async function ProductDetailPage(props: { params: Params }) {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value ?? '';
  const params = await props.params;
  const id = Number(params.id);

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
          <NewReleaseTag productId={id} />
          <h1 className='text-3xl font-bold text-text-brown'>{product.name}</h1>
          <p className='text-xl font-bold'>${product.price_regular}</p>
          <AddToCartAction
            token={token}
            productId={id}
            productPrice={product.price_regular}
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
