import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'react-toastify/dist/ReactToastify.css';
import reportWebVitals from './reportWebVitals';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'flag-icon-css/css/flag-icons.min.css';

i18next
    .use(HttpApi)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        supportedLngs: ['en', 'vi'],
        fallbackLng: 'en',
        debug: false,
        // Options for language detector
        detection: {
            order: ['path', 'cookie', 'htmlTag'],
            caches: ['cookie'],
        },
        // react: { useSuspense: false },
        backend: {
            loadPath: '/assets/locales/{{lng}}/translation.json',
        },
    });

const loadingMarkup = (
    <div className="py-4 text-center">
        <h2>Loading...</h2>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Suspense fallback={loadingMarkup}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Suspense>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
