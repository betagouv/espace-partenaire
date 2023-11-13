import { Link } from 'react-router-dom';
const jsonData = {
  sub: '154',
  email: 'jean.valjean-mairie@wanadoo.fr',
  email_verified: true,
  family_name: 'Valjean',
  given_name: 'Jean',
  job: 'Secrétaire de mairie',
  updated_at: '2023-06-15T16:17:05.958Z',
  label: 'Commune de les martres sur morge - Mairie',
  siret: '21630215800011',
  is_collectivite_territoriale: true,
  is_service_public: true,
  is_external: true,
};

export const DocumentationContent = () => {
  return (
    <div className="fr-pr-18v">
      <h1 id="steps">Les étapes d'installation</h1>
      <p>Je me familiarise avec la cinématique OpenId Connect :</p>
      <ul>
        <li>
          Je remplis le formulaire&#xA0;
          <Link to="/details">Espace Partenaire</Link>
          &#xA0;pour récupérer mon client_idet mon client_secret
        </li>
        <li>
          J’ai récupéré mon client_id et mon client_secret de test auprès de
          l’équipe MonComptePro
        </li>
        <li>
          J’ai trouvé un client OpenID compatible avec ma pile technique : vous
          pouvez consulter la liste officielle du site openid.net
        </li>
        <li>
          J’affiche un bouton MonComptePro conforme sur mon application en
          environment de développement : voir Spécifications visuelles
        </li>
        <li>
          J’ai installé et paramétré mon client OpenID sur mon application en
          développement : voir Spécifications techniques
        </li>
        <li>
          Pour passer l’erreur invalid_redirect_uri, j'ai fourni mon URL de
          redirection de test à l’équipe MonComptePro (ex :
          http://localhost:3000/auth/callback,
          https://dev.example.com/api/oauth/connection)
        </li>
        <li>Mon implémentation fonctionne</li>
        <li>
          J’ai récupéré mon client_id et mon client_secret de production en
          demandant à l'équipe MonComptePro de me les remettre de manière
          sécurisée
        </li>
        <li>Mise en production 🚀</li>
      </ul>
      <h1 id="requirements">Connaissances préalables</h1>
      <p>
        La connexion MonComptePro est basée sur le standard OpenID Connect
        également utilisé par FranceConnect. Ce standard peut être complexe à
        appréhender. Avant de vous lancer dans l’implémentation, nous vous
        recommandons donc d’avoir un aperçu de la cinématique OpenID Connect.
      </p>
      <p>
        Vous trouverez des ressources abondantes sur le sujet sur internet.
        Voici notre sélection :
      </p>
      <ul>
        <li>La cinématique complète expliquée en 3 minutes par Okta</li>
        <li>Un article qui rentre plus en détail rédigé par la même équipe</li>
      </ul>
      <h1 id="specifications">Spécifications techniques</h1>
      <p>
        Afin d'effectuer les développements sur votre service en ligne, nous
        fournissons un environnement de test pour vous permettre d'effectuer des
        tests de bout en bout.
      </p>
      <p>
        Le domaine email yopmail.com peut rejoindre librement plusieurs
        organisations, dont une collectivité territoriale.
      </p>
      <p>
        Afin de configurer votre module ou votre client OpenId Connect, vous
        trouverez ci-dessous les paramètres de configuration spécifiques à
        MonComptePro :
      </p>
      <ul>
        <li>
          paramètres de configuration de l’instance de test :
          https://app-test.moncomptepro.beta.gouv.fr/.well-known/openid-configuration
        </li>
        <li>
          paramètres de configuration de l’instance de production :
          https://app.moncomptepro.beta.gouv.fr/.well-known/openid-configuration
        </li>
      </ul>
      <p>
        À noter que les seuls périmètres de données (scope) ouverts aux services
        en lignes sont les suivants :
      </p>
      <ul>
        <li>openid (données : sub)</li>
        <li>email (données : email, email_verified)</li>
        <li>profile (données : family_name, given_name, updated_at, job)</li>
        <li>
          organization (données : label, siret, is_collectivite_territoriale,
          is_external, is_service_public)
        </li>
      </ul>
      <p>
        Exemple des données retournées par l’endpoint GET /userinfo du serveur
        OpenID
      </p>
      <pre>
        <code>{JSON.stringify(jsonData, null, 2)}</code>
      </pre>
    </div>
  );
};
