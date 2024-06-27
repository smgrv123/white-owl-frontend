import Logger from '@/src/lib/Logger';
import { VideoInfo } from '../types/network';

const useFilms = () => {
  const fetchFilms = async () => {
    try {
      const fetchResponse = await fetch('https://white-owl-backend.onrender.com/films/get', {
        cache: 'no-cache'
      });
      const response = await fetchResponse.json();
      return response as VideoInfo[];
    } catch (error) {
      Logger.error('first', error);
    }
  };

  const fetchCategoryFilms = async (categoryName: string) => {
    try {
      Logger.log('resp', categoryName);
      const fetchResponse = await fetch(
        `https://white-owl-backend.onrender.com/films/get/?categoryName=${categoryName}`,
        {
          cache: 'no-cache'
        }
      );
      const response = await fetchResponse.json();
      return response as VideoInfo[];
    } catch (error) {
      Logger.error(error);
    }
  };

  return {
    fetchFilms,
    fetchCategoryFilms
  };
};

export default useFilms;
