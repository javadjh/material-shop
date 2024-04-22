import { Table, TableProps, Typography } from "antd";
import { FC, useEffect, useState } from "react";
import { reportsService } from "../../service/report.service";
import { IReport } from "../../types/report.type";
import { pagingConfig } from "../../utility/pagingConfig";
import { IFilter } from "../../types/filter.type";

const columns: TableProps<IReport>["columns"] = [
  {
    title: "نام و نام خانوادگی",
    dataIndex: "fullName",
    key: "fullName",
    width: "30%",
  },
  {
    title: "شماره تماس",
    dataIndex: "phoneNumber",
    key: "phoneNumber",
    width: "20%",
  },
  {
    title: "توضیحات",
    dataIndex: "description",
    key: "description",
    width: "40%",
    render: (text) => (
      <Typography.Paragraph
        ellipsis={{ tooltip: text, rows: 1 }}
        style={{ width: 600 }}
      >
        {text}
      </Typography.Paragraph>
    ),
  },
];
const ReportsComponent: FC<{
  reports: any;
  paging: IFilter | any;
  setPaging: any;
}> = ({ paging, reports, setPaging }) => {
  return (
    <Table
      columns={columns}
      dataSource={reports?.reports}
      pagination={pagingConfig(
        paging?.pageId,
        paging.eachPerPage,
        reports?.total,
        (page) => {
          setPaging({ ...paging, ...{ pageId: page } });
        }
      )}
    />
  );
};
export default ReportsComponent;
