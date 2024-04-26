import React from 'react'
import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom'
import UseCopyHook from './component/usecopyhook/UseCopyHook'
import Home from './Home'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/useCopyhook',
      element: <UseCopyHook />
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App
