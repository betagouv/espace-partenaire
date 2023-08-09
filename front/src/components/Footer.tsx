import { Footer as MuiFooter } from '@codegouvfr/react-dsfr/Footer';

function Footer() {
  return (
    <MuiFooter
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
