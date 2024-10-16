import { Box, Grid, Typography } from "@mui/joy";
import { FC, useState } from "react";
import IconComponent from "../../../../global-component/Icon.c";
import { ORANGE_COLOR, WHITE_COLOR } from "../../../../config/colors";
import { LARGE_FONT, MEDIUM_FONT, SMALL_FONT } from "../../../../config/font";
import Link from "next/link";
import styled from "styled-components";
import ImageServerComponent from "../../../../global-component/ImageServer.c";
import {
  CenterStyled,
  CenterVerticalStyled,
} from "../../../../global-style/global.s";
import { ImageCategoryItemContainer } from "../choice/choice.s";

const SubCategoryItemComponent: FC<{
  title: string;
  iconName?: string;
  id?: string;
  whiteMode?: boolean;
}> = ({ title, iconName, whiteMode }) => {
  let [categoryId, setCategoryId] = useState<string>("");
  const CategoryItemContainer = styled.div`
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    background-color: ${whiteMode ? WHITE_COLOR : "transeparent"};
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
      <CenterStyled>
        <Typography fontSize={LARGE_FONT}>
          <strong style={{ color: whiteMode ? "#000" : "white" }}>
            {title}
          </strong>
        </Typography>
      </CenterStyled>
      <ImageCategoryItemContainer>
        <ImageServerComponent image={iconName} width={70} height={70} />
      </ImageCategoryItemContainer>
    </CategoryItemContainer>
  );
};
export default SubCategoryItemComponent;
