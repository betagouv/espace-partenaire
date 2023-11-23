import { SideMenu as DsfrSideMenu } from '@codegouvfr/react-dsfr/SideMenu';
import { useHash } from '../../hooks/useHash';

export const SideMenu = () => {
  const [currentAnchor] = useHash();
  return (
    <div className="fr-col-12 fr-col-md-3">
      <DsfrSideMenu
        sticky
        burgerMenuButtonText="Dans cette rubrique"
        items={[
          {
            isActive: currentAnchor === '#keys',
            linkProps: {
              to: '#keys',
            },
            text: 'Clés',
          },
          {
            isActive: currentAnchor === '#url',
            linkProps: {
              to: '#url',
            },
            text: 'URL',
          },
          {
            isActive: currentAnchor === '#scopes',
            linkProps: {
              to: '#scopes',
            },
            text: 'Données',
          },
          {
            isActive: currentAnchor === '#authorization',
            linkProps: {
              to: '#authorization',
            },
            text: 'Habilitation',
          },
        ]}
      />
    </div>
  );
};
