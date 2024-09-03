import { FC } from "react";
import { IFilter } from "../../types/filter.type";
import { IJob } from "../../types/job.type";
import { Pointer } from "../../global-style/global.s";
import CustomPaging from "../../components/CustomPaging";

const JobsComponent: FC<{
  jobs: any;
  openModal: any;
  paging: IFilter | any;
  setPaging: any;
}> = ({ paging, jobs, setPaging, openModal }) => {
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
                    <th>بخش</th>
                    <th>سن</th>
                    <th>تاهل</th>
                    <th>شماره تماس</th>
                    <th>مدرک</th>
                    <th>تاریخ ایجاد</th>
                    <th>عملیات</th>
                  </tr>
                </thead>
                <tbody>
                  {jobs?.jobs?.map((item: IJob, index: number) => (
                    <>
                      <tr>
                        <td>{index + 1}</td>

                        <td>{item?.fullName}</td>
                        <td>{item?.department}</td>
                        <td>{item?.age}</td>
                        <td>{item.isMarried ? "متاهل" : "مجرد"}</td>
                        <td>{item?.firstNumber}</td>
                        <td>{item?.degree}</td>
                        <td>{item?.createdAt}</td>
                        <td>
                          <Pointer onClick={() => openModal(item)}>
                            نمایش اطلاعات
                          </Pointer>
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
        total={jobs?.total}
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
export default JobsComponent;
