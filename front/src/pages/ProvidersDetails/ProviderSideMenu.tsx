import { SideMenu as MuiSideMenu } from '@codegouvfr/react-dsfr/SideMenu';

const MENU_WIDTH = 300;

export const SideMenu = () => {
  return (
    <div
      className="fr-col-12 fr-col-md-3"
      style={{
        width: MENU_WIDTH,
      }}
    >
      <MuiSideMenu
        align="left"
        burgerMenuButtonText="Dans cette rubrique"
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
  );
};
