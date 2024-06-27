import { Avatar, Table, TableProps, Typography } from "antd";
import { FC, useEffect, useState } from "react";
import { reportsService } from "../../service/report.service";
import { IReport } from "../../types/report.type";
import { pagingConfig } from "../../utility/pagingConfig";
import { IFilter } from "../../types/filter.type";
import { ITeam } from "../../types/team.type";
import { EyeOutlined } from "@ant-design/icons";
import { Pointer } from "../../global-style/global.s";
import ImageServerComponent from "../../components/ImageServer.c";

const TeamsComponent: FC<{
  teams: any;

  onClickEditListener: any;
}> = ({ teams, onClickEditListener }) => {
  const columns: TableProps<ITeam>["columns"] = [
    {
      title: "تصویر نمایه",
      dataIndex: "image",
      key: "image",
      render: (img) => <ImageServerComponent width={80} image={img} />,
    },
    {
      title: "نام و نام خانوادگی",
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: "سمت",
      dataIndex: "position",
      key: "position",
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

  return <Table columns={columns} dataSource={teams} />;
};
export default TeamsComponent;
