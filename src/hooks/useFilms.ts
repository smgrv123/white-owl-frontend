import Logger from '@/src/lib/Logger';
import { FilmsService } from '@/src/models/network/Films';

// const tempService = new TemplateService();
const filmsService = new FilmsService();

const useFilms = () => {
  const fetchTemplate = async () => {
    try {
      //   const response = await tempService.getTemplate();
      const response = await filmsService.getTemplate();
      Logger.log('res', response);
      return response;
    } catch (error) {
      Logger.error('first');
    }
  };

  return {
    fetchTemplate
  };
};

export default useFilms;
