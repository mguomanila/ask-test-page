import React from 'react'
import ReactDOM from 'react-dom/client'
import { MoralisProvider } from 'react-moralis'
import App from './App'
import './index.css'

const { SERVER_URL, APP_ID } = process.env

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MoralisProvider serverUrl={SERVER_URL} appId={APP_ID}>
      <App />
    </MoralisProvider>
  </React.StrictMode>
)
