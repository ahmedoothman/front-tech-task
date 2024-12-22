import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
const Navbar = () => {
  const router = useRouter();
  const isAuthenticated = useSelector(
    (state: RootState) => state.user.isAuthenticated
  );
  const { pathname } = router;

  return (
    <nav className='p-4 bg-gray-900 text-white shadow-md'>
      <div className='max-w-screen-xl mx-auto flex items-center justify-between'>
        <div className='text-xl font-semibold'>
          <Link href='/'>
            <span className='hover:text-orange-400 transition'>Logo</span>
          </Link>
        </div>

        {isAuthenticated && (
          <div className='flex space-x-6'>
            <Link
              href='/home'
              className={`${
                pathname === '/home'
                  ? 'text-orange-600 font-bold'
                  : 'text-gray-300'
              } hover:text-orange-400 transition py-2 px-4 rounded-md`}
            >
              Home
            </Link>
            <Link
              href='/dashboard'
              className={`${
                pathname === '/dashboard'
                  ? 'text-orange-600 font-bold'
                  : 'text-gray-300'
              } hover:text-orange-400 transition py-2 px-4 rounded-md`}
            >
              Dashboard
            </Link>

            <Link
              href='/about'
              className={`${
                pathname === '/about'
                  ? 'text-orange-600 font-bold'
                  : 'text-gray-300'
              } hover:text-orange-400 transition py-2 px-4 rounded-md`}
            >
              About
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
