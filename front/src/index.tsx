import React from 'react';
import ReactDOM from 'react-dom/client';
import { startReactDsfr } from '@codegouvfr/react-dsfr/spa';
import { Link } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { Router } from './Router';

declare module '@codegouvfr/react-dsfr/spa' {
  interface RegisterLink {
    Link: typeof Link;
  }
}

startReactDsfr({
  defaultColorScheme: 'system',
  Link,
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);

reportWebVitals();
