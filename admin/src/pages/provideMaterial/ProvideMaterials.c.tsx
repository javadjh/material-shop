import { Typography } from "antd";
import { FC } from "react";
import { IProvideMaterial } from "../../types/provide-material.type";
import { IFilter } from "../../types/filter.type";
import CustomPaging from "../../components/CustomPaging";
import { SpaceStyled } from "../../global-style/global.s";
import { BACKEND_URL, BASE_URL } from "../../service/APIRoutes";

const ProvideMaterialsComponent: FC<{
  provideMaterials: any;
  paging: IFilter | any;
  setPaging: any;
}> = ({ paging, provideMaterials, setPaging }) => {
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
                    <th>شهر</th>
                    <th>استان</th>
                    <th>تاریخ ثبت</th>
                    <th>نام پروژه</th>
                  </tr>
                </thead>
                <tbody>
                  {provideMaterials?.list?.map(
                    (item: IProvideMaterial, index: number) => (
                      <>
                        <tr>
                          <td>
                            <SpaceStyled top={5}>{index + 1}</SpaceStyled>
                          </td>

                          <td>
                            <SpaceStyled top={5}>{item?.fullName}</SpaceStyled>
                          </td>
                          <td>
                            <SpaceStyled top={5}>
                              {item?.phoneNumber}
                            </SpaceStyled>
                          </td>
                          <td>
                            <SpaceStyled top={5}>{item?.cityName}</SpaceStyled>
                          </td>
                          <td>
                            <SpaceStyled top={5}>
                              {item?.provinceName}
                            </SpaceStyled>
                          </td>
                          <td>
                            <SpaceStyled top={5}>{item?.createdAt}</SpaceStyled>
                          </td>
                          <td>
                            <SpaceStyled top={5}>
                              {item?.projectName}
                            </SpaceStyled>
                          </td>
                        </tr>
                      </>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <CustomPaging
        pageId={paging?.pageId}
        eachPerPage={paging?.eachPerPage}
        total={provideMaterials?.total}
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
export default ProvideMaterialsComponent;
