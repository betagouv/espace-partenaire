import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import Home from './pages/Home';
import EspaceList from './pages/lists/List';
import Autre from './pages/Autre';
import { Page } from './components/Page';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Page>
        <Home />
      </Page>
    ),
  },
  {
    path: '/liste',
    element: (
      <Page>
        <EspaceList />
      </Page>
    ),
  },
  {
    path: '/autre',
    element: (
      <Page>
        <Autre />
      </Page>
    ),
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export { Router };
