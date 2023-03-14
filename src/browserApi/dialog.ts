import { dialog } from "electron";

export const openFileDialog = () => {

       dialog.showMessageBox({
              message: 'This is a test message',
              title: 'Windows Message Box'
       });
};