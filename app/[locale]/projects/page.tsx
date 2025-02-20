import initTranslations from '@/app/i18n';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/lib/projects';
import { Separator } from '@/components/ui/separator';

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
        <div className='flex gap-4 justify-center mb-8  items-center'>
          <div className='w-3 h-8 bg-decoration'></div>
          <h1>{t('ProjectsPage.title')}</h1>
        </div>

        <div className='flex flex-col gap-16 justify-around'>
          {projects.map((project, index) => (
            <>
              <ProjectCard key={index} {...project} />
              <Separator className='last-of-type:hidden' />
            </>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
