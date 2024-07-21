import { Grid, Typography } from "@mui/joy";
import MainLayout from "../../layout/MainLayout";
import TopSellerHeaderomponent from "./TopSellerHeader.c";
import {
  CenterStyled,
  PaddingStyled,
  SpaceStyled,
} from "../../global-style/global.s";
import LogoComponent from "../../global-component/Logo.c";
import LocationSelectComponent from "./LocationSelect.c";
import { useEffect, useState } from "react";
import { sellersService } from "../../service/seller.service";
import styled from "styled-components";
import { ORANGE_COLOR } from "../../config/colors";
import IconComponent from "../../global-component/Icon.c";
import { ISeller } from "../../types/seller.type";
import { ReactSVG } from "react-svg";
import { useWindowSize } from "../../global-component/ScreenBridge.c";

const SellersPage = () => {
  const [city, setCity] = useState<string>();
  const [sellerDepartment, setSellerDepartment] = useState<string>();
  const [sellers, setSellers] = useState<Array<ISeller>>();
  const size = useWindowSize();
  useEffect(() => {
    getData();
  }, [city, sellerDepartment]);
  const getData = async () => {
    const {
      data: { data: res },
    } = await sellersService({ searchValue: city, sellerDepartment });
    setSellers(res.sellers);
  };
  return (
    <MainLayout>
      <Grid container spacing={5}>
        <Grid lg={2.5}>
          <PaddingStyled top={30}>
            <LogoComponent width={size?.height < 660 ? "50%" : "60%"} />
            <SpaceStyled bottom={20}>
              <CenterStyled>
                <img src="/google-font.png" width={"65%"} />
              </CenterStyled>
            </SpaceStyled>
            <LocationSelectComponent onSelected={(name) => setCity(name)} />
          </PaddingStyled>
        </Grid>
        <Grid lg={9.5}>
          <PaddingStyled top={100}>
            <TopSellerHeaderomponent
              onSelected={(e) => setSellerDepartment(e)}
            />
            <Grid container spacing={3}>
              {sellers?.map((item) => (
                <Grid lg={6}>
                  <TopWhiteCardStyled>
                    <PaddingStyled vertical={5}>
                      <Grid container justifyContent={"space-between"}>
                        <Grid>
                          <Typography fontWeight={"bold"}>
                            {item?.title}
                          </Typography>
                        </Grid>
                        <Grid>
                          <SpaceStyled>
                            <Typography fontWeight={"bold"}>
                              {item?.firstNumber}
                            </Typography>
                            <Typography fontWeight={"bold"}>
                              {item?.secondNumber}
                            </Typography>
                          </SpaceStyled>
                        </Grid>
                      </Grid>
                    </PaddingStyled>
                  </TopWhiteCardStyled>
                  <BottomWhiteCardStyled>
                    <Grid container justifyContent={"space-between"}>
                      <Grid>
                        <Typography fontWeight={"bold"}>
                          {item?.address}
                        </Typography>
                      </Grid>
                      <Grid container spacing={2}>
                        <Grid>
                          <div style={{ width: 20, height: 20 }}>
                            <ReactSVG
                              src="/icons/telegram.svg"
                              beforeInjection={(svg) => {
                                svg.setAttribute(
                                  "style",
                                  `width: 20px ; height: 20px; fill : white !important`
                                );
                              }}
                            />
                          </div>
                        </Grid>
                        <Grid>
                          <div style={{ width: 20, height: 20 }}>
                            <ReactSVG
                              src="/icons/whatsapp.svg"
                              style={{ color: "red" }}
                              beforeInjection={(svg) => {
                                svg.setAttribute(
                                  "style",
                                  `width: 20px ; height: 20px; fill : white !important`
                                );
                              }}
                            />
                          </div>
                        </Grid>
                        <Grid>
                          <div style={{ width: 20, height: 20 }}>
                            <ReactSVG
                              src="/icons/instagram.svg"
                              style={{ color: "red" }}
                              beforeInjection={(svg) => {
                                svg.setAttribute(
                                  "style",
                                  `width: 20px ; height: 20px; fill : white !important`
                                );
                              }}
                            />
                          </div>
                        </Grid>
                        <Grid>
                          <div style={{ width: 20, height: 20 }}>
                            <ReactSVG
                              src="/icons/whatsapp.svg"
                              style={{ color: "red" }}
                              beforeInjection={(svg) => {
                                svg.setAttribute(
                                  "style",
                                  `width: 20px ; height: 20px; fill : white !important`
                                );
                              }}
                            />
                          </div>
                        </Grid>
                      </Grid>
                    </Grid>
                  </BottomWhiteCardStyled>
                </Grid>
              ))}
            </Grid>
          </PaddingStyled>
        </Grid>
      </Grid>
    </MainLayout>
  );
};
export default SellersPage;
const TopWhiteCardStyled = styled.div`
  background-color: white;
  border-top-left-radius: 10px;
  padding: 5px 15px;
  border-top-right-radius: 10px;
`;
const BottomWhiteCardStyled = styled.div`
  background-color: ${ORANGE_COLOR};
  padding: 5px 15px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;
