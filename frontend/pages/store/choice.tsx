import { FC } from "react";
import ChoicePage from "../../page-component/home/store/choice/choice";
import { getCategoriesService } from "../../service/category.service";
import ScreenBridgeComponent from "../../global-component/ScreenBridge.c";
import ChoiceMobile from "../../page-component/home/store/choice/ChoiceMobile";

const Choice: FC<any> = (props) => {
  return (
    <ScreenBridgeComponent
      desktopComponent={<ChoicePage categories={props?.categories} />}
      mobileComponent={<ChoiceMobile categories={props?.categories} />}
    />
  );
};
export default Choice;
export async function getServerSideProps() {
  const { data } = await getCategoriesService();

  let props: any = { categories: data?.data?.list };

  return {
    props,
  };
}
