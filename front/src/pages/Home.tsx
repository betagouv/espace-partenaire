import Title1 from '../components/Title1';
import { makeStyles } from 'tss-react/dsfr';
import Title2 from '../components/Title2';
import ButtonSecondaryIcon from '../components/ButtonSecondaryIcon';

function Home() {
  const { classes, cx } = useStyles();

  return (
    <div className="fr-container">
      <Title1 title="Espace de test" />
      <p>
        Cette page vous permet de configurer vos
        test d'intégration du bouton MonComptePro
        !
      </p>
      <div
        className={`${cx(
          classes.root
        )} fr-py-6v fr-px-4v`}
      >
        <Title2 title="Documentation" />
        <p>
          Retrouvez toutes les informations dont
          vous avez besoin et nos guidelines
          graphiques dans l'espace de
          documentation.
        </p>
        <ButtonSecondaryIcon
          iconId="fr-icon-book-2-line"
          label="Lire la documentation"
        />
      </div>
    </div>
  );
}

const useStyles = makeStyles()((theme) => ({
  root: {
    backgroundColor:
      theme.decisions.background.alt.blueFrance
        .default,
  },
}));

export default Home;
