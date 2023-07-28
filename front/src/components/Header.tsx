import { Header } from '@codegouvfr/react-dsfr/Header';

function Head() {
    return (
        <div className="Head">
            <Header
                brandTop={<>Espace<br />Partenaire</>}
                homeLinkProps={{
                href: '/',
                title: 'Accueil - Espace partenaire'
                }}
                id="fr-header-simple-header"
                navigation={[
                {
                    linkProps: {
                    href: '/liste',
                    target: '_self'
                    },
                    text: 'Liste'
                },
                {
                    linkProps: {
                    href: '/autre',
                    target: '_self'
                    },
                    text: 'Autre'
                },
                ]}
            />
        </div>
    )
}

export default Head
