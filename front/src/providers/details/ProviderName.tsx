import { Input } from '@codegouvfr/react-dsfr/Input';

export const ProviderName = () => {
  return (
    <div className="fr-mb-10v">
      <div className="fr-container--fluid">
        <div className="fr-grid-row fr-grid-row--bottom">
          <Input
            className="fr-col-md-7 fr-m-1v fr-text--bold"
            label="Nom du projet"
            nativeInputProps={{
              type: 'text',
              placeholder: 'Test - date',
            }}
          />
        </div>
      </div>
    </div>
  );
};
