import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import routes from './router/router'
import './assets/css/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes} />,
)
