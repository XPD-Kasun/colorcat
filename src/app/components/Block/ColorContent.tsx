import React from 'react';
import {Box} from '@mui/material';
import styled from 'styled-components';

type Props = {
       color: string,
       dummyText?: string
}

export default function ColorContent({color, dummyText="colorcat"}: Props) {
  return (
       <Box sx={{
              width: '100%',
              height: 70,
              background: color,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
       }}>
              <DummyText>{dummyText}</DummyText>
       </Box>
  );
}

const DummyText = styled.div`
       font-size: 20px;
       color: white;
       transform: rotate(345deg);
`;