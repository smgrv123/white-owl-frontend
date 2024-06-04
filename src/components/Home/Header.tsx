import { navButtons, socialIcons } from '@/src/constants/home';
import Image from 'next/image';
import Link from 'next/link';
import Icon from '../../assets/Icon.png';
import Logo from '../../assets/Logo.png';
import HeaderHamburger from './HeaderHamburger';
import IconHandler from './IconHandler';

const Header = () => {
  const sortedSociaIcons = socialIcons.sort((a, b) => a.rank - b.rank);

  return (
    <nav className='grid grid-cols-6'>
      <Link href='/' className='flex flex-row col-span-2'>
        <Image src={Icon} alt='White Owl Icon' className='sm:w-36 sm:h-36 h-10 w-10' priority />
        <Image src={Logo} alt='White Owl Logo' className='sm:w-80 sm:h-28 w-32 h-10' priority />
      </Link>
      <div className='sm:flex flex-row justify-between w-[100%] items-center hidden sm:px-5 col-span-4'>
        {navButtons.map((i, index) => (
          <Link
            href={i.href}
            className='hover:text-textYellow font-pf_text font-normal text-[25px] mr-3 text-center'
            key={index}
          >
            {i.title}
          </Link>
        ))}
        <div className='sm:flex flex-row justify-between gap-3 hidden'>
          {sortedSociaIcons.map((i, index) => (
            <IconHandler i={i} key={index} />
          ))}
        </div>
      </div>
      <div className='flex justify-end col-span-4 sm:hidden'>
        <HeaderHamburger icons={sortedSociaIcons} />
      </div>
    </nav>
  );
};

export default Header;
