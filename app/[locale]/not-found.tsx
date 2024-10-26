import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-[#393e41] text-[#f6f7eb] px-4'>
      <h1 className='text-6xl font-bold text-[#e94f37]'>404</h1>
      <h2 className='mt-2 text-2xl md:text-3xl font-semibold text-center'>
        Oops! Page Not Found
      </h2>
      <p className='mt-4 text-center text-lg md:text-xl text-gray-400 max-w-md'>
        The page you are looking for does not exist or has been moved. Please
        check the URL or return to the homepage.
      </p>
      <Link href='/' passHref>
        <button className='mt-8 px-6 py-3 bg-[#e94f37] text-white rounded-lg shadow-lg hover:bg-[#d44030] transition duration-300 ease-in-out'>
          Go Back Home
        </button>
      </Link>
    </div>
  );
}
