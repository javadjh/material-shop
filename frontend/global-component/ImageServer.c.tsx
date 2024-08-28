import { FC } from "react";
import { BACKEND_URL } from "../service/APIRoutes";
import Image from "next/image";

const ImageServerComponent: FC<{
  image: string | any;
  point?: boolean;
  width?: number | any;
  height?: any;
  border?: number;
  aspect?: any;
  style?: any;
  className?: any;
}> = ({ image, point, width, height, border, aspect, style, className }) => {
  return (
    <img
      alt="image"
      width={width}
      height={height}
      style={{
        cursor: `${point ? "pointer" : ""}`,
        height,
        width,
        borderRadius: border,
        aspectRatio: aspect,
        objectFit: "cover",
        ...style,
      }}
      src={`${BACKEND_URL}public/${image}`}
      className={className}
    />
  );
};
export default ImageServerComponent;
