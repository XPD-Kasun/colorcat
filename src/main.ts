import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import browserAPI from './browserApi';

function createWindow() {

       const win = new BrowserWindow({
              width: 800,
              height: 600,
              webPreferences: {
                     nodeIntegration: true,
                     preload: path.join(__dirname, 'preload.js')
              },
              
       });

       win.loadFile('./public/index.html');
}

app.whenReady().then(() => {

       createWindow();

       app.on('activate', () => {

              createWindow();

       });
});

app.on('window-all-closed', () => {
       if(process.platform == 'darwin') {
              app.quit();
       }
});

browserAPI.init();