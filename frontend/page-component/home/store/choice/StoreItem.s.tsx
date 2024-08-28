import { FC, useState } from "react";
import IconComponent from "../../../../global-component/Icon.c";
import { Typography } from "@mui/joy";
import { ORANGE_COLOR, WHITE_COLOR } from "../../../../config/colors";
import { CenterStyled, SpaceStyled } from "../../../../global-style/global.s";
import { SMALL_FONT } from "../../../../config/font";
import styled from "styled-components";
import Link from "next/link";
import { ReactSVG } from "react-svg";

const StoreItemComponent: FC<{
  iconName?: string;
  title?: string;
  key?: string;
  link?: string;
  font?: string;
}> = ({ iconName, key, title, link, font }) => {
  const [menuId, setMenuId] = useState<string>();
  const StoreItemContainer = styled.div`
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
          className="outline-hover"
          // onMouseLeave={() => setMenuId("")}
          // onMouseEnter={() => setMenuId(title)}
        >
          <ReactSVG
            src={`/icons/${iconName}.svg`}
            beforeInjection={(svg: any) => {
              svg.setAttribute("style", ` width:50px; height: 50px`);
            }}
          />
          <SpaceStyled top={10}>
            <Typography fontWeight={"1000"} fontSize={font || "11px"}>
              {title}
            </Typography>
          </SpaceStyled>
        </StoreItemContainer>
      </Link>
    </CenterStyled>
  );
};
export default StoreItemComponent;
