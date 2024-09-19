import { Typography } from "antd";
import { FC } from "react";
import { IInquiry } from "../../types/inquiry.type";
import { IFilter } from "../../types/filter.type";
import CustomPaging from "../../components/CustomPaging";
import { SpaceStyled } from "../../global-style/global.s";
import { BACKEND_URL, BASE_URL } from "../../service/APIRoutes";

const InquiriesComponent: FC<{
  inquiries: any;
  paging: IFilter | any;
  setPaging: any;
}> = ({ paging, inquiries, setPaging }) => {
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
                    <th>اقلام</th>
                    <th>دانلود فایل</th>
                  </tr>
                </thead>
                <tbody>
                  {inquiries?.list?.map((item: IInquiry, index: number) => (
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
                            ellipsis={{ tooltip: item?.items, rows: 1 }}
                            style={{ width: 350, color: "white" }}
                          >
                            {item?.items}
                          </Typography.Paragraph>
                        </td>
                        <td>
                          <SpaceStyled top={5}>
                            <a
                              target="_blank"
                              href={`${BACKEND_URL}public/${item?.file}`}
                            >
                              دانلود فایل
                            </a>
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
      <CustomPaging
        pageId={paging?.pageId}
        eachPerPage={paging?.eachPerPage}
        total={inquiries?.total}
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
export default InquiriesComponent;
