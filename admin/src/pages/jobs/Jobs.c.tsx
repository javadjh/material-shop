import { Col, Row, Table, TableProps, Typography } from "antd";
import { FC } from "react";
import { IReport } from "../../types/report.type";
import { pagingConfig } from "../../utility/pagingConfig";
import { IFilter } from "../../types/filter.type";
import { IJob } from "../../types/job.type";
import { EyeOutlined } from "@ant-design/icons";
import { Pointer } from "../../global-style/global.s";
import { BACKEND_URL } from "../../service/APIRoutes";

const JobsComponent: FC<{
  jobs: any;
  paging: IFilter | any;
  setPaging: any;
}> = ({ paging, jobs, setPaging }) => {
  const columns: TableProps<IJob>["columns"] = [
    {
      title: "نام و نام خانوادگی",
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: "بخش",
      dataIndex: "department",
      key: "department",
    },
    {
      title: "سن",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "تاهل",
      dataIndex: "isMarried",
      key: "isMarried",
      render: (text) => (
        <Typography.Text>{text ? "متاهل" : "مجرد"}</Typography.Text>
      ),
    },
    {
      title: "شماره تماس",
      dataIndex: "firstNumber",
      key: "firstNumber",
    },
    {
      title: "مدرک",
      dataIndex: "degree",
      key: "degree",
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={jobs?.jobs}
      pagination={pagingConfig(
        paging?.pageId,
        paging.eachPerPage,
        jobs?.total,
        (page) => {
          setPaging({ ...paging, ...{ pageId: page } });
        }
      )}
      expandable={{
        expandedRowRender: (record) => (
          <Row>
            <Col span={8}>
              <Typography.Text>
                نام و نام خانوادگی : {record.fullName}
              </Typography.Text>
            </Col>
            <Col span={8}>
              <Typography.Text>بخش : {record.department}</Typography.Text>
            </Col>
            <Col span={8}>
              <Typography.Text>کد ملی : {record.mellicode}</Typography.Text>
            </Col>
            <Col span={8}>
              <Typography.Text>نام پدر : {record.fatherName}</Typography.Text>
            </Col>
            <Col span={8}>
              <Typography.Text>سن : {record.age}</Typography.Text>
            </Col>
            <Col span={8}>
              <Typography.Text>تاریخ تولد : {record.bithday}</Typography.Text>
            </Col>
            <Col span={8}>
              <Typography.Text>آدرس : {record.address}</Typography.Text>
            </Col>
            <Col span={8}>
              <Typography.Text>
                شماره اول : {record.firstNumber}
              </Typography.Text>
            </Col>
            <Col span={8}>
              <Typography.Text>
                شماره دوم : {record.secondNumber}
              </Typography.Text>
            </Col>
            <Col span={8}>
              <Typography.Text>مدرک تحصیلی : {record.degree}</Typography.Text>
            </Col>
            <Col span={8}>
              <Typography.Text>
                نام دانشگاه : {record.universityName}
              </Typography.Text>
            </Col>
            <Col span={8}>
              <Typography.Text>
                سابقه کاری : {record.jobHistory}
              </Typography.Text>
            </Col>
            <Col span={8}>
              <Typography.Text>
                آخرین شرکت : {record.lastCompanyName}
              </Typography.Text>
            </Col>
            <Col span={8}>
              <Typography.Text>
                شماره شرکت قبلی : {record.lastCompanyTel}
              </Typography.Text>
            </Col>
            <Col span={8}>
              <Typography.Link href={`${BACKEND_URL}public/${record.resume}`}>
                دانلود رزومه
              </Typography.Link>
            </Col>
            <Col span={24}>
              <Typography.Text>توضیحات : {record.description}</Typography.Text>
            </Col>
          </Row>
        ),
      }}
    />
  );
};
export default JobsComponent;
