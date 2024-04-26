import { navButtons, socialIcons } from '@/src/constants/home';
import Image from 'next/image';
import Link from 'next/link';
import Icon from '../../assets/Icon.png';
import Logo from '../../assets/Logo.png';

const Header = () => {
  return (
    <nav className='flex flex-row justify-between items-center'>
      <Link href='/' className='flex flex-row'>
        <Image src={Icon} alt='White Owl Icon' width={140} height={140} />
        <Image src={Logo} alt='White Owl Logo' width={341} height={109} />
      </Link>
      {navButtons.map((i, index) => (
        <Link
          href={i.href}
          className='hover:text-textYellow font-pf_text font-normal text-[35px]'
          key={index}
        >
          {i.title}
        </Link>
      ))}
      <div className='flex flex-row'>
        {socialIcons.map((i, index) => (
          <Link href={i.url} key={index}>
            <Image src={i.src} alt={i.name} width={82} height={77} />
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Header;
