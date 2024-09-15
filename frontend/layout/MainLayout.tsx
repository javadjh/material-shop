import { FC, useEffect, useState } from "react";
import {
  DepartmentSelect,
  HeaderLayoutStyled,
  MainLayoutContainer,
  MakeBoxContainer,
  OrangeMainLayoutBTN,
  SearchBox,
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
import styled from "styled-components";
import { IProduct } from "../types/product.type";
import { productsService } from "../service/product.service";
import ImageServerComponent from "../global-component/ImageServer.c";
import { priceFormat } from "../config/utility";
import { MEDIUM_FONT } from "../config/font";
const MainLayout: FC<{ children: any }> = ({ children }) => {
  const [usersUnseenCount, setUsersUnseenCount] = useState<number>(0);
  const [products, setProducts] = useState<Array<IProduct>>([]);
  const [searchValue, setSearchValue] = useState<string>("");

  const router = useRouter();
  useEffect(() => {
    if (getCookie("token")) getUsersUnseenCount();
  }, []);

  useEffect(() => {
    if (searchValue?.length > 0) {
      getProducts();
    } else {
      setProducts([]);
    }
  }, [searchValue]);

  const getProducts = async () => {
    const {
      data: { data: res },
    } = await productsService({
      eachPerPage: 5,
      searchValue,
    });

    setProducts(res?.list);
  };

  const getUsersUnseenCount = async () => {
    const {
      data: { data: res },
    } = await unseenUserChatsService();

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
              <Link href={"/employment"}>
                <OrangeMainLayoutBTN>به ما بپیوندید</OrangeMainLayoutBTN>
              </Link>
            </Grid>
            <Grid>
              <DepartmentSelect defaultValue={"products"}>
                <Option value={"products"} id="products">
                  بخش محصولات
                </Option>
              </DepartmentSelect>
            </Grid>
            <Grid>
              <div style={{ position: "relative" }}>
                <input
                  className="search-input"
                  onChange={(e) => setSearchValue(e.target?.value)}
                  placeholder={"Search"}
                />
                <SearchBox>
                  {products?.map((product) => (
                    <Link href={`/store/product?id=${product?._id}`}>
                      <Grid container spacing={2}>
                        <Grid>
                          <SpaceStyled top={10} right={10}>
                            <ImageServerComponent
                              image={product?.image}
                              width={80}
                            />
                          </SpaceStyled>
                        </Grid>
                        <Grid alignContent={"center"}>
                          <Typography fontSize={MEDIUM_FONT}>
                            {product?.title}
                          </Typography>
                          <Typography fontSize={MEDIUM_FONT}>
                            برند : {product?.brandName}
                          </Typography>
                          <Typography fontSize={MEDIUM_FONT}>
                            قیمت : {priceFormat(product?.price)}
                          </Typography>
                        </Grid>
                      </Grid>
                      <hr
                        style={{ opacity: 0.2, margin: 0, marginBottom: 10 }}
                      />
                    </Link>
                  ))}
                </SearchBox>
              </div>
            </Grid>
            {usersUnseenCount > 0 && (
              <Grid>
                <CenterStyled>
                  <Link href={"/faq"}>
                    <CenterVerticalStyled>
                      <Badge
                        color={"danger"}
                        badgeContent={`${usersUnseenCount}`}
                      >
                        <NotificationsActive
                          style={{ fontSize: 35, color: WHITE_COLOR }}
                        />
                      </Badge>
                    </CenterVerticalStyled>
                  </Link>
                </CenterStyled>
              </Grid>
            )}
            <Grid>
              <CenterStyled>
                <Link href={"/profile/basket"}>
                  <IconComponent icon={"basket"} width={30} />
                </Link>
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
                <Link href={getCookie("token") ? "/profile/profile" : "/"}>
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
