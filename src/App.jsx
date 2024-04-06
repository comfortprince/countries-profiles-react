import './index.css'

import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import routes from './routes'

const BASE_NAME = "countries-profiles-react"

const router = createBrowserRouter(routes, {
	basename: `/${BASE_NAME}`
})

export default function App() {
	return(
		<React.StrictMode>
	    <RouterProvider router={router} />
	  </React.StrictMode>
	)
}
