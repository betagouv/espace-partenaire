import { Checkbox } from '@codegouvfr/react-dsfr/Checkbox';
import React, { ChangeEvent, useContext, useState } from 'react';
import { COLORS } from '../../constants';
import Title2 from '../../titles/Title2';
import { OidcClient } from '../../types';
import { OidcClientFormContext } from './oidc-client-form.context';

export const ProviderScope = () => {
  const { setOidcClientForm, oidcClientForm } = useContext(
    OidcClientFormContext
  );
  const [scope, setScope] = useState<string[]>(oidcClientForm.scope);

  const getScopes = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setScope((prevScope) => [...prevScope, e.target.value]);
    } else {
      setScope((prevScope) => prevScope.filter((s) => s !== e.target.value));
    }
  };
  React.useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setOidcClientForm((prevState: OidcClient) => {
      const result = { ...prevState, scope: [...scope] };
      return result;
    });
  }, [scope, setOidcClientForm]);
  return (
    <div>
      <Title2 title="Données à récupérer" id="scopes" />
      <div
        className={`fr-container--fluid fr-mb-5v`}
        style={{ backgroundColor: COLORS.infoBackground }}
      >
        <div className="fr-grid-row fr-grid-row--middle fr-p-5v">
          <p className="fr-col-1 fr-display--xs fr-mb-0">💡</p>
          <p className="fr-col-11 fr-mb-0">
            Vous pouvez utiliser tous les paramètres disponibles via
            MonComptePro pendant vos tests. Gardez en mémoire que pour que votre
            habilitation soit validée, vous devrez utiliser uniquement&nbsp;
            <b>les données strictement nécessaires</b> à votre service.
          </p>
        </div>
      </div>
      <Checkbox
        legend="Choix des champs"
        options={[
          {
            label: 'Nom',
            nativeInputProps: {
              name: 'checkboxes-1',
              value: 'firstname',
              checked: scope.includes('firstname'),
              onChange: getScopes,
            },
          },
          {
            label: 'Prénom',
            nativeInputProps: {
              name: 'checkboxes-1',
              value: 'lastname',
              checked: scope.includes('lastname'),
              onChange: getScopes,
            },
          },
          {
            label: 'Fonction au sein de l’organisation',
            nativeInputProps: {
              name: 'checkboxes-1',
              value: 'function-in-organization',
              checked: scope.includes('function-in-organization'),
              onChange: getScopes,
            },
          },
          {
            label: 'Email professionnel',
            nativeInputProps: {
              name: 'checkboxes-1',
              value: 'email',
              checked: scope.includes('email'),
              onChange: getScopes,
            },
          },
        ]}
        state="default"
      />
    </div>
  );
};
