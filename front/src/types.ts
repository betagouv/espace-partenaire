export type OidcClient = {
  id: number;
  clientName: string;
  clientDescription: string;
  clientId: string;
  clientSecret: string;
  redirectUris: string[];
  postLogoutRedirectUris: string[];
  scope: string[];
};

export type OidcClients = OidcClient[];
