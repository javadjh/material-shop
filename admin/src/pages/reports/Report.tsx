import { Button, Col, Row, Typography } from "antd";
import { SpaceStyled } from "../../global-style/global.s";
import ReportsComponent from "./Reports.c";
import { useEffect, useState } from "react";
import { IReport } from "../../types/report.type";
import { reportsService } from "../../service/report.service";

const Report = () => {
  const [reports, setReports] = useState<{
    total: number | any;
    reports: Array<IReport>;
  }>();
  const [paging, setPaging] = useState<{ pageId: number; eachPerPage: number }>(
    {
      pageId: 1,
      eachPerPage: 2,
    }
  );
  useEffect(() => {
    getReports();
  }, [paging]);

  const getReports = async () => {
    const { data } = await reportsService(paging);

    setReports(data.data);
  };
  return (
    <>
      <SpaceStyled horizontal={5}>
        <Typography.Text>گزارشات</Typography.Text>
      </SpaceStyled>
      <ReportsComponent
        paging={paging}
        reports={reports}
        setPaging={setPaging}
      />
    </>
  );
};
export default Report;
