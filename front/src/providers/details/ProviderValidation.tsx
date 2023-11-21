import { Button } from '@codegouvfr/react-dsfr/Button';
import { backendClient } from '../../clients/back-client';
import { OidcClient } from '../../types';

interface KeyProductionDataProps {
  oidcClientForm: OidcClient;
}

export const ProviderValidation: React.FC<KeyProductionDataProps> = ({
  oidcClientForm,
}) => {
  return (
    <Button
      onClick={() => backendClient.postOidcClient(oidcClientForm)}
      className="fr-mt-2v fr-mb-10v"
    >
      Envoyez vos informations en base de données
    </Button>
  );
};
