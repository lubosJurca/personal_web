import Image from 'next/image';
import profilePic from '@/public/randomGuy.jpg';
import TechStack from '../components/TechStack';

const Home = () => {
  return (
    <section className='flex  flex-col py-10 gap-10  items-center '>
      <div className='flex w-full flex-col md:flex-row gap-y-6 justify-evenly items-center'>
        <Image
          alt='Portfolio fotka'
          src={profilePic}
          className='rounded-full w-60 h-60 sm:w-80 sm:h-80 object-cover shadow-lg shadow-decoration  border-2 border-primaryLight '
        />

        {/* Info o tobě */}
        <article className='max-w-lg space-y-4 text-center'>
          <h1>Lubos Jurca</h1>
          <div className='flex gap-2 justify-center items-center '>
            <div className='w-2 h-8 bg-decoration'></div>
            <h2>Junior React Developer</h2>
          </div>

          <p className='text-primaryLight'>
            Jsem odhodlaný samouk s vášní pro programování, kde nacházím prostor
            pro kreativitu a řešení výzev. Každý den se snažím zlepšovat,
            objevovat nové technologie a vytvářet moderní webové aplikace. Mým
            cílem je stát se Frontend developerem, který přináší hodnotu a
            inspiraci do každého projektu.
          </p>
        </article>
      </div>

      <TechStack />
    </section>
  );
};
export default Home;
