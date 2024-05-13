import { Table, TableProps, Typography } from "antd";
import { FC, useEffect, useState } from "react";
import { reportsService } from "../../service/report.service";
import { IReport } from "../../types/report.type";
import { pagingConfig } from "../../utility/pagingConfig";
import { IFilter } from "../../types/filter.type";
import { ISeller } from "../../types/seller.type";
import { EyeOutlined } from "@ant-design/icons";
import { Pointer } from "../../global-style/global.s";

const SellersComponent: FC<{
  sellers: any;
  paging: IFilter | any;
  setPaging: any;
  onClickEditListener: any;
}> = ({ paging, sellers, setPaging, onClickEditListener }) => {
  const columns: TableProps<ISeller>["columns"] = [
    {
      title: "عنوان",
      dataIndex: "title",
      key: "fullName",
    },
    {
      title: "شهر/استان",
      key: "location",
      render: (record) => (
        <Typography.Text>
          {record.cityName} / {record.provinceName}
        </Typography.Text>
      ),
    },
    {
      title: "شماره اول",
      key: "firstNumber",
      dataIndex: "firstNumber",
    },
    {
      title: "شماره دوم",
      key: "secondNumber",
      dataIndex: "secondNumber",
    },
    {
      title: "توضیحات",
      dataIndex: "address",
      key: "address",
      width: "20%",
      render: (text) => (
        <Typography.Paragraph
          ellipsis={{ tooltip: text, rows: 1 }}
          style={{ width: 300 }}
        >
          {text}
        </Typography.Paragraph>
      ),
    },
    {
      title: "عملیات",
      key: "action",
      render: (record) => (
        <Pointer>
          <EyeOutlined
            style={{ color: "blue" }}
            onClick={() => onClickEditListener(record)}
          />
        </Pointer>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={sellers?.sellers}
      pagination={pagingConfig(
        paging?.pageId,
        paging.eachPerPage,
        sellers?.total,
        (page) => {
          setPaging({ ...paging, ...{ pageId: page } });
        }
      )}
    />
  );
};
export default SellersComponent;
