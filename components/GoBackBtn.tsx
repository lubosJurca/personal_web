import { Link } from 'next-view-transitions';

const GoBackBtn = ({ title }: { title: string }) => {
  return (
    <Link href='/' passHref>
      <button className='mt-8 px-8 py-3 bg-[#e94f37] text-white rounded-lg shadow-lg hover:bg-[#d44030] transition duration-300 ease-in-out'>
        {title}
      </button>
    </Link>
  );
};
export default GoBackBtn;
