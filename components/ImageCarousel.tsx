import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import image1 from '@/assets/image1.jpg';
import image2 from '@/assets/image2.jpg';
import image3 from '@/assets/image3.jpg';
import image4 from '@/assets/image4.jpg';
import image5 from '@/assets/image5.jpg';
import image6 from '@/assets/image6.jpg';
import image7 from '@/assets/image7.jpg';
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
