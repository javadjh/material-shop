import { FC } from "react";
import { CenterStyled } from "../global-style/global.s";
import Link from "next/link";

const LogoComponent: FC<{ width?: number | any }> = ({ width }) => {
  return (
    <Link href={"/"}>
      <CenterStyled>
        <img src="/logo.png" width={width || 200} />
      </CenterStyled>
    </Link>
  );
};
export default LogoComponent;
