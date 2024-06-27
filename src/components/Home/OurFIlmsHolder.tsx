import OurFilms from '@/src/components/Home/Films';
import useFilms from '@/src/hooks/useFilms';

const OurFilmsHolder = async () => {
  const { fetchFilms } = useFilms();
  const filmsData = await fetchFilms();
  return <div>{filmsData && <OurFilms filmsData={filmsData} />}</div>;
};

export default OurFilmsHolder;
