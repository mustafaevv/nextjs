import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import links from "../../router";
import Link from "next/link";

const Div = styled.div`
  margin-bottom: 50px;
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 3em;
  margin-top: 80px;
  margin-bottom: 35px;
`;

const Links = styled.a`
  padding: 13px 20px;
  font-weight: 700;
  font-size: 16px;
  background: ${({ pathname }) => (pathname ? "#282828" : " #f9f9f9")};
  color: ${({ pathname }) => (pathname ? "#FFFFFF" : " #2c2c2c")};
  font-family: "Montserrat", sans-serif;
  border-radius: 30px;
  text-align: center;
  text-decoration: none;
  transition: 0.5s background, 0.5s color;
  cursor: pointer;

  &:hover {
    background: #282828;
    color: #fff;
  }
`;

const Title = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 32px;
  letter-spacing: 0.01em;
  color: #000000;
`;

const NavLink = () => {
  const { pathname } = useRouter();
  console.log(pathname);
  return (
    <Div>
      <List>
        {links.map(({ name, link }) => (
          <li key={link}>
            <Link link={link} href={link}>
              <Links pathname={pathname == link}>{name}</Links>
            </Link>
          </li>
        ))}
      </List>
      <Title>Все пиццы</Title>
    </Div>
  );
};

export default NavLink;
