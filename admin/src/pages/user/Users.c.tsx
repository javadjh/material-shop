import { Table, TableProps, Typography } from "antd";
import { FC, useEffect, useState } from "react";
import { reportsService } from "../../service/report.service";
import { IReport } from "../../types/report.type";
import { pagingConfig } from "../../utility/pagingConfig";
import { IFilter } from "../../types/filter.type";
import { IUser } from "../../types/user.type";
import { EyeOutlined } from "@ant-design/icons";
import { Pointer } from "../../global-style/global.s";
import CustomPaging from "../../components/CustomPaging";

const UsersComponent: FC<{
  users: any;
  paging: IFilter | any;
  setPaging: any;
  onClickSendSmsListener: any;
}> = ({ paging, users, setPaging, onClickSendSmsListener }) => {
  return (
    <div className="col-xxl-12">
      <div className="card mb-3">
        <div className="card-body">
          <div className="table-responsive">
            <div className="table-outer">
              <table className="table table-striped m-0">
                <thead>
                  <tr>
                    <th>نام و نام خانوادگی</th>
                    <th>ایمیل</th>
                    <th>کد ملی</th>
                    <th>شهر</th>
                    <th>شماره تماس</th>
                    <th>کد پستی</th>
                    <th>شرکت</th>
                    <th>آدرس</th>
                    <th>عملیات</th>
                  </tr>
                </thead>
                <tbody>
                  {users?.list?.map((item: IUser) => (
                    <tr>
                      <td>
                        {item?.firstName || ""} {item?.lastName || ""}
                      </td>
                      <td>{item?.email}</td>
                      <td>{item?.melliCode}</td>
                      <td>{item?.city?.name}</td>
                      <td>{item?.phone}</td>
                      <td>{item?.postalCode}</td>
                      <td>{item?.companyName}</td>
                      <td>
                        <Typography.Text
                          style={{ width: 80, color: "white" }}
                          ellipsis={{ tooltip: item?.address }}
                        >
                          {item?.address}
                        </Typography.Text>
                      </td>
                      <td className="text-primary">
                        <Pointer
                          onClick={() => onClickSendSmsListener(item?._id)}
                        >
                          ارسال SMS
                        </Pointer>
                      </td>
                    </tr>
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
        total={users?.total}
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
export default UsersComponent;
