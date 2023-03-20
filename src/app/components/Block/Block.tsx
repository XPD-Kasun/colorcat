import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import styled from 'styled-components';

type Props = {
       name: string,
       children: React.ReactNode
}

export default function Block({ name, children }: Props) {
       return (
              <BlockContainer>
                     <Card sx={{ width: 150 }}>
                            <CardContent>
                                   <Typography sx={{
                                          fontSize: 14,
                                          fontWeight: 'bold',
                                          overflow: 'hidden',
                                          textOverflow: 'ellipsis'}} color="text.secondary">
                                          {name}
                                   </Typography>
                                   <BlockContentArea>
                                          {children}
                                   </BlockContentArea>
                            </CardContent>
                     </Card>
              </BlockContainer>
       )
}

const BlockContainer = styled.div`
       margin: 10px;
       cursor: pointer;
       
`;

const BlockContentArea = styled.div`
       margin-top: 10px;
`;