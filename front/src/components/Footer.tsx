import { Footer } from '@codegouvfr/react-dsfr/Footer';

function Foot() {
    return (
        <div className="Foot">
            <Footer
                accessibility="fully compliant"
                contentDescription=""
                termsLinkProps={{
                    href: '#'
                }}
                websiteMapLinkProps={{
                    href: '#'
                }}
            />
        </div>
    )
}

export default Foot
