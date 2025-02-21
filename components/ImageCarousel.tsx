import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import image1 from '@/public/image1.jpg';
import image2 from '@/public/image2.jpg';
import image3 from '@/public/image3.jpg';
import image4 from '@/public/image4.jpg';
import image5 from '@/public/image5.jpg';
import image6 from '@/public/image6.jpg';
import image7 from '@/public/image7.jpg';
import image8 from '@/public/image8.jpeg';
import image9 from '@/public/image9.jpg';
import image10 from '@/public/image10.jpg';
import image11 from '@/public/image11.jpg';
import image12 from '@/public/image12.jpg';

import Image from 'next/image';

const ImageCarousel = () => {
  const images = [
    image9,
    image10,
    image11,
    image12,
    image8,
    image2,
    image1,
    image3,
    image4,
    image5,
    image6,
    image7,
  ];

  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className=' mt-8'
    >
      <CarouselContent className=''>
        {images.map((image, index) => (
          <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/3   '>
            <Image
              src={image}
              alt='image'
              className='object-cover w-full max-h-48'
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
export default ImageCarousel;
