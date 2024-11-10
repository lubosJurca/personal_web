import ImageCarousel from '@/components/ImageCarousel';

const About = () => {
  return (
    <section className='flex flex-col text-center  py-10  gap-8'>
      <div className='flex gap-4 justify-center  items-center'>
        <div className='w-3 h-full bg-decoration'></div>
        <h1>Title</h1>
      </div>

      <p>p-1</p>
      <p>p-2</p>
      <p>p-3</p>
      <p>p-4 </p>
      <ImageCarousel />
    </section>
  );
};
export default About;
