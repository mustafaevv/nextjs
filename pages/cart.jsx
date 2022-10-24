import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import Container from "../layout/Container";
import CartItem from "../src/components/CartItem";
import Title from "../src/components/Title";

const Box = styled(Container)`
  height: 100vh;
`;

const Content = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
`;

const Item = styled.div`
  margin-left: 10px;
  & p {
    font-weight: bold;
    font-size: 24px;
    text-transform: uppercase;
    color: #181818;
  }
  & span {
    font-weight: 400;
    font-size: 16px;
    color: #7b7b7b;
  }
`;

const Items = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ItemTitle = styled.h3`
  text-align: center;
  font-weight: 700;
  font-size: 32px;
  color: #000000;
  margin-bottom: 120px;
`;

const Main = styled.div`
  max-width: 800px;
  width: 100%;
  margin: auto;
`;

const Info = styled.div`
  margin-top: 50px;
`;
const InfoTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TotalCount = styled.p`
  font-weight: 400;
  font-size: 22px;
  line-height: 27px;
  color: #000000;

  & span {
    font-weight: bold;
  }
`;
const TotalPrice = styled.p`
  font-weight: 400;
  font-size: 22px;
  color: #000000;
  & span {
    font-weight: bold;
    color: #fe5f1e;
  }
`;

const InfoBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
`;

const ToBack = styled.a`
  background: #ffffff;
  border: 1px solid #d3d3d3;
  border-radius: 30px;
  color: #cacaca;
  max-width: 210px;
  width: 100%;
  text-align: center;
  cursor: pointer;

  line-height: 50px;
`;
const Spend = styled.button`
  background: #fe5f1e;
  border-radius: 30px;
  max-width: 210px;
  width: 100%;
  line-height: 50px;
  text-align: center;
  border: none;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  color: #ffffff;
`;

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const items = Object.values(cart);
  const cartEmpty = items.length === 0;
  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const count = items.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <>
      <Box>
        <Link href="/">
          <Content>
            <Content>
              <>
                <Image src="/images/logo.png" width={38} height={38} />
              </>
              <Item>
                <p>REACT PIZZA</p>
                <span>самая вкусная пицца во вселенной</span>
              </Item>
            </Content>
          </Content>
        </Link>
        <Main>
          {!cartEmpty && <ItemTitle>Корзина</ItemTitle>}
          {cartEmpty ? (
            <Title />
          ) : (
            items.map((card) => (
              <>
                <CartItem key={card.id} {...card} />
              </>
            ))
          )}
          {!cartEmpty && (
            <Info>
              <InfoTop>
                <TotalCount>
                  Всего пицц:<span> {count} шт.</span>
                </TotalCount>
                <TotalPrice>
                  Сумма заказа:<span> {total} ₽</span>
                </TotalPrice>
              </InfoTop>
              <InfoBottom>
                <Link href={"/"}>
                  <ToBack>Вернуться назад</ToBack>
                </Link>
                <Spend>Оплатить сейчас</Spend>
              </InfoBottom>
            </Info>
          )}
        </Main>
      </Box>
    </>
  );
};

export default Cart;
