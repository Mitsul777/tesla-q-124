import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    react: {
      // ...
      hashTransKey: function (defaultValue) {
        // return a key based on defaultValue or if you prefer to just remind you should set a key return false and throw an error
      },
      defaultTransParent: 'div', // a valid react element - required before react 16
      transEmptyNodeValue: '', // what to return for empty Trans
      transSupportBasicHtmlNodes: true, // allow <br/> and simple html elements in translations
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'span', 'b'], // don't convert to <1></1> if simple react elements
      transWrapTextNodes: '', // Wrap text nodes in a user-specified element.

    },
    supportedLngs: ['en', 'ru', 'es', 'it', 'de', 'pl', 'cz', 'ro', 'fr', 'sr', 'tr', 'pt'],
    fallbackLng: "en",
    detection: {
      order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie']
    },
    transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'span'],
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    }
  });


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
