import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import MainContainer from '../components/MainContainer';
import Button from '../components/UI/Button';

const MyOrder = () => {
    const navigate = useNavigate();
  
    const goBackHandler = () => {
      navigate(-1);
    };
  
    return (
      <MainContainer>
        <OrderPage>My Cart page</OrderPage>
        <Button onClick={goBackHandler}>Go Back</Button>
      </MainContainer>
    );
  };
  
  export default MyOrder;
  
  const OrderPage = styled.div`
    height: 100px;
    width: 100%;
    background-color: #fff;
    padding: 20px;
    margin-bottom: 20px;
  `;