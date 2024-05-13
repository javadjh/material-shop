import { Grid, Typography } from "@mui/joy";
import MainLayout from "../../layout/MainLayout";
import TopSellerHeaderomponent from "./TopSellerHeader.c";
import { PaddingStyled, SpaceStyled } from "../../global-style/global.s";
import LogoComponent from "../../global-component/Logo.c";
import LocationSelectComponent from "./LocationSelect.c";
import { useEffect, useState } from "react";
import { sellersService } from "../../service/seller.service";
import styled from "styled-components";
import { ORANGE_COLOR } from "../../config/colors";
import IconComponent from "../../global-component/Icon.c";
import { ISeller } from "../../types/seller.type";

const SellersPage = () => {
  const [city, setCity] = useState<string>();
  const [sellerDepartment, setSellerDepartment] = useState<string>();
  const [sellers, setSellers] = useState<Array<ISeller>>();

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
          <PaddingStyled top={20}>
            <LogoComponent width={"100%"} />
            <LocationSelectComponent onSelected={(name) => setCity(name)} />
          </PaddingStyled>
        </Grid>
        <Grid lg={9.5}>
          <PaddingStyled top={80}>
            <TopSellerHeaderomponent
              onSelected={(e) => setSellerDepartment(e)}
            />
            <Grid container spacing={3}>
              {sellers?.map((item) => (
                <Grid lg={6}>
                  <TopWhiteCardStyled>
                    <Grid container justifyContent={"space-between"}>
                      <Grid>
                        <Typography>{item?.title}</Typography>
                      </Grid>
                      <Grid>
                        <SpaceStyled>
                          <Typography>{item?.firstNumber}</Typography>
                          <Typography>{item?.secondNumber}</Typography>
                        </SpaceStyled>
                      </Grid>
                    </Grid>
                  </TopWhiteCardStyled>
                  <BottomWhiteCardStyled>
                    <Grid container justifyContent={"space-between"}>
                      <Grid>
                        <Typography>{item?.address}</Typography>
                      </Grid>
                      <Grid container spacing={2}>
                        <Grid>
                          <IconComponent icon="store" width={17} />
                        </Grid>
                        <Grid>
                          <IconComponent icon="store" width={17} />
                        </Grid>
                        <Grid>
                          <IconComponent icon="store" width={17} />
                        </Grid>
                        <Grid>
                          <IconComponent icon="store" width={17} />
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
