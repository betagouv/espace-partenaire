import { DocumentationContent } from './DocumentationContent';
import { DocumentationSideMenu } from './DocumentationSideMenu';

export const EspaceDocumentation = () => {
  return (
    <div className="fr-container--fluid fr-mt-10v">
      <div className="fr-grid-row">
        <DocumentationSideMenu />
        <div className="fr-col-12 fr-col-md">
          <h1>Documentation</h1>
          <DocumentationContent />
        </div>
      </div>
    </div>
  );
};
