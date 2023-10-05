import { Button } from '@codegouvfr/react-dsfr/Button';

function Home() {
  return (
    <div className="fr-container">
      <div className="fr-grid-row fr-grid-row--center fr-my-10v">
        <Button
          linkProps={{
            to: '/details',
          }}
          size="large"
        >
          Connexion - Test Espace-Partenaire
        </Button>
      </div>
    </div>
  );
}

export default Home;
