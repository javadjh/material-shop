import { Typography } from "@mui/joy";
import { CategoryItemContainer, ImageCategoryItemContainer } from "./choice.s";
import { FC } from "react";
import IconComponent from "../../../../global-component/Icon.c";
import { WHITE_COLOR } from "../../../../config/colors";
import { SMALL_FONT } from "../../../../config/font";
import Link from "next/link";

const CategoryItemComponent: FC<{
  title: string;
  iconName: string;
  id?: string;
}> = ({ title, iconName, id }) => {
  return (
    <Link href={{ pathname: "/store/products", query: { id } }}>
      <CategoryItemContainer>
        <Typography fontSize={SMALL_FONT} textColor={WHITE_COLOR}>
          {title}
        </Typography>
        <ImageCategoryItemContainer>
          <IconComponent width={45} icon={iconName} />
        </ImageCategoryItemContainer>
      </CategoryItemContainer>
    </Link>
  );
};
export default CategoryItemComponent;
