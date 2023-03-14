import {app} from 'electron';

export const relaunchApp = () => {
       app.quit();
       app.relaunch();
};