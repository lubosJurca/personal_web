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
import Image from 'next/image';

const ImageCarousel = () => {
  const images = [image2, image1, image3, image4, image5, image6, image7];

  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className='max-w-full mt-8'
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
