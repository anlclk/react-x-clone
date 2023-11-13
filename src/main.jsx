import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import routes from './router/router'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes} />,
)
