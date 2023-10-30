import Button from '@codegouvfr/react-dsfr/Button';
import { COLORS } from '../constants';
import { FrIconClassName } from '@codegouvfr/react-dsfr';
// import { Card } from '@codegouvfr/react-dsfr/Card';

interface CardInfosProps {
  title: string;
  stringArray: string[];
  image: string;
  buttonTitle: string;
  icon: FrIconClassName;
}

function CardInfos({
  title,
  icon,
  buttonTitle,
  image,
  stringArray,
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
          <img
            className="fr-responsive-img fr-ratio-1x1"
            src={image}
            alt="[À MODIFIER - vide ou texte alternatif de l’image]"
          />
        </div>
        <div className="fr-col-12 fr-col-md-8 fr-pl-5v">
          <h2 className="fr-h3" style={{ color: COLORS.titleColor }}>
            {title}
          </h2>
          <ul>
            {stringArray.map((string, i) => (
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

    // <div
    //   className="container fr-col-12 fr-col-md-6"
    //   style={{
    //     width: 900,
    //   }}
    // >
    //   <Card
    //     style={{ backgroundColor: COLORS.cardBackground }}
    //     background
    //     border
    //     desc={
    //       <ul className="">
    //         {stringArray.map((string, i) => (
    //           <li key={i}>{string}</li>
    //         ))}
    //       </ul>
    //     }
    //     footer={
    //       <Button
    //         style={{ backgroundColor: COLORS.buttonBackground }}
    //         iconId={icon}
    //         priority="secondary"
    //       >
    //         {buttonTitle}
    //       </Button>
    //     }
    //     horizontal
    //     imageAlt="texte alternatif de l’image"
    //     imageUrl={image}
    //     size="large"
    //     title={title}
    //     titleAs="h3"
    //   />
    // </div>
  );
}

export default CardInfos;
