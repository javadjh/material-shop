import { FC } from "react";

const LogoComponent: FC<{ width?: number | any }> = ({ width }) => {
  return <img src="/logo.png" width={width || 280} />;
};
export default LogoComponent;
