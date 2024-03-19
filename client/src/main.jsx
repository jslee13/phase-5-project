import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import GroupPage from './GroupPage'
import GroupDetails from './GroupDetails'
import Forum from './Forum.jsx'
import NewPostForm from './NewPostForm.jsx'

const routes = [
  {
    path:'/',
    element: <App />,
    children: [
      {
        path:'/',
        element: <GroupPage/>,
      },
      {
        path:"/groups/:id",
        element: <GroupDetails/>,
      },
      {
        path:'/groups/:id/forum',
        element:<Forum />,
      },
      {
        path:'/groups/:id/forum/new_post_form',
        element: <NewPostForm />
      }
    ]
  }
]

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
