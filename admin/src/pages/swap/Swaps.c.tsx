import { Typography } from "antd";
import { FC } from "react";
import { ISwap } from "../../types/swap.type";
import { IFilter } from "../../types/filter.type";
import CustomPaging from "../../components/CustomPaging";
import { SpaceStyled } from "../../global-style/global.s";
import { BACKEND_URL, BASE_URL } from "../../service/APIRoutes";

const SwapsComponent: FC<{
  swaps: any;
  paging: IFilter | any;
  setPaging: any;
}> = ({ paging, swaps, setPaging }) => {
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
                    <th>توضیحات</th>
                  </tr>
                </thead>
                <tbody>
                  {swaps?.list?.map((item: ISwap, index: number) => (
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
                          <Typography.Paragraph
                            ellipsis={{ tooltip: item?.description, rows: 1 }}
                            style={{ width: 350, color: "white" }}
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
        total={swaps?.total}
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
export default SwapsComponent;
