import { Table, TableProps, Typography } from "antd";
import { FC, useEffect, useState } from "react";
import { reportsService } from "../../service/report.service";
import { IReport } from "../../types/report.type";
import { pagingConfig } from "../../utility/pagingConfig";
import { IFilter } from "../../types/filter.type";
import CustomPaging from "../../components/CustomPaging";
import { Pointer, SpaceStyled } from "../../global-style/global.s";

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
    <div className="col-xxl-12">
      <div className="card mb-3">
        <div className="card-body">
          <div className="table-responsive">
            <div className="table-outer">
              <table className="table table-striped m-0">
                <thead>
                  <tr>
                    <th>شناسه</th>
                    <th>نام و نام خانوادگی</th>
                    <th>شماره تماس</th>
                    <th>توضیحات</th>
                  </tr>
                </thead>
                <tbody>
                  {reports?.reports?.map((item: IReport, index: number) => (
                    <>
                      <tr>
                        <td>
                          <SpaceStyled top={5}>{index + 1}</SpaceStyled>
                        </td>

                        <td>
                          <SpaceStyled top={5}>{item?.fullName}</SpaceStyled>
                        </td>
                        <td>
                          <SpaceStyled top={5}>{item?.phoneNumber}</SpaceStyled>
                        </td>
                        <td>
                          <Typography.Paragraph
                            ellipsis={{ tooltip: item?.description, rows: 1 }}
                            style={{ width: 600, color: "white" }}
                          >
                            {item?.description}
                          </Typography.Paragraph>
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <CustomPaging
        pageId={paging?.pageId}
        eachPerPage={paging?.eachPerPage}
        total={reports?.total}
        onPageChange={(page) => {
          setPaging({
            ...paging,
            pageId: page,
          });
        }}
      />
    </div>
  );
};
export default ReportsComponent;
