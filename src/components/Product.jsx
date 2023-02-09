import React from "react";
import styled from "styled-components";

const Product = ({ img, title, price }) => {
  return (
    <Card>
      <ImgBox>
        <img src={img} alt="" />
      </ImgBox>
      <Description>
        <h3>{title}</h3>
        <h3>${price}</h3>
      </Description>
    </Card>
  );
};

export default Product;

const Card = styled.div`
  width: 300px;
  background-color: #fff;
  padding: 20px;
  border-radius: 15px;
`;

const ImgBox = styled.div`
  width: 100%;
  height: 350px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const Description = styled.div`
    padding: 0 30px;
`
