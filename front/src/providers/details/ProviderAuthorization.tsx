// import { useStyles } from "tss-react/dsfr";
import { Button } from '@codegouvfr/react-dsfr/Button';
import Title2 from '../../titles/Title2';

export const ProviderAuthorization = () => {
  // const { cx, css } = useStyles();
  return (
    <div className="fr-mb-10v">
      <Title2 title="Habilitation" id="authorization" />
      {/* <div className={`${cx(css.root)} fr-container--fluid fr-mb-5v`}> */}
      <div className={`fr-container--fluid fr-mb-5v`}>
        <div className="fr-grid-row fr-grid-row--middle fr-p-5v">
          <p className="fr-col-1 fr-display--xs fr-mb-0">💡</p>
          <p className="fr-col-11 fr-mb-0">
            Pour accéder aux données de production, vous devez faire une demande
            d’habilitation sur Datapass. La suivi et la gestion de votre demande
            se fait sur <b>Datapass</b>.
          </p>
        </div>
      </div>
      <Button
        disabled
        iconId="fr-icon-lock-unlock-line"
        onClick={function noRefCheck() {}}
        priority="secondary"
      >
        Label button
      </Button>
      <Button
        disabled
        className="fr-ml-2v"
        iconId="fr-icon-external-link-fill"
        onClick={function noRefCheck() {}}
        priority="secondary"
      >
        Label button
      </Button>
    </div>
  );
};

// const useStyles = makeStyles()((theme) => ({
//   root: {
//     backgroundColor: theme.decisions.background.alt.blueFrance.default,
//   },
// }));
