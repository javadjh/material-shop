import { Button, Checkbox, Col, Form, Input, Row, Select, message } from "antd";
import { UploadFileComponent } from "../../../components/UploadFile.c";
import ImageServerComponent from "../../../components/ImageServer.c";
import { useEffect, useState } from "react";
import { SpaceStyled } from "../../../global-style/global.s";
import TagPickerComponent from "./TagPickerComponent";
import { IOption } from "../../../types/option.type";
import OptionsComponent from "./Options.c";
import CarsComponent from "./Cars.c";
import { ICar } from "../../../types/car.type";
import { brandsService } from "../../../service/brand.service";
import { IBrand } from "../../../types/brand.type";
import { sellersService } from "../../../service/seller.service";
import { ISeller } from "../../../types/seller.type";
import SelectCategoryModal from "../../category/SelectCategory.m";
import { ICategory } from "../../../types/category.type";
import { insertProductService } from "../../../service/product.service";
import { IProduct } from "../../../types/product.type";
import { useNavigate, useRoutes } from "react-router-dom";

const UpsertProduct = () => {
  const navigator = useNavigate();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [image, setImage] = useState<string>();
  const [options, setOptions] = useState<Array<IOption>>([]);
  const [brands, setBrands] = useState<Array<IBrand>>([]);
  const [sellers, setSellers] = useState<Array<ISeller>>([]);
  const [car, setCar] = useState<Array<ICar>>([]);
  const [categoryId, setCategoryId] = useState<string>();

  const [category, setCategory] = useState<ICategory>();
  const onFileUploaded = (file: any) => {
    setImage(file.filename);
  };
  useEffect(() => {
    getBrands();
    getSellers();
  }, []);
  const getBrands = async () => {
    const {
      data: { data: response },
    } = await brandsService();

    setBrands(response);
  };
  const getSellers = async () => {
    const {
      data: { data: response },
    } = await sellersService({ eachPerPage: 500 });

    let res = response.sellers;
    let sellersCopy: any = [];
    res.forEach((element: any) => {
      sellersCopy.push({ label: element?.title, value: element?._id });
    });
    setSellers(sellersCopy);
  };

  const onUpsertListener = async (formData: IProduct | any) => {
    formData.code = Number(formData.code);
    formData.minOrderCountForRetail = Number(formData.minOrderCountForRetail);
    formData.minOrderCountForWholesale = Number(
      formData.minOrderCountForWholesale
    );
    formData.offForWholesalePercent = Number(formData.offForWholesalePercent);
    formData.postPrice = Number(formData.postPrice);
    formData.packCount = Number(formData.packCount);
    formData.price = Number(formData.price);
    formData.offForWholesalePercent = Number(formData.offForWholesalePercent);
    formData.remainingCount = Number(formData.remainingCount);
    formData.isHighConsumption = Boolean(formData.isHighConsumption);
    const {
      data: { state },
    } = await insertProductService({
      ...formData,
      ...{ image, options, car, categoryId },
    });
    if (state) {
      message.success("ثبت شد");
      navigator(-1);
    }
  };
  return (
    <>
      <SelectCategoryModal
        onSelected={(cat: ICategory) => {
          setCategoryId(cat._id);
          setCategory(cat);
        }}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <Form onFinish={onUpsertListener} layout="vertical">
        <Row>
          <Col span={8}>
            <SpaceStyled bottom={10}>
              <Row>
                <Col span={11}>
                  <Button onClick={() => setIsOpen(true)}>
                    {category?.title ? category?.title : "انتخاب دسته بندی"}
                  </Button>
                </Col>
                <Col span={12} offset={1}>
                  <Form.Item name={"brandId"}>
                    <Select
                      placeholder="انتخاب برند محصول"
                      style={{ width: "100%" }}
                    >
                      {brands?.map((brand) => (
                        <Select.Option key={brand?._id}>
                          {brand.title}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
            </SpaceStyled>
            <UploadFileComponent fileHandler={onFileUploaded}>
              <ImageServerComponent image={image} />
            </UploadFileComponent>
            <Form.Item name={"sellerIds"}>
              <Select
                mode="multiple"
                allowClear
                style={{ width: "100%" }}
                placeholder="انتخاب فروشندگان"
                options={sellers}
              />
            </Form.Item>
            <Form.Item name={"colors"}>
              <TagPickerComponent placeholder="رنگ بندی را وارد کنید" />
            </Form.Item>
            <Row>
              <Col span={11}>
                <Form.Item name={"postPrice"}>
                  <Input type="number" placeholder="هزینه پست" />
                </Form.Item>
              </Col>
              <Col span={12} offset={1}>
                <Form.Item name={"unit"}>
                  <Input placeholder="واحد اندازه گیری" />
                </Form.Item>
              </Col>
              <Col span={11}>
                <Form.Item name={"size"}>
                  <Input placeholder="سایز را وارد کنید" />
                </Form.Item>
              </Col>
              <Col span={12} offset={1}>
                <Form.Item name={"packCount"}>
                  <Input
                    type="number"
                    placeholder="تعداد در جعبه را وارد کنید"
                  />
                </Form.Item>
              </Col>
              <Col span={11}>
                <Form.Item name={"price"}>
                  <Input placeholder="قیمت را وارد کنید" />
                </Form.Item>
              </Col>
              <Col span={12} offset={1}>
                <Form.Item name={"remainingCount"}>
                  <Input
                    type="number"
                    placeholder="تعداد باقی مانده را وارد کنید"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item name={"isHighConsumption"}>
              <Checkbox>کالای پر مصرف</Checkbox>
            </Form.Item>
          </Col>
          <Col span={15} offset={1}>
            <Row>
              <Col span={12}>
                <SpaceStyled horizontal={5}>
                  <Form.Item name={"title"} label="عنوان">
                    <Input placeholder="عنوان محصول را وارد کنید..." />
                  </Form.Item>
                </SpaceStyled>
              </Col>

              <Col span={12}>
                <SpaceStyled horizontal={5}>
                  <Form.Item name={"code"} label="کد محصول">
                    <Input
                      type="number"
                      placeholder="کد محصول را وارد کنید..."
                    />
                  </Form.Item>
                </SpaceStyled>
              </Col>

              <Col span={8}>
                <SpaceStyled horizontal={5}>
                  <Form.Item
                    name={"minOrderCountForWholesale"}
                    label="حداقل سفارش برای خرید عمده"
                  >
                    <Input type="number" placeholder="عدد وارد کنید" />
                  </Form.Item>
                </SpaceStyled>
              </Col>

              <Col span={8}>
                <SpaceStyled horizontal={5}>
                  <Form.Item
                    name={"minOrderCountForRetail"}
                    label="حداقل سفارش برای خرید جزئی"
                  >
                    <Input type="number" placeholder="عدد وارد کنید" />
                  </Form.Item>
                </SpaceStyled>
              </Col>

              <Col span={8}>
                <SpaceStyled horizontal={5}>
                  <Form.Item
                    name={"offForWholesalePercent"}
                    label="درصد تخفیف برای خرید عمده"
                  >
                    <Input
                      type="number"
                      placeholder="کد محصول را وارد کنید..."
                    />
                  </Form.Item>
                </SpaceStyled>
              </Col>

              <Col span={24}>
                <SpaceStyled horizontal={5}>
                  <Form.Item name={"description"} label="توضیحات">
                    <Input.TextArea
                      rows={5}
                      placeholder="توضیحات محصول را وارد کنید..."
                    />
                  </Form.Item>
                </SpaceStyled>
              </Col>

              <Col span={24}>
                <Form.Item name={"tags"}>
                  <TagPickerComponent />
                </Form.Item>
              </Col>
              <Col span={24}>
                <OptionsComponent options={options} setOptions={setOptions} />
              </Col>
              <Col span={24}>
                <CarsComponent cars={car} setCars={setCar} />
              </Col>
            </Row>
          </Col>
        </Row>
        <Button htmlType="submit" type="primary">
          ثبت
        </Button>
      </Form>
    </>
  );
};
export default UpsertProduct;
