import { Header as DsfrHeader } from '@codegouvfr/react-dsfr/Header';
import { headerFooterDisplayItem } from "@codegouvfr/react-dsfr/Display";


function Header() {
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
          iconId: 'ri-anticlockwise-fill',
          linkProps: {
            to: 'https://github.com/betagouv/espace-partenaire',
          },
          text: 'Github',
        },
        headerFooterDisplayItem
      ]}
      serviceTagline="Espace de test"
      serviceTitle="MonComptePro"
    />
  );
}

export default Header;
