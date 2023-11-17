import { DocumentationContent } from './DocumentationContent';
import { DocumentationSideMenu } from './DocumentationSideMenu';

export const EspaceDocumentation = () => {
  return (
    <div className="fr-container--fluid fr-mt-10v">
      <div className="fr-grid-row">
        <DocumentationSideMenu />
        <div className="fr-col-12 fr-col-md">
          <DocumentationContent />
        </div>
      </div>
    </div>
  );
};
