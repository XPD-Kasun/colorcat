import {Button} from '@mui/material';

export default function App() {

       const onDialogClick = (evt) => {
              window.electronAPI.showDialog();
       };


       return (
              <div>
                     <h3>Open Some Dialog</h3>
                     <Button variant="contained" onClick={onDialogClick}>
                            Open Dialog
                     </Button>
              </div>
       );
}