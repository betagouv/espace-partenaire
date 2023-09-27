export type OidcClient = {
  clientName: string;
  clientDescription: string;
  clientId: string;
  clientSecret: string;
  redirectUris: string[];
  postLogoutRedirectUris: string[];
  scope: string[];
};
