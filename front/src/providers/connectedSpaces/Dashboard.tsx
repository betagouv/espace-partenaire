import { Badge } from '@codegouvfr/react-dsfr/Badge';
import Title1 from '../../titles/Title1';
import { Card } from '@codegouvfr/react-dsfr/Card';
import { useRouteLoaderData } from 'react-router-dom';
import { OidcClients } from '../../types';
import { COLORS } from '../../constants';

export const Dashboard = () => {
  const oidcClients = useRouteLoaderData('dashboard') as OidcClients;
  const keys = 'Clés de test';
  return (
    <div className="fr-container fr-mb-10v">
      <Title1>Tableau de bord</Title1>
      <div className="fr-grid-row fr-grid-row--gutters">
        {oidcClients.map((oidcClient) => (
          <div className="container fr-col-12 fr-col-md-6">
            <Card
              background
              border
              desc={oidcClient.clientDescription}
              horizontal
              linkProps={{
                to: `/dashboard/${oidcClient.id}`,
              }}
              size="small"
              start={
                <>
                  <ul className="fr-badges-group">
                    <li>
                      {keys.includes('test') ? (
                        <Badge className="fr-badge--purple-glycine">
                          Clés de test
                        </Badge>
                      ) : (
                        <Badge severity="info">{keys}</Badge>
                      )}
                    </li>
                  </ul>
                  <p
                    style={{ color: COLORS.textColorGrey }}
                    className="fr-mb-0 fr-text--xs"
                  >
                    → DINUM
                  </p>
                </>
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
