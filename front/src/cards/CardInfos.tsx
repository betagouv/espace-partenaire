import Button from '@codegouvfr/react-dsfr/Button';
import { COLORS } from '../constants';
import { FrIconClassName } from '@codegouvfr/react-dsfr';

interface CardInfosProps {
  title: string;
  contents: string[];
  image: string;
  buttonTitle: string;
  icon: FrIconClassName;
}

function CardInfos({
  title,
  icon,
  buttonTitle,
  image,
  contents,
}: CardInfosProps) {
  return (
    <div className="fr-col-12 fr-col-md-6">
      <div
        style={{
          backgroundColor: COLORS.cardBackground,
          height: '100%',
          alignContent: 'space-between',
        }}
        className="fr-grid-row fr-grid-row--middle fr-p-10v"
      >
        <div
          className="fr-content-media__img fr-col-4 fr-hidden fr-unhidden-lg"
          style={{ alignSelf: 'self-start' }}
        >
          <img className="fr-responsive-img fr-ratio-1x1" src={image} alt="" />
        </div>
        <div className="fr-col-12 fr-col-md-8 fr-pl-5v">
          <h2 className="fr-h3" style={{ color: COLORS.titleColor }}>
            {title}
          </h2>
          <ul>
            {contents.map((string, i) => (
              <li key={i}>{string}</li>
            ))}
          </ul>
        </div>
        <Button
          className="fr-mt-10v fr-col-12 fr-grid-row--center"
          style={{ backgroundColor: COLORS.buttonBackground }}
          iconId={icon}
          priority="secondary"
        >
          {buttonTitle}
        </Button>
      </div>
    </div>
  );
}

export default CardInfos;
