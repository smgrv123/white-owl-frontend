import { AuthlessHttpClient, NetworkClient } from './BaseNetwork';

export class ServiceClient {
  private static authlessClient: AuthlessHttpClient;

  static getRepositoryInstance(): NetworkClient {
    if (!ServiceClient.authlessClient) {
      ServiceClient.authlessClient = new AuthlessHttpClient(
        'https://white-owl-backend.onrender.com'
      );
    }

    return ServiceClient.authlessClient;
  }
}
