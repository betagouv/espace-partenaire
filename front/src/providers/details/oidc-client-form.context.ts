import { createContext } from 'react';
import { OidcClient } from '../../types';

export const OidcClientFormContext = createContext<{
  setOidcClientForm: React.Dispatch<React.SetStateAction<OidcClient>>;
}>({
  setOidcClientForm: (oidcClient) => oidcClient,
});
