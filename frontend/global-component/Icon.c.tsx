import { FC } from "react";

const IconComponent: FC<
  | {
      icon?: string;
      width?: number | string;
      height?: number | string;
    }
  | any
> = ({ icon, width, height }) => {
  return <img src={`/icons/${icon}.png`} width={width} height={height} />;
};
export default IconComponent;
