import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

import HeaderLogo from "../../src/components/HeaderLogo";
import NavLink from "../../src/components/NavLink";
import Products from "../../src/components/Products";
import Container from "../../layout/Container";

const Block = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 6em;
`;

const Category = () => {
  const router = useRouter();
  const { type } = router.query;
  const [data, setData] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => { 
      const data = await fetch(`http://localhost:4000/pizzas?category=${type}`);
      const cards = await data.json();
      setData(cards);
    };
    fetchData();
  }, [type]);

  return (
    <Container> 
      <HeaderLogo />
      <NavLink />
      <Block>
        {data && data.map((cart) => <Products data={cart} key={cart.id} />)}
      </Block>
    </Container>
  );
};

export default Category;
