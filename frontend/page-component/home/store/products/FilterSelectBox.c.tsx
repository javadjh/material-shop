import { FC, useState } from "react";
import { SelectBoxContainer } from "./products.s";
import { WhiteText } from "../../../../global-component/Typography/WhiteText.t";
import { Checkbox, Grid, Radio, RadioGroup } from "@mui/joy";
import { IBrand } from "../../../../types/brand.type";
import { SpaceStyled } from "../../../../global-style/global.s";

const FilterSelectBoxComponent: FC<{
  list?: Array<any>;
  value?: string;
  setValue?: any;
  title?: string;
}> = ({ list, setValue, value, title }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const openHandler = () => {
    setIsOpen(!isOpen);
  };
  // const valueHandler = (item: any) => {
  //   let valueCopy: Array<any> = value

  //   let found: any = valueCopy.filter((ele: any) => ele == item._id)[0];

  //   if (found) {
  //     valueCopy = valueCopy.filter((ele: any) => ele != item._id);
  //   } else {
  //     valueCopy.push(item?._id);
  //   }
  //   console.log(valueCopy);

  //   setValue(valueCopy);
  // };

  return (
    <SelectBoxContainer>
      <WhiteText onClick={openHandler}>{title}</WhiteText>
      {isOpen && (
        <SpaceStyled top={10}>
          <RadioGroup
            onChange={(e) => {
              setValue(e.target.id);
            }}
          >
            {list?.map((item) => (
              <Radio
                value={item?._id}
                key={item._id}
                id={item._id}
                label={item.title}
                // onClick={() => valueHandler(item)}
              >
                {/* <Checkbox
                  checked={value.includes(item?._id)}
                  value={item?._id}
                  label={item.title}
                  key={item?._id}
                /> */}
              </Radio>
            ))}
          </RadioGroup>
        </SpaceStyled>
      )}
    </SelectBoxContainer>
  );
};
export default FilterSelectBoxComponent;
