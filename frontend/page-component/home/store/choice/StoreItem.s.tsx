import { FC, useState } from "react";
import IconComponent from "../../../../global-component/Icon.c";
import { Typography } from "@mui/joy";
import { ORANGE_COLOR, WHITE_COLOR } from "../../../../config/colors";
import { CenterStyled, SpaceStyled } from "../../../../global-style/global.s";
import { SMALL_FONT } from "../../../../config/font";
import styled from "styled-components";
import Link from "next/link";

const StoreItemComponent: FC<{
  iconName?: string;
  title?: string;
  key?: string;
  link?: string;
}> = ({ iconName, key, title, link }) => {
  const [menuId, setMenuId] = useState<string>();
  const StoreItemContainer = styled.div`
    outline: ${() =>
      menuId === title ? "2px solid" + ORANGE_COLOR : "2px solid #fff"};
    padding: 20px 0px;
    display: flex;
    aspect-ratio: 3/4;
    height: 19vh;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 15px;
    cursor: pointer;
  `;
  return (
    <CenterStyled>
      <Link href={link || "#"}>
        <StoreItemContainer
          onMouseLeave={() => setMenuId("")}
          onMouseEnter={() => setMenuId(title)}
        >
          <IconComponent icon={iconName} width={50} />
          <SpaceStyled top={10}>
            <Typography
              fontSize={"10px"}
              textColor={menuId === title ? ORANGE_COLOR : WHITE_COLOR}
            >
              {title}
            </Typography>
          </SpaceStyled>
        </StoreItemContainer>
      </Link>
    </CenterStyled>
  );
};
export default StoreItemComponent;
