import React from 'react';
import styled from 'styled-components';

const MainContainer = ({children}) => {
    return (
        <Container>
            {children}
        </Container>
    );
};

export default MainContainer;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding: 30px 50px;
    background-color: #c3cfd9;
`