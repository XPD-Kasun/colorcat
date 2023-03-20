'use strict';

import react from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import "./styles.scss";

let dom = createRoot(document.getElementById('root'));

console.log('mode', window.electronAPI.mode);
// Capture key shortcut ctrl + shift + t to reload

if (window.electronAPI.mode === 'development') {
 
       window.addEventListener('keydown', (evt) => {
              console.log(evt.key, evt.ctrlKey, evt.shiftKey)
              if (evt.key == 'T' && evt.ctrlKey && evt.shiftKey) {
                     window.electronAPI.relaunch();
              }
       });

}

dom.render(react.createElement(App));