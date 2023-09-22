import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import './index.css'
import Home from './routes/Home'
import Contato from './routes/Contatos'
import Episodios from './routes/Episodios'
import SerieQuadrinhos from './routes/SerieQuadrinhos'
import Historia from './routes/Historia'
import Error from './routes/Error'

import { createBrowserRouter, RouterProvider  } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/episodios",
        element: <Episodios/>
      },
      {
        path: "/serie-em-quadrinhos",
        element: <SerieQuadrinhos/>
      },
      {
        path: "/contato",
        element: <Contato/>
      },
      {
        path: "/historia",
        element: <Historia/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
