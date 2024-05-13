import { FC } from "react";
import { BACKEND_URL } from "../service/APIRoutes";
import Image from "next/image";

const ImageServerComponent: FC<{
  image: string | any;
  point?: boolean;
  width?: number | any;
  height?: number;
  border?: number;
}> = ({ image, point, width, height, border }) => {
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
      }}
      src={`${BACKEND_URL}public/${image}`}
    />
  );
};
export default ImageServerComponent;
