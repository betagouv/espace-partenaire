import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { PageLayout } from '../layouts/PageLayout';
import HomeLayout from '../layouts/HomeLayout';
// import Home from './pages/Home';
// import { EspaceList } from './pages/ProvidersList/EspaceList';
// import { Page } from './components/Page';
// import { ProviderDetails } from './pages/ProvidersDetails/ProviderDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <PageLayout>
        <HomeLayout />
      </PageLayout>
    ),
  },
//   {
//     path: '/liste',
//     element: (
//       <Page>
//         <EspaceList />
//       </Page>
//     ),
//   },
//   {
//     path: '/details',
//     element: (
//       <Page>
//         <ProviderDetails />
//       </Page>
//     ),
//   },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export { Router };
