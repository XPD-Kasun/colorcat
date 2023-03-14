import { ipcRenderer, contextBridge } from 'electron';
import { ElectronAPI } from '.';

const bridgeAPI: ElectronAPI = {
       showDialog: () => {
              ipcRenderer.send('open-file-dialog');
       },
       relaunch: () => {
              ipcRenderer.send('global-app-relaunch');
       },
       mode: process.env.NODE_ENV
};

contextBridge.exposeInMainWorld('electronAPI', bridgeAPI);