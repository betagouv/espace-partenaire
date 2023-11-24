import { Input } from '@codegouvfr/react-dsfr/Input';
import { ChangeEvent, useCallback, useContext } from 'react';
import { OidcClientFormContext } from './oidc-client-form.context';

export const ProviderName = () => {
  const { oidcClientForm, setOidcClientForm } = useContext(
    OidcClientFormContext
  );
  const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setOidcClientForm((prevState) => ({ ...prevState, clientName: value }));
  }, []);

  return (
    <div className="fr-mb-10v">
      <div className="fr-container--fluid">
        <div className="fr-grid-row fr-grid-row--bottom">
          <Input
            className="fr-col-md-7 fr-m-1v fr-text--bold"
            state={oidcClientForm.clientName === '' ? 'error' : 'default'}
            stateRelatedMessage="Nom de projet obligatoire"
            label="Nom du projet"
            nativeInputProps={{
              type: 'text',
              placeholder: 'Test - date',
              onChange,
              required: true,
              value: oidcClientForm.clientName,
            }}
          />
        </div>
      </div>
    </div>
  );
};
