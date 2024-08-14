import { FC, useEffect, useState } from "react";
import ActionBorderComponent from "../../global-component/ActionBorder.c";
import { Typography } from "@mui/joy";
import {
  LeftStyled,
  PaddingStyled,
  Pointer,
  SpaceStyled,
  WhiteBorderStyled,
} from "../../global-style/global.s";
import {
  LIGHT_GRAY_COLOR,
  ORANGE_COLOR,
  WHITE_COLOR,
} from "../../config/colors";
import { useWindowSize } from "../../global-component/ScreenBridge.c";

const AboutUsItemComponent: FC<{
  title: string;
  select?: string;
  setSelect: any;
}> = ({ title, select = false, setSelect }) => {
  const [isHover, setIsHover] = useState<boolean>(select == title);
  const size = useWindowSize();
  useEffect(() => {
    setIsHover(select == title);
  }, [select]);
  return (
    <SpaceStyled vertical={size.height > 650 ? 20 : 10}>
      <Pointer onClick={() => setSelect(title)}>
        <WhiteBorderStyled
          onMouseEnter={() => setIsHover(select == title || true)}
          onMouseLeave={() => setIsHover(select == title || false)}
          style={{
            border: isHover
              ? `2px solid ${ORANGE_COLOR}`
              : `2px solid ${WHITE_COLOR}`,
            borderRadius: 20,
          }}
        >
          <PaddingStyled vertical={10} horizontal={10}>
            <PaddingStyled bottom={20}>
              <Typography textColor={isHover ? ORANGE_COLOR : WHITE_COLOR}>
                {title}
              </Typography>
            </PaddingStyled>
            <LeftStyled>
              <img src="favlogo.png" />
            </LeftStyled>
          </PaddingStyled>
        </WhiteBorderStyled>
      </Pointer>
    </SpaceStyled>
  );
};
export default AboutUsItemComponent;
