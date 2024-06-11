import { useState } from "react";
import { LeftStyled, Pointer, SpaceStyled } from "../../global-style/global.s";
import { Grid, Typography } from "@mui/joy";
import { ORANGE_COLOR } from "../../config/colors";
import Link from "next/link";

const HomeMenuComponent = () => {
  const [hover, setHover] = useState<string | undefined | null>();
  return (
    <>
      <LeftStyled>
        <Link href={"register"}>
          <Pointer
            onMouseEnter={() => setHover("login-register")}
            onMouseLeave={() => setHover(null)}
          >
            <SpaceStyled bottom={10}>
              <Grid container spacing={1} alignItems={"center"}>
                {hover == "login-register" && (
                  <Grid>
                    <Typography textColor={ORANGE_COLOR}>
                      ورود \ عضویت
                    </Typography>
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
                    <Typography textColor={ORANGE_COLOR}>دانلود اپ</Typography>
                  </Grid>
                )}

                <Grid>
                  <img src="./icons/menu.png" width={35} />
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
                    <Typography textColor={ORANGE_COLOR}>پاورقی</Typography>
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
