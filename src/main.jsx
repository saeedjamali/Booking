import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '/public/style.css'; // Import your styles
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </React.StrictMode>,
)
