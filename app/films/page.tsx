import OurFilms from '@/src/components/Home/Films';
import useFilms from '@/src/hooks/useFilms';

export default async function AboutUs() {
  const { fetchFilms } = useFilms();
  const filmsData = await fetchFilms();
  return (
    <section>
      <div className='h-[75px] sm:h-[140px]' />
      {filmsData && <OurFilms filmsData={filmsData} />}
    </section>
  );
}
