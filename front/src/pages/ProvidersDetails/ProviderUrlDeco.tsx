import Title2 from '../../components/Title2';
import { Input } from '@codegouvfr/react-dsfr/Input';
import { Button } from '@codegouvfr/react-dsfr/Button';
import { ChangeEvent, useState } from 'react';

export const ProviderUrlDeco = () => {
  const [inputUrl, setInputUrl] = useState<string>('');
  const [stringArray, setStringArray] = useState<string[]>([]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputUrl(e.target.value);
  };

  const addUrlInArray = () => {
    if (inputUrl.trim() !== '') {
      setStringArray([...stringArray, inputUrl]);
      setInputUrl('');
    }
  };

  console.log(stringArray);

  return (
    <div className="fr-mb-10v">
      <Title2 title="URL de déconnexion" id="url" />
      <p>
        Saisissez l'url de la ou les pages sur lesquelles vous souhaitez
        utiliser le bouton de déconnexion MonComptePro
      </p>
      <div className="fr-container--fluid">
        <div className="fr-grid-row fr-grid-row--bottom">
          <Input
            className="fr-col-md-7 fr-m-1v"
            label="Url du site :"
            nativeInputProps={{
              value: inputUrl,
              placeholder: 'https://',
              onChange: handleInputChange,
            }}
          />
          <Button
            className="fr-ml-2v fr-mb-1v"
            disabled={!inputUrl}
            // disabled
            onClick={addUrlInArray}
          >
            Valider
          </Button>
        </div>
      </div>
      <ul>
        {stringArray.map((url, i) => (
          <li key={i}>{url}</li>
        ))}
      </ul>
      {/* <Button
        disabled={!inputUrl}
        className="fr-ml-1v fr-mt-4v"
        iconId="fr-icon-add-line"
        onClick={function noRefCheck() {}}
        priority="secondary"
      >
        Ajouter une url
      </Button> */}
    </div>
  );
};
