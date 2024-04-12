import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from '@pages/Home';
import Performance from './pages/Performance';
import EachPerformance from './pages/EachPerformance';
import Company from './pages/introduce/Company';
import Layout from './components/common/Layout';
import History from './pages/introduce/History';
import CEO from './pages/introduce/CEO';
import BusinessArea from './pages/BusinessArea';
import WayToCome from './pages/WayToCome';
import PreSaleInformation from './pages/PreSaleInformation';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/performance',
          element: <Performance />,
        },
        {
          path: '/performance/:id',
          element: <EachPerformance />,
        },
        {
          path: '/businessarea/:id',
          element: <BusinessArea />,
        },
        {
          path: '/introduce/company',
          element: <Company />,
        },
        {
          path: '/introduce/history',
          element: <History />,
        },
        {
          path: '/introduce/ceo',
          element: <CEO />,
        },
        { path: '/way', element: <WayToCome /> },
        { path: '/pre-sale-info', element: <PreSaleInformation /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
