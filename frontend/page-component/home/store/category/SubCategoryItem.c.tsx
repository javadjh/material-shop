import { Box, Grid, Typography } from "@mui/joy";
import { FC, useState } from "react";
import IconComponent from "../../../../global-component/Icon.c";
import { ORANGE_COLOR, WHITE_COLOR } from "../../../../config/colors";
import { LARGE_FONT, MEDIUM_FONT, SMALL_FONT } from "../../../../config/font";
import Link from "next/link";
import styled from "styled-components";
import ImageServerComponent from "../../../../global-component/ImageServer.c";
import { CenterVerticalStyled } from "../../../../global-style/global.s";
import { ImageCategoryItemContainer } from "../choice/choice.s";

const SubCategoryItemComponent: FC<{
  title: string;
  iconName?: string;
  id?: string;
}> = ({ title, iconName, id }) => {
  let [categoryId, setCategoryId] = useState<string>("");
  const CategoryItemContainer = styled.div`
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

    aspect-ratio: 3 / 1;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    align-items: flex-start;
    padding: 20px;
    width: 100%;
  `;
  return (
    <CategoryItemContainer className="fill-outline-hover">
      <Typography fontSize={LARGE_FONT} textColor={WHITE_COLOR}>
        <strong>{title}</strong>
      </Typography>
      <ImageCategoryItemContainer>
        <ImageServerComponent image={iconName} width={50} />
      </ImageCategoryItemContainer>
    </CategoryItemContainer>
  );
};
export default SubCategoryItemComponent;
