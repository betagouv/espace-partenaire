import { useContext } from 'react';
import Title1 from '../../titles/Title1';
import { KeyProductionData } from '../details/KeyProductionData';
import { ProviderKey } from '../details/ProviderKey';
import { ProviderName } from '../details/ProviderName';
import { ProviderScope } from '../details/ProviderScope';
import { SideMenu } from '../details/ProviderSideMenu';
import { ProviderUrl } from '../details/ProviderUrl';
import { ProviderUrlDeco } from '../details/ProviderUrlDeco';
import { ProviderValidation } from '../details/ProviderValidation';
import { OidcClientFormContext } from '../details/oidc-client-form.context';

export const EspaceConnected = () => {
  const { oidcClientForm } = useContext(OidcClientFormContext);
  return (
    <>
      <div className="fr-container">
        <Title1>{oidcClientForm.clientName}</Title1>
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
    </>
  );
};
