export const priceFormat = (price: any) => {
  return price?.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};
export const sendWayFormatter = (sendWay?: string) => {
  return sendWay == "post"
    ? "ارسال با پست"
    : sendWay == "free"
    ? "ارسال آزاد"
    : "ارسال باربری";
};
