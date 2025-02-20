import Image from 'next/image';

// logos
import reactLogo from '@/public/logos--react.png';
import typescriptLogo from '@/public/logos--typescript-icon.png';
import javascriptLogo from '@/public/skill-icons--javascript.png';
import expressLogo from '@/public/expressLogo.png';
import tailwindLogo from '@/public/tailwindLogo.png';
import nextjsLogo from '@/public/nextjsLogo.png';
import mongodbLogo from '@/public/mongodbLogo.png';
import restapiLogo from '@/public/restapiLogo.png';
import postgreLogo from '@/public/postgresql-icon.svg';
import prismaLogo from '@/public/prisma-logo.svg';

const TechStack = () => {
  const techstack = [
    {
      name: 'React',
      icon: reactLogo,
    },
    {
      name: 'Next.js',
      icon: nextjsLogo,
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
      name: 'MongoDB',
      icon: mongodbLogo,
    },
    {
      name: 'PostgreSQL',
      icon: postgreLogo,
    },
    {
      name: 'Prisma',
      icon: prismaLogo,
    },
    {
      name: 'Rest API',
      icon: restapiLogo,
    },
  ];

  return (
    <section className='flex flex-col   '>
      <h2 className='text-2xl text-center font-semibold mb-4'>TechStack</h2>
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
