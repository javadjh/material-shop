import { FC, useState } from "react";
import {
  CenterStyled,
  PaddingStyled,
  Pointer,
  SpaceStyled,
  WhiteBorderStyled,
} from "../global-style/global.s";
import { ORANGE_COLOR, WHITE_COLOR } from "../config/colors";
import { Typography } from "@mui/joy";

const ActionBorderComponent: FC<any> = ({
  border = "1",
  children,
  isSelected = false,
}) => {
  const [isHover, setIsHover] = useState<boolean>(isSelected);
  return (
    <SpaceStyled bottom={10}>
      <Pointer>
        <WhiteBorderStyled
          onMouseEnter={() => setIsHover(isSelected || true)}
          onMouseLeave={() => setIsHover(isSelected || false)}
          style={{
            border: isHover
              ? `${border}px solid ${ORANGE_COLOR}`
              : `${border}px solid ${WHITE_COLOR}`,
            borderRadius: 10,
          }}
        >
          <CenterStyled>
            <PaddingStyled vertical={10}>
              <Typography textColor={isHover ? ORANGE_COLOR : WHITE_COLOR}>
                {children}
              </Typography>
            </PaddingStyled>
          </CenterStyled>
        </WhiteBorderStyled>
      </Pointer>
    </SpaceStyled>
  );
};
export default ActionBorderComponent;
