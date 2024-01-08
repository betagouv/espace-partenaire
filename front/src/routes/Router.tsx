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
      return backendClient.getDashboard();
    },
    element: (
      <PageLayout>
        <>
          <a href="/dashboard/new">NEW</a>
          <br />
          <a href="/dashboard/123">Rebecca Project 123</a>
          <br />
          <a href="/dashboard/6925fb8143c76eded44d32b40c0cb1006065f7f003de52712b78985704f39950">
            FSA - FSA1-LOW
          </a>
        </>
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
