import { Box, Typography } from "@mui/joy";
import { ImageCategoryItemContainer } from "./choice.s";
import { FC, useState } from "react";
import IconComponent from "../../../../global-component/Icon.c";
import { ORANGE_COLOR, WHITE_COLOR } from "../../../../config/colors";
import { LARGE_FONT, MEDIUM_FONT, SMALL_FONT } from "../../../../config/font";
import Link from "next/link";
import styled from "styled-components";
import ImageServerComponent from "../../../../global-component/ImageServer.c";

const CategoryItemComponent: FC<{
  title: string;
  iconName?: string;
  id?: string;
}> = ({ title, iconName, id }) => {
  let [categoryId, setCategoryId] = useState<string>("");
  const CategoryItemContainer = styled.div`
    background-color: ${() =>
      categoryId === title ? ORANGE_COLOR : "transparent"};
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    height: 100px;
    cursor: pointer;
    align-items: flex-start;
    padding: 25px;
    outline: ${() =>
      categoryId === title ? "2px solid" + ORANGE_COLOR : "2px solid white"};
  `;
  return (
    <CategoryItemContainer
      onMouseEnter={() => setCategoryId(title)}
      onMouseLeave={() => setCategoryId("")}
    >
      <Typography fontSize={LARGE_FONT} textColor={WHITE_COLOR}>
        <strong>{title}</strong>
      </Typography>
      <ImageCategoryItemContainer>
        <ImageServerComponent image={iconName} width={60} />
      </ImageCategoryItemContainer>
    </CategoryItemContainer>
  );
};
export default CategoryItemComponent;
