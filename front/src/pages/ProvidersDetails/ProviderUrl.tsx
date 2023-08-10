import Title2 from '../../components/Title2';
import { Input } from '@codegouvfr/react-dsfr/Input';
import { Button } from '@codegouvfr/react-dsfr/Button';
import { ChangeEvent, useState } from 'react';

export const ProviderUrl = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  return (
    <div className="fr-mb-10v">
      <Title2 title="URL" id="url" />
      <p>
        Saisissez l'url de la ou les pages sur lesquelles vous souhaitez
        utiliser le bouton de connexion MonComptePro
      </p>
      <div className="fr-container--fluid">
        <div className="fr-grid-row fr-grid-row--bottom">
          <Input
            className="fr-col-md-7 fr-m-1v"
            label="Url du site :"
            nativeInputProps={{
              placeholder: 'https://',
              onChange: handleInputChange,
            }}
          />
          <Button
            className="fr-ml-2v fr-mb-1v"
            // disabled={!inputValue}
            disabled
            onClick={function noRefCheck() {}}
          >
            Valider
          </Button>
        </div>
      </div>
      <Button
        disabled
        className="fr-ml-1v fr-mt-4v"
        iconId="fr-icon-add-line"
        onClick={function noRefCheck() {}}
        priority="secondary"
      >
        Ajouter une url
      </Button>
    </div>
  );
};
