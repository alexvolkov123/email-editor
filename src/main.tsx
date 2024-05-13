import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from '../Provider'
import './index.css'
import { Home } from './pages/home/Home.js'

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Failed to find the root element')

ReactDOM.createRoot(rootElement).render(
	<React.StrictMode>
		<Provider>
			<Home />
		</Provider>
	</React.StrictMode>
)
