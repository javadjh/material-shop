export const priceFormat = (price: any) => {
  return price?.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};
