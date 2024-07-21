import React from 'react'  // TODO: Remove line?
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import AboutMe from './pages/AboutMe.jsx'
import ContactMe from './pages/ContactMe.jsx'
import Error from './pages/Error.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Resume from './pages/Resume.jsx'

import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children:[
      {
        index: true,
        element: <AboutMe />
      }, {
        path: '/portfolio',
        element: <Portfolio />
      }, {
        path: '/contact',
        element: <ContactMe />
      }, {
        path: '/resume',
        element: <Resume />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)