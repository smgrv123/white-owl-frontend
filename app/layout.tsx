import Footer from '@/src/components/Home/Footer';
import Header from '@/src/components/Home/Header';
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
      <body className={cn(inter.className, 'bg-themeBlack text-textWhite')}>
        <main>
          <section className='z-10 absolute w-[100%]'>
            <Header />
          </section>
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
