import Link from 'next/link';

const OtherContactInfo = () => {
  return (
    <div className='mt-8 text-center'>
      <h2 className='text-2xl font-semibold  mb-4'>Text</h2>
      <div className=''>
        <p className='mb-2'>
          📞 Phone Text{' '}
          <Link
            href='tel:0948 038 061'
            className='text-decoration hover:text-teal-700 '
          >
            0948 038 061
          </Link>
        </p>
        <p className='mb-2'>
          ✉️ Email:{' '}
          <Link
            href='mailto:lubos.jurca@gmail.com'
            className='text-decoration hover:text-teal-700'
          >
            lubos.jurca@gmail.com
          </Link>
        </p>
      </div>
    </div>
  );
};
export default OtherContactInfo;
