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
import { SMALL_FONT } from "../../config/font";

const LocationSelectComponent: FC<{
  onSelected: (city: any) => void;
}> = ({ onSelected }) => {
  const [provinces, setProvinces] = useState<Array<IProvince>>();
  const [cities, setCities] = useState<Array<ICity>>();
  const [city, setCity] = useState<Array<number>>([]);
  const [province, setProvince] = useState<number>();
  const [provinceObject, setProvinceObject] = useState<any>({});
  const size = useWindowSize();

  useEffect(() => {
    getProvinces();
  }, []);

  useEffect(() => {
    onSelected(city);
  }, [city]);
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
  const manageCities = (id: number) => {
    const isFind = city?.find((ele) => ele == id);
    console.log(isFind);

    if (isFind) {
      setCity(city.filter((ele) => ele != id));
    } else {
      setCity([...city, ...[id]]);
    }
  };
  const isCityFind = (id: number): Boolean => {
    return Boolean(city?.find((ele) => ele == id));
  };
  return (
    <>
      <SelectStyled
        className="white-btn-class"
        onChange={(e: any) => {
          setProvince(Number(e?.target.id));
          setCity([]);
        }}
        placeholder="استان را انتخاب کنید"
      >
        {provinces?.map((item) => (
          <Option
            onClick={() => setProvinceObject(item)}
            value={item?.id}
            id={`${item?.id}`}
          >
            {item?.name}
          </Option>
        ))}
      </SelectStyled>
      <SpaceStyled top={10} bottom={5}>
        <Typography textColor={ORANGE_COLOR}>
          شهر های استان {provinceObject?.name}
        </Typography>
      </SpaceStyled>
      <SpaceStyled top={10}>
        <SimpleOrangeBorderBlock
          style={{
            height: "55vh",
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
                    manageCities(item?.id);
                  }}
                >
                  <Pointer>
                    <PaddingStyled vertical={4} horizontal={3}>
                      <SimpleOrangeBorderBlock
                        style={{
                          backgroundColor: isCityFind(item?.id)
                            ? WHITE_COLOR
                            : undefined,
                        }}
                      >
                        <PaddingStyled vertical={3} horizontal={8}>
                          <Typography
                            fontSize={SMALL_FONT}
                            textColor={
                              isCityFind(item?.id) ? ORANGE_COLOR : WHITE_COLOR
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
  border: 3px solid ${ORANGE_COLOR} !important;
  background-color: transparent !important;
  color: white;
  ::placeholder {
    color: white !important;
  }
`;
