import { Box, Typography } from "@mui/joy";
import { ImageCategoryItemContainer } from "./choice.s";
import { FC, useState } from "react";
import IconComponent from "../../../../global-component/Icon.c";
import { ORANGE_COLOR, WHITE_COLOR } from "../../../../config/colors";
import { LARGE_FONT, MEDIUM_FONT, SMALL_FONT } from "../../../../config/font";
import Link from "next/link";
import styled from "styled-components";

const CategoryItemComponent: FC<{
  title: string;
  iconName: string;
  id?: string;
}> = ({ title, iconName, id }) => {
  let [categoryId, setCategoryId] = useState<string>("");
  const CategoryItemContainer = styled.div`
    background-color: #999999;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    height: 100px;
    cursor: pointer;
    align-items: flex-start;
    padding: 25px;
    outline: ${() => (categoryId === title ? "2px solid" + ORANGE_COLOR : "")};
  `;
  return (
    <Link href={{ pathname: "/store/products", query: { id } }}>
      <CategoryItemContainer
        onMouseEnter={() => setCategoryId(title)}
        onMouseLeave={() => setCategoryId("")}
      >
        <Typography fontSize={LARGE_FONT} textColor={WHITE_COLOR}>
          <strong>{title}</strong>
        </Typography>
        <ImageCategoryItemContainer>
          <IconComponent width={45} icon={iconName} />
        </ImageCategoryItemContainer>
      </CategoryItemContainer>
    </Link>
  );
};
export default CategoryItemComponent;
