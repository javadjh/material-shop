import { FC } from "react";

const IconComponent: FC<
  | {
      icon?: string;
      width?: number | string;
      height?: number | string;
      isSVG?: boolean;
    }
  | any
> = ({ icon, width, height, isSVG }) => {
  return (
    <img
      src={`/icons/${icon}.${isSVG ? "svg" : "png"}`}
      width={width}
      height={height}
    />
  );
};
export default IconComponent;
