import Title2 from '../../components/Title2';
import { Button } from '@codegouvfr/react-dsfr/Button';

export const ProviderSave = () => {
  return (
    <div className="fr-mb-10v">
      <Title2 title="Sauvegarde" id="save" />
      <p>
        Pour garder ces éléments en mémoire pendant la durée de vos tests, vous
        pouvez recevoir un lien de sauvegarde par email.
      </p>
      <Button
        iconId="fr-icon-mail-fill"
        onClick={function noRefCheck() {}}
        priority="secondary"
      >
        Recevoir un lien de sauvegarde
      </Button>
    </div>
  );
};
