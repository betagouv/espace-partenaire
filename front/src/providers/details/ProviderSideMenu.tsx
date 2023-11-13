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
              isActive: currentAnchor == '#keys' ? true : false,
              linkProps: {
                to: '#keys',
              },
              text: 'Clés',
            },
            {
              isActive: currentAnchor == '#url' ? true : false,
              linkProps: {
                to: '#url',
              },
              text: 'URL',
            },
            {
              isActive: currentAnchor == '#scopes' ? true : false,
              linkProps: {
                to: '#scopes',
              },
              text: 'Données',
            },
            {
              isActive: currentAnchor == '#save' ? true : false,
              linkProps: {
                to: '#save',
              },
              text: 'Sauvegarde',
            },
            {
              isActive: currentAnchor == '#authorization' ? true : false,
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
