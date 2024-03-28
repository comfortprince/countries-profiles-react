import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import {
	RouterProvider,
	createBrowserRouter
} from 'react-router-dom'

import Root from './routes/root'
import Countries from './routes/countries'
import Country, {
	loader as countryLoader
} from './routes/country'

import { getCountries, getCountriesByCodes } from './countries.js'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root/>,
		children: [
			{
				path: 'countries',
				element: <Countries/>
			},
			{
				path: 'countries/:commonName',
				loader: countryLoader,
				element: <Country/>
			},
		]
	}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
