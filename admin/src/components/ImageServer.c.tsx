import { FC } from "react";
import { BACKEND_URL } from "../service/APIRoutes";
import { Image } from "antd";

const ImageServerComponent: FC<{
  image: string | any;
  point?: boolean;
  width?: number;
  height?: number;
}> = ({ image, point, width, height }) => {
  return (
    <Image
      style={{ cursor: `${point ? "pointer" : ""}`, height, width }}
      preview={false}
      src={`${BACKEND_URL}public/${image}`}
    />
  );
};
export default ImageServerComponent;
