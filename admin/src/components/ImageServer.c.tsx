import { FC } from "react";
import { BACKEND_URL } from "../service/APIRoutes";
import { Image } from "antd";

const ImageServerComponent: FC<{
  image: string | any;
  point?: boolean;
  width?: any;
  height?: number;
  aspectRatio?: any;
  objectFit?: any;
}> = ({ image, point, width, height, aspectRatio, objectFit }) => {
  return (
    <Image
      style={{
        cursor: `${point ? "pointer" : ""}`,
        height,
        width,
        aspectRatio,
        objectFit,
      }}
      preview={false}
      src={`${BACKEND_URL}public/${image}`}
    />
  );
};
export default ImageServerComponent;
