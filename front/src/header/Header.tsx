import { Header as MuiHeader } from '@codegouvfr/react-dsfr/Header';

function Header() {
  const currentURL = window.location.pathname; // returns the absolute URL of a page
  return (
    <MuiHeader
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
          iconId: 'fr-icon-todo-line',
          linkProps: {
            to: '/liste',
          },
          text: 'Liste tests',
        },
        {
          iconId: 'fr-icon-book-2-fill',
          linkProps: {
            to: '/documentation',
          },
          text: 'Documentation',
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
          isActive: currentURL == '/' ? true : false,
          linkProps: {
            to: '/',
            target: '_self',
          },
          text: 'Accueil',
        },
        {
          isActive: currentURL == '/documentation' ? true : false,
          linkProps: {
            to: '/documentation',
            target: '_self',
          },
          text: 'Documentation',
        },
        {
          isActive: currentURL == '/details' ? true : false,
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
