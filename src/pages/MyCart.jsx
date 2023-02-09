import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import MainContainer from "../components/MainContainer";
import Button from "../components/UI/Button";

const MyCart = () => {
  const navigate = useNavigate();

  const goBackHandler = () => {
    navigate(-1);
  };

  return (
    <MainContainer>
      <CartPage>My Cart page</CartPage>
      <Button onClick={goBackHandler}>Go Back</Button>
    </MainContainer>
  );
};

export default MyCart;

const CartPage = styled.div`
  height: 100px;
  width: 100%;
  background-color: #fff;
  padding: 20px;
  margin-bottom: 20px;
`;
