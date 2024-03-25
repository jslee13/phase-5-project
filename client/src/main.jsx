import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import GroupPage from './GroupPage'
import GroupDetails from './GroupDetails'
import Forum from './Forum.jsx'
import NewPostForm from './NewPostForm.jsx'
import Login from './Login.jsx'
import SignUp from './SignUp.jsx'
import './css/Navbar.css'
import './css/Group.css'
import './css/Idol.css'
import './css/Forum.css'
import './css/Login.css'

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
      },
      {
        path:'/login',
        element: <Login />
      },
      {
        path:'/sign-up',
        element: <SignUp />
      }
    ]
  }
]

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
