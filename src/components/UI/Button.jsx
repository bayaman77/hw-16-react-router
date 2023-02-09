import React from 'react';
import styled from 'styled-components';

const Button = ({children, onClick}) => {
    return (
        <StyledButton onClick={onClick}>
            {children}
        </StyledButton>
    );
};

export default Button;

const StyledButton = styled.button`
    padding: 10px 20px;
    background-color: #19ae9f;
    border: none;
    border-radius: 20px;
    color: white;
    font-weight: bold;
    cursor: pointer;
`