import Footer from '@/src/components/Home/Footer';
import Header from '@/src/components/Home/Header';
import WOCollabs from '@/src/components/commons/WOCollabs';
import { cn } from '@/src/lib/utils';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
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
  return (
    <html lang='en'>
      <body className={cn(inter.className, 'bg-themeBlack text-textWhite cursor-custom_pointer')}>
        <main>
          <section className='z-10 absolute w-[100%]'>
            <Header />
          </section>
          {children}
          <div className='p-5 sm:p-[88px]'>
            <div className='font-pf_text font-normal text-3xl sm:text-7xl'>Our Collaborations</div>
            <WOCollabs />
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
