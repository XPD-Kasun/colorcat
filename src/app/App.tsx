import { Button, Fab, Box } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import styled from 'styled-components';
import { styled as muiStyled } from '@mui/material/styles';
import Header from './components/header';
import TabView from './components/tabview';
import Swatch from './components/swatch/Swatch';

export default function App() {

       const onDialogClick = (evt) => {
              window.electronAPI.showDialog();
       };


       return (
              <div>
                     <Header>yrdy</Header>
                     <MainContainer>
                            <TabView navArea={null}>
                                   <Box sx={{ m: '10px' }}>
                                          <SwatchContainer>
                                                 <Swatch title="Header Area"></Swatch>
                                          </SwatchContainer>
                                          <SwatchContainer>
                                                 <Swatch title="Body Swatch"></Swatch>
                                          </SwatchContainer>
                                   </Box>
                            </TabView>
                     </MainContainer>
                     <AddColorButton color="primary" aria-label="add">
                            <AddIcon />
                     </AddColorButton>
              </div>
       );
}

const SwatchContainer = styled.div`
       margin-bottom: 20px;

       &:last-child {
              margin-bottom: 0;
       }
`;

const MainContainer = styled.div`
       height: calc(100vh - var(--header-height));
       padding-top: var(--header-height);
`;

const AddColorButton = muiStyled(Fab)(theme => {
       return {
              position: 'fixed',
              bottom: '16px',
              right: '16px'
       }

});