import { Badge } from '@codegouvfr/react-dsfr/Badge';
import Title1 from '../../titles/Title1';
import { Card } from '@codegouvfr/react-dsfr/Card';
import { useRouteLoaderData } from 'react-router-dom';

export const Dashboard = () => {
  const oidcClients = useRouteLoaderData('dashboard');
  return (
    <div className="fr-container fr-mb-10v">
      <Title1>Tableau de bord</Title1>
      <div className="fr-grid-row fr-grid-row--gutters">
        {/* ERREUR DE TYPAGE A CORRIGER */}
        {oidcClients.map((oidcClient) => (
          <div className="container fr-col-6">
            <Card
              background
              border
              desc={oidcClient.clientDescription}
              horizontal
              enlargeLink
              linkProps={{
                to: `/dashboard/${oidcClient.id}`,
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
              title={oidcClient.clientName}
              titleAs="h2"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
