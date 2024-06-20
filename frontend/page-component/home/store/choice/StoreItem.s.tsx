import { FC, useState } from "react";
import IconComponent from "../../../../global-component/Icon.c";
import { Typography } from "@mui/joy";
import { ORANGE_COLOR, WHITE_COLOR } from "../../../../config/colors";
import { SpaceStyled } from "../../../../global-style/global.s";
import { SMALL_FONT } from "../../../../config/font";
import styled from "styled-components";

const StoreItemComponent: FC<{
  iconName?: string;
  title?: string;
  key?: string;
}> = ({ iconName, key, title }) => {
  const [menuId, setMenuId] = useState<string>();
  const StoreItemContainer = styled.div`
    outline: ${() =>
      menuId === title ? "2px solid" + ORANGE_COLOR : "2px solid #fff"};
    padding: 20px 0px;
    display: flex;

    flex-direction: column;
    justify-content: space-around;
    height: 18vh;
    align-items: center;
    border-radius: 15px;
    cursor: pointer;
  `;
  return (
    <div className="border-hover">
      <StoreItemContainer
        onMouseLeave={() => setMenuId("")}
        onMouseEnter={() => setMenuId(title)}
      >
        <IconComponent icon={iconName} width={50} />
        <SpaceStyled top={10}>
          <Typography
            fontSize={SMALL_FONT}
            textColor={menuId === title ? ORANGE_COLOR : WHITE_COLOR}
          >
            {title}
          </Typography>
        </SpaceStyled>
      </StoreItemContainer>
    </div>
  );
};
export default StoreItemComponent;
