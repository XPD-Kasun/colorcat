import styled from 'styled-components';

export default function TabView({ navArea, children }) {

       return (
              <TabViewContainer>
                     <TabViewInner>
                            <NavArea>{navArea}</NavArea>
                            <ContentArea>{children}</ContentArea>
                     </TabViewInner>
              </TabViewContainer>
       );

}

const TabViewContainer = styled.div`
       display: flex;
       flex-direction: column;
       width: 100%;
       flex: 1;
       height: 100%;
`;

const TabViewInner = styled.div`
       display: flex;
       flex: 1;
`;

const NavArea = styled.div`
       width: 200px;
       background: #dfeaff;
`;

const ContentArea = styled.div`
       flex: 1;
`;
