import { Table, TableProps } from "antd";
import { FC, useEffect, useState } from "react";
import { IProduct } from "../../types/product.type";
import { IFilter } from "../../types/filter.type";
import { pagingConfig } from "../../utility/pagingConfig";
import { productsService } from "../../service/product.service";
import ImageServerComponent from "../../components/ImageServer.c";

const ProductsComponent = () => {
  const [products, setProducts] = useState<any>();
  const [paging, setPaging] = useState<{ pageId: number; eachPerPage: number }>(
    {
      pageId: 1,
      eachPerPage: 2,
    }
  );
  useEffect(() => {
    getProducts();
  }, [paging]);
  const getProducts = async () => {
    const { data } = await productsService(paging);

    setProducts(data.data);
  };
  const columns: TableProps<IProduct>["columns"] = [
    {
      title: "تصویر",
      dataIndex: "image",
      key: "image",
      width: "10%",
      render: (img) => (
        <ImageServerComponent image={img} width={50} height={50} />
      ),
    },
    {
      title: "عنوان",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "قیمت",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "باقی مانده",
      dataIndex: "remainingCount",
      key: "remainingCount",
    },
    {
      title: "برند ",
      dataIndex: "brandName",
      key: "brandName",
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={products?.list}
      pagination={pagingConfig(
        paging?.pageId,
        paging.eachPerPage,
        products?.total,
        (page) => {
          setPaging({ ...paging, ...{ pageId: page } });
        }
      )}
    />
  );
};
export default ProductsComponent;
