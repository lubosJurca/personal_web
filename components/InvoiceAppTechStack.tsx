const InvoiceAppTechStack = () => {
  const techstack = [
    'React',
    'Express.js',
    'Node.js',
    'MongoDB',
    'TypeScript',
    'Tailwind CSS',
    'JWT',
    'REST API',
    'i18next',
    'React Query',
    'Shadcn UI',
    'Zod',
    'React Hook Form',
  ];

  return (
    <ul className='flex gap-2 justify-center  flex-wrap text-primaryLight'>
      {techstack.map((tech, index) => (
        <li
          key={index}
          className='border border-decoration bg-teal-900 rounded-md grid place-content-center p-2 '
        >
          {tech}
        </li>
      ))}
    </ul>
  );
};
export default InvoiceAppTechStack;
