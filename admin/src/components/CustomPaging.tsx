import { Pagination } from "antd";
import { FC } from "react";

interface ICustomPaging {
  pageId: number;
  total: number;
  onPageChange?: (page: number) => void;
  eachPerPage?: number;
}
const CustomPaging: FC<ICustomPaging> = ({
  pageId,
  total,
  eachPerPage,
  onPageChange,
}) => {
  return (
    <Pagination
      defaultCurrent={pageId}
      total={total}
      current={pageId}
      showSizeChanger={false}
      defaultPageSize={eachPerPage}
      pageSize={eachPerPage}
      onChange={(page) => {
        if (onPageChange) {
          onPageChange(page);
        }
      }}
    />
  );
};
export default CustomPaging;
