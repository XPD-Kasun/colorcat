import { app, BrowserWindow } from 'electron';

try {
       require('electron-reloader')(module);

} catch { }

function createWindow() {

       const win = new BrowserWindow({
              width: 800,
              height: 600,
              webPreferences: {
                     nodeIntegration: true,
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