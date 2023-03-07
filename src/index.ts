import {app, BrowserWindow } from 'electron';

try {
       require('electron-reloader')(module);
       
} catch { }

app.on('ready', () => {
       
       const win = new BrowserWindow({
              width: 800,
              height: 600,
              webPreferences: {
                     nodeIntegration: true,
              },
       });
});
