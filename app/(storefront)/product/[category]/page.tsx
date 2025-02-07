import { ProductService } from '@/api/services/Product';
import Link from 'next/link';
import ProductList from '@/components/list/ProductList';

type Params = Promise<{ category: string }>;
type SearchParams = Promise<{ [key: string]: string | undefined }>;

async function CategoryPage(props: {
  params: Params;
  searchParams: SearchParams;
}) {
  const params = await props.params;
  const searchParams = await props.searchParams;
  const category = params.category;
  const keyword = searchParams.keyword;

  const { categories } = await ProductService.getCategories();

  function getCategoryParams(category: string) {
    const categoryId = categories.find(
      (c) => c.name.toLowerCase() === category
    )?.id;

    return categoryId;
  }

  const response = await ProductService.getProducts({
    page: 1,
    sort: 'price_desc',
    ...(keyword && { keyword }),
    ...(category !== 'all' &&
      category !== 'new' &&
      category !== 'search' && {
        category: getCategoryParams(category),
      }),
  });

  console.log(response);

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
        keyword={keyword}
        categoryId={getCategoryParams(category)}
      />
    </div>
  );
}

export default CategoryPage;
