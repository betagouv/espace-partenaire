import { Button } from '@codegouvfr/react-dsfr/Button';
import Title2 from '../../titles/Title2';

export const KeyProductionData = () => {
  return (
    <div className="fr-mb-10v">
      <Title2 title="Clés des données de production" id="authorization" />
      <p>
        Pour accéder aux données de production, il vous faut une habilitation
        juridique sur Datapass. Vous recevrez vos clés de production dès que
        l’habilitation sera validée (XX jours en moyenne).
      </p>
      <p>
        Le membre de votre équipe qui représente officiellement l’organisation
        doit remplir l’habilitation. Il s’agit souvent d’un agent public,
        intrapreneur, etc.
      </p>

      <Button disabled className="fr-mt-2v">
        Accéder à Datapass
      </Button>
    </div>
  );
};
