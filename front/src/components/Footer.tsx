import { Footer as MuiFooter } from '@codegouvfr/react-dsfr/Footer';

function Footer() {
  return (
    <MuiFooter
      accessibility="fully compliant"
      contentDescription=""
      termsLinkProps={{
        href: '#',
      }}
      websiteMapLinkProps={{
        href: '#',
      }}
    />
  );
}

export default Footer;
