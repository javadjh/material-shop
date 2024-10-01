import { SpaceStyled } from "../../global-style/global.s";
import ProvideMaterialsComponent from "./ProvideMaterials.c";
import { useEffect, useState } from "react";
import { IProvideMaterial } from "../../types/provide-material.type";
import { provideMaterialsService } from "../../service/provide-material.service";

const ProvideMaterial = () => {
  const [provideMaterials, setProvideMaterials] = useState<{
    total: number | any;
    provideMaterials: Array<IProvideMaterial>;
  }>();
  const [paging, setPaging] = useState<{ pageId: number; eachPerPage: number }>(
    {
      pageId: 1,
      eachPerPage: 20,
    }
  );
  useEffect(() => {
    getProvideMaterials();
  }, [paging]);

  const getProvideMaterials = async () => {
    const { data } = await provideMaterialsService(paging);

    setProvideMaterials(data.data);
  };
  return (
    <>
      <SpaceStyled horizontal={5}>
        <h4>تامین مصالح</h4>
      </SpaceStyled>
      <ProvideMaterialsComponent
        paging={paging}
        provideMaterials={provideMaterials}
        setPaging={setPaging}
      />
    </>
  );
};
export default ProvideMaterial;
