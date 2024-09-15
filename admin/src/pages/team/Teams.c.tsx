import { Avatar, Popconfirm, Table, TableProps, Typography } from "antd";
import { FC, useEffect, useState } from "react";
import { reportsService } from "../../service/report.service";
import { IReport } from "../../types/report.type";
import { pagingConfig } from "../../utility/pagingConfig";
import { IFilter } from "../../types/filter.type";
import { ITeam } from "../../types/team.type";
import { EyeOutlined } from "@ant-design/icons";
import { Pointer, SpaceStyled } from "../../global-style/global.s";
import ImageServerComponent from "../../components/ImageServer.c";
import { RedTextStyled } from "../category/category.style";

const TeamsComponent: FC<{
  teams: any;

  onClickEditListener: any;
  onClickDeleteListener: any;
}> = ({ teams, onClickEditListener, onClickDeleteListener }) => {
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
                    <th>تصویر نمایه</th>
                    <th>نام و نام خانوادگی</th>
                    <th>سمت</th>
                    <th>عملیات</th>
                  </tr>
                </thead>
                <tbody>
                  {teams?.map((item: ITeam, index: number) => (
                    <>
                      <tr>
                        <td>
                          <SpaceStyled top={15}>{index + 1}</SpaceStyled>
                        </td>

                        <td>
                          <SpaceStyled top={5}>
                            <ImageServerComponent
                              image={item?.image}
                              width={40}
                            />
                          </SpaceStyled>
                        </td>
                        <td>
                          <SpaceStyled top={15}>{item?.fullName}</SpaceStyled>
                        </td>
                        <td>{item?.position}</td>
                        <td>
                          <SpaceStyled top={15} bottom={15}>
                            <Pointer>
                              <span onClick={() => onClickEditListener(item)}>
                                ویرایش{" "}
                              </span>
                            </Pointer>
                            <Pointer>
                              <Popconfirm
                                title="حذف فرد"
                                description="آیا از حذف فرد اطمینان دارید؟"
                                onConfirm={() =>
                                  onClickDeleteListener(item?._id)
                                }
                                okText="آره"
                                cancelText="نه"
                              >
                                <span className="text-danger">حذف</span>
                              </Popconfirm>
                            </Pointer>
                          </SpaceStyled>
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
    </div>
  );
};
export default TeamsComponent;
