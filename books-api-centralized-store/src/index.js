import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
// during the course, we use the name Provider, I changed it in the case of multiple providers
import { BooksProvider } from './context/books';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BooksProvider>
            <App />
        </BooksProvider>
    </React.StrictMode>
);
