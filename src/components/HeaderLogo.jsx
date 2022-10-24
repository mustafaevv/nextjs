import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { CgShoppingCart } from "react-icons/cg";
import { useSelector } from "react-redux";
import { getItemCount } from "../redux/cart";

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Montserrat", sans-serif;
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

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  min-width: 150px;
  width: 100%;
  line-height: 50px;
  border: none;
  background: #fe5f1e;
  border-radius: 30px;
  padding: 0 15px;
  cursor: pointer;
  font-weight: 700;
  font-size: 20px;
  color: #ffffff;
`;

const BtnLink = styled.a`
  text-decoration: none;
`;

const HeaderLogo = () => {
  const cartITemCount = useSelector(getItemCount);
  const { cart } = useSelector((state) => state);
  const items = Object.values(cart);
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return (
    <Header>
      <Link href="/">
        <Content>
          <div>
            <Image src="/images/logo.png" width={38} height={38} />
          </div>
          <Item>
            <p>REACT PIZZA</p>
            <span>самая вкусная пицца во вселенной</span>
          </Item>
        </Content>
      </Link>
      <Link href="/cart">
        <BtnLink>
          <Button>
            {totalPrice} ₽
            <CgShoppingCart />
            {Boolean(cartITemCount) ? <p>{cartITemCount}</p> : <p>0</p>}
          </Button>
        </BtnLink>
      </Link>
    </Header>
  );
};

export default HeaderLogo;
