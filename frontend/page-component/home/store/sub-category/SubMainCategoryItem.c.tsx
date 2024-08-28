import { FC } from "react";
import { ICategory } from "../../../../types/category.type";
import styled from "styled-components";
import { Typography } from "@mui/joy";
import { WHITE_COLOR } from "../../../../config/colors";
import { CenterStyled, SpaceStyled } from "../../../../global-style/global.s";
import ImageServerComponent from "../../../../global-component/ImageServer.c";

const SubMainCategoryItemComponent: FC<{
  item: ICategory;
  isActive: Boolean;
}> = ({ item, isActive }) => {
  return (
    <>
      {isActive ? (
        <MainActiveCategoryContainer>
          <Typography textColor={WHITE_COLOR}>{item?.title}</Typography>
          <ImageServerComponent image={item?.icon} width={87} height={87} />
        </MainActiveCategoryContainer>
      ) : (
        <>
          <MainCategoryContainer>
            <ImageServerComponent image={item?.icon} width={87} height={87} />
          </MainCategoryContainer>
          <SpaceStyled top={10}>
            <CenterStyled>
              <Typography textColor={WHITE_COLOR}>{item?.title}</Typography>
            </CenterStyled>
          </SpaceStyled>
        </>
      )}
    </>
  );
};
export default SubMainCategoryItemComponent;
const MainActiveCategoryContainer = styled.div`
  width: 236px;
  height: 152px;
  background-color: rgba(231, 150, 31, 1);
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  flex-direction: row;
`;
const MainCategoryContainer = styled.div`
  width: 120px;
  height: 120px;
  background-color: transparent;
  border: 2px solid white;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
