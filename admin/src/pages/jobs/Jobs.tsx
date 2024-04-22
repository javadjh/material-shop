import { useEffect, useState } from "react";
import { IJob } from "../../types/job.type";
import { SpaceStyled } from "../../global-style/global.s";
import { Typography } from "antd";
import JobsComponent from "./Jobs.c";
import { jobsService } from "../../service/job.service";

const Jobs = () => {
  const [jobs, setJobs] = useState<{
    total: number | any;
    jobs: Array<IJob>;
  }>();
  const [paging, setPaging] = useState<{ pageId: number; eachPerPage: number }>(
    {
      pageId: 1,
      eachPerPage: 2,
    }
  );
  useEffect(() => {
    getJobs();
  }, [paging]);

  const getJobs = async () => {
    const { data } = await jobsService(paging);

    setJobs(data.data);
  };
  return (
    <>
      <SpaceStyled horizontal={5}>
        <Typography.Text>درخواست ها</Typography.Text>
      </SpaceStyled>
      <JobsComponent paging={paging} jobs={jobs} setPaging={setPaging} />
    </>
  );
};
export default Jobs;
