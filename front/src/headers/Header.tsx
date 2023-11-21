import { Header as DsfrHeader } from '@codegouvfr/react-dsfr/Header';

function Header() {
  const currentURL = window.location.pathname;
  return (
    <DsfrHeader
      brandTop={
        <>
          Espace
          <br />
          Partenaire
        </>
      }
      homeLinkProps={{
        to: '/',
        title: 'Accueil - Espace partenaire',
      }}
      id="fr-header-simple-header"
      quickAccessItems={[
        {
          iconId: 'fr-icon-user-fill',
          linkProps: {
            to: '/connexion',
          },
          text: 'Se connecter',
        },
        {
          iconId: 'fr-icon-github-fill',
          linkProps: {
            to: 'https://github.com/betagouv/espace-partenaire',
          },
          text: 'Github',
        },
      ]}
      serviceTagline="Espace de test"
      serviceTitle="MonComptePro"
      navigation={[
        {
          isActive: currentURL === '/',
          linkProps: {
            to: '/',
            target: '_self',
          },
          text: 'Accueil',
        },
        {
          isActive: currentURL === '/documentation',
          linkProps: {
            to: '/documentation',
            target: '_self',
          },
          text: 'Documentation',
        },
        {
          isActive: currentURL === '/details',
          linkProps: {
            to: '/details',
            target: '_self',
          },
          text: 'Implémentation',
        },
      ]}
    />
  );
}

export default Header;
