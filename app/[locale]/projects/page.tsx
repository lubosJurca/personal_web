import initTranslations from '@/app/i18n';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/lib/projects';

const i18nNamespaces = ['all'];

const Projects = async ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  const { t } = await initTranslations(locale, i18nNamespaces);

  return (
    <section className='text-center py-10'>
      <div className='container '>
        <div className='flex flex-col gap-4 justify-center pb-10 items-center'>
          <div className='flex gap-4 justify-center  items-center'>
            <div className='w-3 h-8 bg-decoration'></div>
            <h1>{t('ProjectsPage.title')}</h1>
          </div>

          <blockquote className=' relative  bg-transparent text-primaryLight italic p-8 rounded-lg  '>
            <span className='absolute top-0 left-0 text-[4rem] text-primaryLight leading-none'>
              &ldquo;
            </span>
            <p>{t('ProjectsPage.blockquote.p-1')}</p>
            <p className='mt-2'>{t('ProjectsPage.blockquote.p-2')}</p>
            <span className='absolute -bottom-10 right-2 text-[4rem] text-primaryLight '>
              &rdquo;
            </span>
          </blockquote>
        </div>

        <div className='flex flex-col justify-around'>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
