import Header from '@/src/components/Home/Header';
import Showreel from '@/src/components/Home/Showreel';
// import useFilms from '@/src/hooks/useFilms';

export default async function Home() {
  // const { fetchTemplate } = useFilms();
  // await fetchTemplate();

  return (
    <main className="min-h-screen relative">
      <section className="z-10 absolute w-[100%]">
        <Header />
      </section>
      <Showreel src="https://videos.pexels.com/video-files/6548176/6548176-hd_1920_1080_24fps.mp4" />
    </main>
  );
}
