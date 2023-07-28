import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import EspaceList from './pages/lists/List';
import Head  from './components/Header';
import Foot  from './components/Footer';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { startReactDsfr } from "@codegouvfr/react-dsfr/spa";
import Autre from './pages/Autre';

startReactDsfr({ defaultColorScheme: "system" });

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/liste",
    element: <EspaceList />,
  },
  {
    path: "/autre",
    element: <Autre />,
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Head />
    <RouterProvider router={router} />
    <Foot />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
