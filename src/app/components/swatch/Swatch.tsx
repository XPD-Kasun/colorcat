import styled from "styled-components";
import { Card, CardContent } from "@mui/material";
import Block, { ColorContent } from "../Block";

export default function Swatch({ title }) {

       return (
              <SwatchContainer>
                     <SwatchComponent>
                            <SwatchTitle>
                                   <TitlePin>
                                          {title}
                                   </TitlePin>
                            </SwatchTitle>
                            <SwatchBox>
                                   {
                                          new Array(10).fill(0).map(x => (
                                                 <Block name="Red">
                                                        <ColorContent color="red"></ColorContent>
                                                 </Block>
                                          ))
                                   }
                            </SwatchBox>
                     </SwatchComponent>
              </SwatchContainer>
       )
};


const SwatchContainer = styled.div`
`;

const SwatchComponent = styled.div`
`;

const SwatchTitle = styled.div`
       font-size: 20px;
       display: flex;
`;

const TitlePin = styled.div`
       background-color: #e7ebf0;
       padding: 5px 10px;
       border-radius: 5px 5px 0 0;
`;

const SwatchBox = styled.div`
       background-color: #e7ebf0;
       border-radius: 0 10px 10px 10px;
       display: flex;
       flex-wrap: wrap;
`;


