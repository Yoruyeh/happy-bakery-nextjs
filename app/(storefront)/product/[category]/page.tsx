import { ProductService } from '@/api/services/Product';
import Link from 'next/link';
import ProductList from '@/components/list/ProductList';

type Params = Promise<{ category: string }>;

async function CategoryPage(props: { params: Params }) {
  const params = await props.params;
  const category = params.category;

  const { categories } = await ProductService.getCategories();

  const response = await ProductService.getProducts({
    page: 1,
    sort: 'price_desc',
  });

  return (
    <div className='mx-auto w-full lg:flex lg:max-w-screen-xl lg:gap-4'>
      <nav className='hidden font-josefin text-xl font-semibold text-title-seconday lg:flex lg:w-[160px] lg:flex-col'>
        <ul className='flex flex-col gap-4'>
          <Link href='/product/all'>
            <li className='cursor-pointer hover:text-title-primary hover:underline'>
              All Products
            </li>
          </Link>
          <Link href='/product/new'>
            <li className='cursor-pointer hover:text-title-primary hover:underline'>
              New In Products
            </li>
          </Link>
          {categories.map((category) => (
            <Link
              href={`/product/${category.name.toLowerCase()}`}
              key={category.id}
            >
              <li className='cursor-pointer hover:text-title-primary hover:underline'>
                {category.name}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
      <ProductList
        initialProductData={response}
        category={category}
        categories={categories}
      />
    </div>
  );
}

export default CategoryPage;
