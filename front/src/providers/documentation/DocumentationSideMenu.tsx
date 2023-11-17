import { SideMenu as DsfrSideMenu } from '@codegouvfr/react-dsfr/SideMenu';
import { useEffect, useState } from 'react';

export const DocumentationSideMenu = () => {
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
                to: '#steps',
              },
              text: `Étapes d'installation`,
            },
            {
              isActive: currentAnchor === '#url',
              linkProps: {
                to: '#requirements',
              },
              text: 'Connaissances préalables',
            },
            {
              isActive: currentAnchor === '#scopes',
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
