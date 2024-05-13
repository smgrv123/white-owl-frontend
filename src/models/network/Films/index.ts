/* eslint-disable @typescript-eslint/no-explicit-any */
import { HTTPMethod, NetworkClient, RequestInfoType } from '@/src/networking/BaseNetwork';
import { ServiceClient } from '@/src/networking/ServiceClient';

export type RequestModel<T> = {
  type: ServiceType;
  data?: T;
  queryParams?: { [key: string]: string | number | boolean };
};

export enum ServiceType {
  GET_FILMS = 'GET_FILMS'
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
  }
}

export class FilmsService {
  private networkRepository: NetworkClient;
  constructor() {
    this.networkRepository = ServiceClient.getRepositoryInstance();
  }

  getFilms = (): Promise<
    {
      _id: string;
      youtubeEmbedId: string;
      directorsName: string;
      fileTitle: string;
      heroImageId: string;
      category: string;
    }[]
  > => {
    const getTemplateCall = getNetworkRequestInfo<null>({
      type: ServiceType.GET_FILMS
    });

    return this.networkRepository.processRequest<
      null,
      {
        _id: string;
        youtubeEmbedId: string;
        directorsName: string;
        fileTitle: string;
        heroImageId: string;
        category: string;
      }[]
    >(getTemplateCall);
  };
}
