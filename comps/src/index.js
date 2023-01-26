import React from 'react';
import ReactDOM from 'react-dom/client';

import { NavigationProvider } from './context/NavigationContext';

import App from './App';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <NavigationProvider>
            <App />
        </NavigationProvider>
    </React.StrictMode>
);
