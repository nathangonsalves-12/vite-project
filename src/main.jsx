import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider
    domain="dev-teco7p7t7ev74p1n.us.auth0.com"
    clientId="Drx6B0UqlZOIZIzTG3hSX92BXFFRj7Du"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    >
      <App />
    </Auth0Provider>
  </StrictMode>,
)
