import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { PageLayout } from '../layouts/PageLayout';
import HomeLayout from '../layouts/HomeLayout';
import { ProviderDetails } from '../providers/details/ProviderDetails';
import { EspaceDocumentation } from '../providers/documentation/EspaceDocumentation';
import { EspaceConnected } from '../providers/connectedSpaces/EspaceConnected';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <PageLayout>
        <HomeLayout />
      </PageLayout>
    ),
  },
  {
    path: '/details',
    element: (
      <PageLayout>
        <ProviderDetails />
      </PageLayout>
    ),
  },
  {
    path: '/documentation',
    element: (
      <PageLayout>
        <EspaceDocumentation />
      </PageLayout>
    ),
  },
  {
    path: '/dashboard/:id',
    element: (
      <PageLayout>
        <EspaceConnected />
      </PageLayout>
    ),
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export { Router };
