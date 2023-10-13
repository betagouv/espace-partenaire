import { Checkbox } from '@codegouvfr/react-dsfr/Checkbox';
import { ChangeEvent, useContext, useState } from 'react';
import Title2 from '../../titles/Title2';
import { fr } from '@codegouvfr/react-dsfr';
import { OidcClientFormContext } from './oidc-client-form.context';

export const ProviderScope = () => {
  const [scope, setScope] = useState<string[]>([]);
  const { oidcClientForm, setOidcClientForm } = useContext(
    OidcClientFormContext
  );
  const backgroundBlueFrance =
    fr.colors.decisions.background.alt.blueFrance.default;

  const getScopes = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      // const newScope = setScope((prevScope) => [...prevScope, e.target.value]);
      setOidcClientForm((prevState: OidcClient) => {
        const result = { ...prevState, scope: [...scope, e.target.value] };
        console.log('nzewscopeokdvoizrirzjioerzj', result);
        return result;
      });
      // return newScope;
    } else {
      setScope((prevScope) => prevScope.filter((s) => s !== e.target.value));
    }
  };
  console.log(scope);
  return (
    <div className="fr-mb-10v">
      <Title2 title="Champs" id="scopes" />
      <div
        className={`fr-container--fluid fr-mb-5v`}
        style={{ backgroundColor: backgroundBlueFrance }}
      >
        <div className="fr-grid-row fr-grid-row--middle fr-p-5v">
          <p className="fr-col-1 fr-display--xs fr-mb-0">💡</p>
          <p className="fr-col-11 fr-mb-0">
            Vous pouvez utiliser tous les paramètres disponibles via
            MonComptePro pendant vos tests. Gardez en mémoire que pour que votre
            habilitation soit validée, vous devrez utiliser uniquement
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
              onChange: getScopes,
            },
          },
          {
            label: 'Prénom',
            nativeInputProps: {
              name: 'checkboxes-1',
              value: 'lastname',
              onChange: getScopes,
            },
          },
          {
            label: 'Fonction au sein de l’organisation',
            nativeInputProps: {
              name: 'checkboxes-1',
              value: 'function-in-organization',
              onChange: getScopes,
            },
          },
          {
            label: 'Email professionnel',
            nativeInputProps: {
              name: 'checkboxes-1',
              value: 'email',
              onChange: getScopes,
            },
          },
        ]}
        state="default"
      />
    </div>
  );
};
