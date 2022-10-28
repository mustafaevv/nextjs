import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 150px;
`;

const BlockTitle = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  color: #000000;
  margin-bottom: 40px;
`;

const Text = styled.p`
  font-weight: 400;
  font-size: 18px;
  text-align: center;
  max-width: 60vh;
  line-height: 1.5;
  color: #777777;
  margin-bottom: 1em;
`;

const Btn = styled.button`
  width: 210px;
  height: 50px;
  background: #282828;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-style: normal;
  font-weight: 700;
  cursor: pointer;
  font-size: 16px;
  text-decoration: none;
  margin-top: 50px;
  margin-bottom: 100px;
  transition: all 0.5s ease-out;
  &:hover {
    background: #fff;
    color: #000;
    border: 1px solid #000;
  }
`;

const Title = () => {
  return (
    <Block>
      <BlockTitle>Корзина пустая 😕</BlockTitle>
      <Text>
        Вероятней всего, вы не заказывали ещё пиццу.Для того, чтобы заказать
        пиццу, перейди на главную страницу.
      </Text>
      <Image
        src={"/images/cart-image.png"}
        width={300}
        height={260}
        alt={"Корзина пустая"}
      />
      <Link href={"/"}>
        <Btn>Вернуться назад</Btn>
      </Link>
    </Block>
  );
};

export default Title;
