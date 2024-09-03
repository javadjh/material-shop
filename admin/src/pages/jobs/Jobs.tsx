import { useEffect, useState } from "react";
import { IJob } from "../../types/job.type";
import { SpaceStyled } from "../../global-style/global.s";
import { Typography } from "antd";
import JobsComponent from "./Jobs.c";
import { jobsService } from "../../service/job.service";
import ShowJobInfoModal from "./ShowJobInfo.m";

const Jobs = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [job, setJob] = useState<IJob>({});
  const [jobs, setJobs] = useState<{
    total: number | any;
    jobs: Array<IJob>;
  }>();
  const [paging, setPaging] = useState<{ pageId: number; eachPerPage: number }>(
    {
      pageId: 1,
      eachPerPage: 20,
    }
  );
  useEffect(() => {
    getJobs();
  }, [paging]);

  const getJobs = async () => {
    const { data } = await jobsService(paging);

    setJobs(data.data);
  };
  const openModal = (jobItem: IJob) => {
    setJob(jobItem);
    setIsOpen(true);
  };
  return (
    <>
      <ShowJobInfoModal job={job} isOpen={isOpen} setIsOpen={setIsOpen} />
      <SpaceStyled horizontal={5}>
        <h4>درخواست ها</h4>
      </SpaceStyled>
      <JobsComponent
        openModal={openModal}
        paging={paging}
        jobs={jobs}
        setPaging={setPaging}
      />
    </>
  );
};
export default Jobs;
