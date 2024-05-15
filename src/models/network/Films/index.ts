/* eslint-disable @typescript-eslint/no-explicit-any */
import { HTTPMethod, NetworkClient, RequestInfoType } from '@/src/networking/BaseNetwork';
import { ServiceClient } from '@/src/networking/ServiceClient';
import { VideoInfo } from '@/src/types/network';

export type RequestModel<T> = {
  type: ServiceType;
  data?: T;
  queryParams?: { [key: string]: string | number | boolean };
};

export enum ServiceType {
  GET_FILMS = 'GET_FILMS',
  GET_CATEGORY_FILMS = 'GET_CATEGORY_FILMS'
}

enum ServiceURL {
  GET_FILMS = '/films/get'
}

function getNetworkRequestInfo<T>(model: RequestModel<T>): RequestInfoType<T> {
  switch (model.type) {
    case ServiceType.GET_FILMS: {
      return {
        url: ServiceURL.GET_FILMS,
        method: HTTPMethod.GET
      };
    }
    case ServiceType.GET_CATEGORY_FILMS: {
      return {
        url: ServiceURL.GET_FILMS,
        method: HTTPMethod.GET,
        queryParams: model.queryParams
      };
    }
  }
}

export class FilmsService {
  private networkRepository: NetworkClient;
  constructor() {
    this.networkRepository = ServiceClient.getRepositoryInstance();
  }

  getFilms = (): Promise<VideoInfo[]> => {
    const getTemplateCall = getNetworkRequestInfo<null>({
      type: ServiceType.GET_FILMS
    });

    return this.networkRepository.processRequest<null, VideoInfo[]>(getTemplateCall);
  };

  getCategoryFilms = (categoryName: string): Promise<VideoInfo[]> => {
    const getTemplateCall = getNetworkRequestInfo<null>({
      type: ServiceType.GET_CATEGORY_FILMS,
      queryParams: {
        categoryName
      }
    });
    return this.networkRepository.processRequest<null, VideoInfo[]>(getTemplateCall);
  };
}
