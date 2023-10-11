import { ChangeEvent, useContext, useState } from 'react';
import { Input } from '@codegouvfr/react-dsfr/Input';
import Title2 from '../../titles/Title2';
import { FormDataContext } from './FormData.context';

export const ProviderDescription = () => {
  // const [projectName, setProjectName] = useState<string>('');

  const { setFormData } = useContext(FormDataContext);

  console.log(setFormData);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    // setProjectName(e.target.value);
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
