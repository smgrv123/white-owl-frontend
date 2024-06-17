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
  },
  keywords: 'movies, films, production, whiteowl, ads, Vishal Sane',
  openGraph: {
    type: 'website',
    description:
      'White Owl Production was born with a purpose; to help our clients strategise, produce and market video content that engages their audience. We combine purpose, narrative and production to craft conscious content for agencies, brands and businesses. We provide end to end solutions to our clients.',
    images: 'https://ik.imagekit.io/whiteowl/Logo.png?updatedAt=1718627625435'
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
