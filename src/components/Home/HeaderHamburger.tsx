import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger
} from '@/src/components/commons/dialog';
import { navButtons } from '@/src/constants/home';
import { socialIconsTypes } from '@/src/types/home';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import IconHandler from './IconHandler';

const HeaderHamburger = ({ icons }: { icons: socialIconsTypes[] }) => {
  return (
    <Dialog>
      <DialogTrigger className='px-2'>
        <Menu />
      </DialogTrigger>
      <DialogContent className='rounded-3xl border-2 bg-themeBlack w-[80%]'>
        <div className='flex items-center flex-col py-3'>
          {navButtons.map((i, index) => (
            <DialogClose asChild key={index} className='py-3'>
              <Link href={i.href} className='font-pf_text font-normal text-[25px] mr-3'>
                {i.title}
              </Link>
            </DialogClose>
          ))}
        </div>
        <DialogFooter className='flex items-center'>
          <div className='grid grid-cols-4 gap-x-2'>
            {icons.map((i, index) => (
              <IconHandler i={i} key={index} />
            ))}
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default HeaderHamburger;
