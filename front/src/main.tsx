import React from 'react';
import ReactDOM from 'react-dom/client';
import { startReactDsfr } from '@codegouvfr/react-dsfr/spa';
import { Router } from './routes/Router';
import { Link } from 'react-router-dom';
import { MuiDsfrThemeProvider } from '@codegouvfr/react-dsfr/mui';

declare module '@codegouvfr/react-dsfr/spa' {
  interface RegisterLink {
    Link: typeof Link;
  }
}

startReactDsfr({
  defaultColorScheme: 'system',
  Link,
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MuiDsfrThemeProvider>
      <Router />
    </MuiDsfrThemeProvider>
  </React.StrictMode>,
);
