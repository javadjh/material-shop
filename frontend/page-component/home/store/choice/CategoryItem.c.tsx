import { Box, Grid, Typography } from "@mui/joy";
import { ImageCategoryItemContainer } from "./choice.s";
import { FC, useState } from "react";
import IconComponent from "../../../../global-component/Icon.c";
import { ORANGE_COLOR, WHITE_COLOR } from "../../../../config/colors";
import { LARGE_FONT, MEDIUM_FONT, SMALL_FONT } from "../../../../config/font";
import Link from "next/link";
import styled from "styled-components";
import ImageServerComponent from "../../../../global-component/ImageServer.c";
import { CenterVerticalStyled } from "../../../../global-style/global.s";

const CategoryItemComponent: FC<{
  title: string;
  iconName?: string;
  id?: string;
}> = ({ title, iconName, id }) => {
  let [categoryId, setCategoryId] = useState<string>("");
  const CategoryItemContainer = styled.div`
    background-color: ${() =>
      categoryId === title ? ORANGE_COLOR : "rgba(158, 158, 158, 1)"};
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    align-items: flex-start;
    padding: 0px 20px;
    width: 100%;
    height: 70px;
  `;
  return (
    <CategoryItemContainer
      onMouseEnter={() => setCategoryId(title)}
      onMouseLeave={() => setCategoryId("")}
    >
      <CenterVerticalStyled>
        <Typography fontSize={LARGE_FONT} textColor={WHITE_COLOR}>
          <strong>{title}</strong>
        </Typography>
      </CenterVerticalStyled>
      <CenterVerticalStyled>
        <ImageCategoryItemContainer>
          <ImageServerComponent image={iconName} width={50} />
        </ImageCategoryItemContainer>
      </CenterVerticalStyled>
    </CategoryItemContainer>
  );
};
export default CategoryItemComponent;
