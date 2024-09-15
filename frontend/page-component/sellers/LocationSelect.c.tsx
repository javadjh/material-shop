import { FC, useEffect, useState } from "react";
import { IProvince } from "../../types/province.type";
import { ICity } from "../../types/city.type";
import {
  getCitiesService,
  getProvincesService,
} from "../../service/location.service";
import {
  PaddingStyled,
  Pointer,
  SimpleOrangeBorderBlock,
  SpaceStyled,
} from "../../global-style/global.s";
import { Grid, Option, Select, Typography } from "@mui/joy";
import { WhiteText } from "../../global-component/Typography/WhiteText.t";
import { ORANGE_COLOR, WHITE_COLOR } from "../../config/colors";
import styled from "styled-components";
import { useWindowSize } from "../../global-component/ScreenBridge.c";

const LocationSelectComponent: FC<{
  onSelected: (cityName: string) => void;
}> = ({ onSelected }) => {
  const [provinces, setProvinces] = useState<Array<IProvince>>();
  const [cities, setCities] = useState<Array<ICity>>();
  const [city, setCity] = useState<number>();
  const [province, setProvince] = useState<number>();
  const size = useWindowSize();

  useEffect(() => {
    getProvinces();
  }, []);
  useEffect(() => {
    if (province) getCities();
  }, [province]);

  const getProvinces = async () => {
    const {
      data: { data: res },
    } = await getProvincesService();

    setProvinces(res?.list);
  };

  const getCities = async () => {
    const {
      data: { data: res },
    } = await getCitiesService(province);

    setCities(res?.list);
  };
  return (
    <>
      <SelectStyled
        onChange={(e: any) => setProvince(Number(e?.target.id))}
        placeholder="استان را انتخاب کنید"
      >
        {provinces?.map((item) => (
          <Option value={item?.id} id={`${item?.id}`}>
            {item?.name}
          </Option>
        ))}
      </SelectStyled>
      <SpaceStyled top={10}>
        <SimpleOrangeBorderBlock
          style={{
            height: "60vh",
            overflow: "auto",
            borderWidth: 3,
          }}
        >
          <SpaceStyled vertical={5} horizontal={5}>
            <Grid container>
              {cities?.map((item) => (
                <Grid
                  lg={6}
                  onClick={() => {
                    onSelected(item?.name);
                    setCity(item?.id);
                  }}
                >
                  <Pointer>
                    <PaddingStyled vertical={4} horizontal={3}>
                      <SimpleOrangeBorderBlock
                        style={{
                          backgroundColor:
                            item?.id == city ? WHITE_COLOR : undefined,
                        }}
                      >
                        <PaddingStyled vertical={3} horizontal={8}>
                          <Typography
                            textColor={
                              item?.id == city ? ORANGE_COLOR : WHITE_COLOR
                            }
                          >
                            {item.name}
                          </Typography>
                        </PaddingStyled>
                      </SimpleOrangeBorderBlock>
                    </PaddingStyled>
                  </Pointer>
                </Grid>
              ))}
            </Grid>
          </SpaceStyled>
        </SimpleOrangeBorderBlock>
      </SpaceStyled>
    </>
  );
};
export default LocationSelectComponent;
const SelectStyled = styled(Select)`
  border: 2px solid ${ORANGE_COLOR};
  background-color: transparent !important;
  color: white;
  ::placeholder {
    color: white !important;
  }
`;
