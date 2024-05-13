import { FC } from "react";
import ChoicePage from "../../page-component/home/store/choice/choice";
import { getCategoriesService } from "../../service/category.service";

const Choice: FC<any> = (props) => {
  return <ChoicePage categories={props?.categories} />;
};
export default Choice;
export async function getServerSideProps() {
  const { data } = await getCategoriesService();

  let props: any = { categories: data?.data?.list };

  return {
    props,
  };
}
