import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//CONTEXT:
import { ThemeProvider } from './context/ThemeContext.jsx'

//Páginas
import Home from './routes/Home.jsx'
import Contador from './routes/Contador.jsx'
import ContextoExemplo from './routes/ContextoExemplo.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "contador",
        element: <Contador />
      },
      {
        path: "contexto-exemplo",
        element: <ContextoExemplo />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
