import Title2 from '../../components/Title2';
import { Input } from '@codegouvfr/react-dsfr/Input';
import { Button } from '@codegouvfr/react-dsfr/Button';
import { copy } from '../../utils';

export const ProviderKey = () => {
  return (
    <div className="fr-mb-10v">
      <Title2 title="Clés" id="keys" />
      <div className="fr-container--fluid">
        <div className="fr-grid-row fr-grid-row--bottom">
          <Input
            disabled
            className="fr-col-md-7 fr-mb-0"
            label="ClientID"
            nativeInputProps={{
              value: '',
            }}
          />
          <Button
            className="fr-ml-2v"
            iconId="fr-icon-clipboard-line"
            onClick={copy}
            priority="tertiary"
          >
            Copier
          </Button>
        </div>
      </div>
      <div className="fr-container--fluid">
        <div className="fr-grid-row fr-grid-row--bottom fr-mt-5v">
          <Input disabled className="fr-col-md-7 fr-mb-0" label="ClientID" />
          <Button
            className="fr-ml-2v"
            iconId="fr-icon-clipboard-line"
            onClick={copy}
            priority="tertiary"
          >
            Copier
          </Button>
        </div>
      </div>
    </div>
  );
};
