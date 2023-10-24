import { Button } from '@codegouvfr/react-dsfr/Button';
import { SideMenu } from './ProviderSideMenu';
import { ProviderDescription } from './ProviderDescription';
import { ProviderKey } from './ProviderKey';
import { ProviderUrl } from './ProviderUrl';
import { ProviderScope } from './ProviderScope';
import { ProviderSave } from './ProviderSave';
import { ProviderAuthorization } from './ProviderAuthorization';
import { ProviderUrlDeco } from './ProviderUrlDeco';
import Title1 from '../../titles/Title1';
import { OidcClientFormContext } from './oidc-client-form.context';
import { OidcClient } from '../../types';
import { useState } from 'react';
import { COLORS } from '../../constants';

export function ProviderDetails() {
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
        <Title1 title="Espace de test" />
        <p>
          Cette page vous permet de configurer vos test d'intégration du bouton
          MonComptePro !
        </p>
        <div
          className={`fr-py-6v fr-px-4v`}
          style={{ backgroundColor: COLORS.infoBackground }}
        >
          <p>
            <b className={`fr-h6`}>Documentation</b>
          </p>
          <p>
            Retrouvez toutes les informations dont vous avez besoin et nos
            <br></br>
            guidelines graphiques dans l'espace de documentation.
          </p>
          <Button iconId="fr-icon-book-2-line" priority="secondary">
            Lire la documentation
          </Button>
        </div>
        <div className="fr-container--fluid fr-mt-10v">
          <div className="fr-grid-row">
            <SideMenu></SideMenu>
            <div className="fr-col-12 fr-col-md">
              <ProviderDescription></ProviderDescription>
              <ProviderKey></ProviderKey>
              <ProviderUrl></ProviderUrl>
              <ProviderUrlDeco></ProviderUrlDeco>
              <ProviderScope></ProviderScope>
              <ProviderSave oidcClientForm={oidcClientForm}></ProviderSave>
              <ProviderAuthorization></ProviderAuthorization>
            </div>
          </div>
        </div>
      </div>
    </OidcClientFormContext.Provider>
  );
}
