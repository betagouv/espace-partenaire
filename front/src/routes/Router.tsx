import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { PageLayout } from '../layouts/PageLayout';
import HomeLayout from '../layouts/HomeLayout';
import { EspaceList } from '../providers/list/EspaceList';
import { ProviderDetails } from '../providers/details/ProviderDetails';
import { EspaceDocumentation } from '../providers/documentation/EspaceDocumentation';

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
    path: '/liste',
    element: (
      <PageLayout>
        <EspaceList />
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
]);

function Router() {
  return <RouterProvider router={router} />;
}

export { Router };
