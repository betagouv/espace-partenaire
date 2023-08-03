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
      navigation={[
        {
          linkProps: {
            to: '/liste',
            target: '_self',
          },
          text: 'Liste',
        },
        {
          linkProps: {
            to: '/autre',
            target: '_self',
          },
          text: 'Autre',
        },
      ]}
      quickAccessItems={[
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
