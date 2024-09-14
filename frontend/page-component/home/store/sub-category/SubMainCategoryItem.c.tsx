import { FC } from "react";
import { ICategory } from "../../../../types/category.type";
import styled from "styled-components";
import { Typography } from "@mui/joy";
import { ORANGE_COLOR, WHITE_COLOR } from "../../../../config/colors";
import { CenterStyled, SpaceStyled } from "../../../../global-style/global.s";
import ImageServerComponent from "../../../../global-component/ImageServer.c";
import { SMALL_FONT } from "../../../../config/font";

const SubMainCategoryItemComponent: FC<{
  item: ICategory;
  isActive: Boolean;
}> = ({ item, isActive }) => {
  return (
    <>
      <MainCategoryContainer isActive={isActive}>
        <ImageServerComponent image={item?.icon} width={87} height={87} />
      </MainCategoryContainer>
      <SpaceStyled top={10}>
        <CenterStyled>
          <Typography fontSize={SMALL_FONT} textColor={WHITE_COLOR}>
            {item?.title}
          </Typography>
        </CenterStyled>
      </SpaceStyled>
    </>
  );
};
export default SubMainCategoryItemComponent;

const MainCategoryContainer: any = styled.div`
  width: 130px;
  height: 130px;
  background-color: ${(props: any) =>
    props.isActive ? ORANGE_COLOR : "transeparent"};
  border: 2px solid
    ${(props: any) => (props.isActive ? ORANGE_COLOR : WHITE_COLOR)};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
