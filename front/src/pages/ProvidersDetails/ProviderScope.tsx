import Title2 from '../../components/Title2';
import { makeStyles } from 'tss-react/dsfr';
import { Checkbox } from '@codegouvfr/react-dsfr/Checkbox';
import { useState } from 'react';

export const ProviderScope = () => {
  const [scope, setScope] = useState<String[]>([]);

  const { classes, cx } = useStyles();

  const test = () => {
    console.log('salut bg');
  };

  return (
    <div className="fr-mb-10v">
      <Title2 title="Champs" id="scopes" />
      <div className={`${cx(classes.root)} fr-container--fluid fr-mb-5v`}>
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
              value: 'value3',
              onChange: test,
            },
          },
          {
            label: 'Fonction au sein de l’organisation',
            nativeInputProps: {
              name: 'checkboxes-1',
              value: 'value3',
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

const useStyles = makeStyles()((theme) => ({
  root: {
    backgroundColor: theme.decisions.background.alt.blueFrance.default,
  },
}));
