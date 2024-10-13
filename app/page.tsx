import Image from 'next/image';
import profilePic from './assets/randomGuy.jpg';
import TechStack from '../components/TechStack';

const Home = () => {
  return (
    <section className='flex  flex-col space-y-14  items-center'>
      <div className='flex w-full flex-col md:flex-row gap-y-6 justify-evenly items-center'>
        <Image
          alt='Portfolio fotka'
          src={profilePic}
          className='rounded-full w-80 h-80 object-cover shadow-xl shadow-primaryDark  border border-primaryLight '
        />

        {/* Info o tobě */}
        <article className='max-w-lg space-y-4 text-center'>
          <h1 className='font-bold text-5xl '>Lubos Jurca</h1>
          <div className='flex gap-2 justify-center items-center'>
            <div className='w-2 h-6 bg-teal-400'></div>
            <h2 className=' font-semibold'>Junior Frontend Developer</h2>
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
