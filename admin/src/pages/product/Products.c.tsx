import { useEffect, useState } from "react";
import { IProduct } from "../../types/product.type";
import {
  deleteProductService,
  productsService,
} from "../../service/product.service";
import CustomPaging from "../../components/CustomPaging";
import { Pointer } from "../../global-style/global.s";
import { Link } from "react-router-dom";
import { Popconfirm } from "antd";

const ProductsComponent = () => {
  const [products, setProducts] = useState<any>();
  const [paging, setPaging] = useState<{ pageId: number; eachPerPage: number }>(
    {
      pageId: 1,
      eachPerPage: 20,
    }
  );
  useEffect(() => {
    getProducts();
  }, [paging]);
  const getProducts = async () => {
    const { data } = await productsService(paging);

    setProducts(data.data);
  };

  const onDeleteProductListener = async (id: string | any) => {
    await deleteProductService(id);
    await getProducts();
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
                      <th>عنوان </th>
                      <th>قیمت</th>
                      <th>باقی مانده</th>
                      <th>برند</th>
                      <th>تاریخ ایجاد</th>
                      <th>عملیات</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products?.list?.map((item: IProduct, index: number) => (
                      <tr>
                        <td>{index + 1}</td>

                        <td>{item?.title}</td>
                        <td>{item?.price}</td>
                        <td>{item?.remainingCount}</td>
                        <td>{item?.brandName}</td>
                        <td>{item?.createdAt}</td>
                        <td>
                          <Link
                            to={`/upsert-product?id=${item?._id}`}
                            className="text-primary"
                          >
                            ویرایش
                          </Link>
                          <Popconfirm
                            title="حذف محصول"
                            description="آیا از حذف دسته اطمینان دارید؟"
                            onConfirm={() => onDeleteProductListener(item?._id)}
                            okText="آره"
                            cancelText="نه"
                          >
                            <Pointer className="text-danger">{""} حذف</Pointer>
                          </Popconfirm>
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
          total={products?.total}
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
export default ProductsComponent;
