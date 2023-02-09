import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import MainContainer from "../components/MainContainer";
import Product from "../components/Product";
import Button from "../components/UI/Button";



const Products = ({products}) => {
    const navigate = useNavigate()

    const goBackHandler = () => {
        navigate(-1)
      }
  return (
    <MainContainer>
      <ProductsList>
        {products.map((product) => (
            <Link to={`/products/${product.id}/details`} key={product.id}>
            <li>
              <Product img={product.imgUrl} title={product.title} price={product.price}/>
            </li>
          </Link>
        ))}
      </ProductsList>
        <Button onClick={goBackHandler}>Go Back</Button>
    </MainContainer>
  );
};

export default Products;

const ProductsList = styled.ul`
margin-bottom: 10px;
  width: 100%;
  list-style: none;
  display: flex;
  justify-content: space-between;
  a{
    text-decoration: none;
    color: black;
  }
`;
