import React from "react";
import styled from "styled-components";
import { FaMinus, FaPlus } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";

import { addOne, removeFromCart, removeOne } from "../redux/cart";

const Block = styled.div`
  margin-top: 15px;
  max-width: 820px;
  width: 100%;
  display: flex;
  align-items: center;
  padding-bottom: 15px;
  border-bottom: 1px solid #d0d0d0;
`;

const Img = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 20px;
`;

const Name = styled.h4`
  max-width: 320px;
  width: 100%;
  font-weight: 700;
  font-size: 22px;
  color: #000000;
`;

const Controller = styled.div`
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Minus = styled.button`
  border: 2px solid #fe5f1e;
  width: 35px;
  height: 35px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #fe5f1e;
  background: none;
  cursor: pointer;
`;

const Amount = styled.p`
  font-weight: 700;
  font-size: 22px;
  color: #000000;
  margin: 0 10px;
`;

const Plus = styled.button`
  border: 2px solid #fe5f1e;
  width: 35px;
  height: 35px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  color: #fe5f1e;
  justify-content: center;
  font-size: 14px;
  background: none;
  cursor: pointer;
`;

const Price = styled.p`
  flex-grow: 1;
  text-align: center;
  font-weight: 700;
  font-size: 22px;
  color: #000000;
`;

const Close = styled.button`
  border: 1px solid #d0d0d0;
  background: none;
  max-width: 35px;
  width: 100%;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  color: #d0d0d0;
  cursor: pointer;
`;

const CartItem = ({ id, image, name, price, quantity }) => {
  const dispatch = useDispatch();
  const handleMinus = () => dispatch(removeOne(id));
  const handlePlus = () => dispatch(addOne(id));
  const handleClose = () => dispatch(removeFromCart(id));
  return (
    <Block>
      <Img src={image} alt={name} />
      <Name>{name}</Name>
      <Controller>
        <Minus onClick={handleMinus}>
          <FaMinus />
        </Minus>
        <Amount>{quantity}</Amount>
        <Plus onClick={handlePlus}>
          <FaPlus />
        </Plus>
      </Controller>
      <Price>{price} ₽</Price>
      <Close onClick={handleClose}>
        <AiOutlineClose />
      </Close>
    </Block>
  );
};

export default CartItem;
