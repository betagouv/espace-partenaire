import { createContext } from 'react';
import { OidcClient } from '../../types';

export const OidcClientFormContext = createContext<{
  setOidcClientForm: (oidcClient: OidcClient) => OidcClient;
}>({
  setOidcClientForm: (oidcClient) => oidcClient,
});
