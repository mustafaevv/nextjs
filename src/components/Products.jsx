import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addToCart } from "./redux/cart";

const Block = styled.div`
  max-width: 300px;
  width: 100%;
  padding: 5px 10px;
`;

const Img = styled.img`
  width: 100%;
  margin-bottom: 12px;
`;

const Title = styled.h4`
  font-family: "Proxima Nova";
  font-weight: 800;
  font-size: 22px;
  text-align: center;
  color: #000000;
  margin-bottom: 1em;
`;

const Items = styled.div`
  width: 100%;
  background: #f3f3f3;
  border-radius: 10px;
  padding: 7px 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.4em;
  margin-bottom: 15px;
`;

const Types = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.4em;
`;

const Type = styled.button`
  width: 100%;
  border: none;
  background: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
  border-radius: 5px;
  line-height: 30px;
  cursor: pointer;
`;

const Sizes = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.4em;
`;

const Size = styled.button`
  width: 100%;
  border: none;
  background: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
  border-radius: 5px;
  line-height: 30px;
  cursor: pointer;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Price = styled.p`
  font-family: "Proxima Nova";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  color: #000000;
`;

const Added = styled.button`
  max-width: 135px;
  width: 100%;
  font-family: "Proxima Nova";
  font-style: normal;
  font-weight: 700;
  line-height: 40px;
  color: #ffffff;
  background: #fe5f1e;
  font-size: 20px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
`;

const Products = ({ data }) => {
  const dispatch = useDispatch();
  const handleSelect = () => dispatch(addToCart(data));
  return (
    <Block>
      <Img src={data.image} alt={data.name} />
      <Title>{data.name}</Title>
      <Items>
        <Types>
          <Type>{data.types[0]}</Type>
          <Type>{data.types[1]}</Type>
        </Types>
        <Sizes>
          <Size>{data.sizes[0]} см.</Size>
          <Size>{data.sizes[1]} см.</Size>
          <Size>{data.sizes[2]} см.</Size>
        </Sizes>
      </Items>
      <Info>
        <Price>от {data.price} ₽</Price>
        <Added onClick={handleSelect}>
          <span>+</span> Добавить
        </Added>
      </Info>
    </Block>
  );
};

export default Products;
