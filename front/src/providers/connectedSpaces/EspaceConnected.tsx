import Title1 from '../../titles/Title1';
import { KeyProductionData } from '../details/KeyProductionData';
import { ProviderKey } from '../details/ProviderKey';
import { ProviderName } from '../details/ProviderName';
import { ProviderScope } from '../details/ProviderScope';
import { ProviderUrl } from '../details/ProviderUrl';
import { ProviderUrlDeco } from '../details/ProviderUrlDeco';
import { ProviderValidation } from '../details/ProviderValidation';
import { OidcClientFormContext } from '../details/oidc-client-form.context';
import { OidcClient } from '../../types';
import { useState } from 'react';
import { SideMenu } from '../details/ProviderSideMenu';

export const EspaceConnected = () => {
  const [oidcClientForm, setOidcClientForm] = useState<OidcClient>({
    clientName: '',
    clientDescription: '',
    clientId: '',
    clientSecret: '',
    redirectUris: [],
    postLogoutRedirectUris: [],
    scope: [],
  });
  return (
    <OidcClientFormContext.Provider
      value={{
        setOidcClientForm,
      }}
    >
      <div className="fr-container">
        <Title1 title="Espace connecté" />
        <div className="fr-container--fluid">
          <div className="fr-grid-row fr-grid-row--gutters"></div>
        </div>
        <div className="fr-container--fluid fr-mt-10v">
          <div className="fr-grid-row">
            <SideMenu></SideMenu>
            <div className="fr-col-12 fr-col-md">
              <ProviderName />
              <ProviderKey />
              <ProviderUrl />
              <ProviderUrlDeco />
              <ProviderScope />
              <ProviderValidation oidcClientForm={oidcClientForm} />
              <KeyProductionData />
            </div>
          </div>
        </div>
      </div>
    </OidcClientFormContext.Provider>
  );
};
