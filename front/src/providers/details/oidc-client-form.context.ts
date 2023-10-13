import { createContext } from 'react';
import { OidcClient } from '../../types';

export const OidcClientFormContext = createContext<{
  oidcClientForm: OidcClient;
  setOidcClientForm: (oidcClient: OidcClient) => void;
}>({
  oidcClientForm: {
    clientName: '',
    clientDescription: '',
    clientId: '',
    clientSecret: '',
    redirectUris: [],
    postLogoutRedirectUris: [],
    scope: [],
  },
  setOidcClientForm: () => {},
});
