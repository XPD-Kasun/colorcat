import react from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

let dom = createRoot(document.getElementById('root'));
dom.render(react.createElement(App));