import { SideMenu as DsfrSideMenu } from '@codegouvfr/react-dsfr/SideMenu';
import { useEffect, useState } from 'react';

export const SideMenu = () => {
  const [currentAnchor, setCurrentAnchor] = useState(window.location.hash);
  useEffect(() => {
    const updateMenuStyle = () => {
      setCurrentAnchor(window.location.hash);
    };
    window.addEventListener('hashchange', updateMenuStyle);
    return () => {
      window.removeEventListener('hashchange', updateMenuStyle);
    };
  }, []);
  return (
    <div className="fr-col-12 fr-col-md-3">
      <div className="container">
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
    </div>
  );
};
