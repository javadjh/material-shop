import { FC, useEffect, useState } from "react";

import { Grid, Option, Select } from "@mui/joy";
import { IProvince } from "../../types/province.type";
import { ICity } from "../../types/city.type";
import {
  getCitiesService,
  getProvincesService,
} from "../../service/location.service";
import { SpaceStyled } from "../../global-style/global.s";

const LocationPickerComponent: FC<{
  onCitySelected: (cityId?: number) => void;
  isError?: any;
  leftSelect?: number;
  spacing?: number;
  secondLeftSelect?: number;
  secondRightSelect?: number;
}> = ({
  onCitySelected,
  isError,
  leftSelect = 8,
  spacing = 5,
  secondLeftSelect = 13,
  secondRightSelect = -5,
}) => {
  const [provinces, setProvinces] = useState<Array<IProvince>>([]);
  const [province, setProvince] = useState<number>();
  const [cities, setCities] = useState<Array<ICity>>([]);
  useEffect(() => {
    getProvinces();
  }, []);

  useEffect(() => {
    if (province) getCities();
  }, [province]);

  const getProvinces = async () => {
    const { data } = await getProvincesService();
    onCitySelected(undefined);
    setProvinces(data?.data?.list);
  };

  const getCities = async () => {
    const { data } = await getCitiesService(province);
    setCities(data?.data?.list);
  };

  return (
    <Grid container spacing={spacing}>
      <Grid lg={6}>
        <SpaceStyled left={leftSelect}>
          <Select
            style={{
              width: "100%",
              padding: 15,
              border: isError ? "1.5px solid red" : "1.5px solid orange ",
            }}
            placeholder="استان محل فعالیت خود را انتخاب کنید"
            onChange={(e, value) => setProvince(Number(value))}
          >
            {provinces?.map((item) => (
              <Option value={item.id} key={item.id}>
                {item?.name}
              </Option>
            ))}
          </Select>
        </SpaceStyled>
      </Grid>
      <Grid lg={6}>
        <SpaceStyled left={secondLeftSelect} right={secondRightSelect}>
          {province && (
            <Select
              style={{
                width: "100%",
                padding: 15,
                border: isError ? "1.5px solid red" : "1.5px solid orange ",
              }}
              placeholder="شهر محل فعالیت خود را انتخاب کنید"
              onChange={(e, value) => onCitySelected(Number(value))}
            >
              {cities?.map((item) => (
                <Option key={item.id} value={item.id}>
                  {item?.name}
                </Option>
              ))}
            </Select>
          )}
        </SpaceStyled>
      </Grid>
    </Grid>
  );
};
export default LocationPickerComponent;
