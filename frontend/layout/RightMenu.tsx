import styled from "styled-components";
import { ORANGE_COLOR } from "../config/colors";
import Link from "next/link";
import { setCookie } from "cookies-next";
import { useRouter } from "next/router";

const RightMenu = () => {
  const router = useRouter();

  return (
    <RightMenuContainer>
      <Link href={"/store/choice"}>
        <ItemContainer>صفحه فروشگاه</ItemContainer>
      </Link>

      <Link href={"/profile/basket"}>
        <ItemContainer>سبد خرید</ItemContainer>
      </Link>

      <Link href={"/profile/profile"}>
        <ItemContainer>پروفایل</ItemContainer>
      </Link>

      <Link href={"/profile/order"}>
        <ItemContainer>سفارش ها</ItemContainer>
      </Link>

      <Link href={"/profile/payment"}>
        <ItemContainer>تاریخچه پرداخت</ItemContainer>
      </Link>

      <Link href={"/profile/online"}>
        <ItemContainer>گفتگو</ItemContainer>
      </Link>

      <ItemContainer
        onClick={() => {
          setCookie("token", undefined);
          setCookie("phone", undefined);
          router.replace("/");
        }}
      >
        خروج
      </ItemContainer>
    </RightMenuContainer>
  );
};
export default RightMenu;
const RightMenuContainer = styled.div`
  border-radius: 10px;
  background-color: transparent;
  border: 2px solid ${ORANGE_COLOR};
  width: 100%;
  padding: 15px;
`;
const ItemContainer = styled.div`
  border: 2px solid ${ORANGE_COLOR};
  border-radius: 10px;
  cursor: pointer;
  padding: 10px;
  margin-bottom: 10px;
`;
