import { ChangeEvent, useContext } from 'react';
import { Input } from '@codegouvfr/react-dsfr/Input';
import Title2 from '../../titles/Title2';
import { OidcClientFormContext } from './oidc-client-form.context';
import { OidcClient } from '../../types';

export const ProviderDescription = () => {
  const { setOidcClientForm } = useContext(OidcClientFormContext);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    inputName: string
  ) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setOidcClientForm((prevState: OidcClient) => {
      return { ...prevState, [inputName]: e.target.value };
    });
  };
  return (
    <div className="fr-mb-10v fr-col-md-4">
      <Title2 title="Description" id="description" />
      <Input
        label="Nom du projet"
        nativeInputProps={{
          onChange: (e) => handleInputChange(e, 'clientName'),
        }}
      />
      <Input
        label="Decription du projet"
        className="fr-"
        id="textArea"
        nativeInputProps={{
          onChange: (e) => handleInputChange(e, 'clientDescription'),
        }}
      />
    </div>
  );
};
