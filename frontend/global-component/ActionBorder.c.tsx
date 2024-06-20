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

const ActionBorderComponent: FC<any> = ({ children }) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  return (
    <SpaceStyled bottom={10}>
      <Pointer>
        <WhiteBorderStyled
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          style={{
            border: isHover
              ? `1px solid ${ORANGE_COLOR}`
              : `1px solid ${WHITE_COLOR}`,
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
