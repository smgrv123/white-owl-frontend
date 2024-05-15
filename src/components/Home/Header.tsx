import { navButtons, socialIcons } from '@/src/constants/home';
import Image from 'next/image';
import Link from 'next/link';
import Icon from '../../assets/Icon.png';
import Logo from '../../assets/Logo.png';
import IconHandler from './IconHandler';

const Header = () => {
  const sortedSociaIcons = socialIcons.sort((a, b) => a.rank - b.rank);

  return (
    <nav className='flex flex-row justify-between items-center'>
      <Link href='/' className='flex flex-row'>
        <Image src={Icon} alt='White Owl Icon' width={140} height={140} />
        <Image src={Logo} alt='White Owl Logo' width={341} height={109} />
      </Link>
      {navButtons.map((i, index) => (
        <Link
          href={i.href}
          className='hover:text-textYellow font-pf_text font-normal text-[25px]'
          key={index}
        >
          {i.title}
        </Link>
      ))}
      <div className='flex flex-row'>
        {sortedSociaIcons.map((i, index) => (
          <IconHandler i={i} key={index} />
        ))}
      </div>
    </nav>
  );
};

export default Header;
