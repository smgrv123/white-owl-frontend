'use client';

import { navButtons, socialIcons } from '@/src/constants/home';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Modal from 'react-modal';
import Icon from '../../assets/Icon.png';
import Logo from '../../assets/Logo.png';
import IconHandler from './IconHandler';

const Header = () => {
  const sortedSociaIcons = socialIcons.sort((a, b) => a.rank - b.rank);
  const [openModal, setopenModal] = useState(false);

  const closeModal = () => {
    setopenModal(true);
  };

  return (
    <nav className='flex flex-row justify-between items-center '>
      <Link href='/' className='flex flex-row z-1'>
        <Image src={Icon} alt='White Owl Icon' className='sm:w-36 sm:h-36 h-10 w-10' />
        <Image
          src={Logo}
          alt='White Owl Logo'
          className='sm:w-80 sm:h-28 w-32 h-10 sm:overflow-hidden'
        />
      </Link>

      {typeof window !== undefined && window.screen.width > 640 ? (
        <div className='flex flex-row justify-around w-[100%] items-center'>
          {navButtons.map((i, index) => (
            <Link
              href={i.href}
              className='hover:text-textYellow font-pf_text font-normal text-[25px] mr-3'
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
        </div>
      ) : (
        <Menu onClick={closeModal} />
      )}
      <Modal
        isOpen={openModal}
        onRequestClose={closeModal}
        className='h-[430px] w-[313px] bg-black border-2 border-white rounded-r-md'
      >
        Hello World
      </Modal>
    </nav>
  );
};

export default Header;
