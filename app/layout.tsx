import WOCollabs from '@/src/assets/WOCollabs.svg';
import Footer from '@/src/components/Home/Footer';
import { cn } from '@/src/lib/utils';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import './globals.css';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'White Owl Productions',
  description: '',
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const DynamicHeader = dynamic(() => import('@/src/components/Home/Header'), {
    ssr: false
  });

  return (
    <html lang='en'>
      <body className={cn(inter.className, 'bg-themeBlack text-textWhite cursor-custom_pointer')}>
        <main>
          <section className='z-10 absolute w-[100%]'>
            <DynamicHeader />
          </section>
          {children}
          <div className='p-5 sm:p-[88px]'>
            <div className='font-pf_text font-normal text-3xl sm:text-7xl'>Our Collaborations</div>
            <Image src={WOCollabs} alt='' className='sm:pt-8 pt-3' />
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
