import { Footer as DsfrFooter } from '@codegouvfr/react-dsfr/Footer';

function Footer() {
  return (
    <DsfrFooter
      accessibility="fully compliant"
      contentDescription=""
      termsLinkProps={{
        to: '#',
      }}
      websiteMapLinkProps={{
        to: '#',
      }}
    />
  );
}

export default Footer;
