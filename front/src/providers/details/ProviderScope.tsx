import { Checkbox } from '@codegouvfr/react-dsfr/Checkbox';
import { ChangeEvent, useState } from 'react';
import Title2 from '../../titles/Title2';
import { fr } from '@codegouvfr/react-dsfr';

export const ProviderScope = () => {
  const [scope, setScope] = useState<string[]>([]);
  const backgroundBlueFrance =
    fr.colors.decisions.background.alt.blueFrance.default;

  const test = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setScope([...scope, e.target.value]);
    } else {
      setScope(
        scope?.filter((s) => {
          return s !== e.target.value;
        })
      );
    }
  };
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
              onChange: test,
            },
          },
          {
            label: 'Prénom',
            nativeInputProps: {
              name: 'checkboxes-1',
              value: 'lastname',
              onChange: test,
            },
          },
          {
            label: 'Fonction au sein de l’organisation',
            nativeInputProps: {
              name: 'checkboxes-1',
              value: 'function-in-organization',
              onChange: test,
            },
          },
          {
            label: 'Email professionnel',
            nativeInputProps: {
              name: 'checkboxes-1',
              value: 'email',
              onChange: test,
            },
          },
        ]}
        state="default"
      />
    </div>
  );
};
