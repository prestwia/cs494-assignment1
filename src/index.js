import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import App from './components/app.js'

// create and render app root
const appRoot = (
    <div className='app-root'>
        <App />
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(appRoot)