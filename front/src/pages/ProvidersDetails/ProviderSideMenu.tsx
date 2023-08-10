import { SideMenu as MuiSideMenu } from '@codegouvfr/react-dsfr/SideMenu';
import { GlobalStyles } from 'tss-react';

export const SideMenu = () => {
  return (
    <div className="fr-col-12 fr-col-md-3">
      <GlobalStyles
        styles={{
          html: {
            scrollBehavior: 'smooth',
          },
        }}
      />
      <div className="container">
        <MuiSideMenu
          // align="left"
          burgerMenuButtonText="Dans cette rubrique"
          sticky
          items={[
            {
              isActive: true,
              linkProps: {
                to: '#description',
              },
              text: 'Description',
            },
            {
              linkProps: {
                to: '#keys',
              },
              text: 'Clés',
            },
            {
              linkProps: {
                to: '#url',
              },
              text: 'URL',
            },
            {
              linkProps: {
                to: '#scopes',
              },
              text: 'Champs',
            },
            {
              linkProps: {
                to: '#save',
              },
              text: 'Sauvegarde',
            },
            {
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
