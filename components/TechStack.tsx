import Image from 'next/image';

// logos
import reactLogo from '@/assets/logos--react.png';
import typescriptLogo from '@/assets/logos--typescript-icon.png';
import javascriptLogo from '@/assets/skill-icons--javascript.png';
import expressLogo from '@/assets/expressLogo.png';
import tailwindLogo from '@/assets/tailwindLogo.png';
import nextjsLogo from '@/assets/nextjsLogo.png';
import mongodbLogo from '@/assets/mongodbLogo.png';
import restapiLogo from '@/assets/restapiLogo.png';

const TechStack = () => {
  const techstack = [
    {
      name: 'React',
      icon: reactLogo,
    },
    {
      name: 'Typescript',
      icon: typescriptLogo,
    },
    {
      name: 'JavaScript',
      icon: javascriptLogo,
    },
    {
      name: 'Express.js',
      icon: expressLogo,
    },
    {
      name: 'Tailwind CSS',
      icon: tailwindLogo,
    },
    {
      name: 'Next.js',
      icon: nextjsLogo,
    },
    {
      name: 'MongoDB',
      icon: mongodbLogo,
    },
    {
      name: 'Rest API',
      icon: restapiLogo,
    },
  ];

  return (
    <section className='flex flex-col   '>
      <h2 className='text-2xl text-center font-semibold mb-4'>Tech Stack</h2>
      <div className='flex flex-wrap items-center justify-center'>
        {techstack.map((tech) => (
          <div
            key={tech.name}
            className=' p-4 rounded-md flex flex-col items-center'
          >
            <Image alt={tech.name} src={tech.icon} className='w-16 h-16 mb-2' />
            <figcaption>{tech.name}</figcaption>
          </div>
        ))}
      </div>
    </section>
  );
};
export default TechStack;
