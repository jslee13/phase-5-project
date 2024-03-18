import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const routes = [
  {
    path:'/',
    element: <App />,
    children: [
      {
        path:'/',
        element: <GroupPage/>
      }
    ]
  }
]

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
