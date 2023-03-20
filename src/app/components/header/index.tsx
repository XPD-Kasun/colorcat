import React from 'react';
import { AppBar, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import styled from 'styled-components';

export default function Header({ children }) {
       return (
              <HeaderContainer>
                     <HeaderWrapper>
                            <AppBar position="fixed" sx={{height: 'var(--header-height)'}}>
                                   <Toolbar>
                                          <IconButton
                                                 size="large"
                                                 edge="start"
                                                 color="inherit"
                                                 aria-label="menu"
                                                 sx={{ mr: 2 }}
                                          >
                                                 <MenuIcon/>
                                          </IconButton>
                                          Test
                                   </Toolbar>
                            </AppBar>
                     </HeaderWrapper>
              </HeaderContainer>
       )
}

const HeaderContainer = styled.header`
       background-color: green;
       position: relative;
       z-index: 100;
`;

const HeaderWrapper = styled.div``;

