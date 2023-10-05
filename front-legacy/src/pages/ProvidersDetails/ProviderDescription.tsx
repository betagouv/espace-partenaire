import { ChangeEvent, useState } from 'react';
import Title2 from '../../components/Title2';
import { Input } from '@codegouvfr/react-dsfr/Input';

export const ProviderDescription = () => {
  const [projectName, setProjectName] = useState<String>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setProjectName(e.target.value);
  };
  return (
    <div className="fr-mb-10v fr-col-md-4">
      <Title2 title="Description" id="description" />
      <Input
        label="Nom du projet"
        nativeInputProps={{
          onChange: handleInputChange,
        }}
      />
    </div>
  );
};
