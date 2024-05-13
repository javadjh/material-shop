import { FC, useEffect, useState } from "react";
import {
  getCitiesService,
  getProvincesService,
} from "../service/location.service";
import { ICity } from "../types/city.type";
import { IProvince } from "../types/province.type";
import { Col, Form, Row, Select } from "antd";
import { SpaceStyled } from "../global-style/global.s";

const LocationPickerComponent: FC<{
  onCitySelected: (cityId?: number) => void;
}> = ({ onCitySelected }) => {
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
    <Form>
      <Row>
        <Col span={12}>
          <SpaceStyled horizontal={5}>
            <Form.Item label={"انتخاب استان"}>
              <Select
                placeholder="استان مورد نظر را انتخاب کنید"
                onChange={(value) => setProvince(Number(value))}
              >
                {provinces?.map((item) => (
                  <Select.Option key={item.id}>{item?.name}</Select.Option>
                ))}
              </Select>
            </Form.Item>
          </SpaceStyled>
        </Col>
        <Col span={12}>
          <SpaceStyled horizontal={5}>
            <Form.Item label={"انتخاب شهر"}>
              <Select
                placeholder="شهر مورد نظر را انتخاب کنید"
                onChange={(value) => onCitySelected(Number(value))}
              >
                {cities?.map((item) => (
                  <Select.Option key={item.id} value={item.id}>
                    {item?.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </SpaceStyled>
        </Col>
      </Row>
    </Form>
  );
};
export default LocationPickerComponent;
