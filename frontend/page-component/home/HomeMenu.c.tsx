import { useState } from "react";
import { LeftStyled, Pointer, SpaceStyled } from "../../global-style/global.s";
import { Grid, Typography } from "@mui/joy";
import { ORANGE_COLOR } from "../../config/colors";
import Link from "next/link";
import { ReactSVG } from "react-svg";
import { getCookie } from "cookies-next";

const HomeMenuComponent = () => {
  const [hover, setHover] = useState<string | undefined | null>();
  return (
    <>
      <LeftStyled>
        <Link href={getCookie("phone") ? "profile/profile" : "register"}>
          <Pointer
            onMouseEnter={() => setHover("login-register")}
            onMouseLeave={() => setHover(null)}
          >
            <SpaceStyled bottom={10}>
              <Grid container spacing={1} alignItems={"center"}>
                {hover == "login-register" && (
                  <Grid>
                    <SpaceStyled left={15}>
                      <Typography textColor={ORANGE_COLOR}>
                        {getCookie("phone") || "ورود / عضویت"}
                      </Typography>
                    </SpaceStyled>
                  </Grid>
                )}
                <Grid>
                  <img src="./icons/user.png" width={35} />
                </Grid>
              </Grid>
            </SpaceStyled>
          </Pointer>
        </Link>
      </LeftStyled>
      <LeftStyled>
        <Link href={"app"}>
          <Pointer
            onMouseEnter={() => setHover("app")}
            onMouseLeave={() => setHover(null)}
          >
            <SpaceStyled bottom={10}>
              <Grid alignItems={"center"} container spacing={1}>
                {hover == "app" && (
                  <Grid>
                    <SpaceStyled left={15}>
                      <Typography textColor={ORANGE_COLOR}>
                        دانلود اپ
                      </Typography>
                    </SpaceStyled>
                  </Grid>
                )}

                <Grid>
                  <ReactSVG
                    src="/icons/foter-svg.svg"
                    width={15}
                    height={15}
                    beforeInjection={(svg: any) => {
                      svg.setAttribute(
                        "style",
                        `fill: ${
                          "app" === hover ? ORANGE_COLOR : "#fff"
                        } ; width:35px`
                      );
                    }}
                  />
                </Grid>
              </Grid>
            </SpaceStyled>
          </Pointer>
        </Link>
      </LeftStyled>
      <LeftStyled>
        <Link href={"footer"}>
          <Pointer
            onMouseEnter={() => setHover("footer")}
            onMouseLeave={() => setHover(null)}
          >
            <SpaceStyled bottom={10}>
              <Grid alignItems={"center"} container spacing={1}>
                {hover == "footer" && (
                  <Grid>
                    <SpaceStyled left={15}>
                      <Typography textColor={ORANGE_COLOR}>پاورقی</Typography>
                    </SpaceStyled>
                  </Grid>
                )}
                <Grid>
                  <img src="./favlogo.png" width={35} />
                </Grid>
              </Grid>
            </SpaceStyled>
          </Pointer>
        </Link>
      </LeftStyled>
    </>
  );
};
export default HomeMenuComponent;
