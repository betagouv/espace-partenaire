// import { makeStyles } from 'tss-react/dsfr';
//import { COLORS } from '../../constants';
import { Button } from '@codegouvfr/react-dsfr/Button';
import Title2 from '../../titles/Title2';
import { fr } from "@codegouvfr/react-dsfr";
import { tss } from "tss-react/dsfr";
import { useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import { Divider } from "./Divider";


type Props ={
  className?: string;
};


export const ProviderAuthorization = (props: Props) => {

  const { className } = props;

  const [clickCount, setClickCount ]= useState(0);

  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.root, className)} onClick={() => setClickCount(clickCount + 1)}>
      <CircularProgress />
      <Title2 title="Habilitation" id="authorization" />
      <Divider className={classes.divider} />
      <div
        className={
          cx(
            classes.container,
            fr.cx("fr-container--fluid", "fr-mb-5v")
          )
        }
      >
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
        onClick={function noRefCheck() {
          // TODO: implement function
        }}
        priority="secondary"
      >
        Label button
      </Button>
      <Button
        disabled
        className="fr-ml-2v"
        iconId="fr-icon-external-link-fill"
        onClick={function noRefCheck() {
          // TODO: implement function
        }}
        priority="secondary"
      >
        Label button
      </Button>
    </div>
  );
};

const useStyles = tss
  .withName("ProviderAuthorization")
  .create(() => ({
    root: {
      marginBottom: fr.spacing("10v"),
      //backgroundColor: fr.colors.decisions.background.actionHigh.redMarianne.default,
      //border: hasBorder ? `1px solid ${fr.colors.decisions.border.actionHigh.redMarianne.default}` : "none",
      //backgroundColor: fr.colors.getHex({ isDark }).decisions.background.actionHigh.redMarianne.default,
      "&:hover": {
        //backgroundColor: fr.colors.decisions.background.actionHigh.redMarianne.hover
      },
      [fr.breakpoints.down("md")]:{
        border: "1px solid red"
      },
      [fr.breakpoints.down("sm")]:{
        border: "1px solid blue"
      },

    },
    divider: {
      marginBottom: fr.spacing("10v"),
    },
    container: {
      backgroundColor: fr.colors.decisions.background.default.grey.default
    },

  }));
