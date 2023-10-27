import Button from '@codegouvfr/react-dsfr/Button';
// import { COLORS } from '../constants';s

function CardInfos() {
  return (
    <div
      className={`fr-py-6v fr-px-4v`}
      // style={{ backgroundColor: COLORS.cardBackground }}
    >
      <p>
        <b className={`fr-h6`}>Documentation</b>
      </p>
      <p>
        Retrouvez toutes les informations dont vous avez besoin et nos
        <br></br>
        guidelines graphiques dans l'espace de documentation.
      </p>
      <Button iconId="fr-icon-book-2-line" priority="secondary">
        Lire la documentation
      </Button>
    </div>
  );
}

export default CardInfos;
