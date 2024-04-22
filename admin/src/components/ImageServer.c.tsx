import { FC } from "react";
import { BACKEND_URL } from "../service/APIRoutes";
import { Image } from "antd";

const ImageServerComponent: FC<{ image: string | any; point?: boolean }> = ({
  image,
  point,
}) => {
  return (
    <Image
      style={{ cursor: `${point ? "pointer" : ""}` }}
      preview={false}
      src={`${BACKEND_URL}public/${image}`}
    />
  );
};
export default ImageServerComponent;
