import { FC } from "react";
import { StoreItemContainer } from "./choice.s";
import IconComponent from "../../../../global-component/Icon.c";
import { Typography } from "@mui/joy";
import { WHITE_COLOR } from "../../../../config/colors";
import { SpaceStyled } from "../../../../global-style/global.s";
import { SMALL_FONT } from "../../../../config/font";

const StoreItemComponent: FC<{
  iconName?: string;
  title?: string;
  key?: string;
}> = ({ iconName, key, title }) => {
  return (
    <div className="border-hover">
      <StoreItemContainer>
        <IconComponent icon={iconName} width={40} />
        <SpaceStyled top={10}>
          <Typography fontSize={SMALL_FONT} textColor={WHITE_COLOR}>
            {title}
          </Typography>
        </SpaceStyled>
      </StoreItemContainer>
    </div>
  );
};
export default StoreItemComponent;
