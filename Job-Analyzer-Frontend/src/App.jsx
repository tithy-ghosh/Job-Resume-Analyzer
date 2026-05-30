import React from 'react'
import { RouterProvider } from 'react-router'
import { router } from './app.routes'
import Login from './features/auth/pages/Login'
import { AuthProvider } from './features/auth/auth.context'
const App = () => {
  return (
    
    <AuthProvider>
        <RouterProvider router={router} />
    </AuthProvider>
   
  )
}

export default App
