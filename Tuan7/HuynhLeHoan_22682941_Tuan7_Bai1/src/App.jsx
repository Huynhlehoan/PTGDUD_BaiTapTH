import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Dashboard from './pages/DashBoard';
import Project from './pages/Project';
import Teams from './pages/Teams';
import Analytics from './pages/Analytics';
import Messages from './pages/Messages';
import Integrations from './pages/Integrations';
import RootLayout from './layout/RootLayout'; 

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '', element: <Dashboard /> },
      { path: 'project', element: <Project /> },
      { path: 'teams', element: <Teams /> },
      { path: 'analytics', element: <Analytics /> },
      { path: 'messages', element: <Messages /> },
      { path: 'integrations', element: <Integrations /> }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
