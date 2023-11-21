import { SideMenu as DsfrSideMenu } from '@codegouvfr/react-dsfr/SideMenu';
import { useHash } from '../../hooks/useHash';

export const DocumentationSideMenu = () => {
  const [currentAnchor] = useHash();
  return (
    <div className="fr-col-12 fr-col-md-3">
      <div className="container">
        <DsfrSideMenu
          sticky
          burgerMenuButtonText="Dans cette rubrique"
          items={[
            {
              isActive: currentAnchor === '#steps',
              linkProps: {
                to: '#steps',
              },
              text: `Étapes d'installation`,
            },
            {
              isActive: currentAnchor === '#requirements',
              linkProps: {
                to: '#requirements',
              },
              text: 'Connaissances préalables',
            },
            {
              isActive: currentAnchor === '#specifications',
              linkProps: {
                to: '#specifications',
              },
              text: 'Spécifications techniques',
            },
          ]}
        />
      </div>
    </div>
  );
};
