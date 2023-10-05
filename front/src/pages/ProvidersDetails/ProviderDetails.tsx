import Title1 from '../../components/Title1';
import { makeStyles } from 'tss-react/dsfr';
import { Button } from '@codegouvfr/react-dsfr/Button';
import { SideMenu } from './ProviderSideMenu';
import { ProviderDescription } from './ProviderDescription';
import { ProviderKey } from './ProviderKey';
import { ProviderUrl } from './ProviderUrl';
import { ProviderScope } from './ProviderScope';
import { ProviderSave } from './ProviderSave';
import { ProviderAuthorization } from './ProviderAuthorization';
import { ProviderUrlDeco } from './ProviderUrlDeco';

export type BaseClientOidc = {
  clientName: string;
  clientDescription: string;
  clientId: string;
  clientSecret: string;
  redirectUris: string[];
  postLogoutRedirectUris: string[];
  scope: string[];
};

export function ProviderDetails() {
  // const [requestData, setRequestData] = useState<BaseClientOidc>({
  //   clientName: '',
  //   clientDescription: '',
  //   clientId: '',
  //   clientSecret: '',
  //   redirectUris: [],
  //   postLogoutRedirectUris: [],
  //   scope: [],
  // });
  const { classes, cx } = useStyles();

  return (
    <div className="fr-container">
      <Title1 title="Espace de test" />
      <p>
        Cette page vous permet de configurer vos test d'intégration du bouton
        MonComptePro !
      </p>
      <div className={`${cx(classes.root)} fr-py-6v fr-px-4v`}>
        <p>
          <b>Documentation</b>
        </p>
        <p>
          Retrouvez toutes les informations dont vous avez besoin et nos
          guidelines graphiques dans l'espace de documentation.
        </p>
        <Button iconId="fr-icon-book-2-line" priority="secondary">
          Lire la documentation
        </Button>
      </div>
      <div className="fr-container--fluid fr-mt-10v">
        <div className="fr-grid-row">
          <SideMenu></SideMenu>
          <div className="fr-col-12 fr-col-md">
            <ProviderDescription></ProviderDescription>
            <ProviderKey></ProviderKey>
            <ProviderUrl></ProviderUrl>
            <ProviderUrlDeco></ProviderUrlDeco>
            <ProviderScope></ProviderScope>
            <ProviderSave></ProviderSave>
            <ProviderAuthorization></ProviderAuthorization>
          </div>
        </div>
      </div>
    </div>
  );
}

const useStyles = makeStyles()((theme) => ({
  root: {
    backgroundColor: theme.decisions.background.alt.blueFrance.default,
  },
}));
