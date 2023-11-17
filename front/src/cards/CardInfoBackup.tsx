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
  contents,
  image,
  buttonTitle,
  icon,
}: CardInfosProps) {
  return (
    <div className={`fr-col-6`}>
      <div
        style={{ backgroundColor: COLORS.cardBackground, height: '100%' }}
        className="fr-grid-row fr-grid-row--middle fr-p-10v"
      >
        <div className="fr-content-media__img fr-col-4 fr-hidden fr-unhidden-lg">
          <img className="fr-responsive-img fr-ratio-1x1" src={image} alt="" />
        </div>
        <div className="fr-col-8 fr-pl-5v">
          <h2 style={{ color: COLORS.titleColor }}>{title}</h2>
          <ul className="">
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
