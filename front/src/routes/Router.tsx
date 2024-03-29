import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from 'react-router-dom';
import { backendClient } from '../clients/back-client';
import HomeLayout from '../layouts/HomeLayout';
import { PageLayout } from '../layouts/PageLayout';
import { EspaceConnected } from '../providers/connectedSpaces/EspaceConnected';
import { ProviderDetails } from '../providers/details/ProviderDetails';
import { OidcClientFormProvider } from '../providers/details/oidc-client-form.context';
import { EspaceDocumentation } from '../providers/documentation/EspaceDocumentation';
import { Dashboard } from '../providers/connectedSpaces/Dashboard';
import { OidcClients } from '../types';

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
    path: '/dashboard',
    loader: async () => {
      const datas: OidcClients = await backendClient.getDashboard();
      return datas;
    },
    id: 'dashboard',
    element: (
      <PageLayout>
        <Dashboard />
      </PageLayout>
    ),
  },
  {
    path: '/dashboard/:id',
    loader: async ({ params }) => {
      const { id } = params;
      if (!id) {
        return redirect('/dashboard');
      }
      return backendClient.getDashboardItem(id);
    },
    element: (
      <PageLayout>
        <OidcClientFormProvider>
          <EspaceConnected />
        </OidcClientFormProvider>
      </PageLayout>
    ),
  },
  {
    path: '/dashboard/new',
    element: (
      <PageLayout>
        <OidcClientFormProvider>
          <EspaceConnected />
        </OidcClientFormProvider>
      </PageLayout>
    ),
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export { Router };
