import Logger from '@/src/lib/Logger';
import { FilmsService } from '@/src/models/network/Films';

const filmsService = new FilmsService();

const useFilms = () => {
  const fetchFilms = async () => {
    try {
      const response = await filmsService.getFilms();
      Logger.log('res', response);
      return response;
    } catch (error) {
      Logger.error('first');
    }
  };

  const fetchCategoryFilms = async (categoryName: string) => {
    try {
      const response = await filmsService.getCategoryFilms(categoryName);
      return response;
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
