import { Table, TableProps, Typography } from "antd";
import { FC, useEffect, useState } from "react";
import { reportsService } from "../../service/report.service";
import { IReport } from "../../types/report.type";
import { pagingConfig } from "../../utility/pagingConfig";
import { IFilter } from "../../types/filter.type";
import { ISeller } from "../../types/seller.type";
import { EyeOutlined } from "@ant-design/icons";
import { Pointer } from "../../global-style/global.s";
import CustomPaging from "../../components/CustomPaging";

const SellersComponent: FC<{
  sellers: any;
  paging: IFilter | any;
  setPaging: any;
  onClickEditListener: any;
}> = ({ paging, sellers, setPaging, onClickEditListener }) => {
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
                    <th>عنوان</th>
                    <th>شهر </th>
                    <th>شماره اول</th>
                    <th>شماره دوم</th>
                    <th>آدرس</th>
                    <th>تاریخ ایجاد</th>
                    <th>عملیات</th>
                  </tr>
                </thead>
                <tbody>
                  {sellers?.sellers?.map((item: ISeller, index: number) => (
                    <tr>
                      <td>{index + 1}</td>

                      <td>{item?.title}</td>
                      <td>{item?.cityName}</td>
                      <td>{item?.firstNumber}</td>
                      <td>{item?.secondNumber}</td>
                      <td>{item?.address}</td>
                      <td>{item?.createdAt}</td>
                      <td>
                        <Pointer>
                          <a onClick={() => onClickEditListener(item)}>
                            ویرایش
                          </a>
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
        total={sellers?.total}
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
export default SellersComponent;
