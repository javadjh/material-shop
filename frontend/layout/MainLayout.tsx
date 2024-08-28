import { FC, useEffect, useState } from "react";
import {
  DepartmentSelect,
  HeaderLayoutStyled,
  MainLayoutContainer,
  MakeBoxContainer,
  OrangeMainLayoutBTN,
  SearchHeaderStyled,
} from "./MainLayout.s";
import { Badge, Grid, Option, Typography } from "@mui/joy";
import {
  CenterStyled,
  CenterVerticalStyled,
  Pointer,
  SpaceStyled,
} from "../global-style/global.s";
import { ORANGE_COLOR, WHITE_COLOR } from "../config/colors";
import IconComponent from "../global-component/Icon.c";
import Link from "next/link";
import { getCookie, setCookie } from "cookies-next";
import { useRouter } from "next/router";
import { ReactSVG } from "react-svg";
import { NotificationsActive } from "@mui/icons-material";
import { unseenUserChatsService } from "../service/chat.service";
import ActionBorderComponent from "../global-component/ActionBorder.c";
const MainLayout: FC<{ children: any }> = ({ children }) => {
  const [usersUnseenCount, setUsersUnseenCount] = useState<Number>(0);
  const router = useRouter();
  useEffect(() => {
    if (getCookie("token")) getUsersUnseenCount();
  }, []);
  const getUsersUnseenCount = async () => {
    const {
      data: { data: res },
    } = await unseenUserChatsService();
    console.log(res.count);

    setUsersUnseenCount(res.count);
  };
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
              <OrangeMainLayoutBTN>به ما بپیوندید</OrangeMainLayoutBTN>
            </Grid>
            <Grid>
              <DepartmentSelect defaultValue={"products"}>
                <Option value={"products"} id="products">
                  بخش محصولات
                </Option>
              </DepartmentSelect>
            </Grid>
            <Grid>
              <SearchHeaderStyled placeholder={"Search"} />
            </Grid>
            <Grid>
              <CenterStyled>
                <Link href={"/faq"}>
                  <CenterVerticalStyled>
                    <Badge badgeContent={`${usersUnseenCount}`}>
                      <NotificationsActive
                        style={{ fontSize: 35, color: WHITE_COLOR }}
                      />
                    </Badge>
                  </CenterVerticalStyled>
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
                  <SpaceStyled top={5}>
                    <ReactSVG
                      src="/icons/menu.svg"
                      beforeInjection={(svg) => {
                        svg.classList.add("so-svg-class");
                        svg.setAttribute(
                          "style",
                          ` width:30px !important ; height:30px !important`
                        );
                      }}
                    />
                  </SpaceStyled>
                </Link>
              </CenterStyled>
            </Grid>
            <Grid>
              <SpaceStyled top={-5}>
                {getCookie("phone") ? (
                  <Grid container spacing={2}>
                    <Grid>
                      <SpaceStyled top={0}>
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
              </SpaceStyled>
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
