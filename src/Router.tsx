import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Home from './page/Home'
import Session from './page/Session'
import SessionDetails from './page/SessionDetails'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,

    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'session',
        element: <Session />,
      },
      {
        path: 'session/:id',
        element: <SessionDetails />,
      },
    ],
  },
])

export default router
