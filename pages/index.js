import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Container from "../layout/Container";
import HeaderLogo from "../src/components/HeaderLogo";
import NavLink from "../src/components/NavLink";
import Products from "../src/components/Products";

const Block = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 2em;
`;

export default function Home() {
  const router = useRouter();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`http://localhost:4000/pizzas`);
      const cards = await data.json();
      setData(cards);
    };
    fetchData();
  }, []);

  return (
    <>
     
      <Container>
        <HeaderLogo />
        <NavLink />
        <Block>
          {data && data.map((cart) => <Products data={cart} key={cart.id} />)}
        </Block>
      </Container>
    </>
  );
}
