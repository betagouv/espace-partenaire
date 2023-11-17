import { Input } from '@codegouvfr/react-dsfr/Input';
import { Button } from '@codegouvfr/react-dsfr/Button';
import { ChangeEvent, useContext, useState } from 'react';
import Title2 from '../../titles/Title2';
import { OidcClientFormContext } from './oidc-client-form.context';

export const ProviderUrl = () => {
  const [inputUrl, setInputUrl] = useState<string>('');
  const [contents, setContents] = useState<string[]>([]);
  const { setOidcClientForm } = useContext(OidcClientFormContext);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputUrl(e.target.value);
  };

  const addUrlInArray = () => {
    if (inputUrl.trim() !== '') {
      setContents([...contents, inputUrl]);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setOidcClientForm((prevState: OidcClient) => {
        const urlArray = {
          ...prevState,
          redirectUris: [...contents, inputUrl],
        };
        return urlArray;
      });
      setInputUrl('');
    }
  };

  return (
    <div className="fr-mb-10v">
      <Title2 title="Configuration des URLs" id="url" />
      <p>
        Saisissez l'url de la ou les pages sur lesquelles vous souhaitez
        utiliser le bouton de connexion MonComptePro
      </p>
      <div className="fr-container--fluid">
        <div className="fr-grid-row fr-grid-row--bottom">
          <Input
            className="fr-col-md-7 fr-m-1v fr-text--bold"
            label="URL de la page de connexion :"
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
