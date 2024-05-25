import Footer from '@/src/components/Home/Footer';
import { cn } from '@/src/lib/utils';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
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
          <Footer />
        </main>
      </body>
    </html>
  );
}
