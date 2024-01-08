import { Badge } from '@codegouvfr/react-dsfr/Badge';
import Title1 from '../../titles/Title1';
import { Card } from '@codegouvfr/react-dsfr/Card';

export const Dashboard = () => {
  return (
    <div className="fr-container fr-mb-10v">
      <Title1>Tableau de bord</Title1>
      <div className="fr-grid-row fr-grid-row--gutters">
        <div className="container fr-col-6">
          <Card
            background
            border
            desc="Description text MD"
            horizontal
            enlargeLink
            linkProps={{
              to: '#',
            }}
            size="small"
            start={
              <ul className="fr-badges-group">
                <li>
                  <Badge>Clés de test</Badge>
                  <Badge severity="info">DINUM</Badge>
                </li>
              </ul>
            }
            title="Test"
            titleAs="h2"
          />
        </div>

        {/* CARTE 2 !!  */}

        <div className="container fr-col-6">
          <Card
            background
            border
            desc="Description text MD"
            horizontal
            enlargeLink
            linkProps={{
              to: '#',
            }}
            size="small"
            start={
              <ul className="fr-badges-group">
                <li>
                  <Badge>Clés de test</Badge>
                  <Badge severity="info">ANCT</Badge>
                </li>
              </ul>
            }
            title="Test"
            titleAs="h2"
          />
        </div>
      </div>
    </div>
  );
};
