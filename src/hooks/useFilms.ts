import Logger from '@/src/lib/Logger';
import { FilmsService } from '@/src/models/network/Films';

// const tempService = new TemplateService();
const filmsService = new FilmsService();

const useFilms = () => {
  const fetchFilms = async () => {
    try {
      //   const response = await tempService.getTemplate();
      const response = await filmsService.getFilms();
      Logger.log('res', response);
      return response;
    } catch (error) {
      Logger.error('first');
    }
  };

  return {
    fetchFilms
  };
};

export default useFilms;
