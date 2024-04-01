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

import Index from './routes/index'

import { getCountries, getCountriesByCodes } from './countries.js'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root/>,
		children: [
			{
				index: true,
				element: <Index/>
			},
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
