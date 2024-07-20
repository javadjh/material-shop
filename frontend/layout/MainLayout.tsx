import { FC } from "react";
import {
  HeaderLayoutStyled,
  MainLayoutContainer,
  MakeBoxContainer,
  SearchHeaderStyled,
} from "./MainLayout.s";
import { Grid, Typography } from "@mui/joy";
import { CenterStyled, Pointer, SpaceStyled } from "../global-style/global.s";
import { ORANGE_COLOR } from "../config/colors";
import IconComponent from "../global-component/Icon.c";
import Link from "next/link";
import { getCookie, setCookie } from "cookies-next";
import { useRouter } from "next/router";

const MainLayout: FC<{ children: any }> = ({ children }) => {
  const router = useRouter();
  return (
    <>
      <MainLayoutContainer>
        <HeaderLayoutStyled>
          <Grid
            container
            spacing={2}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Grid>
              <SearchHeaderStyled placeholder={"Search"} />
            </Grid>
            <Grid>
              <CenterStyled>
                <Link href={"/footer"}>
                  <img src="/favlogo.png" width={34} />
                </Link>
              </CenterStyled>
            </Grid>
            <Grid>
              <CenterStyled>
                <IconComponent icon={"basket"} width={30} />
              </CenterStyled>
            </Grid>
            <Grid>
              <CenterStyled>
                <Link href={"/footer"}>
                  <img src="/favlogo.png" width={34} />
                </Link>
              </CenterStyled>
            </Grid>
            <Grid>
              <CenterStyled>
                <Link href={"/app"}>
                  <img src="/icons/menu.png" width={30} />
                </Link>
              </CenterStyled>
            </Grid>
            <Grid>
              {getCookie("phone") ? (
                <Grid container spacing={2}>
                  <Grid>
                    <SpaceStyled top={-2}>
                      <Pointer>
                        <Typography
                          onClick={() => {
                            setCookie("token", undefined);
                            setCookie("phone", undefined);
                            router.replace("/");
                          }}
                          textColor={ORANGE_COLOR}
                        >
                          خروج
                        </Typography>
                      </Pointer>
                    </SpaceStyled>
                  </Grid>
                  <Grid>
                    <Typography textColor={ORANGE_COLOR}>
                      {getCookie("phone")}
                    </Typography>
                  </Grid>
                </Grid>
              ) : (
                <Link href={"/register"}>
                  <CenterStyled>
                    <Typography textColor={ORANGE_COLOR}>
                      ورود / عضویت
                    </Typography>
                  </CenterStyled>
                </Link>
              )}
            </Grid>
            <Grid>
              <CenterStyled>
                <Link href={"/register"}>
                  <img src="/icons/user-icon.png" width={30} />
                </Link>
              </CenterStyled>
            </Grid>
          </Grid>
        </HeaderLayoutStyled>
        <MakeBoxContainer>{children}</MakeBoxContainer>
      </MainLayoutContainer>
    </>
  );
};
export default MainLayout;
