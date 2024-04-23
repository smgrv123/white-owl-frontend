import Logger from '@/src/lib/Logger';
import { TemplateService } from '@/src/models/network';

const tempService = new TemplateService();

const useTemplate = () => {
  const fetchTemplate = async () => {
    try {
      const response = await tempService.getTemplate();
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

export default useTemplate;
