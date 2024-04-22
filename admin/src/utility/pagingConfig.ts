export const pagingConfig = (
  pageId: number,
  eachPerPage: number,
  total: number,
  onPageChange: (page: number) => void
) => {
  return {
    onChange: (page: number) => {
      onPageChange(page);
    },
    defaultCurrent: pageId,
    total: total,
    defaultPageSize: eachPerPage,
    pageSize: eachPerPage,
    current: pageId,
  };
};
