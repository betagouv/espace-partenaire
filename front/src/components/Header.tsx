import { Header as MuiHeader } from '@codegouvfr/react-dsfr/Header';

function Header() {
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
            to: '#',
          },
          text: 'Documentation',
        },
        {
          iconId: 'fr-icon-github-fill',
          linkProps: {
            to: '#',
          },
          text: 'Github',
        },
      ]}
      serviceTagline="Espace de test"
      serviceTitle="MonComptePro"
    />
  );
}

export default Header;
