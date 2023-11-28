import { Button } from '@codegouvfr/react-dsfr/Button';
import { Input } from '@codegouvfr/react-dsfr/Input';
import { ChangeEvent, useContext, useState } from 'react';
import { OidcClientFormContext } from './oidc-client-form.context';

export const ProviderUrlDeco = () => {
  const { setOidcClientForm, oidcClientForm } = useContext(
    OidcClientFormContext
  );
  const [inputUrl, setInputUrl] = useState<string>('');
  const [contents, setContents] = useState<string[]>(
    oidcClientForm.postLogoutRedirectUris
  );

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputUrl(e.target.value);
  };

  const addUrlInArray = () => {
    if (inputUrl.trim() !== '') {
      setContents([...contents, inputUrl]);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setOidcClientForm((prevState: OidcClient) => {
        const urlDecoArray = {
          ...prevState,
          postLogoutRedirectUris: [...contents, inputUrl],
        };
        return urlDecoArray;
      });
      setInputUrl('');
    }
  };

  return (
    <div className="fr-mb-10v">
      <div className="fr-container--fluid">
        <div className="fr-grid-row fr-grid-row--bottom">
          <Input
            className="fr-col-md-7 fr-m-1v fr-text--bold"
            label="URL de la page de déconnexion"
            nativeInputProps={{
              value: inputUrl,
              placeholder: 'https://',
              onChange: handleInputChange,
            }}
          />
          <Button
            className="fr-ml-2v fr-mb-1v"
            disabled={!inputUrl}
            onClick={addUrlInArray}
          >
            Valider
          </Button>
        </div>
      </div>
      <ul>
        {contents.map((url, i) => (
          <li key={i}>{url}</li>
        ))}
      </ul>
    </div>
  );
};
