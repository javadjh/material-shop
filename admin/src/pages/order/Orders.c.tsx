import { FC, useEffect, useState } from "react";
import CustomPaging from "../../components/CustomPaging";
import { ordersService } from "../../service/order.service";
import { priceFormat } from "../../utility/utility";
import { Pointer } from "../../global-style/global.s";

const OrdersComponent: FC<{ showModal: any }> = ({ showModal }) => {
  const [orders, setOrders] = useState<any>();
  const [paging, setPaging] = useState<{ pageId: number; eachPerPage: number }>(
    {
      pageId: 1,
      eachPerPage: 20,
    }
  );
  useEffect(() => {
    getOrders();
  }, [paging]);
  const getOrders = async () => {
    const { data } = await ordersService(paging);

    setOrders(data.data);
  };
  return (
    <>
      <div className="col-xxl-12">
        <div className="card mb-3">
          <div className="card-body">
            <div className="table-responsive">
              <div className="table-outer">
                <table className="table table-striped m-0">
                  <thead>
                    <tr>
                      <th>شناسه</th>
                      <th>شماره تماس </th>
                      <th>نام و نام خانوادگی</th>
                      <th>مبلغ سفارش</th>
                      <th>تعداد اقلام</th>
                      <th>تاریخ ثبت</th>
                      <th>اقلام</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders?.orders?.map((item: any, index: number) => (
                      <tr>
                        <td>{index + 1}</td>

                        <td>{item?.user?.phone || "ثبت نشده"}</td>
                        <td>
                          {item?.user?.firstName} {item?.user?.lastName}
                        </td>
                        <td>{priceFormat(item?.totalPrice)}</td>
                        <td>{item?.orderList?.length}</td>
                        <td>{item?.createdAt}</td>
                        <td>
                          <Pointer
                            onClick={() => showModal(item)}
                            className="text-primary"
                          >
                            نمایش اقلام
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
          total={orders?.total}
          onPageChange={(page) => {
            setPaging({
              ...paging,
              pageId: page,
            });
          }}
        />
      </div>
    </>
  );
};
export default OrdersComponent;
