import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles/index.css'
import App from './App.jsx'

const savedPath = sessionStorage.getItem('redirectPath');
if (savedPath) {
    sessionStorage.removeItem('redirectPath');
    window.history.replaceState(null, '', savedPath);
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);