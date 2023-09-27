import { Button } from '@codegouvfr/react-dsfr/Button';
import Title2 from '../../titles/Title2';
import { backendClient } from '../../clients/back-client';
import { OidcClient } from '../../types';

interface ProviderSaveProps {
  oidcClientForm: OidcClient;
}

export const ProviderSave: React.FC<ProviderSaveProps> = ({
  oidcClientForm,
}) => {
  return (
    <div className="fr-mb-10v">
      <Title2 title="Sauvegarde" id="save" />
      <p>
        Pour garder ces éléments en mémoire pendant la durée de vos tests, vous
        pouvez recevoir un lien de sauvegarde par email.
      </p>
      <Button
        iconId="fr-icon-mail-fill"
        onClick={() => backendClient.postOidcClient(oidcClientForm)}
        priority="secondary"
      >
        Recevoir un lien de sauvegarde
      </Button>
    </div>
  );
};
