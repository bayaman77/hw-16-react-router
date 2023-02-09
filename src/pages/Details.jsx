import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import MainContainer from "../components/MainContainer";
import Button from "../components/UI/Button";

const Details = ({ products }) => {
  const { id } = useParams();

  const navigate = useNavigate()
  
  const [product, setProduct] = useState({});

  useEffect(() => {
    const findedItem = products.find((item) => item.id == id);
    setProduct(findedItem);
  }, [id]);

  const goBackHandler = () => {
    navigate(-1)
  }

  return (
    <MainContainer>
      <DetailWrapper>
        <ImgBox>
          <Img src={product.imgUrl} alt="" />
        </ImgBox>
        <About>
          <Button onClick={goBackHandler}>Go back</Button>
          <Title>{product.title}</Title>
          <Price>
            <b>Price:</b>${product.price}
          </Price>
          <p>{product.description}</p>
        </About>
      </DetailWrapper>
    </MainContainer>
  );
};

export default Details;

const DetailWrapper = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  display: flex;
`;
const ImgBox = styled.div`
  width: 300px;
`;

const About = styled.div`
  width: 50%;
`;
const Img = styled.img`
  width: 100%;
`;

const Title = styled.h2`
  margin: 30px 0;
`;

const Price = styled.p`
  margin-bottom: 20px;
`;
