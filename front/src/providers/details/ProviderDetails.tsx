import { SideMenu } from './ProviderSideMenu';
import { ProviderKey } from './ProviderKey';
import { ProviderUrl } from './ProviderUrl';
import { ProviderScope } from './ProviderScope';
import { KeyProductionData } from './KeyProductionData';
import { ProviderUrlDeco } from './ProviderUrlDeco';
import Title1 from '../../titles/Title1';
import { OidcClientFormContext } from './oidc-client-form.context';
import { OidcClient } from '../../types';
import { useState } from 'react';
import CardInfos from '../../cards/CardInfos';
import monImage from '../../images/test-image.png';
import monImage2 from '../../images/test-image2.png';
import { ProviderValidation } from './ProviderValidation';
import { ProviderName } from './ProviderName';

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
        <Title1 title="Implémentation" />
        <div className="fr-container">
          <div className="fr-grid-row fr-grid-row--gutters">
            <CardInfos
              title="Faites vos tests"
              contents={[
                'Accédez à des clés de test',
                'Configurez vos URLS de login et de callback',
                'Faites votre choix de données',
              ]}
              image={monImage}
              buttonTitle="Commencer les tests"
              icon="fr-icon-equalizer-fill"
            />
            <CardInfos
              title="Passez en production"
              contents={[
                'Identifiez le membre de votre équipe qui représente officiellement l’organisation',
                'Envoyez-lui le lien de l’habilitation juridique à remplir sur Datapass',
                'Recevez vos clés de production à la validation de l’habilitation (5 jours en moyenne)',
              ]}
              image={monImage2}
              buttonTitle="Envoyer le lien Datapass"
              icon="fr-icon-send-plane-fill"
            />
          </div>
        </div>
        <div className="fr-container fr-mt-10v">
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
}
