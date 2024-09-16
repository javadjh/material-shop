import { FC, useEffect, useState } from "react";
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
  padding,
  fontSize,
  isFill = false,
  fontColor,
  isCenter = true,
}) => {
  const [isHover, setIsHover] = useState<boolean>(isSelected);
  useEffect(() => {
    setIsHover(isSelected);
  }, [isSelected]);
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
            padding,
            backgroundColor: isHover && isFill ? ORANGE_COLOR : undefined,
            color: isHover && isFill ? "white !important" : "white",
          }}
        >
          {isCenter ? (
            <CenterStyled>
              <PaddingStyled vertical={10}>
                <Typography
                  fontSize={fontSize}
                  textColor={
                    fontColor || (isHover && !isFill)
                      ? ORANGE_COLOR
                      : WHITE_COLOR
                  }
                >
                  {children}
                </Typography>
              </PaddingStyled>
            </CenterStyled>
          ) : (
            <PaddingStyled vertical={10}>
              <Typography
                fontSize={fontSize}
                textColor={
                  fontColor || (isHover && !isFill) ? ORANGE_COLOR : WHITE_COLOR
                }
              >
                {children}
              </Typography>
            </PaddingStyled>
          )}
        </WhiteBorderStyled>
      </Pointer>
    </SpaceStyled>
  );
};
export default ActionBorderComponent;
