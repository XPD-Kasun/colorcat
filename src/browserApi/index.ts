import { ipcMain } from 'electron';
import * as dialogAPI from './dialog';
import * as globalActions from './globalActions';

function init() {
       ipcMain.on('open-file-dialog', () => {
              dialogAPI.openFileDialog();
       });

       ipcMain.on('global-app-relaunch', () => {
              globalActions.relaunchApp();
       });
}

export default {
       init
};