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
import { fr } from '@codegouvfr/react-dsfr';
import { createContext, useContext, useState } from 'react';
import { BaseClientOidc } from './types';
import { FormDataContext } from './FormData.context';

export function ProviderDetails() {
  const [formData, setFormData] = useState<BaseClientOidc>({
    clientName: '',
    clientDescription: '',
    clientId: '',
    clientSecret: '',
    redirectUris: [],
    postLogoutRedirectUris: [],
    scope: [],
  });

  const backgroundBlueFrance =
    fr.colors.decisions.background.alt.blueFrance.default;

  return (
    <FormDataContext.Provider value={{ setFormData }}>
      <div className="fr-container">
        <Title1 title="Espace de test" />
        <p>
          Cette page vous permet de configurer vos test d'intégration du bouton
          MonComptePro !
        </p>
        <div
          className={`fr-py-6v fr-px-4v`}
          style={{ backgroundColor: backgroundBlueFrance }}
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
              <ProviderSave></ProviderSave>
              <ProviderAuthorization></ProviderAuthorization>
            </div>
          </div>
        </div>
      </div>
    </FormDataContext.Provider>
  );
}
