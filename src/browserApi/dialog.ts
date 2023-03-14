import { dialog } from "electron";

export const openFileDialog = () => {

       dialog.showMessageBox({
              message: 'this is a test message'
       });
};