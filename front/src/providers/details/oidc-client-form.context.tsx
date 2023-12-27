import { PropsWithChildren, createContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { OidcClient } from '../../types';

export const OidcClientFormContext = createContext<{
  oidcClientForm: OidcClient;
  setOidcClientForm: React.Dispatch<React.SetStateAction<OidcClient>>;
}>({
  oidcClientForm: {} as OidcClient,
  setOidcClientForm: (oidcClient) => oidcClient,
});

export function OidcClientFormProvider({
  children,
}: PropsWithChildren<{ id?: string }>) {
  const item = useLoaderData() as OidcClient;

  const [oidcClientForm, setOidcClientForm] = useState<OidcClient>(
    item ?? {
      clientName: 'Test ' + new Date().toLocaleDateString(),
      clientDescription: '',
      clientId: '',
      clientSecret: '',
      redirectUris: [],
      postLogoutRedirectUris: [],
      scope: [],
    },
  );

  return (
    <OidcClientFormContext.Provider
      value={{
        oidcClientForm,
        setOidcClientForm,
      }}
    >
      {children}
    </OidcClientFormContext.Provider>
  );
}
