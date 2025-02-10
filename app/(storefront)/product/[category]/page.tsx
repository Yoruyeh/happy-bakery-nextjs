import { ProductService } from '@/api/services/Product';
import Link from 'next/link';
import ProductList from '@/components/list/ProductList';
import type { Metadata, ResolvingMetadata } from 'next';

type MetaDataProps = {
  params: Promise<{ category: string }>;
};

export async function generateMetadata({
  params,
}: MetaDataProps): Promise<Metadata> {
  // read route params
  const category = (await params).category;

  switch (category) {
    case 'all':
      return {
        title: 'All Products',
      };
    case 'new':
      return {
        title: 'New Products',
      };
    case 'search':
      return {
        title: 'Search Results',
      };
    default:
      const capitalizedCategory =
        category.charAt(0).toUpperCase() + category.slice(1);
      return {
        title: capitalizedCategory,
      };
  }
}

type Params = Promise<{ category: string }>;
type SearchParams = Promise<{ [key: string]: string | undefined }>;

async function CategoryPage(props: {
  params: Params;
  searchParams: SearchParams;
}) {
  const params = await props.params;
  const searchParams = await props.searchParams;
  const category = params.category;
  const { sort, page, keyword } = searchParams;

  const { categories } = await ProductService.getCategories();

  function getCategoryParams(category: string) {
    const categoryId = categories.find(
      (c) => c.name.toLowerCase() === category
    )?.id;

    return categoryId;
  }

  const sortValue = sort ?? (category === 'new' ? 'date_desc' : 'price_desc');

  const pageValue = Number(page) ?? 1;

  const response = await ProductService.getProducts({
    page: pageValue,
    sort: sortValue,
    ...(keyword && { keyword }),
    ...(category !== 'all' &&
      category !== 'new' &&
      category !== 'search' && {
        category: getCategoryParams(category),
      }),
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
        productData={response}
        category={category}
        keyword={keyword}
        sort={sortValue}
      />
    </div>
  );
}

export default CategoryPage;
