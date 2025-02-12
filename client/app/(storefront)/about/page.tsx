import Image from 'next/image';
import AboutBanner from '@/public/images/banner-about.jpg';
import AboutImage1 from '@/public/images/about.jpg';
import AboutImage2 from '@/public/images/about2.jpg';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Story',
};

const AboutPage = () => {
  return (
    <div className='h-fit w-full'>
      <div className='absolute -left-6 top-14 h-[250px] w-[calc(100vw+32px)] md:top-20 md:h-[360px] lg:top-24 lg:h-[480px]'>
        <Image
          src={AboutBanner}
          fill={true}
          sizes='100vw'
          alt='about-banner'
          className='object-cover'
        />
      </div>
      <div className='mb-4 h-[250px] w-full md:h-[360px] lg:h-[480px]' />
      <div className='flex flex-col gap-10'>
        <section>
          <div className='mb-4 md:absolute md:top-[250px] lg:top-[316px]'>
            <h1 className='text-2xl font-bold md:text-4xl md:text-white lg:text-5xl'>
              A Fresh Beginning
            </h1>
            <p className='font-medium text-text-lightGray md:text-lg md:text-slate-100 lg:text-xl'>
              Where Nature Meets Sweet Innovation
            </p>
          </div>
          <div className='flex flex-col gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3'>
            <div className='relative w-full pt-[100%] lg:col-span-2 lg:pt-[52%]'>
              <Image
                src={AboutImage1}
                fill={true}
                sizes='100vw'
                alt='about-image-1'
                className='object-cover'
              />
            </div>
            <p className='text-balance sm:flex sm:items-center sm:p-4'>
              Happy Bakery opened its doors in 2024, bringing a revolutionary
              approach to modern baking. Our vision was born from a simple yet
              powerful belief: desserts can be both delicious and nutritious.
              Using organic whole grains, natural sweeteners like honey and
              maple syrup, and locally sourced seasonal fruits, we're redefining
              what it means to indulge mindfully. Every recipe is crafted to
              preserve the inherent goodness of our carefully selected
              ingredients, proving that healthy choices can be a daily delight.
            </p>
          </div>
        </section>
        <section className='flex flex-col gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3'>
          <div className='flex flex-col sm:justify-center sm:p-4'>
            <h1 className='text-2xl font-bold'>Natural Goodness</h1>
            <p className='mb-4 font-medium text-text-lightGray'>
              Mindful Baking for Modern Lives
            </p>
            <p className='text-balance'>
              In our bright, plant-filled kitchen, we embrace the purity of
              natural ingredients. Our passionate team of bakers works with
              alternative flours like almond, oat, and spelt, creating treats
              that cater to various dietary preferences without compromising on
              taste. We've eliminated artificial preservatives and refined
              sugars, instead relying on the rich flavors of nature's pantry.
              From our protein-packed breakfast pastries to our naturally
              sweetened afternoon treats, each creation reflects our commitment
              to nurturing both body and soul through thoughtful baking.
            </p>
          </div>
          <div className='relative w-full pt-[100%] lg:col-span-2 lg:pt-[52%]'>
            <Image
              src={AboutImage2}
              fill={true}
              sizes='100vw'
              alt='about-image-2'
              className='object-cover'
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
