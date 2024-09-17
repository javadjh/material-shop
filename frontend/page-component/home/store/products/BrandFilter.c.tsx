import { FC } from "react";
import { IBrand } from "../../../../types/brand.type";
import ImageServerComponent from "../../../../global-component/ImageServer.c";
import { Pointer, SpaceStyled } from "../../../../global-style/global.s";

const BrandFilterComponent: FC<{ brands: Array<IBrand> }> = ({ brands }) => {
  return (
    <>
      {brands?.map((item) => (
        <SpaceStyled bottom={10}>
          <Pointer>
            <ImageServerComponent image={item?.logo} width={120} />
          </Pointer>
        </SpaceStyled>
      ))}
    </>
  );
};
export default BrandFilterComponent;
