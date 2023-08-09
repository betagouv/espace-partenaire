import Title2 from '../../components/Title2';
import { Input } from '@codegouvfr/react-dsfr/Input';

export const ProviderDescription = () => {
  return (
    <div className="fr-mb-10v fr-col-md-4">
      <Title2 title="Description" id="description" />
      <Input label="Nom du projet" />
    </div>
  );
};
